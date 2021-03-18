self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("video-store").then(function (cache) {
      return cache.addAll([
        "/index.html",
        "/index.js",
        "/style.css",
        "/images/b1.jpg",
        "/images/b2.jpg",
        "/images/b3.jpg",
        "/images/b4.jpg",
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
