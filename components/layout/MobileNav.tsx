'use client';

import { useEffect, useState } from 'react';
import { Briefcase, GraduationCap, Home, Layers, Mail, Sparkles, Wrench } from 'lucide-react';

interface MobileNavProps {
  items: { key: string; href: string; label: string }[];
}

const ICONS = {
  top: Home,
  now: Sparkles,
  experience: Briefcase,
  projects: Layers,
  skills: Wrench,
  education: GraduationCap,
  contact: Mail,
} as const;

/** Barra inferior para teléfonos: las secciones principales siempre a un toque. */
export default function MobileNav({ items }: MobileNavProps) {
  const [active, setActive] = useState(items[0]?.key ?? 'top');

  useEffect(() => {
    const targets = items.map((item) => document.getElementById(item.key)).filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0, 0.2, 0.5] },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Secciones" className="mobile-tabbar md:hidden">
      {items.map((item) => {
        const Icon = ICONS[item.key as keyof typeof ICONS] ?? Layers;
        const current = active === item.key;
        return (
          <a key={item.key} href={item.href} aria-current={current ? 'location' : undefined} className={`mobile-tab ${current ? 'is-active' : ''}`}>
            <Icon size={20} strokeWidth={1.75} aria-hidden />
            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
