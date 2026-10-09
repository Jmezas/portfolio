import type { SiteConfig } from '@/types';
import ExternalLink from '@/components/ui/ExternalLink';

export default function Footer({ site }: { site: SiteConfig }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="container-narrow flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.person.name}. {site.labels.footer.rights}
        </p>
        <div className="flex flex-wrap items-center gap-5">
          {site.socials.map((social) => (
            <ExternalLink key={social.url} href={social.url} icon={false} className="link-underline">
              {social.label}
            </ExternalLink>
          ))}
          <a href="#top" className="link-underline">
            {site.labels.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
