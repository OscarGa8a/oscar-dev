import type { Locale } from './index';

/** Copy for /servicios/* and /contacto/ (ES/EN). Source: plan-v2.md §1 and confirmed facts. No invented metrics, testimonials or SLAs. */

type Item = { t: string; d: string };
type QA = { q: string; a: string };
export interface ServiceCopy {
  title: string; description: string; eyebrow: string; h1a: string; h1b: string; lead: string;
  card: string; incH: { eyebrow: string; a: string; b: string }; includes: Item[];
  casesH?: { eyebrow: string; a: string; b: string }; cases: string[];
  price: string; faq: QA[];
}
export interface Service { key: string; slug: Record<Locale, string>; es: ServiceCopy; en: ServiceCopy }

export const serviceUrl = (s: Service, lang: Locale) => (lang === 'es' ? `/servicios/${s.slug.es}/` : `/en/services/${s.slug.en}/`);
export const servicesIndexUrl = (lang: Locale) => (lang === 'es' ? '/servicios/' : '/en/services/');
export const contactUrl = (lang: Locale) => (lang === 'es' ? '/contacto/' : '/en/contact/');

const quoteEs = 'Cotización cerrada según alcance, por escrito antes de empezar. Dominio y hosting se pagan aparte a tu proveedor.';
const quoteEn = 'Fixed quote by scope, in writing before we start. Domain and hosting are paid directly to your provider.';
const ownEs = { q: '¿El código y el sitio quedan a mi nombre?', a: 'Sí. Código, dominio y accesos son tuyos.' };
const ownEn = { q: 'Do I own the code and the site?', a: 'Yes. The code, domain and access are yours.' };

