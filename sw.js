const CACHE = 'buddh-v19';
const ASSETS = [
  '/',
  '/index.html',
  '/work.html',
  '/about.html',
  '/manifest.json',
  '/favicon.svg',
  '/icons/icon-32.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/images/hero-rankwatch.svg',
  '/images/hero-websignals.svg',
  '/images/hero-kockpit.svg',
  '/images/hero-knovelo.svg',
  '/images/hero-locatr.svg',
  '/images/elite60/logo-screen.jpg',
  '/images/elite60/splash.jpg',
  '/images/elite60/home.jpg',
  '/images/elite60/workout.jpg',
  '/images/elite60/progress-standard.jpg',
  '/images/elite60/progress-goals.jpg',
  '/images/elite60/progress-athletics.jpg',
  '/images/elite60/plans.jpg',
  '/images/elite60/gps-goal.jpg',
  '/images/elite60/gps-live.jpg',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Instrument+Serif:ital@0;1&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200 || res.type === 'opaque') return res;
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match('/index.html'));
    })
  );
});
