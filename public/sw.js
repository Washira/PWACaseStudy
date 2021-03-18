self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("video-store").then(function (cache) {
      return cache.addAll([
        "/index.html",
        "/index.js",
        "/style.css",
        "/images/b1.png",
        "/images/b2.png",
        "/images/b3.png",
        "/images/b4.png",
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
