import type { SiteConfig } from '@/types';
import ExternalLink from '@/components/ui/ExternalLink';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Education({ site, number }: { site: SiteConfig; number: string }) {
  const { labels } = site;

  return (
    <section id="education" className="container-narrow scroll-mt-20 py-16 md:py-24">
      <SectionHeading number={number} title={labels.education.title} />

      <div className="grid gap-12 md:grid-cols-2">
        {site.education.length > 0 && (
          <Reveal>
            <h3 className="eyebrow mb-5">{labels.education.degrees}</h3>
            <ul className="divide-y divide-line">
              {site.education.map((item) => (
                <li key={`${item.institution}-${item.degree}`} className="py-4 first:pt-0">
                  <p className="font-medium">{item.degree}</p>
                  <p className="text-muted">
                    {item.url ? (
                      <ExternalLink href={item.url} className="link-underline">
                        {item.institution}
                      </ExternalLink>
                    ) : (
                      item.institution
                    )}
                    <span className="font-mono text-xs"> · {item.period}</span>
                  </p>
                  {item.detail && <p className="mt-1.5 text-sm text-muted">{item.detail}</p>}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <div className="space-y-12">
          {site.certifications.length > 0 && (
            <Reveal delay={0.05}>
              <h3 className="eyebrow mb-5">{labels.education.certifications}</h3>
              <ul className="divide-y divide-line">
                {site.certifications.map((cert) => (
                  <li key={cert.name} className="flex items-baseline justify-between gap-6 py-3 first:pt-0">
                    <div>
                      <p className="font-medium leading-snug">
                        {cert.url ? (
                          <ExternalLink href={cert.url} className="link-underline">
                            {cert.name}
                          </ExternalLink>
                        ) : (
                          cert.name
                        )}
                      </p>
                      <p className="text-sm text-muted">{cert.issuer}</p>
                    </div>
                    <span className="font-mono text-xs text-muted">{cert.year}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {site.languages.length > 0 && (
            <Reveal delay={0.1}>
              <h3 className="eyebrow mb-5">{labels.education.languages}</h3>
              <ul className="flex flex-wrap gap-x-8 gap-y-2">
                {site.languages.map((language) => (
                  <li key={language.name}>
                    <span className="font-medium">{language.name}</span>
                    <span className="text-muted"> · {language.level}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
