// lib/data.ts
import { Experience, Skill, PersonalInfo, Project } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Jhaser Adner Meza Sihui",
  title: "Ingeniero de Sistemas | Full Stack Developer | Líder Técnico | Big Data| Cloud",
  email: "Yaser77334600@gmail.com",
  phone: "944224926",
  location: "Lima, Perú",
  summary: "Ingeniero de Sistemas con más de 7 años de experiencia desarrollando soluciones tecnológicas innovadoras. Especializado en arquitecturas escalables, metodologías ágiles (Scrum) y liderazgo de equipos multidisciplinarios.",
  github: "https://github.com/jmezas", // Actualiza con tu GitHub real
  linkedin: "https://www.linkedin.com/in/jhaser-abner-meza-sihui-166772134/" // Actualiza con tu LinkedIn real
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
    },
    {
      title: 'Prestamos y cobranza de microfinanzas',
      description: 'Un sistema integral para gestionar préstamos y cobranzas en una institución de microfinanzas.',
      technologies: ['.Net', 'Angular', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      liveUrl: 'https://demo.credysur.com/',
    },
    {
      title: 'AI Chat Application',
      description: 'Aplicación de chat con inteligencia artificial para asistencia al cliente 24/7.',
      technologies: ['Python', 'FastAPI', 'OpenAI', 'WebSocket', 'Docker'],
      githubUrl: 'https://github.com/chatboxai/chatbox',
    },
    {
      title: 'Task Management System',
      description: 'Sistema de gestión de tareas con colaboración en tiempo real y notificaciones inteligentes.',
      technologies: ['Vue.js', 'Firebase', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Social Media API',
      description: 'API RESTful escalable para aplicaciones de redes sociales con autenticación JWT y rate limiting.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT'],
      githubUrl: 'https://github.com',
    },
    {
      title: 'Mobile Fitness App',
      description: 'Aplicación móvil multiplataforma para seguimiento de ejercicios y planes de entrenamiento personalizados.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'GetX'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];
