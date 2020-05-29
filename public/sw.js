const staticCacheName = 'static-files';
const assets = ['/', '/index.html', '/offline.html'];

// INSTALL SW
self.addEventListener('install', event => {
    console.log(self);
    self.skipWaiting();
    console.log(event);
    console.log('SW installed at: ', new Date().toLocaleTimeString());
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            cache.addAll(assets);
        })
    );
});

// ACTIVATE SW
self.addEventListener('activate', event => {
    self.skipWaiting();
    console.log(event);
    console.log('SW activated at: ', new Date().toLocaleTimeString());
});

// FETCH SW
self.addEventListener('fetch', event => {
    console.log("Fetch event for ", event.request.url);
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                console.log("RESPONSE: ", response);
                if (response) {
                    return response;
                } else {
                    return caches.match(new Request("offline.html"));
                } 
            })
        );
    } else {
        console.log("Online!")
        if (event.request.method === "GET") {
            return updateCache(event.request);
        } else {
            return fetch(event.request);
        }
    }
});

// Listens to push notification
self.addEventListener("push", event => {
    console.log("push");
    if (event.data) {
        createNotification(event.data.text());
    }
});

// Creates a notification with notification API
const createNotification = text => {
    self.registration.showNotification("This is a push notification", {
        body: text,
        icon: "./images/icons/icon192x192.png",
    });
};

// Updates Cache
function updateCache(request) {
    return fetch(request).then(response => {
        if (response) {
            return caches.open(staticCacheName).then(cache => {
                return cache.put(request, response.clone()).then(() => {
                    return response;
                });
            });
        }
    });
}
