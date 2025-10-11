import { Experience, Skill, PersonalInfo, Project, Testimonial } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Jhaser Adner Meza Sihui",
  title: "Ingeniero de Sistemas | Full Stack Developer | Líder Técnico | Big Data| Cloud",
  email: "Yaser77334600@gmail.com",
  phone: "944224926",
  location: "Lima, Perú",
  summary: "Ingeniero de Sistemas con más de 7 años de experiencia desarrollando soluciones tecnológicas innovadoras. Especializado en arquitecturas escalables, metodologías ágiles (Scrum) y liderazgo de equipos multidisciplinarios.",
  github: "https://github.com/jmezas",
  linkedin: "https://www.linkedin.com/in/jhaser-abner-meza-sihui-166772134/"
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Gestyde / Salesland",
    position: "Analista de Desarrollo y Coordinador",
    period: "Jun 2023 - Mar 2025",
    location: "Lima, Perú",
    description: [
      "Liderazgo de equipo bajo metodología SCRUM",
      "Implementación de arquitectura hexagonal y DDD",
      "Desarrollo de APIs REST y microservicios",
      "Despliegue continuo con Docker en AWS",
      "Desarrollo de aplicaciones móviles con Flutter e Ionic"
    ],
    technologies: ["PostgreSQL", ".NET 5", "Node.js", "Angular", "Nest.js", "Docker", "AWS", "Flutter", "Ionic", "Python"]
  },
  {
    id: "2",
    company: "INETUM / BELCORP",
    position: "Analista Desarrollador",
    period: "Jun 2022 - Mar 2023",
    location: "Lima, Perú",
    description: [
      "Desarrollo bajo arquitectura hexagonal",
      "Implementación de servicios REST con documentación Swagger",
      "Manejo de PostgreSQL y optimización de queries",
      "CI/CD con Docker en AWS"
    ],
    technologies: ["PostgreSQL", ".NET 5", "Angular", "Nest.js", "Docker", "AWS", "JIRA"]
  },
  {
    id: "3",
    company: "Protiviti / SGS",
    position: "Analista Programador",
    period: "Oct 2021 - Abr 2022",
    location: "Lima, Perú",
    description: [
      "Desarrollo de microservicios con Node.js",
      "Implementación de APIs REST y SOAP",
      "Trabajo con múltiples bases de datos (SQL Server, MySQL, MongoDB, PostgreSQL)"
    ],
    technologies: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL", ".NET Core", "Node.js", "Angular", "Spring"]
  },
  {
    id: "4",
    company: "SST (Sistema Servicio Tecnología)",
    position: "Analista Programador",
    period: "Oct 2019 - Ago 2021",
    location: "Lima, Perú",
    description: [
      "Desarrollo con Spring Framework y patrón MVC",
      "Implementación de microservicios",
      "Uso de Hibernate (JPA) y AOP"
    ],
    technologies: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL", "Java", "Spring", "Node.js", "Angular"]
  }
];

export const skills: Skill[] = [
  // Backend
  { name: "C# / .NET Core", category: "backend", level: 95 },
  { name: "Node.js", category: "backend", level: 90 },
  { name: "Java / Spring", category: "backend", level: 85 },
  { name: "Python", category: "backend", level: 75 },
  { name: "ASP.NET MVC", category: "backend", level: 90 },
  { name: "Nest.js", category: "backend", level: 85 },
  
  // Frontend
  { name: "Angular", category: "frontend", level: 90 },
  { name: "TypeScript", category: "frontend", level: 90 },
  { name: "JavaScript", category: "frontend", level: 95 },
  { name: "Vue.js", category: "frontend", level: 80 },
  { name: "HTML5 / CSS3", category: "frontend", level: 95 },
  { name: "Bootstrap", category: "frontend", level: 90 },
  
  // Database
  { name: "SQL Server", category: "database", level: 90 },
  { name: "PostgreSQL", category: "database", level: 90 },
  { name: "MySQL", category: "database", level: 85 },
  { name: "MongoDB", category: "database", level: 80 },
  { name: "Oracle", category: "database", level: 75 },
  
  // DevOps
  { name: "Docker", category: "devops", level: 85 },
  { name: "AWS", category: "devops", level: 80 },
  { name: "Git / GitHub", category: "devops", level: 90 },
  { name: "CI/CD", category: "devops", level: 80 },
  
  // Mobile
  { name: "Flutter", category: "mobile", level: 80 },
  { name: "Ionic", category: "mobile", level: 75 },
  { name: "Android", category: "mobile", level: 70 },
  { name: "iOS", category: "mobile", level: 65 }
];


