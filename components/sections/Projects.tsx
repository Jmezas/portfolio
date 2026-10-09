import type { SiteConfig } from '@/types';
import ProjectCard from '@/components/ui/ProjectCard';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Projects({ site, number }: { site: SiteConfig; number: string }) {
  const { labels } = site;

  return (
    <section id="projects" className="container-narrow scroll-mt-20 py-16 md:py-24">
      <SectionHeading number={number} title={labels.projects.title} intro={labels.projects.intro} />

      <ul className="grid gap-5 md:grid-cols-2">
        {site.projects.map((project, index) => (
          <Reveal as="li" key={project.id} delay={Math.min(index * 0.05, 0.2)} className="flex">
            <ProjectCard project={project} labels={labels.projects} a11y={labels.a11y} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
