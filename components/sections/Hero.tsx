import Image from 'next/image';
import { ArrowDownToLine, Mail } from 'lucide-react';
import type { SiteConfig } from '@/types';
import { cvFileName, formatCoordinates, yearsOfExperience } from '@/lib/format';
import Backdrop from '@/components/ui/Backdrop';
import ExternalLink from '@/components/ui/ExternalLink';
import HeroCard from '@/components/ui/HeroCard';
import Marquee from '@/components/ui/Marquee';
import Reveal from '@/components/ui/Reveal';
import Scribble from '@/components/ui/Scribble';

export default function Hero({ site }: { site: SiteConfig }) {
  const { person, labels, theme, meta } = site;
  const years = yearsOfExperience(site.experience);
  const words = person.name.trim().split(/\s+/);
  const lastWord = words.pop();
  const underline = theme.underline !== false && Boolean(lastWord);
  const aside = theme.heroAside ?? (person.avatar ? 'photo' : 'card');
  const marqueeItems =
    theme.marquee === false
      ? []
      : theme.marqueeItems ?? Array.from(new Set(site.skills.flatMap((group) => group.items)));

  return (
    <section id="top" className="relative">
      <Backdrop variant={theme.backdrop} />

      <div className="container-narrow pb-20 pt-14 md:pb-28 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_260px] md:items-center lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <Reveal>
              <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>
                  {labels.hero.basedIn} {person.location}
                </span>
                {person.coordinates && (
                  <span className="hidden sm:inline">{formatCoordinates(person.coordinates, meta.locale)}</span>
                )}
                {person.availability && (
                  <>
                    <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-accent" />
                    <span className="text-accent">{person.availability}</span>
                  </>
                )}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
                {underline ? (
                  <>
                    {words.join(' ')}{' '}
                    <span className="relative inline-block whitespace-nowrap">
                      {lastWord}
                      <Scribble />
                    </span>
                  </>
                ) : (
                  person.name
                )}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 text-xl text-muted md:text-2xl">
                {person.role}
                {years > 0 && (
                  <span className="whitespace-nowrap font-serif italic text-fg"> · {years}+ {labels.hero.years}</span>
                )}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-prose text-base leading-relaxed md:text-lg">{person.bio}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${person.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
                >
                  <Mail size={16} strokeWidth={1.75} aria-hidden />
                  {labels.hero.contact}
                </a>
                {person.cvFile && (
                  <a
                    href={person.cvFile}
                    download={cvFileName(site)}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-elev px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                  >
                    <ArrowDownToLine size={16} strokeWidth={1.75} aria-hidden />
                    {labels.hero.downloadCV}
                  </a>
                )}
                <div className="ml-1 flex flex-wrap items-center gap-4 text-sm text-muted">
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
                </div>
              </div>
            </Reveal>
          </div>

          {aside === 'card' && (
            <Reveal delay={0.1}>
              <HeroCard site={site} />
            </Reveal>
          )}

          {aside === 'photo' && person.avatar && (
            <Reveal delay={0.1} className="order-first md:order-none">
              <figure className="polaroid w-44 md:w-full">
                <Image
                  src={person.avatar}
                  alt={person.name}
                  width={person.avatarSize?.width ?? 600}
                  height={person.avatarSize?.height ?? 800}
                  priority
                  sizes="(min-width: 1024px) 280px, (min-width: 768px) 240px, 176px"
                  className="h-auto w-full object-cover"
                />
                {person.avatarCaption && (
                  <figcaption className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    {person.avatarCaption}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          )}
        </div>
      </div>

      <Marquee items={marqueeItems} />
    </section>
  );
}
