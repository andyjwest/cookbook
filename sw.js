if (typeof importScripts === 'function') {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
    /* global workbox */
    if (workbox) {
        console.log('Workbox is loaded');
        workbox.core.skipWaiting();

        /* injection point for manifest files.  */
        workbox.precaching.precacheAndRoute([{"revision":"57f22cb5aabd30a883c54d999860dfac","url":"128x128.png"},{"revision":"852b46c1c2c62ba4fac10f022bf11127","url":"bread.png"},{"revision":"927e29c321a86eb9050bf186b6c74a2f","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"c4e5d75760e0f4926226fbfb132622e5","url":"precache-manifest.c4e5d75760e0f4926226fbfb132622e5.js"},{"revision":"c793591d3c24da5585e6b73a928b5f4c","url":"service-worker.js"},{"revision":"3db847be78614e8ae2d9e1d15c92a63b","url":"static/css/main.fc8e7f7f.chunk.css"},{"revision":"3980dbe644fd058fee2a7c85338c2597","url":"static/js/2.870877fc.chunk.js"},{"revision":"6967ce064f543d7fcdf5cc15b7471b17","url":"static/js/main.5504264a.chunk.js"},{"revision":"a1571607eb7e038f9c995a5064d4dd2e","url":"static/js/runtime-main.fedb2a0c.js"}]);

        /* custom cache rules */
        workbox.routing.registerRoute(
            new workbox.routing.NavigationRoute(
                new workbox.strategies.NetworkFirst({
                    cacheName: 'PRODUCTION',
                })
            )
        );
    } else {
        console.log('Workbox could not be loaded. No Offline support');
    }
}