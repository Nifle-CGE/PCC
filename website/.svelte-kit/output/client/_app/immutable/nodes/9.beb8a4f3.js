import{s as ke,p as be,f as _,a as L,l as ee,r as ye,g as b,u as G,d as m,c as O,h as C,m as te,v as xe,j as l,w as c,i as V,B as J,R as Ee,L as Ce,C as oe,o as Te,P as $,J as ve,n as De,O as ge,z as ce,A as de}from"../chunks/scheduler.2c72f06e.js";import{S as je,i as Me,h as Se,b as Ne,d as Ie,m as Le,a as Oe,t as Pe,e as Be}from"../chunks/index.d3a2f505.js";import{e as fe}from"../chunks/each.c533f48c.js";import{e as we}from"../chunks/forms.eb2f0641.js";import{n as he}from"../chunks/stores.b37ca69a.js";import{M as Ae}from"../chunks/Modal.ab723866.js";function pe(r,e,t){const a=r.slice();return a[31]=e[t],a}function me(r){let e,t,a,o,f,i,h='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transition-all group-hover:rotate-180"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>',g,v;return{c(){e=_("div"),t=_("div"),a=ee(`Search :\r
                            `),o=_("input"),f=L(),i=_("button"),i.innerHTML=h,this.h()},l(u){e=b(u,"DIV",{class:!0});var s=C(e);t=b(s,"DIV",{class:!0});var d=C(t);a=te(d,`Search :\r
                            `),o=b(d,"INPUT",{type:!0,autocomplete:!0,name:!0,class:!0,placeholder:!0}),f=O(d),i=b(d,"BUTTON",{class:!0,"data-svelte-h":!0}),G(i)!=="svelte-1hkw89p"&&(i.innerHTML=h),d.forEach(m),s.forEach(m),this.h()},h(){l(o,"type","text"),l(o,"autocomplete","off"),l(o,"name","search"),l(o,"class","border text-sm rounded-lg block w-full p-1.5 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 placeholder-neutral-400 dark:text-white focus:ring-primary-500 focus:border-primary-500 focus:outline-none outline-none transition-all caret-primary-600 focus:ring-offset-white focus:ring-offset-2 focus:ring-2 mt-1"),l(o,"placeholder","Search users by emails"),l(i,"class","absolute top-0 right-0 group"),l(t,"class","relative w-full h-full text-sm text-text-main dark:text-neutral-100"),l(e,"class","bg-neutral-100 dark:bg-neutral-700 rounded-lg p-2 absolute top-0 left-0 right-0")},m(u,s){V(u,e,s),c(e,t),c(t,a),c(t,o),$(o,r[0]),c(t,f),c(t,i),g||(v=[J(o,"input",r[11]),J(i,"click",r[12])],g=!0)},p(u,s){s[0]&1&&o.value!==u[0]&&$(o,u[0])},d(u){u&&m(e),g=!1,oe(v)}}}function _e(r){let e,t=r[31].email+"",a,o,f,i,h,g,v,u,s,d,S="<em></em>",x,w,y,D,P;function R(...N){return r[13](r[31],...N)}return{c(){e=_("form"),a=ee(t),o=L(),f=_("div"),i=_("input"),u=L(),s=_("label"),d=_("span"),d.innerHTML=S,w=L(),this.h()},l(N){e=b(N,"FORM",{action:!0,method:!0,class:!0});var k=C(e);a=te(k,t),o=O(k),f=b(k,"DIV",{class:!0});var U=C(f);i=b(U,"INPUT",{type:!0,id:!0,name:!0,class:!0}),u=O(U),s=b(U,"LABEL",{for:!0});var A=C(s);d=b(A,"SPAN",{"data-svelte-h":!0}),G(d)!=="svelte-1qeeisj"&&(d.innerHTML=S),A.forEach(m),U.forEach(m),w=O(k),k.forEach(m),this.h()},h(){l(i,"type","checkbox"),l(i,"id",h="sendEmail-"+r[31].email),l(i,"name",g="sendEmails-"+r[31].email),i.checked=v=r[31].sendEmails,l(i,"class","hidden"),l(s,"for",x="sendEmail-"+r[31].email),l(f,"class","switch-wrapper opacity-0 group-hover:opacity-100 transition-all"),l(e,"action","?/sendEmails"),l(e,"method","POST"),l(e,"class","w-full transition-all text-text-main dark:text-neutral-100 dark:hover:bg-neutral-600 hover:bg-neutral-100 p-2 cursor-pointer rounded-lg hover:px-4 items-center relative group flex flex-row justify-between")},m(N,k){V(N,e,k),c(e,a),c(e,o),c(e,f),c(f,i),c(f,u),c(f,s),c(s,d),c(e,w),D||(P=[J(i,"change",Re),ve(y=we.call(null,e,R))],D=!0)},p(N,k){r=N,k[0]&2&&t!==(t=r[31].email+"")&&De(a,t),k[0]&2&&h!==(h="sendEmail-"+r[31].email)&&l(i,"id",h),k[0]&2&&g!==(g="sendEmails-"+r[31].email)&&l(i,"name",g),k[0]&2&&v!==(v=r[31].sendEmails)&&(i.checked=v),k[0]&2&&x!==(x="sendEmail-"+r[31].email)&&l(s,"for",x),y&&ge(y.update)&&k[0]&2&&y.update.call(null,R)},d(N){N&&m(e),D=!1,oe(P)}}}function He(r){let e,t,a="In email subject and body, you can use use {{email}} to insert the user's email",o,f,i,h,g,v,u,s,d,S,x;return{c(){e=_("form"),t=_("p"),t.textContent=a,o=L(),f=_("p"),i=ee(`Newsletter subject\r
            `),h=_("input"),g=L(),v=_("p"),u=ee(`Newsletter contents\r
            `),s=_("textarea"),this.h()},l(w){e=b(w,"FORM",{action:!0,method:!0,id:!0,slot:!0,class:!0});var y=C(e);t=b(y,"P",{"data-svelte-h":!0}),G(t)!=="svelte-10xr2bd"&&(t.textContent=a),o=O(y),f=b(y,"P",{class:!0});var D=C(f);i=te(D,`Newsletter subject\r
            `),h=b(D,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0}),D.forEach(m),g=O(y),v=b(y,"P",{class:!0});var P=C(v);u=te(P,`Newsletter contents\r
            `),s=b(P,"TEXTAREA",{name:!0,id:!0,placeholder:!0,rows:!0}),C(s).forEach(m),P.forEach(m),y.forEach(m),this.h()},h(){l(h,"type","text"),l(h,"name","subject"),l(h,"id","subject"),l(h,"placeholder","Subject"),l(f,"class","font-bold"),l(s,"name","contents"),l(s,"id","contents"),l(s,"placeholder","Contents"),l(s,"rows","10"),l(v,"class","font-bold"),l(e,"action","?/newMail"),l(e,"method","POST"),l(e,"id","newNewsletterForm"),l(e,"slot","body"),l(e,"class","flex flex-col gap-4")},m(w,y){V(w,e,y),c(e,t),c(e,o),c(e,f),c(f,i),c(f,h),$(h,r[6].subject),c(e,g),c(e,v),c(v,u),c(v,s),$(s,r[6].contents),S||(x=[J(h,"input",r[16]),J(s,"input",r[17]),ve(d=we.call(null,e,r[18]))],S=!0)},p(w,y){y[0]&64&&h.value!==w[6].subject&&$(h,w[6].subject),y[0]&64&&$(s,w[6].contents),d&&ge(d.update)&&y[0]&16&&d.update.call(null,w[18])},d(w){w&&m(e),S=!1,oe(x)}}}function Ve(r){let e;return{c(){e=ee("Send")},l(t){e=te(t,"Send")},m(t,a){V(t,e,a)},d(t){t&&m(e)}}}function Ue(r){let e,t;return{c(){e=ce("svg"),t=ce("path"),this.h()},l(a){e=de(a,"svg",{fill:!0,class:!0,viewBox:!0,xmlns:!0});var o=C(e);t=de(o,"path",{"clip-rule":!0,d:!0,fill:!0,"fill-rule":!0}),C(t).forEach(m),o.forEach(m),this.h()},h(){l(t,"clip-rule","evenodd"),l(t,"d","M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"),l(t,"fill","currentColor"),l(t,"fill-rule","evenodd"),l(e,"fill","none"),l(e,"class","w-6 h-6 animate-spin"),l(e,"viewBox","0 0 32 32"),l(e,"xmlns","http://www.w3.org/2000/svg")},m(a,o){V(a,e,o),c(e,t)},d(a){a&&m(e)}}}function qe(r){let e,t="Cancel",a,o,f,i,h;function g(s,d){return s[4]?Ue:Ve}let v=g(r),u=v(r);return{c(){e=_("button"),e.textContent=t,a=L(),o=_("button"),u.c(),this.h()},l(s){e=b(s,"BUTTON",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-h9xgp3"&&(e.textContent=t),a=O(s),o=b(s,"BUTTON",{form:!0,class:!0});var d=C(o);u.l(d),d.forEach(m),this.h()},h(){l(e,"class","button-secondary"),l(o,"form","newNewsletterForm"),l(o,"class","button-primary"),o.disabled=f=r[6].subject.length===0||r[6].contents.length===0},m(s,d){V(s,e,d),V(s,a,d),V(s,o,d),u.m(o,null),i||(h=J(e,"click",r[15]),i=!0)},p(s,d){v!==(v=g(s))&&(u.d(1),u=v(s),u&&(u.c(),u.m(o,null))),d[0]&64&&f!==(f=s[6].subject.length===0||s[6].contents.length===0)&&(o.disabled=f)},d(s){s&&(m(e),m(a),m(o)),u.d(),i=!1,h()}}}function Fe(r){let e,t="",a,o,f,i,h,g=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transition-all group-hover:rotate-[360deg] duration-300"><path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"></path></svg>
            Go back`,v,u,s,d,S,x,w,y,D,P='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>',R,N,k,U,A,q,re="Send new newsletter",X,H,le,K,se,ne,M=r[2]&&me(r),W=fe(r[1]),T=[];for(let n=0;n<W.length;n+=1)T[n]=_e(pe(r,W,n));function ae(n){r[19](n)}let p={title:"New newsletter mail",$$slots:{footer:[qe],body:[He]},$$scope:{ctx:r}};return r[3]!==void 0&&(p.status=r[3]),H=new Ae({props:p}),be.push(()=>Se(H,"status",ae)),{c(){e=_("script"),e.innerHTML=t,o=L(),f=_("section"),i=_("div"),h=_("a"),h.innerHTML=g,v=L(),u=_("div"),s=_("div"),d=_("div"),S=L(),x=_("div"),w=_("h5"),y=ee(`Newsletter status\r
                    `),D=_("button"),D.innerHTML=P,R=L(),M&&M.c(),N=L(),k=_("div");for(let n=0;n<T.length;n+=1)T[n].c();U=L(),A=_("div"),q=_("button"),q.textContent=re,X=L(),Ne(H.$$.fragment),this.h()},l(n){const j=ye("svelte-1eai",document.head);e=b(j,"SCRIPT",{src:!0,"data-svelte-h":!0}),G(e)!=="svelte-avrofd"&&(e.innerHTML=t),j.forEach(m),o=O(n),f=b(n,"SECTION",{class:!0});var I=C(f);i=b(I,"DIV",{class:!0});var E=C(i);h=b(E,"A",{href:!0,class:!0,"data-svelte-h":!0}),G(h)!=="svelte-ptbhqv"&&(h.innerHTML=g),v=O(E),u=b(E,"DIV",{class:!0});var B=C(u);s=b(B,"DIV",{class:!0});var Y=C(s);d=b(Y,"DIV",{class:!0}),C(d).forEach(m),Y.forEach(m),S=O(B),x=b(B,"DIV",{class:!0});var F=C(x);w=b(F,"H5",{class:!0});var z=C(w);y=te(z,`Newsletter status\r
                    `),D=b(z,"BUTTON",{class:!0,"data-svelte-h":!0}),G(D)!=="svelte-1y07h73"&&(D.innerHTML=P),z.forEach(m),R=O(F),M&&M.l(F),N=O(F),k=b(F,"DIV",{class:!0});var Z=C(k);for(let ie=0;ie<T.length;ie+=1)T[ie].l(Z);Z.forEach(m),F.forEach(m),U=O(B),A=b(B,"DIV",{class:!0});var Q=C(A);q=b(Q,"BUTTON",{class:!0,"data-svelte-h":!0}),G(q)!=="svelte-1tp2sp3"&&(q.textContent=re),Q.forEach(m),B.forEach(m),E.forEach(m),I.forEach(m),X=O(n),Ie(H.$$.fragment,n),this.h()},h(){document.title="PCC - Newsletter management",xe(e.src,a="https://cdn.jsdelivr.net/npm/apexcharts")||l(e,"src",a),l(h,"href","../"),l(h,"class","button-secondary w-fit button-small group"),l(d,"class","w-full"),l(s,"class","md:col-span-2 border border-neutral-200 dark:border-neutral-700 rounded-lg"),l(D,"class","w-fit button-secondary button-small"),l(w,"class","w-full border-b border-neutral-200 dark:border-neutral-700 flex flex-row p-2 items-center justify-between"),l(k,"class","flex flex-col gap-0 overflow-y-auto overflow-x-hidden"),l(x,"class","h-full flex flex-col gap-2 border border-neutral-200 dark:border-neutral-700 rounded-lg max-h-[450px] p-4 relative"),l(q,"class","button-primary"),l(A,"class","h-full flex flex-col gap-2 border border-neutral-200 dark:border-neutral-700 rounded-lg max-h-[450px] p-4 relative"),l(u,"class","w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6"),l(i,"class","max-w-screen-lg mx-auto flex flex-col gap-6"),l(f,"class","grow w-full py-8 px-4 lg:py-16 lg:px-6 space-y-6")},m(n,j){c(document.head,e),V(n,o,j),V(n,f,j),c(f,i),c(i,h),c(i,v),c(i,u),c(u,s),c(s,d),r[9](d),c(u,S),c(u,x),c(x,w),c(w,y),c(w,D),c(x,R),M&&M.m(x,null),c(x,N),c(x,k);for(let I=0;I<T.length;I+=1)T[I]&&T[I].m(k,null);c(u,U),c(u,A),c(A,q),V(n,X,j),Le(H,n,j),K=!0,se||(ne=[J(D,"click",r[10]),J(q,"click",r[14])],se=!0)},p(n,j){if(n[2]?M?M.p(n,j):(M=me(n),M.c(),M.m(x,N)):M&&(M.d(1),M=null),j[0]&2){W=fe(n[1]);let E;for(E=0;E<W.length;E+=1){const B=pe(n,W,E);T[E]?T[E].p(B,j):(T[E]=_e(B),T[E].c(),T[E].m(k,null))}for(;E<T.length;E+=1)T[E].d(1);T.length=W.length}const I={};j[0]&88|j[1]&8&&(I.$$scope={dirty:j,ctx:n}),!le&&j[0]&8&&(le=!0,I.status=n[3],Ee(()=>le=!1)),H.$set(I)},i(n){K||(Oe(H.$$.fragment,n),K=!0)},o(n){Pe(H.$$.fragment,n),K=!1},d(n){n&&(m(o),m(f),m(X)),m(e),r[9](null),M&&M.d(),Ce(T,n),Be(H,n),se=!1,oe(ne)}}}const ue=9,Re=r=>{r.target.closest("form").requestSubmit()};function We(r,e,t){var T,ae;let{form:a}=e,{data:o}=e;const{subscribers:f}=o;let i=f.slice(0,ue),h=!1,g=!1,v=!1,u,s,d={subject:((T=a==null?void 0:a.formData)==null?void 0:T.subject)??"",contents:((ae=a==null?void 0:a.formData)==null?void 0:ae.contents)??""};const S={};f.forEach(p=>{const n=p.joinedAt.toISOString().split("T")[0];S[n]=(S[n]||0)+1});const x=Object.keys(S),w=Math.min(...x.map(p=>new Date(p))),y=Math.max(new Date),D=[];for(let p=new Date(w);p<=y;p.setDate(p.getDate()+1)){const n=p.toISOString().split("T")[0];D.push(n)}const P=[];let R=0;D.forEach(p=>{const n=S[p]||0;R+=n,P.push({x:new Date(p).getDate()+"/"+(new Date(p).getMonth()+1),y:R})});let k={...{chart:{height:450,type:"line",toolbar:{show:!1}},colors:["#0da858"],dataLabels:{enabled:!0},stroke:{curve:"smooth"},grid:{borderColor:"#e7e7e7",row:{colors:["#f3f3f3","transparent"],opacity:.5}}},series:[{name:"Subscribers",data:P}],title:{text:"Subscribers progression",align:"left"},xaxis:{categories:Object.keys(S),title:{text:"Days"}},yaxis:{title:{text:"Subscribers"},min:0,max:Math.max(...P.map(p=>p.y))}};Te(()=>{new ApexCharts(u,k).render()});function U(){if(!s){t(1,i=f.slice(0,ue));return}const p=2,n=s.toLowerCase().split(" ");t(1,i=f.filter(j=>{const I=j.email.toLowerCase().split(" ");for(let E=0;E<n.length;E++){const B=n[E];let Y=!1;for(let F=0;F<I.length;F++){const z=I[F];if(z.includes(B)){Y=!0;break}if(B.length-z.length<=p){let Z=0;for(let Q=0;Q<z.length&&!(z[Q]!==B[Q]&&(Z++,Z>p));Q++);if(Z<=p){Y=!0;break}}}if(!Y)return!1}return!0}).slice(0,ue))}function A(p){be[p?"unshift":"push"](()=>{u=p,t(5,u)})}const q=()=>{t(2,h=!h)};function re(){s=this.value,t(0,s)}const X=()=>{t(2,h=!1),t(0,s="")},H=(p,n)=>(n.formData.set("email",p.email),({update:j})=>{j({reset:!1})}),le=()=>{t(3,g=!0)},K=()=>{t(3,g=!1)};function se(){d.subject=this.value,t(6,d)}function ne(){d.contents=this.value,t(6,d)}const M=()=>(t(4,v=!0),({update:p})=>{t(4,v=!1),p({reset:!1})});function W(p){g=p,t(3,g)}return r.$$set=p=>{"form"in p&&t(7,a=p.form),"data"in p&&t(8,o=p.data)},r.$$.update=()=>{r.$$.dirty[0]&1&&U(),r.$$.dirty[0]&128&&a&&(a.type==="sendEmails"&&he(a.success?"success":"error",a.message),a.type==="newMail"&&he(a.success?"success":"error",a.message))},[s,i,h,g,v,u,d,a,o,A,q,re,X,H,le,K,se,ne,M,W]}class Ye extends je{constructor(e){super(),Me(this,e,We,Fe,ke,{form:7,data:8},null,[-1,-1])}}export{Ye as component};
