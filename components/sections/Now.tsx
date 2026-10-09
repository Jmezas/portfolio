import type { SiteConfig } from '@/types';
import { formatMonth } from '@/lib/format';
import Reveal from '@/components/ui/Reveal';

export default function Now({ site, number }: { site: SiteConfig; number: string }) {
  const { labels, meta } = site;
  if (!site.now) return null;

  return (
    <section id="now" className="container-narrow scroll-mt-20 py-16 md:py-20">
      <Reveal className="grid gap-6 border-t border-line pt-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-x-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div>
          <div className="flex items-baseline gap-4">
            <span className="eyebrow">{number}</span>
            <h2 className="font-serif text-4xl leading-none tracking-tight md:text-5xl">{labels.now.title}</h2>
          </div>
          <p className="mt-3 font-mono text-xs text-muted">
            {labels.now.updated} {formatMonth(site.now.updated, meta.locale).toLowerCase()}
          </p>
        </div>
        <ul className="dash-list space-y-3 text-[17px] leading-relaxed md:pt-2">
          {site.now.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
