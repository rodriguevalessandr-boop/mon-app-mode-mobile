self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Indispensable pour que Chrome valide le Service Worker
  e.respondWith(fetch(e.request));
});