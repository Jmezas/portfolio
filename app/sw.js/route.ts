export const dynamic = 'force-static';

/**
 * Service worker generado en el build. Lleva el BUILD_ID dentro: cada publicación
 * cambia el archivo, el navegador instala la versión nueva y limpia las cachés viejas.
 */
const script = `/* Portafolio · service worker · build ${process.env.NEXT_PUBLIC_BUILD_ID} */
const VERSION = '${process.env.NEXT_PUBLIC_BUILD_ID}';
const SHELL = 'shell-' + VERSION;
const RUNTIME = 'runtime-' + VERSION;
const PRECACHE = ['/', '/offline'];
const STATIC = /\\.(?:png|jpe?g|webp|avif|gif|svg|ico|woff2?|ttf|pdf|css|js)$/i;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== SHELL && key !== RUNTIME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

function isStatic(url) {
  return (
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.startsWith('/_next/image') ||
    url.pathname.startsWith('/icon') ||
    url.pathname.startsWith('/apple-icon') ||
    STATIC.test(url.pathname)
  );
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname === '/version' || url.pathname === '/sw.js') return;

  // Páginas: red primero, caché como respaldo, página offline al final.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(SHELL).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => (await caches.match(request)) || (await caches.match('/')) || caches.match('/offline')),
    );
    return;
  }

  // Estáticos: caché primero y actualización en segundo plano.
  if (isStatic(url)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const network = fetch(request)
          .then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches.open(RUNTIME).then((cache) => cache.put(request, copy));
            }
            return response;
          })
          .catch(() => cached);
        return cached || network;
      }),
    );
  }
});
`;

export function GET() {
  return new Response(script, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Service-Worker-Allowed': '/',
    },
  });
}