export const projects:Project[] = [
    {
      title: 'Punto de Venta e Inventario',
      description: 'Un sistema de Punto de Venta e Inventario conecta tus ventas con tu stock en tiempo real.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'PostgreSQL', 'Nestjs', 'Docker', 'AWS'],
      liveUrl: 'https://shop-integra.gorydata.com',
      fullDescription: 'Sistema integral de gestión empresarial que conecta ventas, inventario y finanzas en una única plataforma cloud. Diseñado para PYMES que buscan digitalizar y optimizar sus operaciones comerciales.',
      duration: '6 meses',
      team: 'Equipo de 4 desarrolladores',
      challenges: [
        'Sincronización en tiempo real del inventario entre múltiples puntos de venta',
        'Optimización de consultas para catálogos con +50k productos',
        'Implementación de sistema offline-first para zonas sin conexión',
        'Integración con múltiples pasarelas de pago y SUNAT'
      ],
      solutions: [
        'Implementación de WebSocket para sincronización bidireccional en tiempo real',
        'Uso de indexación avanzada y caché con Redis para mejorar rendimiento 80%',
        'Service Workers y IndexedDB para funcionamiento offline completo',
        'Arquitectura de microservicios con adaptadores para cada integración externa'
      ],
      impact: [
        { metric: 'Reducción de tiempo en ventas', value: '45%' },
        { metric: 'Precisión de inventario', value: '99.8%' },
        { metric: 'Usuarios activos', value: '500+' }
      ]
    },
    {
      title: 'Prestamos y cobranza de microfinanzas',
      description: 'Un sistema integral para gestionar préstamos y cobranzas en una institución de microfinanzas.',
      technologies: ['.Net', 'Angular', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      liveUrl: 'https://demo.credysur.com/',
      fullDescription: 'Plataforma financiera completa para gestión de créditos, cobranzas y análisis de riesgo crediticio con inteligencia artificial. Cumple con normativas SBS y facilita la inclusión financiera.',
      duration: '8 meses',
      team: 'Equipo de 6 personas',
      challenges: [
        'Cálculo preciso de amortizaciones con múltiples métodos (francés, alemán, etc.)',
        'Sistema de scoring crediticio con ML para evaluación de riesgo',
        'Cumplimiento de normativas SBS y reportes regulatorios automatizados',
        'Gestión de mora y estrategias de cobranza predictiva'
      ],
      solutions: [
        'Desarrollo de motor de cálculo financiero con precisión decimal',
        'Implementación de Random Forest para scoring crediticio con 85% accuracy',
        'Generación automatizada de reportes SBS con validaciones en tiempo real',
        'Sistema de alertas inteligentes con priorización de cobranza por ML'
      ],
      impact: [
        { metric: 'Reducción de morosidad', value: '35%' },
        { metric: 'Tiempo de aprobación', value: '-60%' },
        { metric: 'Cartera gestionada', value: '$2M+' }
      ]
    },
    {
      title: 'AI Chat Application',
      description: 'Aplicación de chat con inteligencia artificial para asistencia al cliente 24/7.',
      technologies: ['Python', 'FastAPI', 'OpenAI', 'WebSocket', 'Docker'],
      githubUrl: 'https://github.com/chatboxai/chatbox',
      fullDescription: 'Chatbot empresarial con IA que proporciona soporte automatizado, resuelve consultas frecuentes y escala a agentes humanos cuando es necesario. Integrado con CRM y base de conocimientos.',
      duration: '4 meses',
      team: 'Equipo de 3 desarrolladores',
      challenges: [
        'Procesamiento de lenguaje natural en español con contexto empresarial',
        'Escalamiento a agentes humanos sin perder contexto de conversación',
        'Manejo de 1000+ conversaciones concurrentes con baja latencia',
        'Entrenamiento con base de conocimientos empresarial específica'
      ],
      solutions: [
        'Fine-tuning de GPT-3.5 con datos empresariales y ejemplos reales',
        'Sistema de handoff inteligente con transferencia completa de contexto',
        'Arquitectura serverless con AWS Lambda y API Gateway para escalabilidad',
        'RAG (Retrieval Augmented Generation) con vectorización de documentos'
      ],
      impact: [
        { metric: 'Consultas resueltas automáticamente', value: '70%' },
        { metric: 'Reducción de costos de soporte', value: '50%' },
        { metric: 'Satisfacción del cliente', value: '4.5/5' }
      ]
    },
    {
      title: 'Task Management System',
      description: 'Sistema de gestión de tareas con colaboración en tiempo real y notificaciones inteligentes.',
      technologies: ['Vue.js', 'Firebase', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      fullDescription: 'Plataforma colaborativa para gestión de proyectos con tableros Kanban, Gantt, seguimiento de tiempo y analytics en tiempo real. Ideal para equipos distribuidos y metodologías ágiles.',
      duration: '5 meses',
      team: 'Proyecto personal (open source)',
      challenges: [
        'Sincronización en tiempo real entre múltiples usuarios sin conflictos',
        'Sistema de permisos granular a nivel de proyecto/tarea/comentario',
        'Notificaciones inteligentes sin saturar a los usuarios',
        'Offline-first con sincronización automática al reconectar'
      ],
      solutions: [
        'Firestore con optimistic updates y conflict resolution automático',
        'RBAC (Role-Based Access Control) con herencia de permisos',
        'Sistema de notificaciones con ML para priorización y agrupación',
        'Service Workers con queue de sincronización y retry logic'
      ],
      impact: [
        { metric: 'Mejora en productividad del equipo', value: '40%' },
        { metric: 'Usuarios activos mensuales', value: '1,200+' },
        { metric: 'GitHub stars', value: '350+' }
      ]
    },
    {
      title: 'Social Media API',
      description: 'API RESTful escalable para aplicaciones de redes sociales con autenticación JWT y rate limiting.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT'],
      githubUrl: 'https://github.com',
      fullDescription: 'API backend robusta para aplicaciones sociales con feed de publicaciones, sistema de seguidores, mensajería directa, y moderación de contenido automatizada.',
      duration: '3 meses',
      team: 'Proyecto personal',
      challenges: [
        'Generación de feed personalizado para millones de usuarios',
        'Rate limiting y prevención de abuse/spam',
        'Moderación de contenido en tiempo real (texto e imágenes)',
        'Escalabilidad horizontal sin perder consistencia de datos'
      ],
      solutions: [
        'Fan-out on write con caché en Redis para feeds pre-generados',
        'Rate limiting distribuido con Redis y token bucket algorithm',
        'Integración con AWS Rekognition y Perspective API para moderación',
        'Arquitectura de microservicios con eventual consistency y CQRS'
      ],
      impact: [
        { metric: 'Peticiones por segundo', value: '10K+' },
        { metric: 'Latencia promedio', value: '<100ms' },
        { metric: 'Uptime', value: '99.9%' }
      ]
    },
    {
      title: 'Mobile Fitness App',
      description: 'Aplicación móvil multiplataforma para seguimiento de ejercicios y planes de entrenamiento personalizados.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'GetX'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      fullDescription: 'App de fitness con planes de entrenamiento personalizados por IA, seguimiento de progreso, nutrición y comunidad de usuarios. Integración con wearables y sincronización cloud.',
      duration: '6 meses',
      team: 'Equipo de 2 desarrolladores',
      challenges: [
        'Personalización de rutinas con IA basada en nivel y objetivos del usuario',
        'Sincronización con dispositivos wearables (Apple Watch, Fitbit, Garmin)',
        'Reproducción de videos de ejercicios con calidad HD sin consumir datos',
        'Gamificación con logros, streaks y rankings sin saturar al usuario'
      ],
      solutions: [
        'Algoritmo de ML para generar rutinas adaptativas según progreso del usuario',
        'Health Connect (Android) y HealthKit (iOS) para sincronización universal',
        'Caché inteligente de videos con compresión adaptativa y pre-descarga',
        'Sistema de puntos y niveles con notificaciones contextuales y no intrusivas'
      ],
      impact: [
        { metric: 'Usuarios activos diarios', value: '5,000+' },
        { metric: 'Retención a 30 días', value: '65%' },
        { metric: 'Rating en stores', value: '4.7/5' }
      ]
    },
  ];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Carlos Ramírez",
    position: "CTO",
    company: "Gestyde",
    content: "Jhaser demostró un liderazgo excepcional en el desarrollo de nuestra arquitectura de microservicios. Su capacidad para resolver problemas complejos y guiar al equipo bajo metodología SCRUM fue fundamental para el éxito de nuestros proyectos.",
    rating: 5,
    relationship: "Supervisor directo",
    date: "Marzo 2025"
  },
  {
    id: "2",
    name: "María González",
    position: "Product Manager",
    company: "INETUM / BELCORP",
    content: "Trabajar con Jhaser fue una experiencia excepcional. Su dominio de .NET y Angular, combinado con su enfoque en arquitectura hexagonal, resultó en sistemas altamente mantenibles y escalables. Siempre cumplió con los plazos establecidos.",
    rating: 5,
    relationship: "Trabajamos en el mismo proyecto",
    date: "Febrero 2023"
  },
  {
    id: "3",
    name: "Jorge Mendoza",
    position: "Senior Developer",
    company: "Protiviti / SGS",
    content: "Jhaser es un desarrollador full stack sobresaliente. Su experiencia con Node.js y su habilidad para trabajar con múltiples bases de datos simultáneamente fue clave para la integración de nuestros microservicios. Altamente recomendado.",
    rating: 5,
    relationship: "Colega de equipo",
    date: "Abril 2022"
  },
  {
    id: "4",
    name: "Ana Torres",
    position: "Tech Lead",
    company: "SST",
    content: "La capacidad de Jhaser para implementar soluciones con Spring Framework y su conocimiento profundo de patrones de diseño como MVC y arquitectura de microservicios fue invaluable. Es un profesional dedicado y siempre dispuesto a ayudar al equipo.",
    rating: 5,
    relationship: "Líder de equipo",
    date: "Agosto 2021"
  },
  {
    id: "5",
    name: "Almendra Paredes",
    position: "CEO",
    company: "Credysur",
    content: "El sistema de préstamos y cobranza que desarrolló Jhaser transformó completamente nuestra operación. La implementación de ML para scoring crediticio redujo nuestra morosidad en un 35%. Un profesional excepcional con visión de negocio.",
    rating: 5,
    relationship: "Cliente",
    date: "Enero 2025"
  },
  {
    id: "6",
    name: "Patricia Vargas",
    position: "Gerente de Operaciones",
    company: "GoryData",
    content: "La solución de punto de venta que Jhaser creó para nosotros mejoró nuestra eficiencia en un 45%. Su atención al detalle y capacidad para entender nuestras necesidades de negocio fue extraordinaria. Seguimos trabajando con él en mejoras continuas.",
    rating: 5,
    relationship: "Cliente",
    date: "Diciembre 2024"
  }
];
