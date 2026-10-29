'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUp, Download, X } from 'lucide-react';
import type { Labels } from '@/types';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const DISMISS_KEY = 'pwa-install-dismissed';
const DISMISS_DAYS = 30;
const CHECK_INTERVAL = 60_000;
const BUILD_ID = process.env.NEXT_PUBLIC_BUILD_ID;

/**
 * Registra el service worker, detecta versiones nuevas y recarga sola la página,
 * ofrece instalar la app y muestra el botón "volver arriba".
 */
export default function PwaRegister({ labels }: { labels: Labels['pwa'] }) {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstall, setShowInstall] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [updating, setUpdating] = useState(false);
  const reloading = useRef(false);

  // Recarga una sola vez, y solo cuando la pestaña está visible.
  const reload = () => {
    if (reloading.current) return;
    reloading.current = true;
    setUpdating(true);
    const go = () => window.setTimeout(() => window.location.reload(), 600);
    if (document.visibilityState === 'visible') go();
    else document.addEventListener('visibilitychange', () => document.visibilityState === 'visible' && go(), { once: true });
  };

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;

    let registration: ServiceWorkerRegistration | undefined;

    // 1. Service worker: cuando uno nuevo reemplaza al anterior, recargar.
    //    En la primera visita no hay controlador previo: no se recarga.
    if ('serviceWorker' in navigator) {
      const hadController = Boolean(navigator.serviceWorker.controller);
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (hadController) reload();
      });
      navigator.serviceWorker
        .register('/sw.js', { scope: '/', updateViaCache: 'none' })
        .then((reg) => {
          registration = reg;
          if (reg.waiting) reg.waiting.postMessage('SKIP_WAITING');
          reg.addEventListener('updatefound', () => {
            const worker = reg.installing;
            worker?.addEventListener('statechange', () => {
              if (worker.state === 'installed' && navigator.serviceWorker.controller) worker.postMessage('SKIP_WAITING');
            });
          });
        })
        .catch(() => {});
    }

    // 2. Sondeo de /version: cubre el caso en que el navegador aún no revisó sw.js.
    const check = async () => {
      if (document.visibilityState !== 'visible' || !navigator.onLine) return;
      registration?.update().catch(() => {});
      try {
        const res = await fetch('/version', { cache: 'no-store' });
        if (!res.ok) return;
        const data = (await res.json()) as { build?: string };
        if (data.build && BUILD_ID && data.build !== BUILD_ID) reload();
      } catch {
        /* sin red: se reintenta en el próximo ciclo */
      }
    };
    const timer = window.setInterval(check, CHECK_INTERVAL);
    const onVisible = () => document.visibilityState === 'visible' && check();
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('focus', check);
    window.addEventListener('online', check);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('focus', check);
      window.removeEventListener('online', check);
    };
  }, []);

  useEffect(() => {
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true;
    if (standalone) return;

    let dismissedAt = 0;
    try {
      dismissedAt = Number(localStorage.getItem(DISMISS_KEY) ?? 0);
    } catch {
      /* almacenamiento bloqueado */
    }
    const recentlyDismissed = Date.now() - dismissedAt < DISMISS_DAYS * 24 * 60 * 60 * 1000;

    const onPrompt = (event: Event) => {
      event.preventDefault();
      if (recentlyDismissed) return;
      setInstallEvent(event as BeforeInstallPromptEvent);
      window.setTimeout(() => setShowInstall(true), 6000);
    };
    const onInstalled = () => setShowInstall(false);

    window.addEventListener('beforeinstallprompt', onPrompt);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dismiss = () => {
    setShowInstall(false);
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      /* almacenamiento bloqueado */
    }
  };

  const install = async () => {
    if (!installEvent) return;
    await installEvent.prompt();
    const { outcome } = await installEvent.userChoice;
    if (outcome === 'accepted') setShowInstall(false);
    else dismiss();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={labels.backToTop}
        title={labels.backToTop}
        className={`back-to-top ${showTop ? 'is-visible' : ''}`}
      >
        <ArrowUp size={18} strokeWidth={1.75} />
      </button>

      {updating && (
        <div role="status" aria-live="polite" className="install-banner">
          <span aria-hidden className="relative inline-flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <p className="text-sm leading-snug">{labels.updating}</p>
        </div>
      )}

      {showInstall && installEvent && !updating && (
        <div role="dialog" aria-label={labels.install} className="install-banner">
          <p className="text-sm leading-snug">{labels.installHint}</p>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={install}
              className="btn-press inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg"
            >
              <Download size={14} strokeWidth={1.75} aria-hidden />
              {labels.install}
            </button>
            <button
              type="button"
              onClick={dismiss}
              aria-label={labels.dismiss}
              title={labels.dismiss}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted"
            >
              <X size={14} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
