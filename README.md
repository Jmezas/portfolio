# Portafolio personal

Sitio de portafolio de una sola página construido con Next.js 15, React 19, Tailwind CSS 3 y Framer Motion.
Todo el contenido vive en **un solo archivo** (`content/site.ts`), así que cualquier persona puede
clonar el repositorio, editar ese archivo y tener su propio portafolio sin tocar los componentes.

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Personalización (lo único que necesitas editar)

### 1. `content/site.ts`

| Bloque           | Qué contiene                                                                 |
| ---------------- | ---------------------------------------------------------------------------- |
| `meta`           | URL pública, descripción SEO, palabras clave e idioma (`es`, `en`, ...).      |
| `theme`          | Color de acento en modo claro y oscuro (hex).                                 |
| `person`         | Nombre, rol, bio, ubicación, correo, teléfono, foto, CV y disponibilidad.     |
| `socials`        | Enlaces externos (GitHub, LinkedIn, WhatsApp, sitio web...).                  |
| `experience`     | Puestos de trabajo con fechas `YYYY-MM`, logros y tecnologías.                |
| `projects`       | Proyectos con descripción, stack, enlaces y detalles opcionales.              |
| `skills`         | Grupos de habilidades (sin porcentajes inventados).                           |
| `education`      | Títulos y estudios.                                                           |
| `certifications` | Certificados con emisor y año.                                                |
| `languages`      | Idiomas y nivel.                                                              |
| `testimonials`   | Referencias reales. Vacío = la sección no se muestra.                         |
| `labels`         | Textos de la interfaz. Usa `es` o `en` desde `lib/labels.ts`, o crea el tuyo. |

Reglas:

- Cualquier arreglo vacío (`[]`) oculta su sección y su enlace en el menú.
- Los años de experiencia se calculan solos a partir de la fecha más antigua de `experience`.
- Si un puesto no tiene `end`, se muestra como "Actualidad".
- Las fechas se formatean según `meta.locale` (por ejemplo "May 2025" o "Mayo 2025").

### 2. Archivos en `/public`

- `perfil.jpg`: tu foto. Actualiza `person.avatar` y `person.avatarSize` con las dimensiones reales.
- `cv/<tu-cv>.pdf`: tu CV. Actualiza `person.cvFile`.

### 3. Favicon y vista previa para redes

Se generan automáticamente a partir de tu nombre y color de acento:

- `/icon` usa tus iniciales (`app/icon.tsx`).
- `/opengraph-image` muestra nombre, rol y ubicación (`app/opengraph-image.tsx`).

No necesitas diseñar imágenes.

### 4. Otro idioma

1. Cambia `meta.locale` (por ejemplo `'en'`).
2. Importa `en` en lugar de `es` desde `lib/labels.ts`, o copia uno de esos objetos y tradúcelo.
3. Escribe tu contenido en ese idioma.

## Estructura

```
app/                 Layout, página, favicon, imagen OG, robots y sitemap
components/layout/   Header (navegación + tema) y Footer
components/sections/ Hero, Experiencia, Proyectos, Habilidades, Formación, Referencias, Contacto
components/ui/       Piezas reutilizables (Reveal, ProjectCard, ThemeToggle...)
content/site.ts      TODO el contenido del sitio
lib/                 Etiquetas por idioma, formato de fechas y SEO
types/               Interfaces TypeScript del contenido
```

## Scripts

```bash
npm run dev     # desarrollo
npm run build   # build de producción
npm run start   # servir el build
npm run lint    # ESLint
```

## Despliegue

El proyecto genera una salida `standalone` lista para Docker. Consulta `DEPLOY.md` para el flujo
con AWS ECR y servidor Linux, o despliega directamente en Vercel, Netlify o cualquier host con Node.js.

## Licencia

MIT. Úsalo, modifícalo y publícalo con tu propio contenido.
