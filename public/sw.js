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
    "revision": "99559afa2b600e50f33cebcb12bd35e6"
  },
  {
    "url": "favicon.ico",
    "revision": "2ec6120d215494c24e7c808d0d5abf56"
  },
  {
    "url": "history.html",
    "revision": "43b5bbbdf13657a75ad8344edc353414"
  },
  {
    "url": "index.html",
    "revision": "b7c12d2eaf3fea78724f4bd8704537f6"
  },
  {
    "url": "js/history.js",
    "revision": "4b72f57010e65fdbe5ed6371ce3b3457"
  },
  {
    "url": "js/index.js",
    "revision": "01a420e6b4cbabcfd949cacddb5aa3c1"
  },
  {
    "url": "js/shared.js",
    "revision": "341e90bbcf10302227dfd497981748e3"
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
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
