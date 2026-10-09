'use client';

import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md transition-colors ${
        scrolled || open ? 'header-surface border-b border-line' : 'border-b border-transparent'
      }`}
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted hover:text-fg"
          >
            {open ? <X size={16} strokeWidth={1.75} /> : <Menu size={16} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Principal" className="container-narrow border-t border-line pb-6 pt-3 md:hidden">
          <ul className="flex flex-col">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3 font-serif text-2xl text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
