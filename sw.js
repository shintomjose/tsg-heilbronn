/* Service Worker — Team 4 (SG Heilbronn/Leingarten)
 *
 * Strategies (no build step, no hashed filenames):
 *  - own HTML/CSS/JS:           network-first  → updates land immediately, offline from cache
 *  - icons/:                    cache-first    → practically never change
 *  - CDN (Firebase SDK, fonts): stale-while-revalidate
 *  - Firebase RTDB / Auth:      network-only (passthrough)
 */
"use strict";

const VERSION = "v2";
const SHELL_CACHE = `shell-${VERSION}`;
const ICON_CACHE = `icons-${VERSION}`;
const CDN_CACHE = `cdn-${VERSION}`;
const ALL_CACHES = [SHELL_CACHE, ICON_CACHE, CDN_CACHE];

const ICON_CACHE_MAX = 40;

const PRECACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./standings.js",
  "./pwa.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

const CDN_HOSTS = [
  "www.gstatic.com",          // Firebase SDK
  "fonts.googleapis.com",     // font CSS
  "fonts.gstatic.com",        // font files
];

const NETWORK_ONLY_HOSTS = [
  "firebasedatabase.app",
  "firebaseio.com",
  "identitytoolkit.googleapis.com",
  "securetoken.googleapis.com",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(PRECACHE))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => !ALL_CACHES.includes(k)).map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

/* tap on a Verfügbarkeit notification: focus or open the app */
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) if ("focus" in c) return c.focus();
      return self.clients.openWindow("./#termine");
    })
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  if (NETWORK_ONLY_HOSTS.some((h) => url.hostname.endsWith(h))) return;

  if (url.origin === self.location.origin) {
    if (url.pathname.includes("/icons/")) {
      event.respondWith(cacheFirst(req, ICON_CACHE, ICON_CACHE_MAX));
    } else {
      event.respondWith(networkFirst(req, SHELL_CACHE));
    }
    return;
  }

  if (CDN_HOSTS.includes(url.hostname)) {
    event.respondWith(staleWhileRevalidate(req, CDN_CACHE));
  }
});

async function networkFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    if (fresh.ok) cache.put(req, fresh.clone());
    return fresh;
  } catch (err) {
    const cached = await cache.match(req, { ignoreSearch: true });
    if (cached) return cached;
    // navigation offline with no cache hit → app shell
    if (req.mode === "navigate") {
      const shell = await cache.match("./index.html");
      if (shell) return shell;
    }
    throw err;
  }
}

async function cacheFirst(req, cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  if (cached) return cached;
  const fresh = await fetch(req);
  if (fresh.ok) {
    await cache.put(req, fresh.clone());
    trimCache(cache, maxEntries); // deliberately not awaited
  }
  return fresh;
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  const refresh = fetch(req)
    .then((fresh) => {
      if (fresh.ok) cache.put(req, fresh.clone());
      return fresh;
    })
    .catch(() => null);
  return cached || refresh.then((r) => {
    if (r) return r;
    throw new Error("offline, kein Cache: " + req.url);
  });
}

async function trimCache(cache, maxEntries) {
  const keys = await cache.keys();
  if (keys.length <= maxEntries) return;
  // FIFO is good enough here — keys are in insertion order
  for (const key of keys.slice(0, keys.length - maxEntries)) {
    await cache.delete(key);
  }
}
