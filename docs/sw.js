if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const d=e=>c(e,s),l={module:{uri:s},exports:o,require:d};i[s]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"e7c662c02100eb9fc9fc8c778b90cccc"},{url:"android-chrome-512x512.png",revision:"4785849d5fe5e04d99ead06c26662197"},{url:"apple-touch-icon.png",revision:"20751e9d808f1834c84d7a2c2d73b882"},{url:"assets/index.35e49caf.css",revision:null},{url:"assets/index.8e9b1451.js",revision:null},{url:"assets/vue.5532db34.svg",revision:null},{url:"favicon-16x16.png",revision:"02747cab377ae65c0372c4ce4da6bc23"},{url:"favicon-32x32.png",revision:"7e6ab2f39e690a61386115243c47c3d4"},{url:"favicon.ico",revision:"c9af7a3910ff89e63b332f8d5c2b27e4"},{url:"index.html",revision:"c40778f169b764bcac3e27186cab6107"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"android-chrome-192x192.png",revision:"e7c662c02100eb9fc9fc8c778b90cccc"},{url:"android-chrome-512x512.png",revision:"4785849d5fe5e04d99ead06c26662197"},{url:"manifest.webmanifest",revision:"62bea7fde88ff288ada1b26648dfc1dc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
