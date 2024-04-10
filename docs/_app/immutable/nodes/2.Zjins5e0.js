import{s as D,n as f}from"../chunks/scheduler.E0oZcFMP.js";import{S,i as A,p as k,g as h,d as r,e as d,t as I,c as p,a as b,b as T,q as u,h as v,j as V,s as L,f as w,r as P,k as M,o as q,m as $,z as N,v as O,w as x,x as z,y as F}from"../chunks/index.YMEq94hl.js";import{h as H,P as B}from"../chunks/data.C4YRFtgh.js";import{b as y}from"../chunks/paths.CgBEr_69.js";function J(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}const R=!1,re=Object.freeze(Object.defineProperty({__proto__:null,ssr:R},Symbol.toStringTag,{value:"Module"}));function G(o){let e,n,l=o[0].name+"",t;return{c(){e=d("div"),n=d("p"),t=I(l),this.h()},l(s){e=p(s,"DIV",{class:!0});var a=b(e);n=p(a,"P",{class:!0});var i=b(n);t=T(i,l),i.forEach(r),a.forEach(r),this.h()},h(){u(n,"class","svelte-16vymj5"),u(e,"class","card svelte-16vymj5")},m(s,a){h(s,e,a),v(e,n),v(n,t)},p(s,a){a&1&&l!==(l=s[0].name+"")&&V(t,l)},d(s){s&&r(e)}}}function K(o){let e,n,l,t=o[0].name+"",s,a,i,c,g;return{c(){e=d("div"),n=d("div"),l=d("p"),s=I(t),a=L(),i=d("a"),c=d("span"),this.h()},l(m){e=p(m,"DIV",{class:!0,style:!0});var _=b(e);n=p(_,"DIV",{class:!0});var j=b(n);l=p(j,"P",{class:!0});var E=b(l);s=T(E,t),E.forEach(r),a=w(j),i=p(j,"A",{id:!0,href:!0});var C=b(i);c=p(C,"SPAN",{class:!0}),b(c).forEach(r),C.forEach(r),j.forEach(r),_.forEach(r),this.h()},h(){u(l,"class","svelte-16vymj5"),u(c,"class","link svelte-16vymj5"),u(i,"id","tolink"),u(i,"href",g=y+"/projects/"+o[0].short_url),u(n,"class","tint svelte-16vymj5"),u(e,"class","card svelte-16vymj5"),P(e,"background-image","url('"+y+"/images/"+o[0].image_folder+"/"+o[0].images[0]+"')")},m(m,_){h(m,e,_),v(e,n),v(n,l),v(l,s),v(n,a),v(n,i),v(i,c)},p(m,_){_&1&&t!==(t=m[0].name+"")&&V(s,t),_&1&&g!==(g=y+"/projects/"+m[0].short_url)&&u(i,"href",g),_&1&&P(e,"background-image","url('"+y+"/images/"+m[0].image_folder+"/"+m[0].images[0]+"')")},d(m){m&&r(e)}}}function Q(o){let e;function n(s,a){return s[0].images[0]!==""?K:G}let l=n(o),t=l(o);return{c(){t.c(),e=k()},l(s){t.l(s),e=k()},m(s,a){t.m(s,a),h(s,e,a)},p(s,[a]){l===(l=n(s))&&t?t.p(s,a):(t.d(1),t=l(s),t&&(t.c(),t.m(e.parentNode,e)))},i:f,o:f,d(s){s&&r(e),t.d(s)}}}function U(o,e,n){let{project:l}=e;return o.$$set=t=>{"project"in t&&n(0,l=t.project)},[l]}class W extends S{constructor(e){super(),A(this,e,U,Q,D,{project:0})}}function X(o,e,n){const l=o.slice();return l[1]=e[n],l}function Y(o){return{c:f,l:f,m:f,i:f,o:f,d:f}}function Z(o){let e,n,l=J(o[0]),t=[];for(let s=0;s<l.length;s+=1)t[s]=te(X(o,l,s));return{c(){e=d("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=p(s,"DIV",{class:!0});var a=b(e);for(let i=0;i<t.length;i+=1)t[i].l(a);a.forEach(r),this.h()},h(){u(e,"class","projects-grid")},m(s,a){h(s,e,a);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null);n=!0},i(s){if(!n){for(let a=0;a<l.length;a+=1)q(t[a]);n=!0}},o(s){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)$(t[a]);n=!1},d(s){s&&r(e),N(t,s)}}}function ee(o){let e,n;return e=new W({props:{project:o[1]}}),{c(){O(e.$$.fragment)},l(l){x(e.$$.fragment,l)},m(l,t){z(e,l,t),n=!0},i(l){n||(q(e.$$.fragment,l),n=!0)},o(l){$(e.$$.fragment,l),n=!1},d(l){F(e,l)}}}function te(o){let e,n,l=o[1].name&&ee(o);return{c(){l&&l.c(),e=k()},l(t){l&&l.l(t),e=k()},m(t,s){l&&l.m(t,s),h(t,e,s),n=!0},p:f,i(t){n||(q(l),n=!0)},o(t){$(l),n=!1},d(t){t&&r(e),l&&l.d(t)}}}function le(o){let e,n="loading...";return{c(){e=d("p"),e.textContent=n},l(l){e=p(l,"P",{"data-svelte-h":!0}),M(e)!=="svelte-qeejp2"&&(e.textContent=n)},m(l,t){h(l,e,t)},i:f,o:f,d(l){l&&r(e)}}}function se(o){let e,n="<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt totam minus nam nobis quasi voluptatem illum delectus ab dicta vero numquam officia libero, ut perspiciatis laudantium tempora qui asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt totam minus nam nobis quasi voluptatem illum delectus ab dicta vero numquam officia libero, ut perspiciatis laudantium tempora qui asperiores.</p>",l,t,s,a={ctx:o,current:null,token:null,hasCatch:!1,pending:le,then:Z,catch:Y,value:0,blocks:[,,,]};return H(B,a),{c(){e=d("div"),e.innerHTML=n,l=L(),t=k(),a.block.c(),this.h()},l(i){e=p(i,"DIV",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-6uq26v"&&(e.innerHTML=n),l=w(i),t=k(),a.block.l(i),this.h()},h(){u(e,"class","title-content svelte-duuapv")},m(i,c){h(i,e,c),h(i,l,c),h(i,t,c),a.block.m(i,a.anchor=c),a.mount=()=>t.parentNode,a.anchor=t,s=!0},p(i,[c]){o=i},i(i){s||(q(a.block),s=!0)},o(i){for(let c=0;c<3;c+=1){const g=a.blocks[c];$(g)}s=!1},d(i){i&&(r(e),r(l),r(t)),a.block.d(i),a.token=null,a=null}}}class ce extends S{constructor(e){super(),A(this,e,null,se,D,{})}}export{ce as component,re as universal};
