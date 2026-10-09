import type { SiteConfig } from '@/types';
import { es } from '@/lib/labels';

/**
 * ÚNICO archivo que debes editar para personalizar el portafolio.
 *
 * - Deja un arreglo vacío (`[]`) y esa sección desaparece junto con su enlace del menú.
 * - Fechas en formato "YYYY-MM". Sin `end` se muestra "Actualidad".
 * - Imágenes y PDF van en /public y se referencian con ruta absoluta ("/perfil.jpg").
 * - Para otro idioma cambia `meta.locale` y `labels` (ver lib/labels.ts).
 */
export const site: SiteConfig = {
  meta: {
    url: 'https://jhasermeza.com',
    description:
      'Ingeniero de Sistemas con más de 8 años construyendo software empresarial: APIs con .NET, Node.js y Java, frontend con Angular, apps móviles con Flutter e infraestructura en AWS con Docker.',
    keywords: [
      'Jhaser Meza',
      'ingeniero de sistemas',
      'full stack developer',
      '.NET',
      'Node.js',
      'NestJS',
      'Angular',
      'Flutter',
      'AWS',
      'Docker',
      'Lima',
      'Perú',
    ],
    locale: 'es',
  },

  theme: {
    accent: '#b4421a',
    accentDark: '#f0894f',
    backdrop: 'both',
    marquee: true,
    underline: true,
    heroAside: 'robot',
    robotMessages: ['Café, Docker y PostgreSQL. En ese orden.', 'Lima, GMT-5. Casi siempre en línea.'],
  },

  person: {
    name: 'Jhaser Abner Meza Sihui',
    shortName: 'Jhaser Meza',
    role: 'Ingeniero de Sistemas · Full Stack, Cloud y DevOps',
    bio:
      'Diseño y construyo sistemas empresariales de punta a punta: desde la arquitectura del backend y la base de datos hasta la interfaz web, la app móvil y el despliegue en la nube. Trabajo con metodologías ágiles, me gusta la documentación clara y entrego software que se puede mantener.',
    location: 'Lima, Perú',
    email: 'yaser77334600@gmail.com',
    phone: '+51 944 224 926',
    avatar: '/perfil.jpg',
    avatarSize: { width: 472, height: 709 },
    avatarCaption: 'Lima, Perú',
    cvFile: '/cv/jhaser-meza-cv.pdf',
    availability: 'Disponible para consultoría y proyectos freelance',
    timeZone: 'America/Lima',
    coordinates: { lat: -12.0464, lng: -77.0428 },
  },

  socials: [
    { label: 'GitHub', url: 'https://github.com/Jmezas', kind: 'github' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jhaser-abner-meza-sihui-166772134/',
      kind: 'linkedin',
    },
    { label: 'WhatsApp', url: 'https://wa.me/51944224926', kind: 'whatsapp' },
  ],

  now: {
    updated: '2026-10',
    items: [
      'Construyendo nuevos módulos del ERP ACID para clientes del sector industrial.',
      'Automatizando despliegues con GitHub Actions y Docker en AWS.',
      'Profundizando en Kubernetes y en arquitecturas orientadas a eventos con Kafka.',
    ],
  },

  experience: [
    {
      id: 'gorydata',
      company: 'Gorydata',
      role: 'Consultor y desarrollador full stack (freelance)',
      start: '2025-05',
      location: 'Lima, Perú · Remoto',
      summary:
        'Consultoría y desarrollo de sistemas ERP y soluciones a medida para clientes del sector comercial e industrial.',
      highlights: [
        'Diseñé la arquitectura completa del ERP ACID: 15 módulos web y 5 módulos Android, con documentación técnica de casos de uso, diagramas de flujo y especificaciones funcionales.',
        'Integré los servicios de SUNAT (SIRE y PLE) para sincronizar datos contables y tributarios de forma automática y cumplir con la facturación electrónica.',
        'Monté pipelines de despliegue continuo con Docker en AWS (ECR) y administro servidores Ubuntu con nginx, PostgreSQL y certificados SSL para varios clientes.',
        'Optimicé consultas y stored procedures en SQL Server, reduciendo los tiempos de respuesta de los reportes financieros y operativos.',
      ],
      stack: ['NestJS', 'Node.js', 'Angular', 'Flutter', 'PostgreSQL', 'SQL Server', 'Docker', 'AWS', 'nginx'],
    },
    {
      id: 'gestyde',
      company: 'Gestyde / Salesland',
      role: 'Analista programador de aplicaciones web',
      start: '2023-05',
      end: '2025-04',
      location: 'Lima, Perú',
      summary:
        'Desarrollo de aplicaciones web y móviles con metodología Scrum para operaciones comerciales.',
      highlights: [
        'Implementé APIs REST con .NET 5, Node.js y NestJS aplicando arquitectura hexagonal y DDD, lo que mejoró la mantenibilidad del código.',
        'Construí componentes reutilizables en Angular y aplicaciones móviles multiplataforma con Flutter e Ionic.',
        'Automaticé procesos del negocio con tareas programadas en Python, reduciendo intervención manual.',
        'Despliegue continuo con Docker en AWS, pruebas unitarias y documentación de servicios con Swagger.',
      ],
      stack: ['.NET 5', 'NestJS', 'Angular', 'Flutter', 'Ionic', 'PostgreSQL', 'SQL Server', 'Docker', 'AWS', 'Python'],
    },
    {
      id: 'inetum',
      company: 'Inetum',
      role: 'Analista desarrollador · proyecto para Belcorp',
      start: '2022-06',
      end: '2023-05',
      location: 'Lima, Perú',
      highlights: [
        'Diseñé APIs REST con .NET 5 y NestJS bajo arquitectura hexagonal, reduciendo el acoplamiento entre módulos.',
        'Modelé estructuras en PostgreSQL optimizadas para los tiempos de respuesta de las consultas.',
        'Establecí pipelines de despliegue continuo con Docker en AWS e IIS, con menos errores en producción.',
        'Documenté los servicios con Swagger y cubrí el código con pruebas unitarias y funcionales.',
      ],
      stack: ['.NET 5', 'Node.js', 'NestJS', 'Angular', 'PostgreSQL', 'Docker', 'AWS', 'Jira'],
    },
    {
      id: 'protiviti',
      company: 'Protiviti',
      role: 'Analista programador .NET · proyecto para SGS',
      start: '2021-10',
      end: '2022-06',
      location: 'Lima, Perú',
      highlights: [
        'Implementé una arquitectura de microservicios con Node.js que permitió escalar cada servicio de forma independiente.',
        'Desarrollé APIs REST y SOAP con .NET Core 2.1, documentadas con Swagger/OpenAPI, para integraciones con sistemas externos.',
        'Trabajé con SQL Server, MySQL, MongoDB y PostgreSQL, incluyendo stored procedures y funciones en T-SQL.',
        'Construí interfaces responsive con Angular y PrimeNG; pruebas con SOAP UI y Postman.',
      ],
      stack: ['.NET Core', 'Node.js', 'Angular', 'PrimeNG', 'SQL Server', 'MySQL', 'MongoDB', 'PostgreSQL', 'IIS'],
    },
    {
      id: 'sst',
      company: 'SST · Sistemas, Servicios y Tecnologías',
      role: 'Analista programador',
      start: '2018-10',
      end: '2021-09',
      location: 'Lima, Perú',
      highlights: [
        'Desarrollé APIs REST y SOAP con .NET Core 2.1, Node.js y Java (Spring Framework, JEE) aplicando MVC y programación orientada a aspectos.',
        'Implementé la capa de persistencia con Hibernate (JPA), simplificando el acceso a datos.',
        'Construí microservicios con Node.js y frontends con Angular, Bootstrap y PUG.',
        'Optimicé operaciones de base de datos con stored procedures y funciones en T-SQL.',
      ],
      stack: ['Java', 'Spring', 'Hibernate', '.NET Core', 'Node.js', 'Angular', 'SQL Server', 'MySQL', 'MongoDB', 'PostgreSQL'],
    },
    {
      id: 'quanta',
      company: 'Quanta Services',
      role: 'Desarrollador de aplicaciones web',
      start: '2018-01',
      end: '2018-09',
      location: 'Lima, Perú',
      highlights: [
        'Diseñé aplicaciones web en capas combinando Java (Spring, JEE, JPA) y .NET con Dapper como micro-ORM.',
        'Modelé bases de datos normalizadas en SQL Server con procedimientos almacenados optimizados.',
        'Construí interfaces responsive con Bootstrap 3 y jQuery; publicación en IIS.',
      ],
      stack: ['Java', 'Spring', '.NET', 'Dapper', 'SQL Server', 'Bootstrap', 'jQuery', 'IIS'],
    },
    {
      id: 'socios-en-salud',
      company: 'Socios en Salud',
      role: 'Desarrollador web y móvil',
      start: '2016-06',
      end: '2017-12',
      location: 'Lima, Perú',
      highlights: [
        'Desarrollé aplicaciones web y móviles para Android e iOS con arquitectura en capas.',
        'Diseñé bases de datos SQL Server con Dapper como capa de acceso a datos.',
        'Interfaces con Material Design, Bootstrap, jQuery y AJAX; pruebas de servicios SOAP y REST con SOAP UI.',
      ],
      stack: ['.NET', 'Dapper', 'SQL Server', 'Bootstrap', 'jQuery', 'Android', 'iOS'],
    },
  ],

  projects: [
    {
      id: 'erp-acid',
      title: 'ERP ACID',
      client: 'Gorydata',
      year: '2025',
      description:
        'ERP para empresas comerciales e industriales: ventas, compras, inventario, contabilidad y facturación electrónica integrada con SUNAT.',
      stack: ['NestJS', 'Angular', 'Flutter', 'PostgreSQL', 'SQL Server', 'Docker', 'AWS'],
      details: {
        context:
          'Clientes del sector comercial e industrial necesitaban reemplazar procesos manuales y hojas de cálculo por un sistema único con cumplimiento tributario.',
        role: 'Arquitectura, backend, infraestructura y documentación técnica.',
        highlights: [
          '15 módulos web y 5 módulos Android sobre una misma API.',
          'Integración con SIRE y PLE de SUNAT para sincronización contable automática.',
          'Despliegue con Docker en AWS y servidores Ubuntu con nginx y SSL.',
        ],
      },
    },
    {
      id: 'shop-integra',
      title: 'Punto de venta e inventario',
      client: 'Shop Integra',
      year: '2024',
      description:
        'Sistema de punto de venta que conecta ventas, caja e inventario en tiempo real para pequeñas y medianas empresas.',
      stack: ['Angular', 'NestJS', 'PostgreSQL', 'Docker', 'AWS'],
      image: '/projects/shop-integra.jpg',
      url: 'https://shop-integra.gorydata.com',
      details: {
        role: 'Diseño del modelo de datos, API y despliegue.',
        highlights: [
          'Stock sincronizado entre varios puntos de venta.',
          'Catálogo y reportes optimizados con índices y vistas en PostgreSQL.',
          'Emisión de comprobantes electrónicos.',
        ],
      },
    },
    {
      id: 'credysur',
      title: 'Préstamos y cobranza',
      client: 'Credysur',
      year: '2024',
      description:
        'Plataforma para una microfinanciera: evaluación de créditos, cronogramas de pago, cobranza y reportes de cartera.',
      stack: ['.NET', 'Angular', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      image: '/projects/credysur.jpg',
      url: 'https://demo.credysur.com/',
      details: {
        role: 'Backend financiero, frontend y puesta en producción.',
        highlights: [
          'Motor de cálculo de cuotas e intereses con precisión decimal.',
          'Seguimiento de mora y alertas de cobranza por cartera.',
          'Reportes operativos para gerencia.',
        ],
      },
    },
  ],

  skills: [
    {
      label: 'Backend',
      items: ['C# / .NET Core', 'ASP.NET Core', 'Entity Framework', 'Dapper', 'Node.js', 'NestJS', 'Java / Spring', 'Hibernate', 'Python / Django'],
    },
    {
      label: 'Frontend',
      items: ['Angular', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Bootstrap', 'PrimeNG'],
    },
    {
      label: 'Móvil',
      items: ['Flutter', 'Ionic', 'Android'],
    },
    {
      label: 'Datos',
      items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'PL/SQL', 'T-SQL', 'Apache Spark', 'Hadoop / HDFS'],
    },
    {
      label: 'Cloud y DevOps',
      items: ['Docker', 'Kubernetes (AKS)', 'AWS', 'Azure', 'Linux (Debian / Ubuntu)', 'nginx', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'RabbitMQ', 'Kafka'],
    },
    {
      label: 'Arquitectura y método',
      items: ['DDD', 'Arquitectura hexagonal', 'Clean Architecture', 'SOLID', 'Microservicios', 'REST / SOAP', 'Scrum', 'Jira / Confluence'],
    },
  ],

  education: [
    {
      institution: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
      degree: 'Ingeniero de Sistemas de Información',
      period: '2025',
      detail: 'Título profesional (enero 2025). Grado de bachiller (diciembre 2023).',
    },
    {
      institution: 'Cibertec',
      degree: 'Computación e Informática',
      period: '2016 — 2018',
      detail: 'Carrera técnica con especialización en desarrollo de software y bases de datos.',
    },
  ],

  certifications: [
    { name: 'Gestión de Aplicaciones Multiplataforma', issuer: 'Cibertec', year: '2018' },
    { name: 'Desarrollo de Software e Implementación de Base de Datos', issuer: 'Cibertec', year: '2017' },
    { name: 'Soporte Técnico y Tecnologías de la Información', issuer: 'Cibertec', year: '2016' },
  ],

  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Técnico' },
  ],

  /**
   * Referencias reales de clientes o colegas. Pide permiso antes de publicar
   * un nombre. Vacío = la sección no se muestra.
   */
  testimonials: [],

  labels: es,
};
