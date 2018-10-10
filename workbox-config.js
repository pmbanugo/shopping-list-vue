module.exports = {
  globDirectory: "public/",
  globPatterns: ["**/*.{css,ico,html,png,js,json,woff2}"],
  swDest: "./public/sw.js",
  globIgnores: ["icons/*"],
  skipWaiting: true,
  clientsClaim: true,
  templatedUrls: {
    "/hoodie/client.js": "../.hoodie/cleint.js"
  }
};
