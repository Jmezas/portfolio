import type { SiteConfig } from '@/types';
import { phoneDigits } from '@/lib/format';
import ExternalLink from '@/components/ui/ExternalLink';
import Reveal from '@/components/ui/Reveal';

export default function Contact({ site, number }: { site: SiteConfig; number: string }) {
  const { labels, person } = site;

  return (
    <section id="contact" className="container-narrow scroll-mt-20 py-16 md:py-28">
      <Reveal className="border-t border-line pt-6">
        <span className="eyebrow">{number}</span>
      </Reveal>

      <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Reveal delay={0.05}>
          <h2 className="font-serif text-5xl leading-[0.98] tracking-tight md:text-6xl">{labels.contact.title}</h2>
          <p className="mt-6 max-w-prose text-base text-muted md:text-lg">{labels.contact.text}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="space-y-7">
            <div>
              <dt className="eyebrow">{labels.contact.email}</dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${person.email}`}
                  className="link-underline break-all font-serif text-2xl tracking-tight md:text-3xl"
                >
                  {person.email}
                </a>
              </dd>
            </div>

            {person.phone && (
              <div>
                <dt className="eyebrow">{labels.contact.phone}</dt>
                <dd className="mt-2">
                  <a href={`tel:${phoneDigits(person.phone)}`} className="link-underline font-mono text-lg">
                    {person.phone}
                  </a>
                </dd>
              </div>
            )}

            {site.socials.length > 0 && (
              <div>
                <dt className="eyebrow">{labels.contact.elsewhere}</dt>
                <dd className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                  {site.socials.map((social) => (
                    <ExternalLink
                      key={social.url}
                      href={social.url}
                      className="link-underline"
                      srHint={labels.a11y.externalLink}
                    >
                      {social.label}
                    </ExternalLink>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
