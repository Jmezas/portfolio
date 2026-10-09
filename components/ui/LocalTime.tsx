'use client';

import { useEffect, useState } from 'react';

interface LocalTimeProps {
  timeZone: string;
  locale: string;
  label: string;
  className?: string;
}

function read(timeZone: string, locale: string) {
  const now = new Date();
  const time = new Intl.DateTimeFormat(locale, { timeZone, hour: '2-digit', minute: '2-digit', hour12: false }).format(now);
  const zone = new Intl.DateTimeFormat('en', { timeZone, timeZoneName: 'shortOffset' })
    .formatToParts(now)
    .find((part) => part.type === 'timeZoneName')?.value;
  return { time, zone: zone ?? '' };
}

/** Hora local de la persona. Se renderiza tras montar para evitar diferencias con el servidor. */
export default function LocalTime({ timeZone, locale, label, className = '' }: LocalTimeProps) {
  const [value, setValue] = useState<{ time: string; zone: string } | null>(null);

  useEffect(() => {
    const update = () => setValue(read(timeZone, locale));
    update();
    const id = window.setInterval(update, 15000);
    return () => window.clearInterval(id);
  }, [timeZone, locale]);

  if (!value) return null;

  return (
    <span
      className={`items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted ${className}`}
      title={`${label} · ${timeZone}`}
    >
      <span aria-hidden className="relative inline-flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      <span className="sr-only">{label} </span>
      <span suppressHydrationWarning>
        {value.time} {value.zone}
      </span>
    </span>
  );
}
