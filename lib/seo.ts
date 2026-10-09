import type { Metadata } from 'next';
import type { SiteConfig } from '@/types';

export function siteTitle(site: SiteConfig): string {
  return site.meta.title ?? `${site.person.shortName ?? site.person.name} · ${site.person.role}`;
}

export function buildMetadata(site: SiteConfig): Metadata {
  const title = siteTitle(site);
  return {
    metadataBase: new URL(site.meta.url),
    title: {
      default: title,
      template: `%s · ${site.person.shortName ?? site.person.name}`,
    },
    description: site.meta.description,
    keywords: site.meta.keywords,
    authors: [{ name: site.person.name, url: site.meta.url }],
    creator: site.person.name,
    alternates: { canonical: '/' },
    openGraph: {
      type: 'profile',
      locale: site.meta.locale,
      url: site.meta.url,
      siteName: site.person.name,
      title,
      description: site.meta.description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: site.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export function personJsonLd(site: SiteConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.person.name,
    jobTitle: site.person.role,
    description: site.person.bio,
    email: `mailto:${site.person.email}`,
    telephone: site.person.phone,
    url: site.meta.url,
    image: site.person.avatar ? `${site.meta.url}${site.person.avatar}` : undefined,
    address: { '@type': 'PostalAddress', addressLocality: site.person.location },
    sameAs: site.socials.map((social) => social.url),
  };
}
