---
---
/**
 * ServiceWorker to cache pages to make them accesible offline
 * 
 * Note: The service worker (i.e. this file) must be registered before the 
 * resources that it intends to cache are loaded (via fetch).
 * 
 * Note: The URLs to be cached must be whitelisted in Content-Security-Policy
 * header under connect-src since they are proxied through here, i.e. from script.
 */
var urlsToCache = [];

{% for page in site.pages %}
{% if page.permalink %}
urlsToCache.push("{{ page.permalink }}");
{% elsif page.url %}
urlsToCache.push("{{ page.url }}");
{% endif %}
{% endfor %}

var CACHE_NAME = '{{ site.title | slugify }}-cache-v1'

self.addEventListener('message', function (event) {
    if (event.data === 'appinstalled') {
        event.waitUntil(
            caches.open(CACHE_NAME).then(function (cache) {
                return cache.addAll(urlsToCache)
            }).then(function () {
                return event.ports[0].postMessage('done')
            }).catch(function (error) {
                return error
            }))
    }
})


// Cache-then-update strategy
// From https://serviceworke.rs/strategy-cache-and-update_service-worker_doc.html
self.addEventListener('fetch', function (event) {
    if (event.request.method !== 'GET') {
        return
    }
    event.respondWith(
        caches.match(event.request) // hit cache first
            .then(function (cached) {
                if (navigator.onLine) { // attempt update
                    var networked = fetch(event.request)
                        .then(fetchedFromNetwork, unableToResolve)
                        .catch(unableToResolve)
                    return cached || networked
                }
                return cached

                function fetchedFromNetwork(response) {
                    //if (response.ok) {
                    //    var cacheCopy = response.clone()
                    //    caches.open(CACHE_NAME)
                    //        .then(function add(cache) {
                    //            cache.put(event.request, cacheCopy) // successful update: refresh cache
                    //        })
                    //}
                    return response
                }

                function unableToResolve() {
                    console.log('Unable to resolve')
                    return new Response('Service Unavailable', {
                        status: 503,
                    })
                }
            })
            .catch(function(error) {
                console.error('Error: ' + errorr)
            })
    )
})

// Delete stale caches when CACHE_NAME changes
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys()
            .then(function (keys) {
                return Promise.all(
                    keys.filter(function (key) {
                        return !key.startsWith(CACHE_NAME)
                    })
                        .map(function (key) {
                            return caches.delete(key)
                        })
                )
            })
    )
})
