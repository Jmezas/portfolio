import type { Experience, SiteConfig } from '@/types';

/** Convierte "YYYY-MM" en Date (primer día del mes, hora local). */
export function parseMonth(value: string): Date {
  const [year, month] = value.split('-').map(Number);
  return new Date(year, (month || 1) - 1, 1);
}

/** "2025-05" -> "may 2025" (según el idioma del sitio). */
export function formatMonth(value: string, locale: string): string {
  const text = new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' })
    .format(parseMonth(value))
    .replace('.', '');
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatPeriod(
  item: Pick<Experience, 'start' | 'end'>,
  locale: string,
  presentLabel: string,
): string {
  const start = formatMonth(item.start, locale);
  const end = item.end ? formatMonth(item.end, locale) : presentLabel;
  return `${start} — ${end}`;
}

/** Años de experiencia, calculados desde el inicio más antiguo. */
export function yearsOfExperience(experience: Experience[]): number {
  if (experience.length === 0) return 0;
  const earliest = experience
    .map((item) => parseMonth(item.start).getTime())
    .reduce((min, current) => Math.min(min, current));
  const diff = Date.now() - earliest;
  return Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
}

/** "Jhaser Abner Meza Sihui" -> "JM" */
export function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/** Sólo dígitos y el signo + para enlaces tel: y wa.me. */
export function phoneDigits(phone: string): string {
  return phone.replace(/[^\d+]/g, '');
}

/** Nombre del archivo que recibe quien descarga el CV. */
export function cvFileName(site: SiteConfig): string {
  const slug = site.person.name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return `CV-${slug}.pdf`;
}

/** Secciones que tienen contenido; define la navegación. */
export function visibleSections(site: SiteConfig): Array<keyof SiteConfig['labels']['nav']> {
  const sections: Array<keyof SiteConfig['labels']['nav']> = [];
  if (site.now && site.now.items.length) sections.push('now');
  if (site.experience.length) sections.push('experience');
  if (site.projects.length) sections.push('projects');
  if (site.skills.length) sections.push('skills');
  if (site.education.length || site.certifications.length) sections.push('education');
  if (site.testimonials.length) sections.push('testimonials');
  sections.push('contact');
  return sections;
}

/** 12.0464, -77.0428 -> "12.05° S, 77.04° O" */
export function formatCoordinates(coords: { lat: number; lng: number }, locale: string): string {
  const west = locale.startsWith('es') ? 'O' : 'W';
  const east = locale.startsWith('es') ? 'E' : 'E';
  const lat = `${Math.abs(coords.lat).toFixed(2)}° ${coords.lat < 0 ? 'S' : 'N'}`;
  const lng = `${Math.abs(coords.lng).toFixed(2)}° ${coords.lng < 0 ? west : east}`;
  return `${lat}, ${lng}`;
}
