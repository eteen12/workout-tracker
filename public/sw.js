if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"1318cf3f960aa10bdd25783e992a89c6"},{url:"/_next/static/SI5kmgvCEi9yO2LbsRs33/_buildManifest.js",revision:"385b7f814d1feb259608bcd7f8a7e33d"},{url:"/_next/static/SI5kmgvCEi9yO2LbsRs33/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/4bd1b696-48c2ae5becf7061b.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/chunks/517-5255f753e6200b02.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/chunks/5e22fd23-9efeaede1548c5b2.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/chunks/870-c4e0dd12c7a0a3c0.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/chunks/9c4e2130-e0601095c5bda3c0.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/chunks/app/_not-found/page-984d8b0026383a75.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/chunks/app/layout-92fd62a85845099b.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/chunks/app/page-a5b832fbc9df1378.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/chunks/app/settings/user-data/page-5e0031d6129b1ca8.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/chunks/f97e080b-e3218c2984a6f599.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/chunks/main-app-98225d5166c01199.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/chunks/main-b345cc4090c89957.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-24c6178f43efaa8a.js",revision:"SI5kmgvCEi9yO2LbsRs33"},{url:"/_next/static/css/52c1d68558bddf42.css",revision:"52c1d68558bddf42"},{url:"/_next/static/css/b0bcdc8acd2e6a64.css",revision:"b0bcdc8acd2e6a64"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/manifest.json",revision:"2086fbc07c0f9e3997d07c8281890d0b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
