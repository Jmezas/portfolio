'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import LocalTime from '@/components/ui/LocalTime';
import ThemeToggle from '@/components/ui/ThemeToggle';
import type { Labels } from '@/types';

interface HeaderProps {
  name: string;
  items: { href: string; label: string }[];
  labels: Labels['a11y'];
  clock?: { timeZone: string; locale: string; label: string };
}

export default function Header({ name, items, labels, clock }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Menú abierto: bloquea el scroll del fondo y cierra con Escape o al crecer la pantalla.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    const media = window.matchMedia('(min-width: 768px)');
    const onResize = () => media.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    media.addEventListener('change', onResize);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
      media.removeEventListener('change', onResize);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md transition-colors ${
        scrolled || open ? 'header-surface border-b border-line' : 'border-b border-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="container-narrow flex h-16 items-center justify-between">
        <div className="flex items-center gap-5">
          <a href="#top" className="font-serif text-xl tracking-tight" onClick={() => setOpen(false)}>
            {name}
          </a>
          {clock && (
            <LocalTime
              timeZone={clock.timeZone}
              locale={clock.locale}
              label={clock.label}
              className="hidden lg:inline-flex"
            />
          )}
        </div>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="nav-link text-sm text-muted transition-colors hover:text-fg">
              {item.label}
            </a>
          ))}
          <ThemeToggle label={labels.toggleTheme} />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle label={labels.toggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? labels.closeMenu : labels.openMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted hover:text-fg"
          >
            {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open &&
        mounted &&
        createPortal(
        <nav
          id="mobile-nav"
          aria-label="Principal"
          className="mobile-nav header-surface fixed inset-x-0 bottom-0 z-30 overflow-y-auto border-t border-line backdrop-blur-md md:hidden"
          style={{ top: 'calc(4rem + env(safe-area-inset-top))' }}
        >
          <ul className="container-narrow flex flex-col pb-[max(2rem,env(safe-area-inset-bottom))] pt-2">
            {items.map((item, index) => (
              <li key={item.href} style={{ animationDelay: `${index * 40}ms` }} className="mobile-nav-item">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-line py-4 font-serif text-3xl text-fg"
                >
                  <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>,
          document.body,
        )}
    </header>
  );
}
