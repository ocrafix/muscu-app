self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('muscu-cache-v1').then(cache => {
      return cache.addAll([
        './bdc.html',
        './cardio.html',
        './corps.html',
        './etirements.html',
        './fb.html',
        './hdc.html',
        './index.html',
        './manifest.json',
        './repos.hmtl',
        './style.css',
        './stylebdc.css',
        './stylec.css',
        './stylecardio.css',
        './styleetirement.css',
        './stylefb.css',
        './stylehdc.css',
        './stylerepos.css',
        './velo.css',
        './velo.html',
        './velo.js',
        'icons/icon-512.png',
        'icons/icon-192.png'
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