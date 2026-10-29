import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

export default function manifest(): MetadataRoute.Manifest {
  const name = site.person.shortName ?? site.person.name;
  return {
    name: `${name} · ${site.person.role}`,
    short_name: name,
    description: site.meta.description,
    lang: site.meta.locale,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#f6f4ef',
    theme_color: '#f6f4ef',
    categories: ['portfolio', 'business'],
    icons: [
      { src: '/icon/192', sizes: '192x192', type: 'image/png' },
      { src: '/icon/512', sizes: '512x512', type: 'image/png' },
      { src: '/icon/maskable', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
