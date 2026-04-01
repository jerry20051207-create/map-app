const CACHE_NAME = 'map-routes-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets).catch(() => {
        // 即使部分資源加載失敗，也繼續安裝
        console.log('Some assets could not be cached');
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 跳過非 GET 請求和外部域名的大型請求
  if (request.method !== 'GET') {
    return;
  }

  // 對於外部資源（如 OSM 瓦片、OSRM API），使用網路優先策略
  if (url.hostname !== location.hostname) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, response.clone());
            return response;
          });
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // 本地資源使用快取優先策略
  event.respondWith(
    caches.match(request).then((response) => {
      return response || fetch(request).then((response) => {
        if (!response || response.status !== 200) {
          return response;
        }
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, response.clone());
          return response;
        });
      });
    })
  );
});
