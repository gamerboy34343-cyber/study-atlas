/* Service worker for The Study Atlas — caches the app shell so it installs
   and reopens instantly, while leaving Supabase/API calls untouched (always
   go to the network; the app already handles being offline for those). */

const CACHE_VERSION = 'study-atlas-v3';

const PRECACHE_URLS = [
  './',
  'index.html',
  'manifest.json',
  'supabase-config.js',
  'auth.js',
  'profile.js',
  'mistakes.js',
  'review.js',
  'shop.js',
  'leaderboard.js',
  'adaptive.js',
  'studybot.js',
  'modules/curriculum.js',
  'modules/science_curriculum.js',
  'modules/hindi_curriculum.js',
  'modules/bb.js',
  'modules/cq.js',
  'modules/mr.js',
  'modules/co.js',
  'modules/gq.js',
  'modules/tq.js',
  'modules/no.js',
  'modules/sc.js',
  'modules/hi.js',
  'modules/cv.js',
  'modules/tr.js',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return; // never intercept writes

  const url = new URL(req.url);
  // Only handle same-origin app-shell files; everything else (Supabase,
  // the /api serverless functions, Google Fonts, pdf.js CDN) goes straight to the network.
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/')) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
