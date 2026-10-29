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
    robotMessages: ['Flutter en el celular, NestJS en el servidor. Combinación favorita.', 'Siete apps Flutter en producción y contando.', 'Café, Docker y PostgreSQL. En ese orden.', 'Lima, GMT-5. Casi siempre en línea.'],
  },

  person: {
    name: 'Jhaser Abner Meza Sihui',
    shortName: 'Jhaser Meza',
    role: 'Ingeniero de Sistemas · Full Stack, Flutter y Cloud',
    bio:
      'Diseño y construyo sistemas empresariales de punta a punta: arquitectura del backend y la base de datos, interfaz web, apps móviles con Flutter y Kotlin, y despliegue en la nube. Trabajo con metodologías ágiles, me gusta la documentación clara y entrego software que se puede mantener.',
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
        'Diseñé la arquitectura completa del ERP ACID: 15 módulos web y una app móvil en Flutter con 14 módulos, con documentación técnica de casos de uso, diagramas de flujo y manuales de usuario.',
        'Desarrollé la app Flutter del ERP (ventas, compras, cobranza, traslados, despachos, alquileres, préstamos) con BLoC, geolocalización y emisión de comprobantes en PDF desde el celular.',
        'Integré los servicios de SUNAT (SIRE y PLE) para sincronizar datos contables y tributarios de forma automática y cumplir con la facturación electrónica.',
        'Monté pipelines de despliegue continuo con Docker en AWS (ECR) y administro servidores Ubuntu con nginx, PostgreSQL y certificados SSL para varios clientes.',
        'Optimicé consultas y stored procedures en SQL Server, reduciendo los tiempos de respuesta de los reportes financieros y operativos.',
      ],
      stack: ['Flutter', 'Dart', 'NestJS', 'Node.js', 'Angular', 'PostgreSQL', 'SQL Server', 'Docker', 'AWS', 'nginx'],
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
      id: 'control-votacion',
      title: 'Control de votación por QR',
      client: 'Asambleas y sindicatos',
      year: '2026',
      description:
        'App Flutter que lee el QR de la credencial de cada socio y dice al instante si puede votar. Registra la asistencia con foto y firma, genera el reporte en PDF y funciona sin conexión.',
      stack: ['Flutter', 'Dart', 'SQLite', 'mobile_scanner', 'PDF', 'Excel / CSV', 'Android'],
      image: '/projects/control-votacion.jpg',
      details: {
        context:
          'En una asamblea hay que verificar cientos de credenciales en minutos y dejar constancia de quién asistió. La app resuelve la regla de voto en el momento y guarda la evidencia en el teléfono.',
        role: 'Producto completo: diseño, desarrollo, empaquetado y proceso de actualización sin perder datos.',
        highlights: [
          'Escaneo del QR y veredicto a pantalla completa en verde o rojo con el motivo, vibración y datos del socio.',
          'Padrón local en SQLite con importación desde Excel o CSV, alta, edición y búsqueda.',
          'Asistencia por día sin duplicados, con foto y firma dibujada en pantalla; imágenes comprimidas de varios MB a unos 200 KB.',
          'Reporte PDF para imprimir o compartir, y respaldo completo en un archivo .zip con restauración.',
          'Tema claro y oscuro, diseño para teléfono y tablet, ayuda integrada en cada pantalla.',
        ],
      },
    },
    {
      id: 'erp-acid-app',
      title: 'ERP ACID · App móvil',
      client: 'Gorydata',
      year: '2026',
      description:
        'App Flutter para Android e iOS que lleva el ERP al celular: ventas, compras, cobranza, traslados, despachos, alquileres y préstamos, con comprobantes en PDF y accesos según el rol del usuario.',
      stack: ['Flutter', 'Dart', 'BLoC', 'REST', 'Geolocalización', 'PDF', 'Android', 'iOS'],
      image: '/projects/erp-acid-app.jpg',
      details: {
        context:
          'Vendedores, cobradores y almaceneros necesitaban operar fuera de la oficina sin depender de la web. La app usa la misma API que el ERP y muestra sólo los módulos que cada rol tiene habilitados.',
        role: 'Diseño de la app, arquitectura con BLoC, integración con la API y publicación.',
        highlights: [
          '14 módulos: productos, compras, ventas, cuentas por cobrar y pagar, anticipos, devoluciones, traslados, despachos, alquileres, préstamos, cobradores y seguridad.',
          'Flujos de venta y compra con resumen previo antes de guardar, varios métodos de pago y canje.',
          'Comprobantes en PDF para ver y compartir desde el celular; sesión segura con almacenamiento cifrado.',
          'Geolocalización de cobros y despachos en campo.',
          'Manual de usuario ilustrado para capacitar al personal.',
        ],
      },
    },
    {
      id: 'mini-erp-app',
      title: 'Mini ERP · App Flutter',
      client: 'Integra Shop',
      year: '2026',
      description:
        'App Flutter para Android, iOS y Windows que acompaña al punto de venta Integra: ventas, cotizaciones, caja, inventario, kardex, cuentas por cobrar y reportes con gráficas, con permisos por rol tomados del mismo API que la web.',
      stack: ['Flutter', 'Dart', 'BLoC', 'fl_chart', 'REST', 'PDF / Excel', 'Android', 'iOS', 'Windows'],
      image: '/projects/mini-erp-app.jpg',
      details: {
        context:
          'El punto de venta web ya funcionaba; faltaba operar desde el celular y desde equipos Windows en tienda sin duplicar reglas de negocio. La app consume el API gateway de microservicios y muestra sólo las pantallas que el rol tiene habilitadas.',
        role: 'Arquitectura de la app, módulos, integración con el gateway y documentación de la arquitectura para el equipo.',
        highlights: [
          'Más de 20 módulos: ventas, notas de venta, devoluciones, cotizaciones, caja, compras, productos, listas de precios, stock, kardex, traslados, despachos, clientes, proveedores y reportes.',
          'Menú y botones de acción se construyen a partir de los permisos del rol, los mismos que valida el servidor.',
          'Dashboard con cifras, tendencias, categorías y stock bajo usando fl_chart.',
          'Descarga de PDF y Excel, compartir por WhatsApp y correo desde el dispositivo.',
          'Cliente HTTP único con renovación de sesión, tiempos máximos y errores en español listos para mostrar.',
        ],
      },
    },
    {
      id: 'sistema-cbp',
      title: 'Sistema CBP · Colegio de Biólogos',
      client: 'Colegio de Biólogos del Perú',
      year: '2026',
      description:
        'Sistema web de trámites del Colegio de Biólogos del Perú: pre-registro y colegiatura por pasos, paneles por rol, documentos, pagos y un buscador público para verificar la habilidad de un colegiado.',
      stack: ['Angular', 'NestJS', 'TypeORM', 'JWT', 'AWS S3', 'Google APIs', 'PDF', 'Excel'],
      image: '/projects/sistema-cbp.jpg',
      url: 'https://tramites.cbperu.org.pe',
      details: {
        context:
          'Postulantes y colegiados tramitaban su incorporación y verificaban habilidades por canales separados. El Colegio necesitaba un solo sistema con validaciones, documentos y consulta pública.',
        highlights: [
          'Pre-registro en tres pasos y colegiatura por etapas: datos personales, educación y calificación profesional, con avance visible en el panel.',
          'Paneles por rol: el administrador ve indicadores, pendientes y registros; el postulante ve su progreso y descarga su ficha en PDF.',
          'Buscador público por N° de colegiatura, DNI o nombre, con datos enmascarados según la Ley 29733 y verificación anti-bot.',
          'Documentos en AWS S3, correos con nodemailer y exportación a Excel para el equipo administrativo.',
        ],
      },
    },
    {
      id: 'palace-hotel',
      title: 'Palace Hotel · Sistema PMS',
      client: 'Palace Hotel',
      year: '2026',
      description:
        'Sistema de gestión hotelera (PMS) multi-empresa: tablero de habitaciones, recepción, limpieza, mantenimiento, facturación y reportes de ocupación, sobre microservicios NestJS y un panel en Angular.',
      stack: ['Angular', 'NestJS', 'TypeORM', 'PostgreSQL', 'Redis', 'BullMQ', 'JWT', 'AWS S3', 'Firebase'],
      image: '/projects/palace-hotel.jpg',
      details: {
        context:
          'Un hotel necesita ver en tiempo real qué habitación está libre, sucia u ocupada, y coordinar recepción, limpieza y facturación desde el mismo sistema, con varias empresas en una sola instalación.',
        highlights: [
          'Tablero de habitaciones por piso con estado operativo y de limpieza, y alta de huéspedes sin reserva (walk-in).',
          'Panel de inicio con ocupación, llegadas, salidas y huéspedes en casa, calculados desde el API.',
          'Arquitectura de microservicios: IAM, PMS, facturación, notificaciones y gateway, con colas BullMQ.',
          'Acceso por roles y menús configurables, con gestión de usuarios y cambio de contraseña.',
        ],
      },
    },
    {
      id: 'facturacion-electronica',
      title: 'GroupFac · API de facturación electrónica',
      client: 'GroupFac',
      year: '2026',
      description:
        'API multi-empresa para emitir comprobantes electrónicos ante SUNAT: facturas, boletas, notas de crédito y débito, guías de remisión, retenciones, percepciones, resumen diario y bajas. Portal con documentación interactiva y ejemplos listos para copiar.',
      stack: ['.NET 8', 'C#', 'DDD', 'CQRS', 'MediatR', 'FluentValidation', 'EF Core', 'PostgreSQL', 'SOAP SUNAT', 'QuestPDF', 'Cloudflare R2', 'Docker', 'nginx', 'React', 'TypeScript'],
      image: '/projects/groupfac.jpg',
      details: {
        context:
          'Cada empresa registra su RUC, certificado digital y clave SOL, recibe un token y emite primero en el ambiente beta de SUNAT. Al pasar a producción, el token, los correlativos y el código de la integración no cambian.',
        role: 'Arquitectura y desarrollo del backend, integración SOAP con SUNAT, portal de documentación en React y despliegue con Docker.',
        highlights: [
          'Arquitectura DDD por contexto (Company, ElectronicDocument, Shared), cada uno con capas Application, Domain, Infrastructure e Interface.',
          'CQRS con MediatR: un comando por caso de uso (CreateInvoice, CreateCreditNote, CreateDispatchGuide, VoidDocument, RetryDocument) y queries separadas.',
          'Validación con FluentValidation inyectada como pipeline behavior: ninguna petición llega al handler sin validarse.',
          'Emisión idempotente al estilo OSE: el documento se guarda PENDING antes de enviarse, los reintentos reutilizan el registro y un correlativo ya aceptado devuelve 409.',
          'Autenticación por token de empresa en middleware, con contexto de empresa por petición; manejo de errores y logging de peticiones centralizados.',
          'Firma XML con el certificado de cada empresa, envío SOAP a SUNAT (facturas, resúmenes y guías), CDR almacenado y PDF con QR generado con QuestPDF.',
          'Archivos en Cloudflare R2 vía API compatible con S3; despliegue Docker multi-stage en Alpine con nginx como único punto de entrada.',
          'Swagger con esquema de seguridad, endpoint de salud de los servicios SUNAT y respuestas compatibles con Nubefact para migrar integraciones.',
        ],
      },
    },
    {
      id: 'kippu',
      title: 'Kippu · Gestión de condominios',
      client: 'Kippu',
      year: '2025',
      description:
        'App Flutter para administradores y vecinos de condominios: unidades, cuotas y pagos, visitas, paquetes, mantenimiento, comunicados, documentos y gastos, con roles y varios condominios por usuario.',
      stack: ['Flutter', 'Dart', 'BLoC', 'Google Sign-In', 'Facebook Login', 'Pasarela de pagos', 'Notificaciones push'],
      image: '/projects/kippu.jpg',
      details: {
        context:
          'Un mismo usuario puede administrar o vivir en varios condominios. La app separa lo que ve cada rol y cambia de condominio sin volver a iniciar sesión.',
        role: 'Desarrollo de la app Flutter, arquitectura por módulos y pruebas por módulo con reportes.',
        highlights: [
          'Más de 25 módulos: cuotas, pagos con conciliación, pasarela de pagos, visitantes, paquetes, mantenimiento con calificación, reservas de amenidades y tareas.',
          'Cambio de condominio (tenant switch) y roles configurables con permisos por pantalla.',
          'Inicio de sesión con Google y Facebook, y onboarding para vincular unidad.',
          'Reportes de prueba por módulo documentados en el repositorio.',
        ],
      },
    },
    {
      id: 'citatik',
      title: 'Citatik · App de agenda',
      client: 'Citatik',
      year: '2025',
      description:
        'Reservas online para salones, barberías y spas. App Flutter para el personal del negocio: la agenda del día en el celular, confirmaciones por WhatsApp, clientes, bloqueos de horario y notificaciones push. Los clientes reservan desde la web.',
      stack: ['Flutter', 'Dart', 'BLoC', 'Firebase Messaging', 'NestJS', 'Angular', 'Next.js'],
      image: '/projects/citatik-app.jpg',
      url: 'https://citatik.pe',
      details: {
        context:
          'Producto propio: un negocio de belleza publica su enlace de reservas, los clientes eligen servicio, profesional y horario desde la web, y el personal gestiona todo desde la app.',
        role: 'Producto completo: app Flutter, panel web en Angular, landing en Next.js y API de microservicios en NestJS.',
        highlights: [
          'Agenda del día con resumen (citas, por confirmar, atendidas, cobrado), filtro por sucursal y profesional, y actualización automática.',
          'Detalle de cita con llamada o WhatsApp con el mensaje ya escrito; confirmar, reprogramar, marcar atendido o cancelar con motivo.',
          'Nueva cita desde el mostrador, ficha e historial de clientes, bloqueos de horario y vacaciones.',
          'Notificaciones push con Firebase: nuevas reservas y cambios abren la cita directamente.',
          'Modo claro y oscuro según el sistema; misma cuenta que el panel web.',
        ],
      },
    },
    {
      id: 'erp-acid',
      title: 'ERP ACID · Web',
      client: 'Gorydata',
      year: '2025',
      description:
        'ERP para empresas comerciales e industriales: ventas, compras, inventario, contabilidad y facturación electrónica integrada con SUNAT.',
      stack: ['NestJS', 'Angular', 'PostgreSQL', 'SQL Server', 'Docker', 'AWS'],
      image: '/projects/erp-acid-web.jpg',
      details: {
        context:
          'Clientes del sector comercial e industrial necesitaban reemplazar procesos manuales y hojas de cálculo por un sistema único con cumplimiento tributario.',
        role: 'Arquitectura, backend, infraestructura y documentación técnica.',
        highlights: [
          '15 módulos web sobre una misma API que también sirve a la app móvil.',
          'Integración con SIRE y PLE de SUNAT para sincronización contable automática.',
          'Despliegue con Docker en AWS y servidores Ubuntu con nginx y SSL.',
        ],
      },
    },
    {
      id: 'credysur-app',
      title: 'Credysur · App de campo',
      client: 'Credysur',
      year: '2025',
      description:
        'App Android nativa en Kotlin para asesores de campo y comerciales de una microfinanciera: rutas con mapa, visitas, cobranza, ventas a cuotas, cierre de día y aprobaciones, con trabajo sin conexión y sincronización automática.',
      stack: ['Kotlin', 'Android', 'Google Maps', 'Retrofit', 'Room', 'WorkManager', 'Firebase'],
      image: '/projects/credysur-app.jpg',
      details: {
        context:
          'Los asesores visitaban clientes, cobraban y vendían créditos en zonas sin señal. Necesitaban registrar cada gestión en el momento y que se sincronizara sola al reconectar.',
        role: 'Desarrollo de la app Android en Kotlin, integración con la API y manejo de datos sin conexión.',
        highlights: [
          'Rutas y mapa de clientes con ubicación GPS, y visitas de campo con su detalle.',
          'Cobranza: cuotas, deudores, registro de pagos y reportes de pago por el asesor.',
          'Ventas a cuotas con simulador, aprobación de solicitudes y seguimiento de comisiones para comerciales.',
          'Trabajo sin conexión con Room y WorkManager: las operaciones quedan en cola y se envían al reconectar.',
          'Notificaciones push con Firebase y cierre de día con resumen de la jornada.',
        ],
      },
    },
    {
      id: 'aracne-3',
      title: 'Aracne 3',
      client: 'Aracne Report',
      description:
        'Aplicación de gestión de campañas comerciales, publicada en Google Play.',
      stack: ['Android', 'Google Play'],
      url: 'https://play.google.com/store/apps/details?id=com.aracnereport.aracne3',
      image: '/projects/aracne-3.jpg',
    },
    {
      id: 'encuesta-campo-limpio',
      title: 'Encuesta PUA · Campo Limpio',
      client: 'Programa Campo Limpio',
      year: '2024',
      description:
        'App Flutter para aplicar en campo la encuesta a establecimientos que venden plaguicidas agrícolas. Formulario por pasos, evaluación automática del compromiso, indicadores del proyecto y exportación a Excel, todo sin conexión.',
      stack: ['Flutter', 'Dart', 'SQLite', 'Excel', 'Android', 'iOS'],
      image: '/projects/cuestionario.jpg',
      details: {
        context:
          'Los encuestadores visitan comercios en zonas con poca señal y necesitaban registrar 12 preguntas por establecimiento, ver el resultado al instante y entregar los datos ordenados al equipo del proyecto.',
        role: 'Diseño y desarrollo completo de la app, incluido el catálogo de preguntas y la regla de evaluación.',
        highlights: [
          'Formulario de cinco secciones con 12 preguntas generadas desde un catálogo: cambiar una pregunta no exige tocar las pantallas.',
          'Evaluación automática en cuatro niveles, de alto compromiso a prioridad de capacitación, según las respuestas positivas.',
          'Base local SQLite con búsqueda, e indicadores como el porcentaje que conoce el Triple Lavado y el que participa en campañas.',
          'Exportación a Excel para compartir por WhatsApp, correo o Drive; modo claro y oscuro para teléfono y tablet.',
        ],
      },
    },
    {
      id: 'carp-app',
      title: 'CARP · Trazabilidad de señales',
      client: 'CARP',
      year: '2024',
      description:
        'App Flutter que escanea el código QR de cada señal o lámina y muestra su ficha técnica: material, retroflexión, lote, fecha de fabricación y orden de producción.',
      stack: ['Flutter', 'Dart', 'mobile_scanner', 'API REST', 'QR'],
      image: '/projects/carp.jpg',
      details: {
        context:
          'Cada señal fabricada necesita demostrar su origen y sus especificaciones ante el cliente y la autoridad. Con el QR, cualquier persona en campo ve la ficha sin llamar a la fábrica.',
        role: 'Desarrollo de la app: escaneo, consulta a la API y pantallas de ficha técnica.',
        highlights: [
          'Escaneo de QR con enfoque guiado y búsqueda de la ficha en tiempo real.',
          'Ficha con datos generales, especificaciones técnicas, material, serigrafía y desempeño comprobado.',
          'Historial de consultas y ajustes de empresa y contacto.',
        ],
      },
    },
    {
      id: 'credysur',
      title: 'Préstamos y cobranza · Web',
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
  ],

  skills: [
    {
      label: 'Backend',
      items: ['C# / .NET Core', 'ASP.NET Core', 'Entity Framework', 'Dapper', 'Node.js', 'NestJS', 'Java / Spring', 'Hibernate', 'Python / Django'],
    },
    {
      label: 'Móvil',
      items: ['Flutter / Dart', 'BLoC', 'Kotlin (Android)', 'Ionic', 'Geolocalización', 'Almacenamiento seguro', 'PDF en el dispositivo', 'Publicación en Play Store y App Store'],
    },
    {
      label: 'Frontend',
      items: ['Angular', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Bootstrap', 'PrimeNG'],
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
