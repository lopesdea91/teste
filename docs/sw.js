if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>n(e,c),d={module:{uri:c},exports:o,require:t};i[c]=Promise.all(r.map((e=>d[e]||t(e)))).then((e=>(s(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.35e49caf.css",revision:null},{url:"assets/index.8e9b1451.js",revision:null},{url:"index.html",revision:"3be6e427d63c15b7dae4c8a87a77fe6c"},{url:"registerSW.js",revision:"e383bcf983d8c48ccc75f4e511dceb3d"},{url:"android-chrome-192x192.png",revision:"e7c662c02100eb9fc9fc8c778b90cccc"},{url:"android-chrome-512x512.png",revision:"4785849d5fe5e04d99ead06c26662197"},{url:"manifest.webmanifest",revision:"b485c90e63b35eafd4e3973771eca647"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
