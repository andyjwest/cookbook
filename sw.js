if (typeof importScripts === 'function') {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
    /* global workbox */
    if (workbox) {
        console.log('Workbox is loaded');
        workbox.core.skipWaiting();

        /* injection point for manifest files.  */
        workbox.precaching.precacheAndRoute([{"revision":"57f22cb5aabd30a883c54d999860dfac","url":"128x128.png"},{"revision":"852b46c1c2c62ba4fac10f022bf11127","url":"bread.png"},{"revision":"04ab1824d756f22b3d0c244eb26cc4f5","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"0afcfcc8a8b94d3ca29c9cf2cecff649","url":"precache-manifest.0afcfcc8a8b94d3ca29c9cf2cecff649.js"},{"revision":"d44ea2cd6ab0aa60517e784b8b170463","url":"service-worker.js"},{"revision":"3db847be78614e8ae2d9e1d15c92a63b","url":"static/css/main.fc8e7f7f.chunk.css"},{"revision":"ac427ce723ba3eda92c76a760f780e51","url":"static/js/2.35f45f48.chunk.js"},{"revision":"1bde53b3ac9f226b58f885e5b5893b5e","url":"static/js/main.a3211589.chunk.js"},{"revision":"a1571607eb7e038f9c995a5064d4dd2e","url":"static/js/runtime-main.fedb2a0c.js"}]);

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