export const services: Service[] = [
  {
    key: 'landing', slug: { es: 'landing-pages', en: 'landing-pages' },
    es: {
      title: 'Landing pages desde COP 600.000 | OscarDev',
      description: 'Landing rápida y enfocada en convertir: WhatsApp, formulario y SEO técnico. Desde COP 600.000 con tu dominio y hosting.',
      eyebrow: 'Landing pages', h1a: 'Landing pages que convierten', h1b: 'visitas en contactos',
      lead: 'Una página enfocada en un servicio, una campaña o un negocio que empieza: clara, rápida en el celular y con un solo siguiente paso, escribirte.',
      card: 'Una página enfocada en un servicio o campaña. Desde COP 600.000 o USD 200.',
      incH: { eyebrow: 'Qué incluye', a: 'Todo lo necesario', b: 'para recibir contactos' },
      includes: [
        { t: 'Diseño a medida', d: 'Adaptado a tu marca y pensado primero para el celular.' },
        { t: 'WhatsApp y formulario', d: 'Botón de WhatsApp y/o formulario de contacto, según cómo atiendes.' },
        { t: 'SEO técnico básico', d: 'Títulos, descripción, velocidad y datos para Google bien configurados.' },
        { t: 'Publicada a tu nombre', d: 'En tu dominio y hosting; el código y los accesos quedan contigo.' },
      ],
      casesH: { eyebrow: 'Ejemplo real', a: 'Caso Duarte\'s:', b: 'una landing pensada para reservar' }, cases: ['duartes-auto-detailing'],
      price: 'Desde COP 600.000 si ya tienes dominio y hosting (o desde USD 200 para EE. UU.). Plazo: según alcance, acordado por escrito. Pagas cuando ves tu web terminada. No te pido anticipo.',
      faq: [
        { q: '¿Por qué «desde»?', a: 'El precio base cubre una landing estándar. Secciones extra, textos desde cero o integraciones especiales suben el valor; siempre lo verás por escrito antes de empezar.' },
        { q: '¿Y si no tengo dominio ni hosting?', a: 'Te oriento para comprarlos a tu nombre y lo incluimos en la cotización.' },
        ownEs,
      ],
    },
    en: {
      title: 'Landing Pages from USD 200 | OscarDev',
      description: 'Fast, conversion-focused landing pages: WhatsApp or call buttons, contact form and technical SEO. From USD 200 with your domain and hosting.',
      eyebrow: 'Landing pages', h1a: 'Landing pages that turn', h1b: 'visits into leads',
      lead: 'One page focused on a service, a campaign or a new business: clear, fast on mobile and with one next step, contacting you.',
      card: 'One page focused on a service or campaign. From USD 200 or COP 600,000.',
      incH: { eyebrow: 'What’s included', a: 'Everything you need', b: 'to get leads' },
      includes: [
        { t: 'Custom design', d: 'Built around your brand and designed mobile-first.' },
        { t: 'WhatsApp, call and form', d: 'Contact buttons and/or a form, depending on how you work.' },
        { t: 'Basic technical SEO', d: 'Titles, description, speed and structured data set up for Google.' },
        { t: 'Published in your name', d: 'On your domain and hosting; you keep the code and access.' },
      ],
      casesH: { eyebrow: 'Real example', a: 'Duarte\'s case:', b: 'a landing page built for bookings' }, cases: ['duartes-auto-detailing'],
      price: 'From USD 200 (or COP 600,000) if you already have a domain and hosting. Timeline: by scope, agreed in writing. You pay when you see your finished website. No upfront deposit.',
      faq: [
        { q: 'Why “from”?', a: 'The base price covers a standard landing page. Extra sections, copywriting from scratch or special integrations raise it; you always see it in writing first.' },
        { q: 'What if I don’t have a domain or hosting?', a: 'I’ll help you buy them in your name and include it in the quote.' },
        ownEn,
      ],
    },
  },
  {
    key: 'pymes', slug: { es: 'diseno-web-pymes', en: 'small-business-websites' },
    es: {
      title: 'Diseño de páginas web para pymes | OscarDev',
      description: 'Web corporativa a medida para pymes en Colombia: clara, rápida y medible. Plazo según alcance. Cotización según alcance.',
      eyebrow: 'Webs para pymes', h1a: 'Diseño de páginas web', h1b: 'para pymes',
      lead: 'Para empresas con varios servicios que necesitan explicar bien su oferta, generar confianza y llevar a cada cliente al contacto correcto.',
      card: 'Webs de varias páginas para explicar tu oferta y generar confianza.',
      incH: { eyebrow: 'Qué incluye', a: 'Una web que explica', b: 'y lleva al contacto' },
      includes: [
        { t: 'Una página por servicio', d: 'Cada servicio con su página, para explicarlo bien y aparecer en Google.' },
        { t: 'WhatsApp según la intención', d: 'Mensajes prellenados distintos según el servicio que le interesa al cliente.' },
        { t: 'SEO local', d: 'Títulos, descripciones, datos estructurados y dirección para búsquedas de tu ciudad.' },
        { t: 'Rápida y medible', d: 'Carga rápida en el celular y eventos para saber de dónde llegan los contactos.' },
      ],
      casesH: { eyebrow: 'Casos', a: 'Webs para', b: 'empresas reales' }, cases: ['optica-alemania', 'abogados-lobo', 'la-locura-bar'],
      price: quoteEs + ' Plazo: según alcance, acordado por escrito.',
      faq: [
        { q: '¿Podré actualizar el contenido?', a: 'Si el proyecto lo necesita, contemplamos una forma de administrar el contenido. Se define en el alcance para no pagar funciones que no usarás.' },
        { q: '¿Trabajas fuera de Villavicencio?', a: 'Sí: toda Colombia y negocios latinos en EE. UU., de forma remota.' },
        ownEs,
      ],
    },
    en: {
      title: 'Small Business Website Design | OscarDev',
      description: 'Custom multi-page websites for small businesses: clear, fast and measurable. Timeline by scope. Quoted by scope.',
      eyebrow: 'Small business websites', h1a: 'Website design', h1b: 'for small businesses',
      lead: 'For businesses with several services that need to explain their offer, build trust and send each customer to the right contact.',
      card: 'Multi-page websites that explain your offer and build trust.',
      incH: { eyebrow: 'What’s included', a: 'A website that explains', b: 'and converts' },
      includes: [
        { t: 'A page per service', d: 'Each service gets its own page, to explain it and rank on Google.' },
        { t: 'Intent-based contact', d: 'Different pre-filled messages depending on the service the customer wants.' },
        { t: 'Local SEO', d: 'Titles, descriptions, structured data and address for searches in your city.' },
        { t: 'Fast and measurable', d: 'Fast on mobile, with events that show where leads come from.' },
      ],
      casesH: { eyebrow: 'Cases', a: 'Websites for', b: 'real businesses' }, cases: ['optica-alemania', 'abogados-lobo', 'la-locura-bar'],
      price: quoteEn + ' Timeline: by scope, agreed in writing.',
      faq: [
        { q: 'Can I update the content?', a: 'If the project needs it, we include a way to manage content. It is defined in the scope so you don’t pay for features you won’t use.' },
        { q: 'Do you work with US businesses?', a: 'Yes, remotely, in English or Spanish.' },
        ownEn,
      ],
    },
  },
  {
    key: 'tiendas', slug: { es: 'tiendas-online', en: 'ecommerce' },
    es: {
      title: 'Tiendas online a medida en Colombia | OscarDev',
      description: 'Catálogo, carrito y pedidos por WhatsApp o pagos en línea según tu operación. Caso real: Upsteppers. Cotización según alcance.',
      eyebrow: 'Tiendas online', h1a: 'Tiendas online a medida', h1b: 'para vender en Colombia',
      lead: 'Catálogo claro, carrito y un cierre de compra que se adapta a cómo vendes hoy: pedido por WhatsApp con transferencia, o pagos en línea cuando tu operación lo necesita.',
      card: 'Catálogo, carrito y pedidos por WhatsApp o pagos en línea.',
      incH: { eyebrow: 'Qué incluye', a: 'Una tienda hecha', b: 'a tu forma de vender' },
      includes: [
        { t: 'Catálogo y colecciones', d: 'Categorías, colecciones y fichas de producto rápidas en el celular.' },
        { t: 'Cierre a tu medida', d: 'Pedido por WhatsApp con transferencia (Nequi, Daviplata, Bancolombia, Nu o Bre-B) o pagos en línea, según el caso.' },
        { t: 'Imágenes optimizadas', d: 'Fotos que se ven bien y cargan rápido, también con datos móviles.' },
        { t: 'Tallas, envíos y cambios', d: 'Preguntas frecuentes que resuelven dudas antes de escribirte.' },
      ],
      casesH: { eyebrow: 'Caso real', a: 'Una tienda de', b: 'streetwear colombiano' }, cases: ['upsteppers'],
      price: quoteEs + ' El plazo depende del tamaño del catálogo.',
      faq: [
        { q: '¿Necesito pasarela de pagos?', a: 'No siempre. Upsteppers cierra los pedidos por WhatsApp y cobra por transferencia. Si necesitas pagos con tarjeta, integramos una pasarela y sus comisiones las pagas directo al proveedor.' },
        { q: '¿Puedo cargar productos yo mismo?', a: 'Se define en el alcance según el tamaño y la rotación de tu catálogo.' },
        ownEs,
      ],
    },
    en: {
      title: 'Custom Online Store Development | OscarDev',
      description: 'Online stores with clear catalogs and a fast mobile purchase flow, adapted to how you take orders and payments.',
      eyebrow: 'Online stores', h1a: 'Custom online stores', h1b: 'built to sell',
      lead: 'A clear catalog, a cart and a checkout that matches how you sell today: orders via WhatsApp, or online payments when your business needs them.',
      card: 'Catalog, cart and orders via WhatsApp or online payments.',
      incH: { eyebrow: 'What’s included', a: 'A store built around', b: 'how you sell' },
      includes: [
        { t: 'Catalog and collections', d: 'Categories, collections and product pages that load fast on mobile.' },
        { t: 'Checkout that fits', d: 'Orders via WhatsApp and bank transfer, or a payment gateway, depending on the case.' },
        { t: 'Optimized images', d: 'Photos that look sharp and load fast, even on mobile data.' },
        { t: 'Sizes, shipping, returns', d: 'FAQs that answer questions before customers have to ask.' },
      ],
      casesH: { eyebrow: 'Real case', a: 'A Colombian', b: 'streetwear store' }, cases: ['upsteppers'],
      price: quoteEn + ' Timeline depends on catalog size.',
      faq: [
        { q: 'Do I need a payment gateway?', a: 'Not always. Upsteppers closes orders on WhatsApp and takes bank transfers. If you need card payments, we integrate a gateway and you pay its fees directly.' },
        { q: 'Can I add products myself?', a: 'It is defined in the scope based on the size and turnover of your catalog.' },
        ownEn,
      ],
    },
  },
  {
    key: 'reservas', slug: { es: 'sistema-de-reservas', en: 'booking-systems' },
    es: {
      title: 'Sistema de reservas a medida | OscarDev',
      description: 'Reservas, disponibilidad y pagos en un solo panel. Creador de ConectaPlay, plataforma propia para complejos deportivos.',
      eyebrow: 'Sistemas de reservas', h1a: 'Sistemas de reservas', h1b: 'a medida',
      lead: 'Si tu negocio vive de reservas (canchas, salones, citas o espacios) y hoy las manejas por WhatsApp o en cuaderno, las ordenamos en un sistema con disponibilidad en tiempo real.',
      card: 'Reservas, disponibilidad y pagos en un solo panel.',
      incH: { eyebrow: 'Qué incluye', a: 'Reservas sin cruces', b: 'ni trabajo extra' },
      includes: [
        { t: 'Disponibilidad en tiempo real', d: 'El cliente ve qué horarios hay libres y reserva sin escribirte.' },
        { t: 'Pagos', d: 'Cobro en línea o confirmación manual, según tu operación.' },
        { t: 'Panel administrativo', d: 'Agenda, clientes y reservas en un solo lugar para tu equipo.' },
        { t: 'Funciona en el celular', d: 'Web app que se usa sin descargar nada.' },
      ],
      casesH: { eyebrow: 'Producto propio', a: 'Ya construí', b: 'y opero uno' }, cases: ['conectaplay'],
      price: quoteEs + ' Plazo: según alcance, acordado por escrito.',
      faq: [
        { q: '¿Qué es ConectaPlay?', a: 'Un producto propio de OscarDev para complejos deportivos: reservas en tiempo real, pagos y panel administrativo. Yo soy el desarrollador e hice toda la programación; mi hermano es socio e inversionista y financió las herramientas de IA.' },
        { q: '¿Sirve para mi tipo de negocio?', a: 'Si gestionas horarios, cupos o espacios, probablemente sí. En el diagnóstico gratis lo revisamos.' },
        ownEs,
      ],
    },
    en: {
      title: 'Custom Booking System Development | OscarDev',
      description: 'Real-time bookings, payments and admin dashboards. Built by the developer behind ConectaPlay, our own sports booking platform.',
      eyebrow: 'Booking systems', h1a: 'Custom booking systems', h1b: 'for service businesses',
      lead: 'If your business runs on bookings (courts, venues, appointments or spaces) and you manage them by chat or on paper, we move them to a system with real-time availability.',
      card: 'Bookings, availability and payments in one dashboard.',
      incH: { eyebrow: 'What’s included', a: 'Bookings without', b: 'double-booking' },
      includes: [
        { t: 'Real-time availability', d: 'Customers see open slots and book without messaging you.' },
        { t: 'Payments', d: 'Online payment or manual confirmation, depending on how you work.' },
        { t: 'Admin dashboard', d: 'Schedule, customers and bookings in one place for your team.' },
        { t: 'Works on mobile', d: 'A web app that works without downloading anything.' },
      ],
      casesH: { eyebrow: 'Own product', a: 'I already built', b: 'and run one' }, cases: ['conectaplay'],
      price: quoteEn + ' Timeline: by scope, agreed in writing.',
      faq: [
        { q: 'What is ConectaPlay?', a: 'An OscarDev product for sports complexes: real-time bookings, payments, and an admin dashboard. I’m the developer and wrote all the code; my brother is a partner and investor who funded the AI tools.' },
        { q: 'Will it work for my business?', a: 'If you manage time slots, capacity or spaces, probably yes. We review it on the free call.' },
        ownEn,
      ],
    },
  },
  {
    key: 'apps', slug: { es: 'apps-moviles', en: 'mobile-apps' },
    es: {
      title: 'Desarrollo de apps móviles iOS y Android | OscarDev',
      description: 'Apps multiplataforma con panel administrativo y sincronización en tiempo real. Alcance según el problema del negocio.',
      eyebrow: 'Apps móviles', h1a: 'Apps móviles', h1b: 'para negocios',
      lead: 'Apps multiplataforma para iOS, Android y web desde un mismo código, con panel administrativo, pensadas a partir del problema de tu negocio y no de una lista de funciones.',
      card: 'Apps multiplataforma con panel administrativo.',
      incH: { eyebrow: 'Qué incluye', a: 'Una app con alcance', b: 'claro desde el inicio' },
      includes: [
        { t: 'Un código, varias plataformas', d: 'iOS, Android y web desde la misma base (Ionic + Angular).' },
        { t: 'Panel administrativo', d: 'Para gestionar usuarios, contenido y operación.' },
        { t: 'Tiempo real', d: 'Datos sincronizados entre la app y el panel.' },
        { t: 'Lanzamiento por etapas', d: 'Empezar como web app y publicar en tiendas cuando haya usuarios recurrentes.' },
      ],
      casesH: { eyebrow: 'Producto propio', a: 'Una app', b: 'en operación' }, cases: ['conectaplay'],
      price: quoteEs + ' Plazo: según alcance, acordado por escrito. Pagas cuando ves tu app terminada. No te pido anticipo.',
      faq: [
        { q: '¿Por qué empezar como web app?', a: 'Se usa sin descargar nada y permite validar con usuarios reales. Play Store pide una prueba cerrada con 12 testers durante 14 días; conviene llegar con usuarios recurrentes.' },
        { q: '¿Las cuentas de las tiendas van a mi nombre?', a: 'Sí. Las cuentas de desarrollador de Apple y Google se crean a tu nombre y sus tarifas las pagas directo.' },
        ownEs,
      ],
    },
    en: {
      title: 'iOS and Android App Development | OscarDev',
      description: 'Cross-platform apps with an admin dashboard and real-time sync. Scoped around your business problem.',
      eyebrow: 'Mobile apps', h1a: 'Mobile apps', h1b: 'for businesses',
      lead: 'Cross-platform apps for iOS, Android and the web from one codebase, with an admin dashboard, scoped around your business problem rather than a feature list.',
      card: 'Cross-platform apps with an admin dashboard.',
      incH: { eyebrow: 'What’s included', a: 'An app with a clear', b: 'scope from day one' },
      includes: [
        { t: 'One codebase', d: 'iOS, Android and web from the same base (Ionic + Angular).' },
        { t: 'Admin dashboard', d: 'To manage users, content and operations.' },
        { t: 'Real time', d: 'Data synced between the app and the dashboard.' },
        { t: 'Staged launch', d: 'Start as a web app and publish to the stores once there are recurring users.' },
      ],
      casesH: { eyebrow: 'Own product', a: 'An app', b: 'in operation' }, cases: ['conectaplay'],
      price: quoteEn + ' Timeline: by scope, agreed in writing. You pay when you see your finished app. No upfront deposit.',
      faq: [
        { q: 'Why start as a web app?', a: 'People use it without downloading anything and you validate with real users. Google Play requires a closed test with 12 testers for 14 days, so it helps to have recurring users first.' },
        { q: 'Are the store accounts in my name?', a: 'Yes. Apple and Google developer accounts are created in your name and you pay their fees directly.' },
        ownEn,
      ],
    },
  },
  {
    key: 'software', slug: { es: 'software-a-medida', en: 'custom-software' },
    es: {
      title: 'Software a la medida para pymes | OscarDev',
      description: 'Plataformas y paneles para ordenar procesos que hoy viven en Excel o WhatsApp: usuarios, roles, pagos y automatización.',
      eyebrow: 'Software a medida', h1a: 'Software a la medida', h1b: 'para ordenar tu operación',
      lead: 'Cuando tus procesos viven en Excel, cuadernos o chats, construimos una plataforma con usuarios, roles, pagos y automatizaciones que se ajusta a cómo trabaja tu equipo.',
      card: 'Plataformas y paneles para procesos que hoy viven en Excel o WhatsApp.',
      incH: { eyebrow: 'Qué incluye', a: 'Procesos claros,', b: 'menos trabajo manual' },
      includes: [
        { t: 'Usuarios y roles', d: 'Cada persona ve y hace lo que le corresponde.' },
        { t: 'Paneles a medida', d: 'La información que necesitas para decidir, en un solo lugar.' },
        { t: 'Pagos y automatización', d: 'Cobros, avisos y tareas repetitivas que dejan de ser manuales.' },
        { t: 'Atención con IA y control humano', d: 'Como en Riplai (beta): respuestas por WhatsApp con IA y una persona al mando.' },
      ],
      casesH: { eyebrow: 'Productos propios', a: 'Plataformas', b: 'que construyo y opero' }, cases: ['conectaplay', 'riplai'],
      price: quoteEs,
      faq: [
        { q: '¿Por dónde empezamos?', a: 'Por un diagnóstico gratis de 30 minutos: entendemos el proceso y definimos qué conviene construir primero.' },
        { q: '¿Se puede construir por etapas?', a: 'Sí. Empezamos por lo que más tiempo te quita y crecemos desde ahí.' },
        ownEs,
      ],
    },
    en: {
      title: 'Custom Software for Small Businesses | OscarDev',
      description: 'Platforms and dashboards for processes that live in spreadsheets or chats: users, roles, payments and automation.',
      eyebrow: 'Custom software', h1a: 'Custom software', h1b: 'to organize your operations',
      lead: 'When your processes live in spreadsheets, notebooks or chats, we build a platform with users, roles, payments and automations that fits how your team works.',
      card: 'Platforms and dashboards for processes that live in spreadsheets or chats.',
      incH: { eyebrow: 'What’s included', a: 'Clear processes,', b: 'less manual work' },
      includes: [
        { t: 'Users and roles', d: 'Everyone sees and does what they should.' },
        { t: 'Custom dashboards', d: 'The information you need to decide, in one place.' },
        { t: 'Payments and automation', d: 'Charges, reminders and repetitive tasks stop being manual.' },
        { t: 'AI with human control', d: 'Like Riplai (beta): AI-assisted WhatsApp replies with a person in charge.' },
      ],
      casesH: { eyebrow: 'Own products', a: 'Platforms', b: 'I build and run' }, cases: ['conectaplay', 'riplai'],
      price: quoteEn,
      faq: [
        { q: 'Where do we start?', a: 'With a free 30-minute call: we map the process and decide what to build first.' },
        { q: 'Can it be built in stages?', a: 'Yes. We start with what costs you the most time and grow from there.' },
        ownEn,
      ],
    },
  },
];

