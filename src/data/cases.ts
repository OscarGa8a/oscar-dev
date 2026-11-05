import type { Locale } from '../i18n/index';

/**
 * Case study copy (ES/EN). Source: plan-v2.md §3 + portafolio.md §1–2, checked against the live sites (5 nov 2026).
 * No invented results or testimonials: the "result" block only states verifiable facts.
 */
export interface CaseCopy {
  title: string; description: string;
  h1a: string; h1b: string; lead: string;
  facts: [string, string][];
  context: string; challenge: string; solution: string[]; tech: string[]; result: string;
  extra?: string;
  cta: { q: string; label: string; href: string };
}
export type CaseEntry = Record<Locale, CaseCopy>;

export const caseLabels = {
  es: { crumbs: 'Proyectos', context: 'Contexto', challenge: 'El reto', solution: 'La solución', tech: 'Cómo está hecha', result: 'Resultado', visit: 'Visitar el sitio', facts: 'Ficha', sector: 'Sector', city: 'Ubicación', type: 'Tipo', stack: 'Tecnología', kind: 'Relación', more: 'Más proyectos', all: 'Ver todos los proyectos' },
  en: { crumbs: 'Projects', context: 'Context', challenge: 'The challenge', solution: 'The solution', tech: 'How it’s built', result: 'Result', visit: 'Visit the site', facts: 'Overview', sector: 'Industry', city: 'Location', type: 'Type', stack: 'Technology', kind: 'Relationship', more: 'More projects', all: 'See all projects' },
} as const;

