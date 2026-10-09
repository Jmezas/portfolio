/**
 * Tipos del portafolio. Todo el contenido visible se define en `content/site.ts`
 * y se valida contra estas interfaces.
 */

export type SocialKind =
  | 'github'
  | 'linkedin'
  | 'x'
  | 'instagram'
  | 'youtube'
  | 'website'
  | 'whatsapp'
  | 'other';

export interface SocialLink {
  /** Texto visible, por ejemplo "GitHub". */
  label: string;
  url: string;
  kind?: SocialKind;
}

export interface Person {
  /** Nombre completo, se usa en el hero y en el SEO. */
  name: string;
  /** Nombre corto para el header y el footer. Si falta, se usa `name`. */
  shortName?: string;
  /** Rol principal en una línea. */
  role: string;
  /** Texto de presentación (2 a 4 oraciones). */
  bio: string;
  location: string;
  email: string;
  /** Teléfono en formato internacional, por ejemplo "+51 944 224 926". */
  phone?: string;
  /** Ruta dentro de /public. */
  avatar?: string;
  /** Dimensiones reales de la imagen para evitar saltos de layout. */
  avatarSize?: { width: number; height: number };
  /** Pie de foto corto, por ejemplo "Lima, 2025". */
  avatarCaption?: string;
  /** Ruta dentro de /public al CV en PDF. */
  cvFile?: string;
  /** Texto corto sobre disponibilidad, por ejemplo "Disponible para proyectos". */
  availability?: string;
  /** Zona horaria IANA para el reloj del header, por ejemplo "America/Lima". */
  timeZone?: string;
  /** Coordenadas decimales, se muestran junto a la ubicación. */
  coordinates?: { lat: number; lng: number };
}

export interface NowSection {
  /** Fecha de la última actualización, formato YYYY-MM. */
  updated: string;
  /** Qué estás haciendo ahora, 2 a 5 frases cortas. */
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  /** Formato YYYY-MM. */
  start: string;
  /** Formato YYYY-MM. Si falta, se muestra como "Actualidad". */
  end?: string;
  location?: string;
  url?: string;
  summary?: string;
  highlights: string[];
  stack?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  detail?: string;
  url?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ProjectDetails {
  /** Contexto del proyecto: problema, cliente, alcance. */
  context?: string;
  /** Tu rol dentro del proyecto. */
  role?: string;
  highlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  /** Cliente u organización. */
  client?: string;
  description: string;
  year?: string;
  stack: string[];
  /** Captura de pantalla en /public, por ejemplo "/projects/erp.jpg". */
  image?: string;
  url?: string;
  repoUrl?: string;
  details?: ProjectDetails;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  quote: string;
}

export interface SiteMeta {
  /** URL pública con protocolo, sin barra final. */
  url: string;
  /** Título del sitio. Si falta, se usa el nombre de la persona. */
  title?: string;
  description: string;
  keywords?: string[];
  /** Código de idioma BCP 47: "es", "en", "pt-BR". */
  locale: string;
}

export interface Theme {
  /** Color de acento en modo claro. */
  accent: string;
  /** Color de acento en modo oscuro. */
  accentDark: string;
  /**
   * Fondo decorativo del hero.
   * - "dots": cuadrícula de puntos que se ilumina al pasar el cursor.
   * - "aurora": manchas de color suaves en movimiento lento.
   * - "both": ambas (por defecto).
   * - "none": fondo plano.
   */
  backdrop?: 'dots' | 'aurora' | 'both' | 'none';
  /** Cinta con tecnologías en movimiento bajo el hero. Por defecto true. */
  marquee?: boolean;
  /** Lista propia para la cinta. Si falta, se toman las habilidades. */
  marqueeItems?: string[];
  /** Subrayado dibujado a mano bajo la última palabra del nombre. Por defecto true. */
  underline?: boolean;
  /**
   * Qué mostrar a la derecha del hero.
   * - "photo": la foto (`person.avatar`) estilo polaroid.
   * - "card": ficha con datos calculados (años, empresas, proyectos, tecnologías, hora local).
   * - "none": nada.
   * Por defecto "photo" si hay avatar, si no "card".
   */
  heroAside?: 'photo' | 'card' | 'none';
}

export interface Labels {
  nav: {
    now: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    contact: string;
    downloadCV: string;
    basedIn: string;
    /** Sufijo tras el número de años, por ejemplo "años". */
    years: string;
    /** Prefijo del reloj, por ejemplo "Hora local". */
    localTime: string;
  };
  now: {
    title: string;
    updated: string;
  };
  card: {
    title: string;
    years: string;
    companies: string;
    projects: string;
    technologies: string;
    location: string;
    status: string;
  };
  experience: {
    title: string;
    present: string;
    stack: string;
  };
  projects: {
    title: string;
    intro?: string;
    view: string;
    code: string;
    details: string;
    close: string;
    context: string;
    role: string;
    highlights: string;
    stack: string;
  };
  skills: {
    title: string;
    intro?: string;
  };
  education: {
    title: string;
    degrees: string;
    certifications: string;
    languages: string;
  };
  testimonials: {
    title: string;
  };
  contact: {
    title: string;
    text: string;
    email: string;
    phone: string;
    elsewhere: string;
  };
  footer: {
    rights: string;
    backToTop: string;
  };
  a11y: {
    toggleTheme: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    externalLink: string;
  };
}

export interface SiteConfig {
  meta: SiteMeta;
  theme: Theme;
  person: Person;
  socials: SocialLink[];
  /** Sección "Ahora". Omite el campo para ocultarla. */
  now?: NowSection;
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
  certifications: Certification[];
  languages: Language[];
  testimonials: Testimonial[];
  labels: Labels;
}
