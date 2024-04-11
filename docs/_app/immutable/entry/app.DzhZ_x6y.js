import{s as C,a as U,u as h,g as j,i as b,f as p,v as q,w as z,e as M,c as W,b as F,x as A,y as d,t as G,d as H,j as J,z as D,A as k,B as K}from"../chunks/scheduler.DC0a0gyu.js";import{S as Q,i as X,t as g,c as P,a as w,g as L,b as v,d as I,m as E,e as y}from"../chunks/index.e56AARjm.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},N={},R=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");s=Promise.all(n.map(t=>{if(t=Z(t,i),t in N)return;N[t]=!0;const r=t.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!i)for(let _=c.length-1;_>=0;_--){const m=c[_];if(m.href===t&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Y,r||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),r)return new Promise((_,m)=>{o.addEventListener("load",_),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return s.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},re={};function $(a){let e,n,i;var s=a[1][0];function c(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=k(s,c(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,r){e&&E(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;g(l.$$.fragment,1,0,()=>{y(l,1)}),P()}s?(e=k(s,c(t)),t[12](e),v(e.$$.fragment),w(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&p(n),a[12](null),e&&y(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function c(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=k(s,c(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,r){e&&E(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;g(l.$$.fragment,1,0,()=>{y(l,1)}),P()}s?(e=k(s,c(t)),t[11](e),v(e.$$.fragment),w(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&p(n),a[11](null),e&&y(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function c(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=k(s,c(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,r){e&&E(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){L();const l=e;g(l.$$.fragment,1,0,()=>{y(l,1)}),P()}s?(e=k(s,c(t)),t[10](e),v(e.$$.fragment),w(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(s){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&p(n),a[10](null),e&&y(e,t)}}}function O(a){let e,n=a[6]&&S(a);return{c(){e=M("div"),n&&n.c(),this.h()},l(i){e=W(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=F(e);n&&n.l(s),s.forEach(p),this.h()},h(){A(e,"id","svelte-announcer"),A(e,"aria-live","assertive"),A(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,s){b(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=S(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&p(e),n&&n.d()}}}function S(a){let e;return{c(){e=G(a[7])},l(n){e=H(n,a[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&J(e,n[7])},d(n){n&&p(e)}}}function te(a){let e,n,i,s,c;const t=[x,$],r=[];function l(o,_){return o[1][1]?0:1}e=l(a),n=r[e]=t[e](a);let u=a[5]&&O(a);return{c(){n.c(),i=U(),u&&u.c(),s=h()},l(o){n.l(o),i=j(o),u&&u.l(o),s=h()},m(o,_){r[e].m(o,_),b(o,i,_),u&&u.m(o,_),b(o,s,_),c=!0},p(o,[_]){let m=e;e=l(o),e===m?r[e].p(o,_):(L(),g(r[m],1,1,()=>{r[m]=null}),P(),n=r[e],n?n.p(o,_):(n=r[e]=t[e](o),n.c()),w(n,1),n.m(i.parentNode,i)),o[5]?u?u.p(o,_):(u=O(o),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},i(o){c||(w(n),c=!0)},o(o){g(n),c=!1},d(o){o&&(p(i),p(s)),r[e].d(o),u&&u.d(o)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:c}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:u=null}=e;q(i.page.notify);let o=!1,_=!1,m=null;z(()=>{const f=i.page.subscribe(()=>{o&&(n(6,_=!0),K().then(()=>{n(7,m=document.title||"untitled page")}))});return n(5,o=!0),f});function T(f){D[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function V(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function B(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,s=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,r=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,u=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,c,r,l,u,o,_,m,i,s,T,V,B]}class oe extends Q{constructor(e){super(),X(this,e,ne,te,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>R(()=>import("../nodes/0.D-ZYgmz8.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),()=>R(()=>import("../nodes/1.C2BI8PG5.js"),__vite__mapDeps([5,1,2,6,7,3]),import.meta.url),()=>R(()=>import("../nodes/2.BbAjOqCS.js"),__vite__mapDeps([8,1,9,2,3,10]),import.meta.url),()=>R(()=>import("../nodes/3.CNle8zkc.js"),__vite__mapDeps([11,1,2]),import.meta.url),()=>R(()=>import("../nodes/4.BgooByat.js"),__vite__mapDeps([12,1,9,2,6,7,3,13]),import.meta.url)],le=[],fe={"/":[2],"/about":[3],"/projects/[id]":[4]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.D-ZYgmz8.js","../chunks/scheduler.DC0a0gyu.js","../chunks/index.e56AARjm.js","../chunks/paths.0aKNDsxQ.js","../assets/0.UGVhmISS.css","../nodes/1.C2BI8PG5.js","../chunks/stores.Bxy0HNap.js","../chunks/entry.Il_JeF9I.js","../nodes/2.BbAjOqCS.js","../chunks/data.DL0cuzWt.js","../assets/2.DLfPQTnB.css","../nodes/3.CNle8zkc.js","../nodes/4.BgooByat.js","../assets/4.Cene-9K1.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