export const servicesIndex = {
  es: {
    title: 'Servicios de desarrollo web y software | OscarDev',
    description: 'Landing pages, webs para pymes, tiendas online, sistemas de reservas, apps y software a medida en Villavicencio, Colombia y EE. UU.',
    eyebrow: 'Servicios', h1a: 'Servicios de desarrollo', h1b: 'web y software',
    lead: 'Desde una landing para empezar a recibir contactos hasta una plataforma que ordena tu operación. Elige por lo que necesitas hoy.',
    more: 'Ver servicio', price: 'Landing desde COP 600.000 o USD 200. Lo demás, con cotización cerrada según alcance.', pricingLink: 'Ver precios',
  },
  en: {
    title: 'Web Development & Software Services | OscarDev',
    description: 'Landing pages, small business websites, online stores, booking systems, apps and custom software for businesses in the US and Colombia.',
    eyebrow: 'Services', h1a: 'Web development', h1b: 'and software services',
    lead: 'From a landing page that starts bringing in leads to a platform that organizes your operations. Pick what you need today.',
    more: 'View service', price: 'Landing pages from USD 200 or COP 600,000. Everything else gets a fixed quote by scope.', pricingLink: 'See pricing',
  },
} as const;

export const contactPage = {
  es: {
    title: 'Contacto y diagnóstico gratis | OscarDev',
    description: 'Escríbeme a hola@oscardev.co o por WhatsApp al +57 318 020 9851. Diagnóstico de 30 min sin costo. Villavicencio, Colombia y remoto.',
    eyebrow: 'Contacto', h1a: 'Hablemos de', h1b: 'tu proyecto',
    lead: 'Escríbeme por WhatsApp o a hola@oscardev.co. Respondo el mismo día hábil. Cuéntame qué necesita tu negocio. En un diagnóstico gratis de 30 minutos te digo si te sirve una landing, una web, una tienda o una plataforma, trabajemos o no.',
    channelsH: { eyebrow: 'Canales', a: 'Escríbeme', b: 'por donde prefieras' },
    channels: { whatsapp: 'WhatsApp', email: 'Correo', hours: 'Horario', place: 'Ubicación' },
    place: 'Villavicencio, Meta, Colombia · Remoto en toda Colombia y EE. UU.',
    hours: 'Lunes a sábado, 8:00–18:00 (hora Colombia)',
    stepsH: { eyebrow: 'Qué sigue', a: 'Así empezamos', b: '' },
    steps: [
      { t: 'Me cuentas tu negocio', d: 'Por WhatsApp o correo: qué haces, qué quieres lograr y si tienes dominio, logo o fotos.' },
      { t: 'Diagnóstico de 30 minutos', d: 'Revisamos juntos qué necesitas y qué no, sin costo.' },
      { t: 'Propuesta por escrito', d: 'Alcance, precio y tiempos claros antes de empezar.' },
    ],
  },
  en: {
    title: 'Contact & Free Consultation | OscarDev',
    description: 'Email hola@oscardev.co or WhatsApp +57 318 020 9851. Free 30-minute call. Based in Colombia, working remotely with US businesses.',
    eyebrow: 'Contact', h1a: 'Let’s talk about', h1b: 'your project',
    lead: 'Message me on WhatsApp or at hola@oscardev.co. I reply the same business day. Tell me what your business needs. On a free 30-minute call I’ll tell you whether a landing page, a website, a store or a platform fits, whether or not we work together.',
    channelsH: { eyebrow: 'Channels', a: 'Reach me', b: 'wherever you prefer' },
    channels: { whatsapp: 'WhatsApp', email: 'Email', hours: 'Hours', place: 'Location' },
    place: 'Villavicencio, Meta, Colombia · Remote across Colombia and the US',
    hours: 'Monday to Saturday, 8:00–18:00 (Colombia time, UTC-5)',
    stepsH: { eyebrow: 'What’s next', a: 'How we start', b: '' },
    steps: [
      { t: 'Tell me about your business', d: 'By WhatsApp or email: what you do, what you want to achieve and whether you have a domain, logo or photos.' },
      { t: '30-minute call', d: 'We review together what you need and what you don’t, free of charge.' },
      { t: 'Written proposal', d: 'Clear scope, price and timeline before we start.' },
    ],
  },
} as const;
