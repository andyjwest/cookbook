if (typeof importScripts === 'function') {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
    /* global workbox */
    if (workbox) {
        console.log('Workbox is loaded');
        workbox.core.skipWaiting();

        /* injection point for manifest files.  */
        workbox.precaching.precacheAndRoute([{"revision":"57f22cb5aabd30a883c54d999860dfac","url":"128x128.png"},{"revision":"852b46c1c2c62ba4fac10f022bf11127","url":"bread.png"},{"revision":"c7e3415df9a302fc758f70d38ad2785b","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"058efe9c2898316e3e3598bd40b2b184","url":"precache-manifest.058efe9c2898316e3e3598bd40b2b184.js"},{"revision":"ef8e0182c0c9a696f54ab1ff82e23b52","url":"service-worker.js"},{"revision":"3db847be78614e8ae2d9e1d15c92a63b","url":"static/css/main.fc8e7f7f.chunk.css"},{"revision":"3980dbe644fd058fee2a7c85338c2597","url":"static/js/2.870877fc.chunk.js"},{"revision":"83e6ffd051d290c3b04489090fbbdd9f","url":"static/js/main.43d3a4c4.chunk.js"},{"revision":"7e33373e247aa9cb870b69311a93e603","url":"static/js/runtime-main.0950bc75.js"}]);

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