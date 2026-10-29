import type { Metadata } from 'next';
import { site } from '@/content/site';
import RetryButton from '@/components/ui/RetryButton';

export const metadata: Metadata = { title: site.labels.pwa.offlineTitle, robots: { index: false } };

/** Página que muestra el service worker cuando no hay red ni copia en caché. */
export default function OfflinePage() {
  const { pwa } = site.labels;
  return (
    <main className="container-narrow flex min-h-[100dvh] flex-col items-start justify-center py-16">
      <p className="eyebrow">{site.person.shortName ?? site.person.name}</p>
      <h1 className="mt-4 font-serif text-5xl leading-none tracking-tight md:text-6xl">{pwa.offlineTitle}</h1>
      <p className="mt-6 max-w-prose text-lg text-muted">{pwa.offlineText}</p>
      <RetryButton label={pwa.retry} />
    </main>
  );
}
