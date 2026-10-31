const CACHE_NAME = 'kontak-wa-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Tahap Install: Simpan aset ke cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Tahap Fetch: Melayani aset lokal saat offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});