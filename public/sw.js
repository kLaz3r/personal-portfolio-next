if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const o=e=>i(e,c),d={module:{uri:c},exports:r,require:o};a[c]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(s(...e),r)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/455.3d1ce8d0db7b941a.js",revision:"3d1ce8d0db7b941a"},{url:"/_next/static/chunks/608-20913ce7efe54278.js",revision:"20913ce7efe54278"},{url:"/_next/static/chunks/61-42404a9ba1fa745c.js",revision:"42404a9ba1fa745c"},{url:"/_next/static/chunks/framework-fe99aa755573eedd.js",revision:"fe99aa755573eedd"},{url:"/_next/static/chunks/main-33d58531812b7e6d.js",revision:"33d58531812b7e6d"},{url:"/_next/static/chunks/pages/_app-5a40598176e2948b.js",revision:"5a40598176e2948b"},{url:"/_next/static/chunks/pages/_error-fb68742d3cf986b6.js",revision:"fb68742d3cf986b6"},{url:"/_next/static/chunks/pages/admin-cfbe9aefa9777e90.js",revision:"cfbe9aefa9777e90"},{url:"/_next/static/chunks/pages/index-bf93e36d065c7f47.js",revision:"bf93e36d065c7f47"},{url:"/_next/static/chunks/pages/photos-d4b9a4d71a720d61.js",revision:"d4b9a4d71a720d61"},{url:"/_next/static/chunks/pages/projects-266f554ebf11f282.js",revision:"266f554ebf11f282"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-778e12c8742792f4.js",revision:"778e12c8742792f4"},{url:"/_next/static/media/logog.89e28d6e.png",revision:"2535b49b98d23b6822fedd12ba734684"},{url:"/_next/static/media/logow.34033dc7.png",revision:"3d3949ad5a120ab24eae69c64101782c"},{url:"/_next/static/media/portrait-next.f9f8ffb2.png",revision:"8fa68da53dcb0843cb1ea9e4351c7972"},{url:"/_next/static/wOq6JxCWjseNytvL7gizM/_buildManifest.js",revision:"e616009ca67d20acc757202070c18e84"},{url:"/_next/static/wOq6JxCWjseNytvL7gizM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"bdd6a10adbada785ba8959d9162c1420"},{url:"/android-chrome-512x512.png",revision:"1f1b5637b983ac8253d5699e44015964"},{url:"/android-icon-144x144.png",revision:"46c28369fe81ad60a5911888475b0fcd"},{url:"/android-icon-192x192.png",revision:"e3b4c80e487d4621a6a10c3ff00886db"},{url:"/android-icon-36x36.png",revision:"c1422e300ec17d499a02bc331b939c16"},{url:"/android-icon-48x48.png",revision:"b1ebab08708a2bf407b160d203027e85"},{url:"/android-icon-72x72.png",revision:"ec3ec3bbbc034fe247bc5e5487f906c7"},{url:"/android-icon-96x96.png",revision:"783754e12a03b932cba6872e01a9fa43"},{url:"/apple-icon-114x114.png",revision:"c422d3b36d4e932c8b93125393dc4503"},{url:"/apple-icon-120x120.png",revision:"04fafecdbc1f02cf34d5e0c488fad072"},{url:"/apple-icon-144x144.png",revision:"46c28369fe81ad60a5911888475b0fcd"},{url:"/apple-icon-152x152.png",revision:"eb10ad49a6c8ab3c2af6a0ca0c0fa048"},{url:"/apple-icon-180x180.png",revision:"31a00bf14cd1b52518a7a696ed5432fe"},{url:"/apple-icon-57x57.png",revision:"d1862169bd908eed10a41cdc2d646975"},{url:"/apple-icon-60x60.png",revision:"6e6fb7beae3825fd6ba12a7ba064b780"},{url:"/apple-icon-72x72.png",revision:"ec3ec3bbbc034fe247bc5e5487f906c7"},{url:"/apple-icon-76x76.png",revision:"2f63253d3a1d30ca9a1a0a156050d96b"},{url:"/apple-icon-precomposed.png",revision:"9afefba84d03f0bd829cd430ff0df25e"},{url:"/apple-icon.png",revision:"9afefba84d03f0bd829cd430ff0df25e"},{url:"/apple-touch-icon.png",revision:"0bfaf66b0018713ac074b60ffd6159e4"},{url:"/browserconfig.xml",revision:"21091a8ed5d94162a7bad119d197556d"},{url:"/favicon-16x16.png",revision:"e6cbfd6cfac73cd5cd9ce012077e08fd"},{url:"/favicon-32x32.png",revision:"aef440d7fa9ba8ec027048d19ce72a0a"},{url:"/favicon-96x96.png",revision:"783754e12a03b932cba6872e01a9fa43"},{url:"/favicon.ico",revision:"4e1ae252220dfb7f477240927791300c"},{url:"/images/Untitled-1-Recovered.psd",revision:"0fa1b1d17f121a775f970d916eb114d9"},{url:"/images/about.svg",revision:"271b639140b165981deb2d7837e792bb"},{url:"/images/background.svg",revision:"fffed3e8837c72e3f8f17f50bf677c47"},{url:"/images/background2.svg",revision:"04fe8fbdc264638ae6c7dda76d52a118"},{url:"/images/bgimg.jpg",revision:"618d2a7356afc70bdd08d4ce84948dd1"},{url:"/images/blob.svg",revision:"b4da4bcca6fecf54838bab1d285166fa"},{url:"/images/og-image.png",revision:"049764eab920a6d367950ae6664d4f15"},{url:"/images/portrait-next.png",revision:"8fa68da53dcb0843cb1ea9e4351c7972"},{url:"/images/portrait.png",revision:"65891d23735853f3d9a3cc5c6aaad66b"},{url:"/images/wave-haikei.svg",revision:"2a80010c23408ac2ade6d5360e5d0a4c"},{url:"/logo/logob.png",revision:"0413765a3df0b10babb7a35ef0b43892"},{url:"/logo/logog.png",revision:"2535b49b98d23b6822fedd12ba734684"},{url:"/logo/logow.png",revision:"3d3949ad5a120ab24eae69c64101782c"},{url:"/ms-icon-144x144.png",revision:"46c28369fe81ad60a5911888475b0fcd"},{url:"/ms-icon-150x150.png",revision:"256229a64c37cd24e90275d026bdf3c5"},{url:"/ms-icon-310x310.png",revision:"68cb09f0462ceb4a2af537516233d310"},{url:"/ms-icon-70x70.png",revision:"4b52b0df08780f049c08bd5e130103c6"},{url:"/mstile-150x150.png",revision:"7292778ed30b3698de709afba4823729"},{url:"/robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"},{url:"/safari-pinned-tab.svg",revision:"77ef53be8b256da868d07bb3eb27638e"},{url:"/site.webmanifest",revision:"96f30aba6c91ffe13335e97f608bb073"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
