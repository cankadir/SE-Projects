import{m as R,o as P,p as f,q as T,r as B}from"./scheduler.DC0a0gyu.js";import{g as J,t as j,c as q,a as E}from"./index.e56AARjm.js";function N(t,e){const d=e.token={};function l(s,r,a,g){if(e.token!==d)return;e.resolved=g;let p=e.ctx;a!==void 0&&(p=p.slice(),p[a]=g);const i=s&&(e.current=s)(p);let _=!1;e.block&&(e.blocks?e.blocks.forEach((m,n)=>{n!==r&&m&&(J(),j(m,1,1,()=>{e.blocks[n]===m&&(e.blocks[n]=null)}),q())}):e.block.d(1),i.c(),E(i,1),i.m(e.mount(),e.anchor),_=!0),e.block=i,e.blocks&&(e.blocks[r]=i),_&&T()}if(R(t)){const s=P();if(t.then(r=>{f(s),l(e.then,1,e.value,r),f(null)},r=>{if(f(s),l(e.catch,2,e.error,r),f(null),!e.hasCatch)throw r}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,t),!0;e.resolved=t}}function V(t,e,d){const l=e.slice(),{resolved:s}=t;t.current===t.then&&(l[t.value]=s),t.current===t.catch&&(l[t.error]=s),t.block.p(l,d)}function W(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function X(t,e){j(t,1,1,()=>{e.delete(t.key)})}function Z(t,e,d,l,s,r,a,g,p,i,_,m){let n=t.length,w=r.length,h=n;const v={};for(;h--;)v[t[h].key]=h;const k=[],A=new Map,x=new Map,C=[];for(h=w;h--;){const c=m(s,r,h),u=d(c);let o=a.get(u);o?l&&C.push(()=>o.p(c,e)):(o=i(u,c),o.c()),A.set(u,k[h]=o),u in v&&x.set(u,Math.abs(h-v[u]))}const D=new Set,M=new Set;function y(c){E(c,1),c.m(g,_),a.set(c.key,c),_=c.first,w--}for(;n&&w;){const c=k[w-1],u=t[n-1],o=c.key,b=u.key;c===u?(_=c.first,n--,w--):A.has(b)?!a.has(o)||D.has(o)?y(c):M.has(b)?n--:x.get(o)>x.get(b)?(M.add(o),y(c)):(D.add(b),n--):(p(u,a),n--)}for(;n--;){const c=t[n];A.has(c.key)||p(c,a)}for(;w;)y(k[w-1]);return B(C),k}let H="https://docs.google.com/spreadsheets/d/e/2PACX-1vSZkAdwJVMyd8Bx2cbNt1EEc3c9w3SCnGRRpDYn-MswB1nvBWnRoUnMCd8YHmwfDis06USvt-HqdADk/pub?gid=1257598033&single=true&output=tsv";const O=async t=>await(await fetch(t)).text();let U=O(H),S=U.then(t=>t.split(`
`).map(l=>{const s=l.split("	");return{code:s[0],short_url:s[1],name:s[2],projects:s[3],link:s[4],other_links:s[5],subtitle:s[6],year:s[7],collaborators:s[8],client:s[9],roles:s[10],tools:s[11],text:s[12],image_folder:s[13],images:s.slice(14,24)}}));S=S.then(t=>(t.shift(),t=t.filter(e=>e.code!="x"),t));const $=S;export{$ as P,V as a,W as e,N as h,X as o,Z as u};
