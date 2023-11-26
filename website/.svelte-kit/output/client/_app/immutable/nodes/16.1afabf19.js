import{s as U,a as E,f as k,l as S,r as q,d as g,c as M,g as x,h as C,u as V,m as R,j as s,i as T,w as h,J as A,x as H,z as N,A as O,n as F}from"../chunks/scheduler.c54fe263.js";import{S as J,i as Y}from"../chunks/index.382b5808.js";import{e as G}from"../chunks/forms.672063bc.js";function K(u){var i;let t,r,e,o,c=(((i=u[1])==null?void 0:i.message)??u[0].message)+"",b;return{c(){t=k("div"),r=N("svg"),e=N("path"),o=E(),b=S(c),this.h()},l(d){t=x(d,"DIV",{class:!0});var f=C(t);r=O(f,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var _=C(r);e=O(_,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),C(e).forEach(g),_.forEach(g),o=M(f),b=R(f,c),f.forEach(g),this.h()},h(){s(e,"stroke-linecap","round"),s(e,"stroke-linejoin","round"),s(e,"d","M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"),s(r,"xmlns","http://www.w3.org/2000/svg"),s(r,"fill","none"),s(r,"viewBox","0 0 24 24"),s(r,"stroke-width","1.5"),s(r,"stroke","currentColor"),s(r,"class","w-6 h-6"),s(t,"class","flex flex-row gap-2 items-center text-red-800 border-red-800 bg-red-100 dark:bg-red-600 dark:text-neutral-100 border rounded-lg mb-4 p-4 w-full")},m(d,f){T(d,t,f),h(t,r),h(r,e),h(t,o),h(t,b)},p(d,f){var _;f&3&&c!==(c=(((_=d[1])==null?void 0:_.message)??d[0].message)+"")&&F(b,c)},d(d){d&&g(t)}}}function Q(u){let t,r='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg> <div>Your password has successfully been changed. you can now <a class="link" href="/auth">log-in</a> into your account.</div>';return{c(){t=k("div"),t.innerHTML=r,this.h()},l(e){t=x(e,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-16fl785"&&(t.innerHTML=r),this.h()},h(){s(t,"class","flex flex-row gap-2 items-center text-green-800 border-green-800 bg-green-100 dark:bg-green-600 dark:text-neutral-100 border mb-4 rounded-lg p-4 w-full")},m(e,o){T(e,t,o)},p:H,d(e){e&&g(t)}}}function W(u){let t,r,e,o,c="New password",b,i,d,f,_,w,z,L,D,P;function j(a,m){var p,l,v;if((p=a[1])!=null&&p.success)return Q;if((l=a[1])!=null&&l.error||(v=a[0])!=null&&v.error)return K}let y=j(u),n=y&&y(u);return{c(){t=E(),r=k("div"),e=k("form"),o=k("h1"),o.textContent=c,b=E(),i=k("input"),f=E(),n&&n.c(),_=E(),w=k("button"),z=S(`\r
            Change password`),this.h()},l(a){q("svelte-1chsx13",document.head).forEach(g),t=M(a),r=x(a,"DIV",{class:!0});var p=C(r);e=x(p,"FORM",{class:!0,method:!0,action:!0});var l=C(e);o=x(l,"H1",{class:!0,"data-svelte-h":!0}),V(o)!=="svelte-16062ge"&&(o.textContent=c),b=M(l),i=x(l,"INPUT",{type:!0,placeholder:!0,name:!0,id:!0,class:!0}),f=M(l),n&&n.l(l),_=M(l),w=x(l,"BUTTON",{class:!0,type:!0});var v=C(w);z=R(v,`\r
            Change password`),v.forEach(g),l.forEach(g),p.forEach(g),this.h()},h(){var a,m,p,l,v;document.title="PCC - Reset password",s(o,"class","mb-4"),s(i,"type","password"),s(i,"placeholder","New password"),s(i,"name","password"),s(i,"id","password"),i.value=d=((m=(a=u[1])==null?void 0:a.formData)==null?void 0:m.username)||"",s(i,"class","mb-4"),s(w,"class","button-primary"),s(w,"type","submit"),w.disabled=L=((p=u[1])==null?void 0:p.error)||((l=u[0])==null?void 0:l.error)||((v=u[1])==null?void 0:v.success),s(e,"class","rounded-lg md:p-10 p-6 bg-transparent text-start transition-all border border-gray-200 dark:border-neutral-700 w-full max-w-md mx-auto flex flex-col gap-4"),s(e,"method","POST"),s(e,"action","?/resetPassword"),s(r,"class","py-8 px-4 lg:py-16 lg:px-6 w-full grow")},m(a,m){T(a,t,m),T(a,r,m),h(r,e),h(e,o),h(e,b),h(e,i),h(e,f),n&&n.m(e,null),h(e,_),h(e,w),h(w,z),D||(P=A(G.call(null,e)),D=!0)},p(a,[m]){var p,l,v,B,I;m&2&&d!==(d=((l=(p=a[1])==null?void 0:p.formData)==null?void 0:l.username)||"")&&i.value!==d&&(i.value=d),y===(y=j(a))&&n?n.p(a,m):(n&&n.d(1),n=y&&y(a),n&&(n.c(),n.m(e,_))),m&3&&L!==(L=((v=a[1])==null?void 0:v.error)||((B=a[0])==null?void 0:B.error)||((I=a[1])==null?void 0:I.success))&&(w.disabled=L)},i:H,o:H,d(a){a&&(g(t),g(r)),n&&n.d(),D=!1,P()}}}function X(u,t,r){let{data:e}=t,{form:o}=t;return u.$$set=c=>{"data"in c&&r(0,e=c.data),"form"in c&&r(1,o=c.form)},[e,o]}class te extends J{constructor(t){super(),Y(this,t,X,W,U,{data:0,form:1})}}export{te as component};
