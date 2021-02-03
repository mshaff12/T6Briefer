import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/desktop.css";
import "./css/animations.css";
import App from "./pages/App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js", { scope: "/" })
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

var CACHE_NAME = "my-pwa-cache-v1";
var urlsToCache = [
  "/",
  "/client/index.css",
  "/client/index.js",
  "/public/index.html",
  "/dist/bundle.js",
  "/bundle.js",
  "/dist/",
  "/dist",
  "/dist/index.html",
];
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // Open a cache and cache our files
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
