import type { Locale } from './index';

/** Home V2 copy (docs/page_blueprint.md). Serif-italic accent = the `accent` part of each heading. */
const es = {
  nav: {
    projects: 'Proyectos', services: 'Servicios', pricing: 'Precios', about: 'Sobre mí', contact: 'Contacto',
    cta: 'Cuéntame tu proyecto', menu: 'Menú', open: 'Abrir menú', close: 'Cerrar menú',
    home: 'OscarDev — inicio', primary: 'Navegación principal',
  },
  hero: {
    eyebrow: 'Desarrollo web · Aplicaciones · Soluciones digitales',
    h1a: 'Páginas web, tiendas y sistemas de reservas para negocios en', h1b: 'Villavicencio, Colombia y EE. UU.',
    tagline: 'Ideas que funcionan.',
    desc: 'Desarrollo a medida desde Villavicencio para pymes de toda Colombia y negocios latinos en Estados Unidos, con atención directa en español.',
    cta: 'Cuéntame tu proyecto', secondary: 'Ver proyectos', scroll: 'Scroll para explorar',
    strip: 'Proyectos destacados', all: 'Todos los proyectos', allShort: 'Ver todos',
    portraitPending: 'Oscar García, desarrollador web',
  },
  projects: {
    eyebrow: 'Proyectos destacados',
    h2a: 'Lo que he diseñado y', h2b: 'construido.',
    intro: 'Una selección de trabajos reales: sitios, tiendas y productos digitales que diseñé y desarrollé.',
    prev: 'Proyecto anterior', next: 'Proyecto siguiente', region: 'Carrusel de proyectos',
    swipe: 'Desliza para descubrir', visit: 'Visitar el sitio de', all: 'Ver todos los proyectos',
    progress: 'Progreso del carrusel',
  },
  manifesto: {
    eyebrow: 'Mi filosofía',
    h2a: 'Antes de una pantalla, hay una', h2b: 'decisión.',
    body: 'Cada proyecto comienza con una necesidad concreta y un objetivo claro. La estrategia, el diseño y la tecnología vienen después, para resolver lo que realmente importa.',
    meta: ['Ideas', 'Diseño', 'Tecnología'],
  },
  services: {
    eyebrow: 'Servicios',
    h2a: 'Lo que puedo', h2b: 'construir contigo.',
    intro: 'Webs, tiendas y plataformas digitales pensadas para resolver necesidades reales de tu negocio.',
    meta: ['Soluciones', 'Estrategia', 'Resultados'],
    linkLabel: 'Hablemos de', items: [
      { id: 'sitios-web', title: 'Sitios web profesionales', desc: 'Presenta tu negocio con claridad, genera confianza y facilita el siguiente paso.' },
      { id: 'tiendas-online', title: 'Tiendas online', desc: 'Catálogo, carrito y pedidos por WhatsApp o pagos en línea, según cómo opera tu negocio.' },
      { id: 'aplicaciones', title: 'Aplicaciones web y móviles', desc: 'Apps multiplataforma con panel administrativo, pensadas según el problema de tu negocio.' },
      { id: 'plataformas', title: 'Plataformas a medida', desc: 'Ordena reservas, pagos, usuarios y procesos que hoy viven en Excel o WhatsApp.' },
    ],
  },
  signature: {
    eyebrow: 'Una idea en acción',
    h2a: 'Una necesidad sencilla.', h2b: 'Una experiencia bien pensada.',
    body: 'Encontrar un partido debería ser sencillo. ConectaPlay sirve como ejemplo de cómo convertir esa necesidad en un recorrido: descubrir, elegir e inscribirse.',
    steps: [
      { title: 'Descubrir', desc: 'Encontrar partidos disponibles según el lugar y las preferencias de cada jugador.' },
      { title: 'Elegir', desc: 'Consultar el detalle: lugar, fecha, condiciones y cupos antes de decidir.' },
      { title: 'Inscribirse', desc: 'Confirmar la participación y entender el paso de pago cuando corresponde.' },
    ],
    caption: 'Captura real de ConectaPlay — etapa «Descubrir».',
    cta: 'Hablemos de tu proyecto', secondary: 'Conocer más sobre mí',
  },
  method: {
    eyebrow: 'Cómo trabajamos',
    h2a: 'De una conversación a una', h2b: 'solución real.',
    intro: 'Un proceso claro para que sepas qué estamos definiendo, diseñando y construyendo en cada etapa.',
    resultLabel: 'Resultado',
    steps: [
      { title: 'Hablemos de tu negocio', desc: 'Entendemos qué necesitas, qué problema quieres resolver y qué objetivo buscas conseguir.', result: 'Necesidades y prioridades identificadas' },
      { title: 'Definimos el proyecto', desc: 'Aterrizamos la solución, sus funcionalidades, su alcance y una propuesta de trabajo.', result: 'Alcance y propuesta para revisar' },
      { title: 'Diseñamos y validamos', desc: 'Damos forma a la experiencia y revisamos cómo debería funcionar antes de cerrar el diseño.', result: 'Propuesta visual y funcional revisada' },
      { title: 'Construimos y lanzamos', desc: 'Desarrollamos, probamos y preparamos la solución para su entrega o publicación.', result: 'Entregables según el alcance acordado' },
    ],
  },
  about: {
    eyebrow: 'Sobre mí',
    h2a: 'Hola, soy', h2b: 'Oscar García.',
    lead: 'Desarrollador web y creador de soluciones digitales desde 2020.',
    p1: 'He trabajado en proyectos de comercio electrónico, turismo, deportes y otros sectores, combinando diseño y desarrollo para construir experiencias útiles.',
    p2: 'Me interesa entender cómo funciona cada negocio, qué necesita mejorar y cómo la tecnología puede ayudar sin complicar las cosas.',
    career: 'Frontend & Mobile en Grupo Tecnológico CATO (2020-2025)',
    meta: 'Villavicencio, Colombia · Desarrollo independiente',
    cta: 'Conoce mis proyectos',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    h2a: 'Hablemos', h2b: 'claro.',
    intro: 'Lo que probablemente quieres saber antes de comenzar un proyecto.',
    outro: '¿Tienes otra pregunta?', outroLink: 'Podemos hablar de tu caso.',
    items: [
      { q: 'No sé qué solución necesita mi negocio. ¿Podemos revisarlo?', a: 'Claro. Lo primero es entender qué quieres resolver. A partir de eso podemos identificar si tiene sentido una web, una tienda online, una aplicación o una plataforma a medida.' },
      { q: '¿Cuánto cuesta desarrollar un proyecto?', a: 'Una landing page parte desde COP 600.000 si ya tienes dominio y hosting (o desde USD 200 para clientes en EE. UU.). Webs, tiendas, apps y plataformas se cotizan según el alcance, con una propuesta por escrito antes de empezar.' },
      { q: '¿Cuánto tiempo tarda?', a: 'Una landing o un sitio web suele tomar de 2 a 4 semanas; una plataforma o app, de 6 a 12 semanas. Una app tipo Uber o un marketplace no entra en esos plazos y se cotiza aparte. El cronograma final depende de que el contenido esté listo.' },
      { q: '¿Qué necesito tener preparado?', a: 'Es útil contar con información de tu negocio, servicios, identidad visual y materiales disponibles. Si algo falta, podemos identificarlo durante la definición.' },
      { q: '¿Podré actualizar el contenido después?', a: 'Podemos contemplar una forma de administrar el contenido cuando el proyecto lo necesite. Se define desde el alcance para evitar funciones innecesarias.' },
      { q: '¿Qué sucede después de la entrega?', a: 'La publicación, capacitación, soporte y mantenimiento se especifican en la propuesta, según lo que necesite cada proyecto.' },
    ],
  },
  contact: {
    eyebrow: 'Empecemos a conversar',
    h2a: '¿Qué tienes', h2b: 'en mente?',
    body: 'Cuéntame qué quieres crear, mejorar o solucionar en tu negocio. Revisamos juntos qué solución digital tiene sentido para tu proyecto.',
    cta: 'Cuéntame tu proyecto', email: 'Enviar un correo',
  },
  footer: {
    tagline: 'Soluciones digitales', home: 'Inicio', faq: 'Preguntas frecuentes', local: 'Diseño web en Villavicencio', usa: 'Negocios latinos en EE. UU.',
    made: 'Desarrollado con pasión desde Colombia', rights: 'Todos los derechos reservados.',
    social: 'Redes sociales',
  },
};

