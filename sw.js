/*
  Speak Up 開口練習 - Service Worker
  用途:
  1. 提供離線快取,沒網路時系統題庫仍可開啟練習(AI/新聞/角色扮演等需要連網的功能不受影響,一律直接走網路)。
  2. 讓「每日練習提醒」可以用 registration.showNotification() 在背景跳出通知。

  注意:這只是純前端網站的 Service Worker,並沒有串接真正的 Web Push 伺服器(VAPID)。
  也就是說,提醒通知只能在瀏覽器/已安裝的 PWA 還留在背景執行時才會跳出來;
  如果使用者把瀏覽器整個關掉,是不會收到通知的——這是純前端網站在沒有後端伺服器狀況下的能力上限。
*/

const CACHE_NAME = 'speakup-cache-v1';
const CORE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './word_bank.js',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .catch(() => {}) // 個別檔案抓不到也不要讓整個安裝失敗
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  // 只快取 GET 請求;POST/PATCH(例如 GitHub Gist 同步、AI 生成)一律直接走網路,不要被快取邏輯攔截
  if(req.method !== 'GET') return;
  // 只快取同源(自己網站)的檔案,BBC 新聞、Gemini AI、GitHub API 等第三方請求不快取,確保永遠拿到最新資料
  const isSameOrigin = req.url.startsWith(self.location.origin);
  if(!isSameOrigin) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      const networkFetch = fetch(req)
        .then((res) => {
          if(res && res.ok){
            const resClone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          }
          return res;
        })
        .catch(() => cached); // 沒網路就退回快取
      return cached || networkFetch;
    })
  );
});

// 點擊通知時,把使用者帶回(或聚焦到)網站分頁
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for(const client of clientList){
        if('focus' in client) return client.focus();
      }
      if(self.clients.openWindow) return self.clients.openWindow('./');
    })
  );
});
