if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>s(e,o),c={module:{uri:o},exports:t,require:d};i[o]=Promise.all(r.map((e=>c[e]||d(e)))).then((e=>(n(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"0acd18e980ca05d615e3ad4722a026dc"},{url:"assets/index-BysCqUjo.css",revision:null},{url:"assets/index-CvIo2jkf.js",revision:null},{url:"index.html",revision:"4cca0f142d62a56806b774b1911c4461"},{url:"registerSW.js",revision:"2950a8998af13a7c0842541f97d62557"},{url:"favicon.ico",revision:"7c685609d6ca1916d73019efc0e2e66d"},{url:"pwa.webp",revision:"188ee10ed21effcaa412af25071e687d"},{url:"robots.txt",revision:"f71d20196d4caf35b6a670db8c70b03d"},{url:"manifest.webmanifest",revision:"5d9ebaa74c0bfea4c69e4d5d20c79746"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
