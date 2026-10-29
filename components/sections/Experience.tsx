import type { SiteConfig } from '@/types';
import { formatPeriod } from '@/lib/format';
import ExternalLink from '@/components/ui/ExternalLink';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Collapsible from '@/components/ui/Collapsible';
import ShowMore from '@/components/ui/ShowMore';

export default function Experience({ site, number }: { site: SiteConfig; number: string }) {
  const { labels, meta } = site;

  return (
    <section id="experience" className="container-narrow scroll-mt-20 py-12 md:py-24">
      <SectionHeading number={number} title={labels.experience.title} />

      <ShowMore
        as="ol"
        className="divide-y divide-line"
        initial={3}
        mdDisplay="md:block"
        showMore={labels.experience.showMore}
        showLess={labels.experience.showLess}
      >
        {site.experience.map((job, index) => (
          <Reveal as="li" key={job.id} delay={Math.min(index * 0.04, 0.2)} className="py-7 first:pt-0 last:pb-0 md:py-9">
            <article className="grid gap-x-10 gap-y-3 md:grid-cols-[180px_minmax(0,1fr)] lg:grid-cols-[220px_minmax(0,1fr)]">
              <header className="font-mono text-xs leading-6 text-muted">
                <time>{formatPeriod(job, meta.locale, labels.experience.present)}</time>
                {job.location && <p>{job.location}</p>}
              </header>

              <div>
                <h3 className="text-lg font-medium leading-snug md:text-xl">{job.role}</h3>
                <p className="mt-1 text-muted">
                  {job.url ? (
                    <ExternalLink href={job.url} className="link-underline">
                      {job.company}
                    </ExternalLink>
                  ) : (
                    job.company
                  )}
                </p>

                {job.summary && <p className="mt-3 max-w-prose text-fg md:mt-4">{job.summary}</p>}

                <Collapsible show={labels.experience.showHighlights} hide={labels.experience.hideHighlights}>
                  <ul className="dash-list mt-4 max-w-prose space-y-2.5 text-[15px] leading-relaxed text-fg">
                    {job.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  {job.stack && job.stack.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={labels.experience.stack}>
                      {job.stack.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                </Collapsible>
              </div>
            </article>
          </Reveal>
        ))}
      </ShowMore>
    </section>
  );
}
