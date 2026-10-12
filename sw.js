const CACHE_NAME='speakup-cache-20261013c';
const CORE_ASSETS=['./','./index.html','./style.css?v=20261013c','./improvements.css?v=20261013c','./helpers.js?v=20261013c','./bouquet.js?v=20261013c','./flower-cards.js?v=20261013c','./app.js?v=20261013c','./enhancements.js?v=20261013c','./word_bank.js?v=20261013c','./phonetics-data.js?v=20261013c','./iphone.js?v=20261013c','./practice-polish.js?v=20261013c','./roleplay-coach.js?v=20261013c','./paper-grain.svg','./floral-poppy.svg','./floral-cosmos.svg','./floral-daisy.svg','./manifest.json','./apple-touch-icon.jpg','./app-icon-512.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE_ASSETS))));
self.addEventListener('message',e=>{if(e.data?.type==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('speakup-cache-')&&k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const req=e.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 e.respondWith((async()=>{
   const cache=await caches.open(CACHE_NAME);
   // Warm visits and previously queried dictionary buckets never wait on the network.
   const cached=await cache.match(req);if(cached)return cached;
   if(req.mode==='navigate'){
     const home=await cache.match('./index.html');if(home)return home;
   }
   try{const res=await fetch(req);if(res.ok)e.waitUntil(cache.put(req,res.clone()));return res;}
   catch(err){return Response.error();}
 })());
});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{const c=list.find(c=>c.url.startsWith(self.registration.scope));return c?c.focus():self.clients.openWindow(self.registration.scope);}));});
