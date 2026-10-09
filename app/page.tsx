import { site } from '@/content/site';
import { visibleSections } from '@/lib/format';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Now from '@/components/sections/Now';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const sections = visibleSections(site);
  const navItems = sections.map((key) => ({ href: `#${key}`, label: site.labels.nav[key] }));
  const index = (key: (typeof sections)[number]) =>
    String(sections.indexOf(key) + 1).padStart(2, '0');

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        {site.labels.a11y.skipToContent}
      </a>

      <Header
        name={site.person.shortName ?? site.person.name}
        items={navItems}
        labels={site.labels.a11y}
        clock={
          site.person.timeZone
            ? { timeZone: site.person.timeZone, locale: site.meta.locale, label: site.labels.hero.localTime }
            : undefined
        }
      />

      <main id="main">
        <Hero site={site} />
        {site.now && site.now.items.length > 0 && <Now site={site} number={index('now')} />}
        {site.experience.length > 0 && <Experience site={site} number={index('experience')} />}
        {site.projects.length > 0 && <Projects site={site} number={index('projects')} />}
        {site.skills.length > 0 && <Skills site={site} number={index('skills')} />}
        {(site.education.length > 0 || site.certifications.length > 0) && (
          <Education site={site} number={index('education')} />
        )}
        {site.testimonials.length > 0 && <Testimonials site={site} number={index('testimonials')} />}
        <Contact site={site} number={index('contact')} />
      </main>

      <Footer site={site} />
    </>
  );
}
