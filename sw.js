// 離線快取。更新網頁內容後把版本號加一，使用者下次開啟就會換成新版。
const CACHE = 'toeic-quiz-v2';
const ASSETS = [
  './',
  'index.html',
  'words.js',
  'manifest.webmanifest',
  'sample.csv',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

// 先用快取（離線也能開），同時在背景向網路抓新版更新快取
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(event.request, { ignoreSearch: true });
      const network = fetch(event.request)
        .then(res => {
          if (res.ok && new URL(event.request.url).origin === location.origin) {
            cache.put(event.request, res.clone());
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
