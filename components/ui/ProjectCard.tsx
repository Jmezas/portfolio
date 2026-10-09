'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import type { Labels, Project } from '@/types';
import ExternalLink from '@/components/ui/ExternalLink';

interface ProjectCardProps {
  project: Project;
  labels: Labels['projects'];
  a11y: Labels['a11y'];
}

export default function ProjectCard({ project, labels, a11y }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const hasDetails = Boolean(
    project.details && (project.details.context || project.details.role || project.details.highlights?.length),
  );

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <article className="project-card flex w-full flex-col overflow-hidden rounded-xl border border-line bg-elev hover:border-accent">
        {project.image && (
          <div className="project-image">
            <Image
              src={project.image}
              alt={`${project.title}${project.client ? ` · ${project.client}` : ''}`}
              width={1200}
              height={750}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        )}
        <div className="flex flex-1 flex-col p-6 md:p-7">
        <header className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl leading-tight tracking-tight">{project.title}</h3>
            {project.client && <p className="mt-1 text-sm text-muted">{project.client}</p>}
          </div>
          {project.year && <span className="eyebrow shrink-0 pt-1.5">{project.year}</span>}
        </header>

        <p className="mt-4 text-[15px] leading-relaxed text-fg">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={labels.stack}>
          {project.stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <footer className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm">
          {project.url && (
            <ExternalLink href={project.url} className="link-underline font-medium" srHint={a11y.externalLink}>
              {labels.view}
            </ExternalLink>
          )}
          {project.repoUrl && (
            <ExternalLink href={project.repoUrl} className="link-underline font-medium" srHint={a11y.externalLink}>
              {labels.code}
            </ExternalLink>
          )}
          {hasDetails && (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="link-underline font-medium text-muted"
              aria-haspopup="dialog"
            >
              {labels.details}
            </button>
          )}
        </footer>
        </div>
      </article>

      {open && project.details && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center" role="presentation">
          <button
            type="button"
            aria-label={labels.close}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-line bg-bg p-6 shadow-2xl sm:m-6 sm:rounded-2xl md:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                {project.client && <p className="eyebrow">{project.client}</p>}
                <h3 id={titleId} className="mt-2 font-serif text-3xl leading-tight tracking-tight">
                  {project.title}
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label={labels.close}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted hover:border-accent hover:text-accent"
              >
                <X size={16} strokeWidth={1.75} />
              </button>
            </div>

            <p className="mt-5 text-fg">{project.description}</p>

            <dl className="mt-8 space-y-7">
              {project.details.context && (
                <div>
                  <dt className="eyebrow">{labels.context}</dt>
                  <dd className="mt-2 text-fg">{project.details.context}</dd>
                </div>
              )}
              {project.details.role && (
                <div>
                  <dt className="eyebrow">{labels.role}</dt>
                  <dd className="mt-2 text-fg">{project.details.role}</dd>
                </div>
              )}
              {project.details.highlights && project.details.highlights.length > 0 && (
                <div>
                  <dt className="eyebrow">{labels.highlights}</dt>
                  <dd>
                    <ul className="dash-list mt-2 space-y-2 text-fg">
                      {project.details.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
              <div>
                <dt className="eyebrow">{labels.stack}</dt>
                <dd>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>

            {(project.url || project.repoUrl) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.url && (
                  <ExternalLink
                    href={project.url}
                    className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg hover:opacity-90"
                    srHint={a11y.externalLink}
                  >
                    {labels.view}
                  </ExternalLink>
                )}
                {project.repoUrl && (
                  <ExternalLink
                    href={project.repoUrl}
                    className="rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent"
                    srHint={a11y.externalLink}
                  >
                    {labels.code}
                  </ExternalLink>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