type HomeCopy = typeof es;

const en: HomeCopy = {
  nav: {
    projects: 'Projects', services: 'Services', pricing: 'Pricing', about: 'About', contact: 'Contact',
    cta: 'Tell me about your project', menu: 'Menu', open: 'Open menu', close: 'Close menu',
    home: 'OscarDev — home', primary: 'Main navigation',
  },
  hero: {
    eyebrow: 'Web development · Apps · Digital solutions',
    h1a: 'Websites, online stores and booking systems for', h1b: 'small businesses in the US and Colombia',
    tagline: 'Ideas that work.',
    desc: 'Custom, bilingual development from Villavicencio, Colombia, for Latino-owned businesses in the US and local companies, with direct communication in Spanish or English.',
    cta: 'Tell me about your project', secondary: 'See projects', scroll: 'Scroll to explore',
    strip: 'Featured projects', all: 'All projects', allShort: 'See all',
    portraitPending: 'Oscar García, web developer',
  },
  projects: {
    eyebrow: 'Featured projects',
    h2a: 'What I have designed and', h2b: 'built.',
    intro: 'A selection of real work: websites, stores and digital products I designed and developed.',
    prev: 'Previous project', next: 'Next project', region: 'Projects carousel',
    swipe: 'Swipe to explore', visit: 'Visit the website of', all: 'See all projects',
    progress: 'Carousel progress',
  },
  manifesto: {
    eyebrow: 'My philosophy',
    h2a: 'Before a screen, there is a', h2b: 'decision.',
    body: 'Every project starts with a concrete need and a clear goal. Strategy, design and technology come next, to solve what really matters.',
    meta: ['Ideas', 'Design', 'Technology'],
  },
  services: {
    eyebrow: 'Services',
    h2a: 'What I can', h2b: 'build with you.',
    intro: 'Websites, stores and digital platforms designed to solve the real needs of your business.',
    meta: ['Solutions', 'Strategy', 'Results'],
    linkLabel: 'Let’s talk about', items: [
      { id: 'sitios-web', title: 'Professional websites', desc: 'Present your business clearly, build trust and make the next step easy.' },
      { id: 'tiendas-online', title: 'Online stores', desc: 'Clear catalogs and a fast mobile purchase flow, adapted to how you take orders and payments.' },
      { id: 'aplicaciones', title: 'Web & mobile apps', desc: 'Cross-platform apps with an admin dashboard, scoped around your business problem.' },
      { id: 'plataformas', title: 'Custom platforms', desc: 'Real-time bookings, payments, users and admin dashboards for processes that live in spreadsheets or chats.' },
    ],
  },
  signature: {
    eyebrow: 'An idea in action',
    h2a: 'A simple need.', h2b: 'A well-thought-out experience.',
    body: 'Finding a match should be easy. ConectaPlay is an example of turning that need into a journey: discover, choose and sign up.',
    steps: [
      { title: 'Discover', desc: 'Find available matches based on location and each player’s preferences.' },
      { title: 'Choose', desc: 'Check the details — place, date, conditions and spots — before deciding.' },
      { title: 'Sign up', desc: 'Confirm your spot and understand the payment step when it applies.' },
    ],
    caption: 'Real ConectaPlay screenshot — “Discover” stage.',
    cta: 'Let’s talk about your project', secondary: 'More about me',
  },
  method: {
    eyebrow: 'How we work',
    h2a: 'From a conversation to a', h2b: 'real solution.',
    intro: 'A clear process, so you know what we are defining, designing and building at every stage.',
    resultLabel: 'Outcome',
    steps: [
      { title: 'Let’s talk about your business', desc: 'We understand what you need, the problem you want to solve and the goal you are after.', result: 'Needs and priorities identified' },
      { title: 'We define the project', desc: 'We shape the solution, its features, its scope and a work proposal.', result: 'Scope and proposal to review' },
      { title: 'We design and validate', desc: 'We shape the experience and review how it should work before closing the design.', result: 'Reviewed visual and functional proposal' },
      { title: 'We build and launch', desc: 'We develop, test and prepare the solution for delivery or publication.', result: 'Deliverables as per the agreed scope' },
    ],
  },
  about: {
    eyebrow: 'About me',
    h2a: 'Hi, I’m', h2b: 'Oscar García.',
    lead: 'Web developer and digital solutions builder since 2020.',
    p1: 'I have worked on e-commerce, tourism, sports and other projects, combining design and development to build useful experiences.',
    p2: 'I care about understanding how each business works, what it needs to improve and how technology can help without making things complicated.',
    career: 'Frontend & Mobile at Grupo Tecnológico CATO (2020-2025)',
    meta: 'Villavicencio, Colombia · Independent development',
    cta: 'See my projects',
  },
  faq: {
    eyebrow: 'FAQ',
    h2a: 'Let’s be', h2b: 'clear.',
    intro: 'What you probably want to know before starting a project.',
    outro: 'Have another question?', outroLink: 'We can talk about your case.',
    items: [
      { q: 'I’m not sure what my business needs. Can we figure it out?', a: 'Of course. The first step is understanding what you want to solve. From there we can see whether a website, an online store, an app or a custom platform makes sense.' },
      { q: 'How much does a project cost?', a: 'Landing pages start from USD 200. Websites, online stores, apps and booking platforms are quoted by scope, with a fixed written proposal before we start.' },
      { q: 'How long does it take?', a: 'A landing page or website usually takes 2–4 weeks; a platform or app, 6–12 weeks. An Uber-style app or a marketplace does not fit those timelines and is quoted separately. The final timeline depends on having the content ready.' },
      { q: 'What do I need to have ready?', a: 'It helps to have information about your business, services, visual identity and available materials. If something is missing, we can identify it during definition.' },
      { q: 'Will I be able to update the content later?', a: 'We can include a way to manage content when the project needs it. It is defined in the scope to avoid unnecessary features.' },
      { q: 'What happens after delivery?', a: 'Publishing, training, support and maintenance are specified in the proposal, according to what each project needs.' },
    ],
  },
  contact: {
    eyebrow: 'Let’s start talking',
    h2a: 'What do you', h2b: 'have in mind?',
    body: 'Tell me what you want to create, improve or solve in your business. Together we’ll work out which digital solution makes sense for your project.',
    cta: 'Tell me about your project', email: 'Send an email',
  },
  footer: {
    tagline: 'Digital solutions', home: 'Home', faq: 'FAQ', local: 'Web design in Villavicencio', usa: 'Hispanic businesses in the US',
    made: 'Built with passion in Colombia', rights: 'All rights reserved.',
    social: 'Social media',
  },
};

export const homeCopy: Record<Locale, HomeCopy> = { es, en };
export const homeBase = (lang: Locale) => (lang === 'es' ? '/' : '/en/');
