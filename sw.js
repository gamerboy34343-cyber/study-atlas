/* Service worker for The Study Atlas — caches the app shell so it installs
   and reopens instantly, while leaving Supabase/API calls untouched (always
   go to the network; the app already handles being offline for those). */

const CACHE_VERSION = 'study-atlas-v37';

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
  'modules/lang.js',
  'modules/curriculum.js',
  'modules/curriculum_5.js',
  'modules/curriculum_6.js',
  'modules/curriculum_7.js',
  'modules/curriculum_9.js',
  'modules/curriculum_hi.js',
  'modules/curriculum_5_hi.js',
  'modules/curriculum_6_hi.js',
  'modules/curriculum_7_hi.js',
  'modules/science_curriculum.js',
  'modules/science_curriculum_5.js',
  'modules/science_curriculum_6.js',
  'modules/science_curriculum_7.js',
  'modules/science_curriculum_hi.js',
  'modules/science_curriculum_5_hi.js',
  'modules/science_curriculum_6_hi.js',
  'modules/science_curriculum_7_hi.js',
  'modules/hindi_curriculum.js',
  'modules/hindi_curriculum_5.js',
  'modules/hindi_curriculum_6.js',
  'modules/hindi_curriculum_7.js',
  'modules/bb.js',
  'modules/cq_hi.js',
  'modules/cq.js',
  'modules/mr_hi.js',
  'modules/mr.js',
  'modules/co_hi.js',
  'modules/co.js',
  'modules/gq_hi.js',
  'modules/gq.js',
  'modules/tq.js',
  'modules/no.js',
  'modules/sc.js',
  'modules/hi.js',
  'modules/cv_hi.js',
  'modules/cv.js',
  'modules/tr_hi.js',
  'modules/tr.js',
  'modules/tb_hi.js',
  'modules/tb.js',
  'modules/dk_hi.js',
  'modules/dk.js',
  'modules/ga_hi.js',
  'modules/ga.js',
  'modules/sg_hi.js',
  'modules/sg.js',
  'modules/gv_hi.js',
  'modules/gv.js',
  'modules/cm_hi.js',
  'modules/cm.js',
  'modules/tz_hi.js',
  'modules/tz.js',
  'modules/rb_hi.js',
  'modules/rb.js',
  'modules/uq_hi.js',
  'modules/uq.js',
  'modules/pq_hi.js',
  'modules/pq.js',
  'modules/wt_hi.js',
  'modules/wt.js',
  'modules/wq_hi.js',
  'modules/wq.js',
  'modules/hh_hi.js',
  'modules/hh.js',
  'modules/ii_hi.js',
  'modules/ii.js',
  'modules/et_hi.js',
  'modules/et.js',
  'modules/re_hi.js',
  'modules/re.js',
  'modules/poorvi_curriculum.js',
  'modules/poorvi_curriculum_5.js',
  'modules/poorvi_curriculum_6.js',
  'modules/poorvi_curriculum_7.js',
  'modules/pv.js',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  // Precache the new version, but stay in "waiting" until the page tells us
  // to take over — that's the signal the update-available prompt is built on.
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
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
