const marketplacesUrls = ["*://\*.pandabuy.com/*", "*://\*.yupoo.com/*", "https://m.weidian.com/*", "https://weidian.com/*", "*://\*.taobao.com/*", "*://\*.1688.com/*", "*://\*.tmall.com/*"];

const urlMatch = (urls, testWith=location.origin) => {
    try { 
        for(let url of urls){
            if(new URLPattern(url).test(testWith)) return true;
        }
        return false;
    }catch(_){ return false; }
}
function isMarketplaceUrl () {
    return urlMatch(marketplacesUrls);
}

function getProductId(url){
    if(!isMarketplaceUrl(url)) return false;
    const searchParams = ["id", "itemID"];

    for(const searchParam of new URL(url)?.searchParams?.keys()){
        if(searchParams.includes(searchParam)) {
            return new URL(url).searchParams.get(searchParam);
        }
    }

    return false;
}

function isAProductPage (url) {
    return !!getProductId(url);
}

// Function for actually fetching currencies conversion rates from the api
function fetchLive(currencyToConvertTo, callback) {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyToConvertTo}`).then(res => res.json()).then((data) => {
        chrome.storage.local.set({cache: {currencyToConvertTo, data:data.rates}, cacheTime: Date.now()}, () => {
            callback(data.rates);
        });
    });
}

// Checking currencies conversion rates in cache (calls fetchLive if cache-miss)
function getRates(currencyToConvertTo, callback) {
    chrome.storage.local.get(['cache', 'cacheTime'], (items) => {
        if (items?.cache && items?.cacheTime > Date.now() - 3600*1000 && items?.cache?.currencyToConvertTo === currencyToConvertTo) {
            console.log(`PCC : Using cached ${currencyToConvertTo} conversion rates`);
            return callback(items.cache.data);
        }else {
            console.log(`PCC : Fetching live ${currencyToConvertTo} exchange rates from api`);
            fetchLive(currencyToConvertTo, callback);
        }
    });
}

// Some regex magic to convert currencies inside strings
function formatString(inputString, rates, currencies, currencyToConvertTo) {
    inputString = inputString.replaceAll("￥", "¥");
    if(new URLPattern("https://\*.pandabuy.com").test(location.origin) && (location.pathname === "/cartEstimatedFreight" || location.pathname ==="/person/parcel/list")){
        for(const currency of currencies){
            inputString = inputString.replaceAll(currency.name, currency.symbol);
        }
    }
    // Do some regex magic to extract all the currency matches inside the provided string
    const regex = /([$€¥£₹₽₴₱₪₨₩₦₢₣₥₫₵]\s?\.?~?\s?\d+(\.\d{1,2})?|\d+(\.\d{1,2})?\s?\.?~?\s?[$€¥£₹₽₴₱₪₨₩₦₢₣₥₫₵])/g;
    const matches = [...inputString.matchAll(regex)];
    
    if (matches.length === 0) return inputString;
    
    let modifiedString = '';
    let lastIndex = 0;
    // For each currency math inside the string
    for (const match of matches) {
        const currencySymbol = match[0].match(/[$€¥£₹₽₴₱₪₨₩₦₢₣₥₫₵]/g)[0];
        const originalNumber = parseFloat(match[0].match(/[-+]?\d+(\.\d+)?/g)[0]);
        // Asserts the match contains a currency symbol and a numerical value inside
        if(currencySymbol && originalNumber){
            // Extract the currency (returns object from currencies.json) from the match
            const currency = currencies.filter(el => el.symbol === currencySymbol)[0];
            // If the matched currency is not the same as the one we are trying to convert to
            if(currency.name !== currencyToConvertTo){
                // Get the rate of th currency to convert it to the one selected to the user
                const rate = rates[currency.name];
                // Convert the amount in the match
                const convertedNumber = isNaN(originalNumber) ? '' : (parseFloat(originalNumber) / rate).toFixed(2);
                // Modifies the currency string to be converted to the chosen currency
                modifiedString += inputString.substring(lastIndex, match.index-1) + convertedNumber + " " + currencies.filter(el => el.name === currencyToConvertTo)[0].symbol;
                modifiedString = modifiedString.replaceAll(currency.name, "");
                lastIndex = match.index + match[0].length;
            }
        }
    }
    modifiedString += inputString.substring(lastIndex);

    return modifiedString;
}

function conversion(){
    // Checking the currency to convert to
    chrome.storage.local.get(["convertTo"], (convertTo) => {
        // if currency to convert to does not exists, default to USD
        convertTo = convertTo?.convertTo ?? "USD";
        

        // Gathering the currencies converting rates (trying for cache and if miss fetching it from the api)
        getRates(convertTo, (rates) => {
            // Fetch currencies data from ./currencies.json
            var xhr = new XMLHttpRequest();
            xhr.open("GET", chrome.runtime.getURL('currencies.json'));
            xhr.onreadystatechange  = function() {
                // Checks if the currencies.json fetching has ended and can proceed
                if (this.readyState == 4 && this.status === 200) {
                    const currencies = JSON.parse(xhr.responseText);
                    // Converts currencies in the title of the page
                    const titleEl = document.querySelector("title");
                    if(titleEl) titleEl.innerText = formatString(titleEl.innerText, rates, currencies, convertTo)
        
                    // Getting all the text nodes and converting the currencies inside their text content every second
                    setInterval(() => {
                        if(isMarketplaceUrl() || new URLPattern("*://\*.reddit.com/*").test(new URL(location.href).origin)){
                            const text = document.querySelectorAll("span, p, a, h1, h2, h3, h4, h5, h6, em, tr, ul, ol, tr, label, div, dd, li");
                            text.forEach(textNode => {
                                // For all of the children inside the elements
                                for (let i = 0; i < textNode.childNodes.length; ++i){
                                    // Checks if the child is a text node
                                    if (textNode.childNodes[i].nodeType === Node.TEXT_NODE){
                                        // Extract the text, calls the format function and replace the text with the converted one
                                        let nodeText = textNode.childNodes[i].textContent;
                                        let formattedText = formatString(nodeText, rates, currencies, convertTo);
                                        if(formattedText !== textNode.childNodes[i].textContent) textNode.childNodes[i].textContent = formattedText;
                                    }
                                }
                            });
                        }
                    }, 1000);
                }     
            }
            xhr.send();
        });
    });
}

function changeYupooGrid(){
    chrome.storage.local.get(["yupooContentWidth"], (status) => {
        let yupooContentWidth = status?.yupooContentWidth ?? 170;

        if(document.querySelector(".showalbumheader__main"))document.querySelector(".showalbumheader__main").style.maxWidth = "100%";
        if(document.querySelector(".showindex__gallerycardwrap"))document.querySelector(".showindex__gallerycardwrap").style.maxWidth = "100%";
        if(document.querySelector(".showalbum__imagecardwrap"))document.querySelector(".showalbum__imagecardwrap").style.maxWidth = "100%";
        if(document.querySelector(".categories__box.clearfix"))document.querySelector(".categories__box.clearfix").style.maxWidth = "100%";

        // Change style og products containers
        let imagesContainers = document.querySelectorAll(".categories__parent.album__categories-box, .showalbum__parent, .showindex__parent, .showalbum__parent");
        for(let imagesContainer of imagesContainers){
            imagesContainer.style.display = "grid";
            imagesContainer.style.gap = "10px";
            imagesContainer.style.gridTemplateColumns = `repeat(auto-fill, minmax(${yupooContentWidth}px, 1fr))`;
            // Change sty of products
            Array.from(imagesContainer.children).forEach(el => {
                el.style.width = "100%";
                el.style.margin = "0";
            });
        }
    });
}

function toggleYupooSideBar(removeYupooSideBar) {
    // If remove sidebar toggle switch is on
    if(removeYupooSideBar){
        if(document.querySelector(".yupoo-categories-hide-sidebar")) document.querySelector(".yupoo-categories-hide-sidebar").style.display = "none";
        if(document.querySelector(".categories__box-left")) document.querySelector(".categories__box-left").style.display = "none";
        if(document.querySelector(".categories__box-right")) document.querySelector(".categories__box-right").style.marginLeft = "0";
    }else {
        if(document.querySelector(".yupoo-categories-hide-sidebar")) document.querySelector(".yupoo-categories-hide-sidebar").style.display = "block";
        if(document.querySelector(".categories__box-left")) document.querySelector(".categories__box-left").style.display = "block";
        if(document.querySelector(".categories__box-right")) document.querySelector(".categories__box-right").style.marginLeft = "216px";
    }
}

// For removing (or not) the annoying disclaimers at product page load
function productWarnings(){
    chrome.storage.local.get(["pandabuyProductWarnings"], (status) => {
        status = status?.pandabuyProductWarnings ?? true;
        if(status){
            let count = 0;
            let interval = setInterval(() => {
                if(count === 10) clearInterval(interval);
                if(document.querySelector(".el-button.accept-btn.el-button--default")){
                    try {
                        document.querySelector(".el-button.accept-btn.el-button--default").click();
                        clearInterval(interval);
                    } catch (_) {}
                }
                count ++;
            }, 200);
        }
    });
}

// For checking (or not) the required checkbox before adding a product to cart on PandaBuy
chrome.storage.local.get(["thirdPartyDisclaimerAutoCheck"], (status) => {
    status = status?.thirdPartyDisclaimerAutoCheck ?? true;
    if(status && urlMatch(["*://\*.pandabuy.com/product?*"], location.href)){
        const setCheckBox = () => {
            try {
                document.querySelector("input.el-checkbox__original").checked = true;
                document.querySelector(".el-checkbox").classList.add("is-checked");
            } catch (_) {
                setTimeout(() => {
                    setCheckBox();
                }, 1000);
            }
        }
        setCheckBox();
    }
});

// Checks if current website is a marketplace and is a product page and not a shop page
chrome.storage.local.get(["skipYupooRedirect"], (status) => {
    status = status?.skipYupooRedirect ?? true;
    if(status && urlMatch(["https://x.yupoo.com/external?url=*"], location.href)){
        chrome.runtime.sendMessage({ type: "updateTabURL", url: decodeURIComponent(new URL(location.href).searchParams.get("url")) });
    }
});

// Listening to popup changes
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request === "toggledSideBar") toggleYupooSideBar();
    if(request === "productWarningsChange") productWarnings();
    if(request === "yupooContentWidthChanged") changeYupooGrid();
    if(request === "darkModeToggled") setDarkMode();
});

// Running (or not) the functions on page load
productWarnings();
chrome.storage.local.get(["status"], (status) => {
    status = status?.status ?? true;
    if(status) conversion();
});

// Redirect (or not) automatically from a marketplace page to the product on PandaBuy
chrome.storage.local.get(["autoPandaBuyRedirect"], (status) => {
    status = status?.autoPandaBuyRedirect ?? true;
    if(status && isAProductPage(location.href)){
        chrome.runtime.sendMessage({ type: "updateTabURL", url: `https://www.pandabuy.com/product?url=${encodeURIComponent(location.href)}` });
    }
});

