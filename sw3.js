this.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('offline').then(function(cache) {
			return cache.addAll([
				'/',
				'/index.htm',
				'/index_files',
				'/main.js',
				'/sw3.js'
			]);
		})
	);
});

this.addEventListener('fetch', function(event) {
  var response;
  event.respondWith(caches.match(event.request).catch(function() {
    return fetch(event.request);
  }).then(function(r) {
    response = r;
    caches.open('offline').then(function(cache) {
      cache.put(event.request, response);
    });
    return response.clone();
  }));
});