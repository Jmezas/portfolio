import type { SiteConfig } from '@/types';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Skills({ site, number }: { site: SiteConfig; number: string }) {
  const { labels } = site;

  return (
    <section id="skills" className="container-narrow scroll-mt-20 py-16 md:py-24">
      <SectionHeading number={number} title={labels.skills.title} intro={labels.skills.intro} />

      <dl className="divide-y divide-line border-y border-line">
        {site.skills.map((group, index) => (
          <Reveal key={group.label} delay={Math.min(index * 0.04, 0.2)}>
            <div className="grid gap-x-10 gap-y-2 py-5 md:grid-cols-[180px_minmax(0,1fr)] lg:grid-cols-[220px_minmax(0,1fr)]">
              <dt className="eyebrow pt-1">{group.label}</dt>
              <dd className="flex flex-wrap gap-x-4 gap-y-2 text-[15px] leading-relaxed">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
