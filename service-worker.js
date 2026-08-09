const CACHE = "grocery-buddy-v1-7-4";
const ASSETS = ["./", "./index.html", "./styles.css?v=1.7.4", "./data.js?v=1.7.4", "./app.js?v=1.7.4", "./manifest.webmanifest", "./icon.svg", "./Grocery_to_Kroger_Shortcut_Setup.txt"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.mode === "navigate" || /\/(app\.js|data\.js|styles\.css)(\?|$)/.test(new URL(request.url).pathname + new URL(request.url).search)) {
    event.respondWith(fetch(request).then(response => {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(request, copy));
      return response;
    }).catch(() => caches.match(request).then(hit => hit || caches.match("./index.html"))));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(request, copy));
    return response;
  })));
});