chrome.storage.local.get(["yupooInterfaceReDesign"], (data) => {
    let yupooInterfaceReDesign = data?.yupooInterfaceReDesign ?? true;
    if(new URLPattern("\*://\*.yupoo.com/\*").test(location.href) && yupooInterfaceReDesign){
        // Remove side bar part
        chrome.storage.local.get(["removeYupooSideBar"], (status) => {
            status = status?.removeYupooSideBar ?? true;
            // If remove sidebar toggle switch is on
            toggleYupooSideBar(status);
        });

        changeYupooGrid();
    }
});

let productInfosIndex = 0;
async function getProductInfos(){
    if(!urlMatch(["*://\*.pandabuy.com/product?*"], location.href)) return;
    
    const productReq = await fetch(`https://api.qc.photos/v3/getProductInfo/pandabuy?url=${new URL(location.href).searchParams.get("url")}&view=true`);
    
    const productData = await productReq.json();
    const productImages = productData.data.qc_image_set_container.qc_image_sets.filter(el => el.set_type === "paid");

    
    if(productInfosIndex === 0){
        // Creating the custom QC viewer
        const customQCViewer = document.createElement("div");
        customQCViewer.style.display = "grid";
        customQCViewer.style.width = "100%";
        customQCViewer.style.gap = "10px";
        customQCViewer.id = "customQCViewer"
        customQCViewer.style.gridTemplateColumns = `repeat(auto-fill, minmax(285px, 1fr))`;
        const QCContainer = document.createElement("div");
        QCContainer.style.marginTop = "10px";
        QCContainer.style.width = "100%";
        QCContainer.style.display = "flex";
        QCContainer.style.flexDirection = "column";
        QCContainer.style.gap = "10px";
        QCContainer.style.padding = "10px";
        const QCTitle = document.createElement("div");
        QCTitle.style.display = "flex";
        QCTitle.style.flexDirection = "column";
        QCTitle.style.gap = "5px";
        let productID = getProductId(new URL(location.href).searchParams.get("url"));
        QCTitle.innerHTML = `
            <h2>Product's QC</h2>
            <a href="https://qc.pandabuy.com/qc?g=${productID}" target="_blank" class="el-button el-button--primary" style="width: fit-content;">View all QC's</a>
            <h3 style="margin-top: 10px;">Latest QC's :</h3>
        `;
        QCContainer.appendChild(QCTitle);
        for(let i = 0; i < Math.min(productImages.length, 4);i++){
            const QCImages = productImages[productInfosIndex+i];
            const order = document.createElement("div");
            order.style.display = "flex";
            order.style.flexDirection = "column";
            order.style.gap = "10px";
            order.style.width = "100%";
            for(const image of QCImages.images){
                const img = document.createElement("img");
                img.src = image.original_qc_image_url+"?image_process=resize,w_300";
                img.style.borderRadius = "5px";
                img.style.width = "100%";
                order.appendChild(img);
            }
            customQCViewer.appendChild(order);
        }
        
        let interval = setInterval(() => {
            try {
                // Remove default QC
                if(document.querySelector(".storage-img-list")) document.querySelector(".storage-img-list").remove();
                QCContainer.appendChild(customQCViewer);
                const loadMoreQCS = document.createElement("button")
                loadMoreQCS.innerText = "Load more QC's";
                loadMoreQCS.classList.add("el-button", "el-button--plain");
                loadMoreQCS.id = "loadMoreQCS";
                // Adding styles for "Load more QC's" button spinner
                let styles = `#PCCQCLoader {width: 20px;height: 20px;border: 5px solid var(--bg);border-bottom-color: var(--primary);border-radius: 50%;display: inline-block;box-sizing: border-box;animation: rotation 1s linear infinite;}@keyframes rotation {0% {transform: rotate(0deg);} 100% {transform: rotate(360deg);}} `
                let styleSheet = document.createElement("style");
                styleSheet.innerText = styles;
                document.head.appendChild(styleSheet);

                // Click handler
                loadMoreQCS.onclick = () => {
                    loadMoreQCS.innerHTML = `<span id="PCCQCLoader"></span> Loading ...`
                    getProductInfos();
                };
                QCContainer.appendChild(loadMoreQCS);
                document.querySelector(".shop-list").parentNode.insertBefore(QCContainer, document.querySelector(".shop-list"));
                clearInterval(interval);
                productInfosIndex += 4;
            } catch (_) {}
        }, 1000);
    }else {
       const customQCViewer = document.getElementById("customQCViewer"); 
       for(let i = 0; i < Math.min(productImages.length, 4);i++){
            const QCImages = productImages[productInfosIndex+i];
            const order = document.createElement("div");
            order.style.display = "flex";
            order.style.marginTop = "20px";
            order.style.flexDirection = "column";
            order.style.gap = "10px";
            order.style.width = "100%";
            for(const image of QCImages.images){
                const img = document.createElement("img");
                img.src = image.original_qc_image_url+"?image_process=resize,w_300";
                img.style.borderRadius = "5px";
                img.style.width = "100%";
                order.appendChild(img);
            }
            customQCViewer.appendChild(order);
        }
        document.getElementById("loadMoreQCS").innerText = "Load more QC's";
    }
}
getProductInfos();


// !EXPERIMENTAL
function setDarkMode(){
    chrome.storage.local.get(["darkMode"], (status) => {
        status = status?.darkMode ?? false;
        if(status && urlMatch(["*://\*.pandabuy.com/*", "*://\*.yupoo.com/*"])){
            const link = document.createElement("link");
            link.href = chrome.runtime.getURL("/dark-theme/dark-theme.css");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.id = "PCCDarkTheme";
            document.head.appendChild(link);
        }else {
            if(document.getElementById("PCCDarkTheme")) document.getElementById("PCCDarkTheme").parentNode.removeChild(document.getElementById("PCCDarkTheme"));
        }
    });
}

setDarkMode();