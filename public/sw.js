importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "css/style.css",
    "revision": "99559afa2b600e50f33cebcb12bd35e6"
  },
  {
    "url": "favicon.ico",
    "revision": "2ec6120d215494c24e7c808d0d5abf56"
  },
  {
    "url": "history.html",
    "revision": "fa4bab17ed8f01ef73fad137fa50c091"
  },
  {
    "url": "index.html",
    "revision": "a460728efcd7b58e5bcea7d7eca20a80"
  },
  {
    "url": "js/transpiled/history.js",
    "revision": "a9246962a7f7ab624e493b89bdab284b"
  },
  {
    "url": "js/transpiled/history.old.js",
    "revision": "f5d6af7aff37147b0c82043fe3153828"
  },
  {
    "url": "js/transpiled/index.js",
    "revision": "6584dc7f82d33ffa0151f633f4fcd7f8"
  },
  {
    "url": "js/transpiled/index.old.js",
    "revision": "3b5384eca25ad783829434ee190ecb58"
  },
  {
    "url": "js/transpiled/shared.1.js",
    "revision": "38039d6e28ad31c85c4adc0c4bab2dc9"
  },
  {
    "url": "js/transpiled/shared.js",
    "revision": "50ae8748065c52e18b0b7adfb4d82b1e"
  },
  {
    "url": "js/transpiled/shared.old.js",
    "revision": "38039d6e28ad31c85c4adc0c4bab2dc9"
  },
  {
    "url": "manifest.json",
    "revision": "f4850783fae8b37f26db86712c8b4505"
  },
  {
    "url": "resources/dialog-polyfill/dialog-polyfill.css",
    "revision": "24599b960cd01b8e5dd86eb5114a1bcb"
  },
  {
    "url": "resources/dialog-polyfill/dialog-polyfill.js",
    "revision": "a581e4aa2ea7ea0afd4b96833d2e527d"
  },
  {
    "url": "resources/mdl/material-icons.css",
    "revision": "35ac69ce3f79bae3eb506b0aad5d23dd"
  },
  {
    "url": "resources/mdl/material.indigo-pink.min.css",
    "revision": "6036fa3a8437615103937662723c1b67"
  },
  {
    "url": "resources/mdl/material.min.js",
    "revision": "713af0c6ce93dbbce2f00bf0a98d0541"
  },
  {
    "url": "resources/mdl/MaterialIcons-Regular.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "resources/system.js",
    "revision": "c6b00872dc6e21c1327c08b0ba55e275"
  },
  {
    "url": "/hoodie/client.js",
    "revision": "1d95959fa58dcb01884b0039bd16cc6d"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
