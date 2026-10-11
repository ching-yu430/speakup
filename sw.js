const CACHE_NAME='speakup-cache-20261011g';
const CORE_ASSETS=['./','./index.html','./style.css?v=20261011g','./improvements.css?v=20261011g','./helpers.js?v=20261011g','./app.js?v=20261011g','./enhancements.js?v=20261011g','./word_bank.js?v=20261011g','./phonetics-data.js?v=20261011g','./iphone.js?v=20261011g','./manifest.json','./apple-touch-icon.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE_ASSETS))));
self.addEventListener('message',e=>{if(e.data?.type==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('speakup-cache-')&&k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const req=e.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 e.respondWith((async()=>{const cache=await caches.open(CACHE_NAME);const cached=await cache.match(req);
 const net=fetch(req).then(res=>{if(res.ok)e.waitUntil(cache.put(req,res.clone()));return res;});
 if(req.mode==='navigate'){try{return await net;}catch(err){return cached||await cache.match('./index.html')||Response.error();}}
 if(cached){e.waitUntil(net.catch(()=>{}));return cached;}try{return await net;}catch(err){return Response.error();}
 })());
});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{const c=list.find(c=>c.url.startsWith(self.registration.scope));return c?c.focus():self.clients.openWindow(self.registration.scope);}));});