export const cases: Record<string, CaseEntry> = {
  'optica-alemania': {
    es: {
      title: 'Caso Óptica Alemania: web para óptica en Villavicencio',
      description: 'Web de optometría para Óptica Alemania en Barzal, Villavicencio: servicios, procedimientos, atención infantil, monturas y WhatsApp.',
      h1a: 'Óptica Alemania:', h1b: 'una web que explica la salud visual y lleva a la cita',
      lead: 'Sitio para una óptica de Villavicencio que necesitaba explicar servicios clínicos en palabras sencillas y convertir cada visita en una consulta con contexto.',
      facts: [['Stack', 'Astro'], ['Sede', 'Barzal, Villavicencio']],
      context: 'Óptica Alemania es una óptica con sede en la Calle 35 #34-36, Barzal, Villavicencio (Meta). Ofrece atención optométrica, evaluaciones especializadas y venta de monturas.',
      challenge: 'La mayoría de la gente no conoce por su nombre los servicios clínicos de una óptica. La web debía explicarlos con lenguaje claro y responsable, mostrar la sede y la tecnología para generar confianza, y llevar cada consulta a WhatsApp sabiendo qué la motivó.',
      solution: [
        'Inicio con una propuesta directa —«Cuidamos tu visión con experiencia y tecnología»— y botón para consultar por WhatsApp.',
        'Servicios explicados uno a uno: optometría especializada, lentes de contacto, presión intraocular, ojo seco y urgencias oculares.',
        'Página de procedimientos con la tecnología en acción, sección de atención visual infantil y monturas por segmento.',
        'Sede en Barzal con galería, «Cómo llegar», horarios y beneficios del Club Descuentos Cofrem.',
        'Unas 14 variantes de WhatsApp con mensaje prellenado según la intención (ojo seco, lentes de contacto, Cofrem, monturas, infantil…), para saber qué servicio motivó cada consulta.',
      ],
      tech: [
        'Astro: páginas estáticas que cargan rápido en el celular.',
        'Varias páginas indexables (inicio, nosotros, servicios, procedimientos, contacto) con title y descripción propios, sitemap activo y robots abierto.',
        'Enlaces de WhatsApp segmentados por servicio para medir el interés real.',
      ],
      result: 'El sitio está en línea en opticaalemania.co. No publico cifras de resultados sin autorización del cliente.',
      cta: { q: '¿Tienes un consultorio, una óptica o un negocio de salud en Villavicencio?', label: 'Ver diseño web en Villavicencio', href: '/diseno-web-villavicencio/' },
    },
    en: {
      title: 'Óptica Alemania Case Study | OscarDev',
      description: 'Optometry website for Óptica Alemania in Villavicencio, Colombia: services, procedures, children’s eye care, frames and WhatsApp by intent.',
      h1a: 'Óptica Alemania:', h1b: 'a website that explains eye health and leads to an appointment',
      lead: 'A website for an optician in Villavicencio that needed to explain clinical services in plain language and turn every visit into an inquiry with context.',
      facts: [['Stack', 'Astro'], ['Location', 'Barzal, Villavicencio']],
      context: 'Óptica Alemania is an optician located at Calle 35 #34-36, Barzal, Villavicencio (Meta, Colombia), offering eye exams, specialized evaluations and frames.',
      challenge: 'Most people don’t know clinical eye services by name. The site had to explain them clearly and responsibly, show the location and equipment to build trust, and send every inquiry to WhatsApp with its context.',
      solution: [
        'A direct homepage promise — “We care for your vision with experience and technology” — with a WhatsApp button.',
        'Services explained one by one: specialized optometry, contact lenses, eye pressure, dry eye and eye emergencies.',
        'A procedures page showing the technology in action, a children’s eye care section and frames by segment.',
        'The Barzal location with gallery, directions, opening hours and the Cofrem discount club.',
        'About 14 pre-filled WhatsApp messages by intent (dry eye, contact lenses, Cofrem, frames, children…), so the business knows which service triggered each inquiry.',
      ],
      tech: [
        'Astro: static pages that load fast on mobile.',
        'Several indexable pages with their own titles and descriptions, an active sitemap and open robots.txt.',
        'WhatsApp links segmented by service to measure real interest.',
      ],
      result: 'The site is live at opticaalemania.co. I don’t publish result figures without the client’s permission.',
      cta: { q: 'Running a clinic or health business?', label: 'Tell me about your project', href: '/en/services/small-business-websites/' },
    },
  },
  'abogados-lobo': {
    es: {
      title: 'Caso Abogados Lobo: web para abogados en Bucaramanga',
      description: 'Web para una firma de familia y sucesiones en Bucaramanga: 5 áreas con página propia, blog jurídico, FAQ y consulta directa por WhatsApp.',
      h1a: 'Abogados Lobo:', h1b: 'una web para abogados de familia en Bucaramanga',
      lead: 'Quien busca un abogado de familia suele estar en un momento delicado. Esta web transmite confianza, explica cada proceso en palabras sencillas y lleva a la consulta sin fricción.',
      facts: [['Stack', 'Astro + Cloudflare'], ['Sede', 'Centro, Bucaramanga']],
      context: 'Abogados Lobo es una firma de derecho de familia y sucesiones fundada en 2010, con despacho en el centro de Bucaramanga. Atiende el área metropolitana, todo Santander y clientes virtuales de otras ciudades y del exterior.',
      challenge: 'Transmitir confianza y reserva, explicar procesos legales con palabras claras y posicionar en Google búsquedas locales como «divorcio Bucaramanga» o «abogados de sucesiones Bucaramanga».',
      solution: [
        'Inicio con H1 local —«Abogados de Familia y Sucesiones en Bucaramanga»— y dos acciones claras: solicitar asesoría o llamar.',
        'Cinco áreas jurídicas, cada una con su propia página: divorcio de mutuo acuerdo, demanda de divorcio, sucesiones, custodia, visitas y alimentos, y unión marital de hecho.',
        'Presentación de la firma y su equipo, con los pilares de confidencialidad, asesoría personalizada y acompañamiento completo.',
        'Blog jurídico y preguntas frecuentes sobre honorarios, cobertura, tiempos y primer contacto.',
        'WhatsApp segmentado: cada botón abre la conversación con un mensaje prellenado según la intención (asesoría, caso confidencial, representación…).',
      ],
      tech: [
        'Astro servido por Cloudflare, con HTTPS estricto y cabeceras de seguridad.',
        'Cada página con su propio title, descripción y canonical; un solo H1 por página.',
        'Datos estructurados LegalService y FAQPage, sitemap y robots abierto también a buscadores con IA.',
        'Google Tag Manager para medir.',
      ],
      result: 'El sitio está en línea en abogadosbucaramanga.com. No publico cifras de resultados sin autorización del cliente.',
      cta: { q: '¿Tienes una firma o un consultorio profesional?', label: 'Hablemos de tu web', href: '/servicios/diseno-web-pymes/' },
    },
    en: {
      title: 'Abogados Lobo Case Study: Law Firm Website | OscarDev',
      description: 'Website for a family and probate law firm in Bucaramanga, Colombia: 5 practice areas with their own pages, legal blog, FAQ and WhatsApp.',
      h1a: 'Abogados Lobo:', h1b: 'a website for family lawyers in Bucaramanga',
      lead: 'People looking for a family lawyer are usually going through a hard time. This site builds trust, explains each process in plain words and leads to a consultation without friction.',
      facts: [['Stack', 'Astro + Cloudflare'], ['Location', 'Downtown Bucaramanga']],
      context: 'Abogados Lobo is a family and probate law firm founded in 2010 in downtown Bucaramanga, Colombia, serving the metro area, the Santander region and remote clients from other cities and abroad.',
      challenge: 'Convey trust and discretion, explain legal processes clearly and rank for local searches such as “divorce Bucaramanga” or “probate lawyers Bucaramanga”.',
      solution: [
        'A homepage with a local H1 and two clear actions: request advice or call.',
        'Five practice areas, each with its own page: uncontested divorce, contested divorce, probate, custody and child support, and common-law unions.',
        'The firm and its team, with its pillars: confidentiality, personal advice and full support.',
        'A legal blog and an FAQ on fees, coverage, timelines and first contact.',
        'Segmented WhatsApp: each button opens the chat with a pre-filled message by intent.',
      ],
      tech: [
        'Astro served by Cloudflare, with strict HTTPS and security headers.',
        'Every page with its own title, description and canonical; one H1 per page.',
        'LegalService and FAQPage structured data, sitemap and robots.txt open to AI search engines.',
        'Google Tag Manager for measurement.',
      ],
      result: 'The site is live at abogadosbucaramanga.com. I don’t publish result figures without the client’s permission.',
      cta: { q: 'Running a firm or professional practice?', label: 'Let’s talk about your website', href: '/en/services/small-business-websites/' },
    },
  },
  conectaplay: {
    es: {
      title: 'ConectaPlay: plataforma de reservas deportivas | OscarDev',
      description: 'Producto propio: reservas en tiempo real, pagos, panel administrativo y torneos para complejos deportivos. Cómo se construyó.',
      h1a: 'ConectaPlay:', h1b: 'nuestra plataforma para complejos deportivos',
      lead: 'Un producto propio. Yo soy el desarrollador e hice toda la programación: reservas, pagos, panel del administrador y torneos. Mi hermano es socio e inversionista: financió el proyecto pagando las herramientas de IA.',
      facts: [['Stack', 'Ionic + Angular · Astro'], ['Piloto', 'Villavicencio, Meta']],
      context: 'ConectaPlay conecta a jugadores de fútbol (5v5, 7v7) y voleibol con canchas cercanas. Los jugadores encuentran partidos, se unen y pagan desde el celular; los dueños publican su cancha, sus precios y su disponibilidad.',
      challenge: 'En muchos complejos, las reservas, los pagos y la disponibilidad se manejan a mano, por WhatsApp o en un cuaderno: decenas de mensajes para armar un partido, cobros en efectivo, cruces de horario y canchas vacías sin aviso.',
      solution: [
        'Para jugadores: búsqueda de partidos por mapa o lista, filtros por deporte, hora y formato, pago en la app y confirmación inmediata.',
        'Para dueños: publicación de la cancha con fotos, precios y disponibilidad; los jugadores se inscriben y pagan solos.',
        'Panel con partidos, ingresos, ocupación y agenda digital, y organización de torneos locales.',
        'Modelo publicado sin mensualidad: una comisión por partido cobrado.',
      ],
      tech: [
        'App en Ionic + Angular que hoy se ofrece como web app en app.conectaplay.co: funciona en el navegador del celular, sin descargar nada.',
        'Pagos integrados con Wompi.',
        'Landing en Astro (conectaplay.co), rápida e indexable.',
        'Se publicará en las tiendas de apps cuando tenga usuarios recurrentes: Play Store pide una prueba cerrada con 12 testers durante 14 días.',
      ],
      result: 'Hoy está en operación en app.conectaplay.co, con Villavicencio como ciudad piloto.',
      cta: { q: '¿Tu negocio vive de reservas? Ya construí y opero un sistema así de punta a punta.', label: 'Hablemos de tu sistema de reservas', href: '/servicios/sistema-de-reservas/' },
    },
    en: {
      title: 'ConectaPlay: Sports Facility Booking Platform | OscarDev',
      description: 'Our own product: real-time bookings, payments, admin dashboard and tournaments for sports complexes. How it was built.',
      h1a: 'ConectaPlay:', h1b: 'our sports facility booking platform',
      lead: 'Our own product. I’m the developer and wrote all of the code: bookings, payments, the owner dashboard and tournaments. My brother is a partner and investor: he funded the project by paying for the AI tools.',
      facts: [['Stack', 'Ionic + Angular · Astro'], ['Pilot', 'Villavicencio, Colombia']],
      context: 'ConectaPlay connects football (5v5, 7v7) and volleyball players with nearby pitches. Players find games, join and pay from their phone; owners list their pitch, prices and availability.',
      challenge: 'Many sports complexes run bookings, payments and availability by hand, over WhatsApp or in a notebook: dozens of messages to set up a game, cash payments, double bookings and empty pitches.',
      solution: [
        'For players: find games on a map or list, filter by sport, time and format, pay in the app and get instant confirmation.',
        'For owners: list the pitch with photos, prices and availability; players sign up and pay on their own.',
        'A dashboard with games, revenue, occupancy and a digital schedule, plus local tournaments.',
        'A published model with no monthly fee: a commission per paid game.',
      ],
      tech: [
        'Built with Ionic + Angular and offered today as a web app at app.conectaplay.co: it runs in the phone browser, nothing to download.',
        'Payments integrated with Wompi.',
        'Astro landing page (conectaplay.co), fast and indexable.',
        'App store release will come once it has recurring users: Play Store requires a closed test with 12 testers for 14 days.',
      ],
      result: 'It is live at app.conectaplay.co, with Villavicencio as the pilot city.',
      cta: { q: 'Does your business run on bookings? I’ve built and run one of these end to end.', label: 'Let’s talk about your booking system', href: '/en/services/booking-systems/' },
    },
  },
  'duartes-auto-detailing': {
    es: {
      title: 'Caso Duarte’s: web para detailing en EE. UU. | OscarDev',
      description: 'Web premium con reservas para un servicio de detailing móvil en Bay Area, California. Contexto, reto y solución.',
      h1a: 'Duarte’s Auto Detailing:', h1b: 'una web premium pensada para reservas',
      lead: 'Sitio en inglés para un negocio latino de detailing móvil en Bay Area. Además de la web, llevo el marketing y el contenido de la marca junto con un socio.',
      facts: [['Stack', 'Astro'], ['Idioma', 'Inglés']],
      context: 'Duarte’s Auto Detailing ofrece detailing móvil premium en Bay Area, California: limpieza interior, corrección de pintura y recubrimiento cerámico en la casa u oficina del cliente.',
      challenge: 'Transmitir un servicio premium a un público estadounidense y convertir las visitas en reservas.',
      solution: [
        'Web oscura y elegante con una propuesta clara: «Diamond-Level Mobile Detailing».',
        'Botón «Book Your Service» siempre a mano.',
        'Paquetes destacados, servicios, testimonios del negocio y galería de trabajos.',
      ],
      tech: [
        'Astro: carga rápida en el celular, que es desde donde llega la mayoría de reservas de servicios a domicilio.',
        'Todo el contenido en inglés para su mercado.',
      ],
      extra: 'La relación no termina en la web: junto con un socio me encargo del marketing y del contenido de la marca.',
      result: 'El sitio está en línea en duartesautodetailing.com. No publico cifras de resultados sin autorización del cliente.',
      cta: { q: '¿Tienes un negocio latino en EE. UU.?', label: 'Landing desde USD 200', href: '/paginas-web-negocios-latinos-usa/' },
    },
    en: {
      title: 'Duarte’s Case Study: Mobile Detailing Website | OscarDev',
      description: 'Premium website with booking for a mobile auto detailing business in the Bay Area, California.',
      h1a: 'Duarte’s Auto Detailing:', h1b: 'a premium site built for bookings',
      lead: 'An English website for a Latino-owned mobile detailing business in the Bay Area. Beyond the site, I handle the brand’s marketing and content together with a partner.',
      facts: [['Stack', 'Astro'], ['Language', 'English']],
      context: 'Duarte’s Auto Detailing offers premium mobile detailing across the Bay Area, California: interior detailing, paint correction and ceramic coating at the customer’s home or office.',
      challenge: 'Convey a premium service to a US audience and turn visits into bookings.',
      solution: [
        'A dark, elegant site with a clear promise: “Diamond-Level Mobile Detailing”.',
        'A “Book Your Service” button always within reach.',
        'Featured packages, services, the business’s customer reviews and a gallery of work.',
      ],
      tech: [
        'Astro: fast on mobile, where most at-home service bookings happen.',
        'All content in English for its market.',
      ],
      extra: 'The relationship goes beyond the website: together with a partner, I handle the brand’s marketing and content.',
      result: 'The site is live at duartesautodetailing.com. I don’t publish result figures without the client’s permission.',
      cta: { q: 'Running a Hispanic-owned business in the US?', label: 'Landing pages from USD 200', href: '/en/hispanic-business-websites/' },
    },
  },
  upsteppers: {
    es: {
      title: 'Caso Upsteppers: tienda de streetwear en Colombia',
      description: 'Tienda online rápida para una marca de streetwear de Villavicencio: catálogo, colecciones limitadas y pedidos por WhatsApp.',
      h1a: 'Upsteppers:', h1b: 'tienda online para streetwear colombiano',
      lead: 'Una tienda propia, rápida y con identidad para lanzar colecciones sin depender de constructores lentos.',
      facts: [['Stack', 'Angular SSR · Cloudinary'], ['Pedidos', 'WhatsApp + transferencia']],
      context: 'Upsteppers es una marca colombiana de streetwear premium de Villavicencio —camisetas oversize, hoodies y ediciones limitadas— con envíos a todo el país.',
      challenge: 'Lanzar colecciones con una tienda propia, rápida y con identidad visual, adaptada a cómo la marca vende hoy.',
      solution: [
        'Catálogo por categorías (camisas, camisetas, pantalones, sudaderas) y colecciones.',
        'Carrito y cierre del pedido por WhatsApp.',
        'Pagos coordinados por transferencia (Nequi, Daviplata, Bancolombia), como opera la marca. Sin pasarela de pago.',
        'Preguntas frecuentes sobre tallas, envíos y cambios.',
      ],
      tech: [
        'Páginas generadas en servidor (Angular SSR) para que carguen rápido y Google las lea bien.',
        'Imágenes optimizadas automáticamente (Cloudinary) para que el catálogo se vea bien en el celular.',
      ],
      result: 'La tienda está en línea en upsteppers.co. No publico cifras de resultados sin autorización del cliente.',
      cta: { q: '¿Quieres vender tu marca en línea?', label: 'Ver tiendas online', href: '/servicios/tiendas-online/' },
    },
    en: {
      title: 'Upsteppers Case Study: Streetwear Store | OscarDev',
      description: 'Fast online store for a streetwear brand from Villavicencio, Colombia: catalog, limited collections and orders via WhatsApp.',
      h1a: 'Upsteppers:', h1b: 'an online store for Colombian streetwear',
      lead: 'A fast store of its own, with a strong identity, to launch collections without relying on slow site builders.',
      facts: [['Stack', 'Angular SSR · Cloudinary'], ['Orders', 'WhatsApp + bank transfer']],
      context: 'Upsteppers is a premium Colombian streetwear brand from Villavicencio — oversized tees, hoodies and limited editions — shipping nationwide.',
      challenge: 'Launch collections with a fast store of its own and a strong visual identity, matched to how the brand sells today.',
      solution: [
        'Catalog by category (shirts, tees, pants, hoodies) and collections.',
        'Cart with checkout via WhatsApp.',
        'Payments by bank transfer (Nequi, Daviplata, Bancolombia), the way the brand works. No card payment gateway.',
        'FAQ on sizes, shipping and exchanges.',
      ],
      tech: [
        'Server-rendered pages (Angular SSR) so they load fast and Google reads them well.',
        'Automatically optimized images (Cloudinary) so the catalog looks good on mobile.',
      ],
      result: 'The store is live at upsteppers.co. I don’t publish result figures without the client’s permission.',
      cta: { q: 'Want to sell your brand online?', label: 'See online stores', href: '/en/services/ecommerce/' },
    },
  },
  'la-locura-bar': {
    es: {
      title: 'Caso La Locura Bar: web para bar en Villavicencio',
      description: 'Web con carta, reservas por WhatsApp y ubicación para un bar con bolirana y fútbol en Villavicencio. Contexto y solución.',
      h1a: 'La Locura Bar:', h1b: 'carta, reservas y presencia local',
      lead: 'Una web rápida en el celular, que es donde se decide el plan de la noche.',
      facts: [['Stack', 'Astro'], ['Barrio', 'El Embudo, Villavicencio']],
      context: 'La Locura es un bar de barrio en Villavicencio con bolirana, música, baile y fútbol en pantalla gigante.',
      challenge: 'Comunicar el ambiente y la propuesta, mostrar la carta y facilitar que la gente reserve o llegue.',
      solution: [
        'Portada con la propuesta del bar y el horario (martes a domingo, desde las 6 p. m.) y dos acciones claras: reservar mesa o ver la carta.',
        'Sección «Qué se vive aquí» con los seis planes del bar (bolirana, música, cerveza fría, fútbol en pantalla gigante, baile y parche de barrio) y una galería del lugar.',
        'Carta destacada por categorías (cervezas personales, para compartir y licores) con precios.',
        'Calculadora «Calcula tu cuenta» para estimar cuánto sale el plan antes de llegar.',
        'Reserva de mesa por WhatsApp, ubicación con indicaciones, preguntas frecuentes y versión en inglés.',
      ],
      tech: ['Astro: páginas estáticas que cargan rápido en el celular.', 'Title y descripción pensados para búsquedas locales.'],
      result: 'El sitio está en línea en lalocurabar.com.co. No publico cifras de resultados sin autorización del cliente.',
      cta: { q: '¿Tienes un bar o restaurante en Villavicencio?', label: 'Ver diseño web en Villavicencio', href: '/diseno-web-villavicencio/' },
    },
    en: {
      title: 'La Locura Bar Case Study | OscarDev',
      description: 'Website with menu, WhatsApp table bookings and directions for a neighborhood bar with bolirana and football in Villavicencio, Colombia.',
      h1a: 'La Locura Bar:', h1b: 'menu, bookings and local presence',
      lead: 'A website that is fast on mobile, where the plan for the night gets decided.',
      facts: [['Stack', 'Astro'], ['Neighborhood', 'El Embudo, Villavicencio']],
      context: 'La Locura is a neighborhood bar in Villavicencio, Colombia, with bolirana, music, dancing and football on a giant screen.',
      challenge: 'Communicate the vibe, show the menu and make it easy to book a table or find the place.',
      solution: [
        'Homepage with the bar’s pitch and hours (Tuesday to Sunday, from 6 p.m.) and two clear actions: book a table or see the menu.',
        'A “what happens here” section with the bar’s six plans (bolirana, music, cold beer, football on a giant screen, dancing and a neighborhood vibe) plus a photo gallery.',
        'Featured menu by category (single beers, beers to share and spirits) with prices.',
        'A “calculate your tab” tool to estimate the night’s cost before arriving.',
        'Table booking via WhatsApp, directions, FAQ and an English version.',
      ],
      tech: ['Astro: static pages that load fast on mobile.', 'Titles and descriptions written for local searches.'],
      result: 'The site is live at lalocurabar.com.co. I don’t publish result figures without the client’s permission.',
      cta: { q: 'Have a business that needs a fast website?', label: 'Tell me about your project', href: '/en/services/small-business-websites/' },
    },
  },
};

