if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>i(e,c),o={module:{uri:c},exports:r,require:t};s[c]=Promise.all(n.map((e=>o[e]||t(e)))).then((e=>(a(...e),r)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/LsMVd4oZjpeFq8SHLp8k_/_buildManifest.js",revision:"8ac25ac0300a801075ed47f95ebf1530"},{url:"/_next/static/LsMVd4oZjpeFq8SHLp8k_/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/LsMVd4oZjpeFq8SHLp8k_/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/664-41844e7ff48658f9.js",revision:"41844e7ff48658f9"},{url:"/_next/static/chunks/749-0127c247b75be5fe.js",revision:"0127c247b75be5fe"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-5035a05945ec0e6e.js",revision:"5035a05945ec0e6e"},{url:"/_next/static/chunks/pages/_app-a8372d48043b5cd6.js",revision:"a8372d48043b5cd6"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/addMeasurement-4a0e41ce4e3af785.js",revision:"4a0e41ce4e3af785"},{url:"/_next/static/chunks/pages/edit-7052efd5e3c49dcb.js",revision:"7052efd5e3c49dcb"},{url:"/_next/static/chunks/pages/home-4f2c1110185460f9.js",revision:"4f2c1110185460f9"},{url:"/_next/static/chunks/pages/home/addnew-eb34d1dd6b47a349.js",revision:"eb34d1dd6b47a349"},{url:"/_next/static/chunks/pages/home/records-ce0aed34db56ebe5.js",revision:"ce0aed34db56ebe5"},{url:"/_next/static/chunks/pages/index-75757371951ebf79.js",revision:"75757371951ebf79"},{url:"/_next/static/chunks/pages/selectClType-972ceb255644ce56.js",revision:"972ceb255644ce56"},{url:"/_next/static/chunks/pages/showDetails-38da599b7c6c0f99.js",revision:"38da599b7c6c0f99"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-69bfa6990bb9e155.js",revision:"69bfa6990bb9e155"},{url:"/_next/static/css/25d3a28ba6718a18.css",revision:"25d3a28ba6718a18"},{url:"/_next/static/css/3a92dbd321430f75.css",revision:"3a92dbd321430f75"},{url:"/_next/static/css/427b0337188268ef.css",revision:"427b0337188268ef"},{url:"/_next/static/css/591416495ffcebfb.css",revision:"591416495ffcebfb"},{url:"/_next/static/css/66ec4425e0bcbc5e.css",revision:"66ec4425e0bcbc5e"},{url:"/_next/static/css/6dc45365f2da722c.css",revision:"6dc45365f2da722c"},{url:"/_next/static/css/76a9e5239985dd77.css",revision:"76a9e5239985dd77"},{url:"/_next/static/css/8d1023e6b6008de3.css",revision:"8d1023e6b6008de3"},{url:"/_next/static/css/f5516dd8b9517c85.css",revision:"f5516dd8b9517c85"},{url:"/favicon.ico",revision:"dd794b8d6f93958d889cf2d4b91f4aad"},{url:"/icons/Icon-128x128.png",revision:"860700c5c5879008d17ca6d76b6653f0"},{url:"/icons/Icon-144x144.png",revision:"5d88873681fc624040704dc71f62e9d6"},{url:"/icons/Icon-152x152.png",revision:"191fe063a16f9fe33157db51de3edf91"},{url:"/icons/Icon-192x192.png",revision:"8221edb9c270ae7a48f36011b4530f25"},{url:"/icons/Icon-384x384.png",revision:"1c844ef480f4110590cc01782783faa5"},{url:"/icons/Icon-512x512.png",revision:"374ebf53be505f632eeca6ec9c78c94f"},{url:"/icons/Icon-72x72.png",revision:"42c71a6df6ac2241d411ea05765a79a0"},{url:"/icons/Icon-96x96.png",revision:"1b9a0a65941aea0e47c96250e7c8ec18"},{url:"/icons/arrow1.svg",revision:"83cf130999e031a7d01a452eea1beef1"},{url:"/icons/arrow2.svg",revision:"64bbf39d889f7f6e74c3c16404b175f2"},{url:"/icons/arrow3.svg",revision:"45d58c98c32139463f4c749aee73aafe"},{url:"/icons/arrow4.svg",revision:"c17e91316af526d9ff6d3173f6dcb06b"},{url:"/icons/arrow5.svg",revision:"94d355b01d171ed5f69bb4b12509e64c"},{url:"/icons/contacts.svg",revision:"926544d8f210f7c3f78e84e35e3400f0"},{url:"/icons/edit.svg",revision:"5d5c13c65b97d2f7b0aab1b923ebceac"},{url:"/icons/home.svg",revision:"0bf48a1135b42d124279290eac599b60"},{url:"/icons/icons8-plus-64.png",revision:"266f6597ee069bda832a11be0d11a749"},{url:"/icons/person.svg",revision:"0537413e7294d0ded2e361b20af21081"},{url:"/icons/phone.svg",revision:"307d7e34c28437519c28705b39b6dccb"},{url:"/icons/plus-thin.svg",revision:"7f78556d1fb06b8569f7337824aefe36"},{url:"/icons/plus.svg",revision:"0a2c9a8bc155a08881e8703f83a69846"},{url:"/icons/search.svg",revision:"d836067c0e152896ba59239f99748430"},{url:"/icons/search2.svg",revision:"5b567719af40c2ad197ce21f040eb040"},{url:"/icons/sidebar-panel-expand.svg",revision:"a0863d6937b22e5ccc956f68600a836f"},{url:"/icons/x1.svg",revision:"e5e62321891d8f1145f9de716a75b60a"},{url:"/icons/x2.svg",revision:"a72acd2de62eae777ec2a14de1f8d00f"},{url:"/icons/x3.svg",revision:"28a03c737a20ddbf0de0754f49a4fce4"},{url:"/icons/x4.svg",revision:"9c4c2e660ea65aa4f956e5ac66b0e409"},{url:"/icons/x5.svg",revision:"d2597c34513d909f00e1087601c35f74"},{url:"/icons/x6.svg",revision:"9427a0b61e3fa6b93422c8517c3eca27"},{url:"/icons/x7.svg",revision:"540a3ddee6652a69e9da97ea67ceb122"},{url:"/images/add.png",revision:"e19b239515030b16be413f40c765c100"},{url:"/images/check.png",revision:"922fda624ba7509f6eee31a9b6c397ac"},{url:"/images/profile.jpg",revision:"5cf908697b562f97bda41eceb3307276"},{url:"/images/seamless-pattern-with-sewing-and-tailoring-stuff-sewing-machine-scissors-sewing-and-other-handicrafts-items-free-vector.jpg",revision:"12a06b742d6f9ab65a303e7668dc3ef9"},{url:"/images/seamless-pattern-with-sewing-and-tailoring-stuff-sewing-machine-scissors-sewing-and-other-handicrafts-items-free-vector2.jpg",revision:"0fb209ea44400ec97ca2e9ca24041cd6"},{url:"/images/seamless-pattern-with-sewing-and-tailoring-stuff-sewing-machine-scissors-sewing-and-other-handicrafts-items-free-vector3.jpg",revision:"3a9b8355b8993932d91de3a87ff0c218"},{url:"/images/seamless-pattern-with-sewing-and-tailoring-stuff-sewing-machine-scissors-sewing-and-other-handicrafts-items-free-vector4.jpg",revision:"012c0d553c13c604795fa98a498fbc88"},{url:"/images/seamless-pattern-with-sewing-and-tailoring-stuff-sewing-machine-scissors-sewing-and-other-handicrafts-items-free-vector5-1.jpg",revision:"93c665f13604c305ead884108b1c7607"},{url:"/images/seamless-pattern-with-sewing-and-tailoring-stuff-sewing-machine-scissors-sewing-and-other-handicrafts-items-free-vector5-2.jpg",revision:"66395df1c652e33e9b8ac1d9ff524528"},{url:"/images/seamless-pattern-with-sewing-and-tailoring-stuff-sewing-machine-scissors-sewing-and-other-handicrafts-items-free-vector5-5.jpg",revision:"4e0e11377ac5fd117e7daefffb6a3a89"},{url:"/images/seamless-pattern-with-sewing-and-tailoring-stuff-sewing-machine-scissors-sewing-and-other-handicrafts-items-free-vector5-7.jpg",revision:"c158f77d87170bd69968d95df96ca039"},{url:"/images/seamless-pattern-with-sewing-and-tailoring-stuff-sewing-machine-scissors-sewing-and-other-handicrafts-items-free-vector5.jpg",revision:"e13e38ca3d1052b8a53f4e5a5b7fc49c"},{url:"/images/seamless-pattern-with-sewing-and-tailoring-stuff-sewing-machine-scissors-sewing-and-other-handicrafts-items-free-vector55-5.jpg",revision:"1b2421124b4e52b8244bc6519baeb350"},{url:"/images/seamless-pattern-with-sewing-and-tailoring-stuff-sewing-machine-scissors-sewing-and-other-handicrafts-items-free-vector55-6.jpg",revision:"a00b38def44a4802a23bfe0660bb45be"},{url:"/images/sewing-and-tailor-vector-symbols.jpg",revision:"e10e498fe1039a197643edb07cda77ba"},{url:"/images/sewing-machine-silhouette-clip-art-4.png",revision:"f6cc2f4d8f8309e16af1f26e547e53bc"},{url:"/images/vector-set-of-tailoring.jpg",revision:"775e30611d4bde7a6b62afff42cf04d1"},{url:"/logo-128x128.png",revision:"8221edb9c270ae7a48f36011b4530f25"},{url:"/logo-512x512.png",revision:"374ebf53be505f632eeca6ec9c78c94f"},{url:"/manifest.json",revision:"5734c5e383542a63be78ed439edf08ac"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
