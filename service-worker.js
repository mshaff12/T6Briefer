if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return n[e]||(r=new Promise((async r=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},r=(r,n)=>{Promise.all(r.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(r)};self.define=(r,s,i)=>{n[r]||(n[r]=Promise.resolve().then((()=>{let n={};const u={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return n;case"module":return u;default:return e(r)}}))).then((e=>{const r=i(...e);return n.default||(n.default=r),n}))})))}}define("./service-worker.js",["./workbox-3a2d8142"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"bundle.0becdeda8202f0b0e20a.js",revision:null},{url:"bundle.3a3b2f13a5dedc41769c.js",revision:null},{url:"bundle.5a859362520f62deb90d.js",revision:null},{url:"bundle.5a859362520f62deb90d.js.LICENSE.txt",revision:"c2401a08dec9a8a479dbaf76e44307e3"},{url:"bundle.6e3356f4516193d02cba.js",revision:null},{url:"index.html",revision:"2c1b0c4882991c88b278038c44e27889"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e4,purgeOnQuotaError:!0})]}),"GET")}));
