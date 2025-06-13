self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('muscu-cache-v1').then(cache => {
      return cache.addAll([
        './index.html',
        './style.css',
        './hdc.html',
        './stylehdc.css',
        './bdc.html',
        './stylebdc.css',
        './cardio.html',
        './stylecardio.css',
        './corps.html',
        './stylec.css',
        './repos.hmtl',
        './stylerepos.css',
        './manifest.json',
        './icon-600.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
