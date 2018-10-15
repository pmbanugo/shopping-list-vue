/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/style.css",
    "revision": "291a7a8e7ccb8134fc571d2f9b9d7f7c"
  },
  {
    "url": "favicon.ico",
    "revision": "2ec6120d215494c24e7c808d0d5abf56"
  },
  {
    "url": "history.html",
    "revision": "723688a0e7839619d9c87544086d11bf"
  },
  {
    "url": "index.html",
    "revision": "f091595a5a8b38a92783077f9974bd35"
  },
  {
    "url": "js/history.js",
    "revision": "ed6f6d7a0416451ed15b3da1707d7d9a"
  },
  {
    "url": "js/index.js",
    "revision": "24e6f2dd0dc45090eff8f0152a85ce9b"
  },
  {
    "url": "js/shared.js",
    "revision": "cc607d8d4b61d3ef7b7428372ddb76ed"
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
    "url": "resources/vue@2.5.16.js",
    "revision": "cbe2b9b2fb6955decf033515d079e44b"
  },
  {
    "url": "/hoodie/client.js",
    "revision": "58d56aa9048b355d31e3c3e6f5d64e83"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
