import type { SiteConfig } from '@/types';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Testimonials({ site, number }: { site: SiteConfig; number: string }) {
  const { labels } = site;

  return (
    <section id="testimonials" className="container-narrow scroll-mt-20 py-16 md:py-24">
      <SectionHeading number={number} title={labels.testimonials.title} />

      <ul className="grid gap-5 md:grid-cols-2">
        {site.testimonials.map((item, index) => (
          <Reveal as="li" key={`${item.name}-${index}`} delay={Math.min(index * 0.05, 0.2)} className="flex">
            <figure className="flex w-full flex-col rounded-xl border border-line bg-elev p-6 md:p-7">
              <blockquote className="font-serif text-xl leading-snug tracking-tight md:text-2xl">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-6 text-sm">
                <p className="font-medium">{item.name}</p>
                <p className="text-muted">
                  {item.role}
                  {item.company && ` · ${item.company}`}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
