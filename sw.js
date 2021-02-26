if (typeof importScripts === 'function') {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
    /* global workbox */
    if (workbox) {
        console.log('Workbox is loaded');
        workbox.core.skipWaiting();

        /* injection point for manifest files.  */
        workbox.precaching.precacheAndRoute([{"revision":"57f22cb5aabd30a883c54d999860dfac","url":"128x128.png"},{"revision":"852b46c1c2c62ba4fac10f022bf11127","url":"bread.png"},{"revision":"96e7e9c2497086318e0d1252ee9be6dc","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"51c243193311f3ec4d45de4cbcf5fd5c","url":"precache-manifest.51c243193311f3ec4d45de4cbcf5fd5c.js"},{"revision":"8bd036657f0f8248a318d9bbb71cbd98","url":"service-worker.js"},{"revision":"a2506f7ca033e749f21c709aaa406af2","url":"static/css/main.1039b28d.chunk.css"},{"revision":"3980dbe644fd058fee2a7c85338c2597","url":"static/js/2.870877fc.chunk.js"},{"revision":"13584174e9d3eba392dc62d02684113e","url":"static/js/main.fdb9cb52.chunk.js"},{"revision":"a1571607eb7e038f9c995a5064d4dd2e","url":"static/js/runtime-main.fedb2a0c.js"}]);

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