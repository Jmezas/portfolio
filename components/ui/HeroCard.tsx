import type { SiteConfig } from '@/types';
import { yearsOfExperience } from '@/lib/format';
import LocalTime from '@/components/ui/LocalTime';

/** Ficha con datos reales calculados desde el contenido. Nada inventado. */
export default function HeroCard({ site }: { site: SiteConfig }) {
  const { labels, person, meta } = site;
  const years = yearsOfExperience(site.experience);
  const companies = new Set(site.experience.map((job) => job.company)).size;
  const technologies = new Set(site.skills.flatMap((group) => group.items)).size;

  const rows: Array<{ key: string; value: React.ReactNode }> = [];
  if (years > 0) rows.push({ key: labels.card.years, value: `${years}+ ${labels.hero.years}` });
  if (companies > 0) rows.push({ key: labels.card.companies, value: String(companies) });
  if (site.projects.length > 0) rows.push({ key: labels.card.projects, value: String(site.projects.length) });
  if (technologies > 0) rows.push({ key: labels.card.technologies, value: `${technologies}+` });
  rows.push({
    key: labels.card.location,
    value: (
      <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
        {person.location}
        {person.timeZone && (
          <LocalTime timeZone={person.timeZone} locale={meta.locale} label={labels.hero.localTime} className="inline-flex normal-case tracking-normal" />
        )}
      </span>
    ),
  });
  if (person.availability) {
    rows.push({
      key: labels.card.status,
      value: <span className="text-accent">{person.availability}</span>,
    });
  }

  return (
    <div className="hero-card">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-2 font-mono text-[11px] text-muted">{labels.card.title}.json</span>
      </div>
      <dl className="space-y-3 px-4 py-4 font-mono text-[13px] leading-relaxed">
        {rows.map((row) => (
          <div key={row.key} className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3">
            <dt className="text-muted">
              {row.key}
              <span className="text-line">:</span>
            </dt>
            <dd className="min-w-0 break-words">{row.value}</dd>
          </div>
        ))}
        <div className="pt-1 text-muted" aria-hidden>
          <span className="cursor-blink">▍</span>
        </div>
      </dl>
    </div>
  );
}
