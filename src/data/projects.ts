import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n/index';
import conectaplay from '../assets/projects/conectaplay.png';
import upsteppers from '../assets/projects/upsteppers.png';
import lalocura from '../assets/projects/lalocura.png';
import optica from '../assets/projects/optica-alemania.jpg';
import abogados from '../assets/projects/abogados-lobo.jpg';
import duartes from '../assets/projects/duartes.jpg';
import riplai from '../assets/projects/riplai.jpg';
import cLaventanilla from '../assets/projects/c-laventanilla.jpg';
import cClavelatina from '../assets/projects/c-clavelatina.jpg';
import cBallet from '../assets/projects/c-academia-ballet-destellos.jpg';
import cLady from '../assets/projects/c-academia-belleza-lady.jpg';
import cStrichs from '../assets/projects/c-strichs.jpg';
import cLume from '../assets/projects/c-lume.jpg';
import cGlamping from '../assets/projects/c-glamping.jpg';
import cQuiro from '../assets/projects/c-quiropraxia.jpg';
import cDiyer from '../assets/projects/c-academia-diyer.jpg';
import cRomvet from '../assets/projects/c-romvet.jpg';

/**
 * Portfolio inventory. Sources: /workspace/oscardev/plan-v2.md + portafolio.md (copy), live sites (covers).
 *
 * Rules:
 * - Covers are real screenshots of the live sites (Playwright, 5 nov 2026). Never mockups.
 * - No invented metrics or testimonials. ConectaPlay landing testimonials are NOT real → never cited.
 * - Duarte's price is never published.
 * - Abogados Lobo: Oscar's site is abogadosbucaramanga.com. abogadoslobo.com is an old site made by the
 *   client himself → never linked or mentioned.
 * - Concepts are unsolicited design projects, never clients: always labelled «Concepto».
 * - Pley ↔ ConectaPlay: never publish both.
 */
export type ProjectKind = 'client' | 'own-product' | 'concept-demo' | 'in-development';
type L = { es: string; en: string };

export interface PortfolioProject {
  slug: string;
  title: string;
  kind: ProjectKind;
  type: L;
  sector: L;
  city: L;
  description: L;
  cover: ImageMetadata;
  coverAlt: L;
  /** true → /proyectos/{slug}/ and /en/projects/{slug}/ exist (see src/data/cases.ts). */
  hasCase?: boolean;
  externalUrl: string;
  badge?: L;
  published: boolean;
  displayOrder: number;
  heroPreview?: boolean;
}

export const kindLabel: Record<ProjectKind, L> = {
  client: { es: 'Cliente', en: 'Client' },
  'own-product': { es: 'Producto propio', en: 'Own product' },
  'concept-demo': { es: 'Concepto', en: 'Concept' },
  'in-development': { es: 'En desarrollo', en: 'In development' },
};

export const projects: PortfolioProject[] = [
  {
    slug: 'optica-alemania', title: 'Óptica Alemania', kind: 'client',
    type: { es: 'Sitio web', en: 'Website' }, sector: { es: 'Salud visual', en: 'Eye care' },
    city: { es: 'Villavicencio, Colombia', en: 'Villavicencio, Colombia' },
    description: {
      es: 'Web de optometría: servicios explicados en claro, sede, tecnología y WhatsApp según cada consulta.',
      en: 'Optometry website: services in plain language, location, technology and WhatsApp by type of inquiry.',
    },
    cover: optica,
    coverAlt: { es: 'Inicio del sitio de Óptica Alemania: «Cuidamos tu visión con experiencia y tecnología»', en: 'Óptica Alemania homepage: “We care for your vision with experience and technology”' },
    hasCase: true, externalUrl: 'https://opticaalemania.co/', published: true, displayOrder: 1, heroPreview: true,
  },
  {
    slug: 'abogados-lobo', title: 'Abogados Lobo', kind: 'client',
    type: { es: 'Sitio web', en: 'Website' }, sector: { es: 'Firma de abogados', en: 'Law firm' },
    city: { es: 'Bucaramanga, Colombia', en: 'Bucaramanga, Colombia' },
    description: {
      es: 'Web para una firma de familia y sucesiones: cinco áreas con página propia, blog jurídico y consulta por WhatsApp.',
      en: 'Website for a family and probate law firm: five practice areas with their own pages, legal blog and WhatsApp consultations.',
    },
    cover: abogados,
    coverAlt: { es: 'Inicio del sitio de Abogados Lobo: «Abogados de Familia y Sucesiones en Bucaramanga»', en: 'Abogados Lobo homepage: “Family and Probate Lawyers in Bucaramanga”' },
    hasCase: true, externalUrl: 'https://abogadosbucaramanga.com/', published: true, displayOrder: 2, heroPreview: true,
  },
  {
    slug: 'conectaplay', title: 'ConectaPlay', kind: 'own-product',
    type: { es: 'Web app', en: 'Web app' }, sector: { es: 'Deportes', en: 'Sports' },
    city: { es: 'Villavicencio, Colombia', en: 'Villavicencio, Colombia' },
    description: {
      es: 'Producto propio: reservas en tiempo real, pagos y panel administrativo para complejos deportivos.',
      en: 'Our own product: real-time bookings, payments and an admin dashboard for sports complexes.',
    },
    cover: conectaplay,
    coverAlt: { es: 'Pantalla de ConectaPlay «Encuentra tu próximo partido» con mapa de canchas', en: 'ConectaPlay “Find your next match” screen with a map of pitches' },
    hasCase: true, externalUrl: 'https://app.conectaplay.co/', published: true, displayOrder: 3, heroPreview: true,
  },
  {
    slug: 'duartes-auto-detailing', title: 'Duarte’s Auto Detailing', kind: 'client',
    type: { es: 'Sitio web', en: 'Website' }, sector: { es: 'Detailing automotriz', en: 'Auto detailing' },
    city: { es: 'Bay Area, California (EE. UU.)', en: 'Bay Area, California (US)' },
    description: {
      es: 'Web premium en inglés para un servicio de detailing móvil en Bay Area, pensada para convertir visitas en reservas.',
      en: 'Premium English website for a mobile detailing service in the Bay Area, built to turn visits into bookings.',
    },
    cover: duartes,
    coverAlt: { es: 'Inicio del sitio de Duarte’s Auto Detailing: «Diamond-Level Mobile Detailing Across the Bay Area»', en: 'Duarte’s Auto Detailing homepage: “Diamond-Level Mobile Detailing Across the Bay Area”' },
    hasCase: true, externalUrl: 'https://duartesautodetailing.com/', published: true, displayOrder: 4,
  },
  {
    slug: 'upsteppers', title: 'Upsteppers', kind: 'client',
    type: { es: 'Tienda online', en: 'Online store' }, sector: { es: 'Ropa urbana', en: 'Streetwear' },
    city: { es: 'Villavicencio, Colombia', en: 'Villavicencio, Colombia' },
    description: {
      es: 'Tienda online para una marca de streetwear de Villavicencio: catálogo, colecciones y pedidos por WhatsApp.',
      en: 'Online store for a streetwear brand from Villavicencio: catalog, collections and orders via WhatsApp.',
    },
    cover: upsteppers,
    coverAlt: { es: 'Portada de la tienda online Upsteppers', en: 'Upsteppers online store homepage' },
    hasCase: true, externalUrl: 'https://www.upsteppers.co/', published: true, displayOrder: 5,
  },
  {
    slug: 'la-locura-bar', title: 'La Locura Bar', kind: 'client',
    type: { es: 'Sitio web', en: 'Website' }, sector: { es: 'Bar y eventos', en: 'Bar & events' },
    city: { es: 'Villavicencio, Colombia', en: 'Villavicencio, Colombia' },
    description: {
      es: 'Web con carta, reservas por WhatsApp y ubicación para un bar con bolirana y fútbol en Villavicencio.',
      en: 'Website with menu, WhatsApp bookings and location for a bar with bolirana and football in Villavicencio.',
    },
    cover: lalocura,
    coverAlt: { es: 'Página de inicio del sitio web de La Locura Bar', en: 'La Locura Bar website homepage' },
    hasCase: true, externalUrl: 'https://lalocurabar.com.co/', published: true, displayOrder: 6,
  },
  {
    slug: 'riplai', title: 'Riplai', kind: 'own-product',
    type: { es: 'SaaS · Beta', en: 'SaaS · Beta' }, sector: { es: 'Atención por WhatsApp', en: 'WhatsApp support' },
    city: { es: 'Colombia', en: 'Colombia' },
    description: {
      es: 'Atención por WhatsApp con IA y control humano: base de conocimiento, asistente, bandeja compartida y supervisión.',
      en: 'AI-assisted WhatsApp support with human control: knowledge base, assistant, shared inbox and supervision.',
    },
    cover: riplai,
    coverAlt: { es: 'Inicio de Riplai: «Atención por WhatsApp que entiende tu negocio»', en: 'Riplai homepage: “WhatsApp support that understands your business”' },
    badge: { es: 'Beta', en: 'Beta' },
    externalUrl: 'https://riplai.pages.dev/', published: true, displayOrder: 8,
  },
];

export interface Concept { slug: string; title: string; sector: L; city: string; shows: L; cover: ImageMetadata }
const concept = (slug: string, title: string, sector: L, city: string, shows: L, cover: ImageMetadata): Concept => ({ slug, title, sector, city, shows, cover });
const S = { es: 'Salud y bienestar', en: 'Health & wellness' };
const A = { es: 'Academias', en: 'Academies' };
const T = { es: 'Turismo y gastronomía', en: 'Tourism & food' };
/** Unsolicited design concepts on {slug}.oscardev.co. Never clients. */
export const concepts: Concept[] = [
  concept('romvet', 'ROMVET', S, 'Villavicencio', { es: 'Clínica veterinaria: sedes, servicios y contacto directo.', en: 'Veterinary clinic: locations, services and direct contact.' }, cRomvet),
  concept('quiropraxia', 'Vértice Quiropráctica', S, 'Bogotá', { es: 'Consultorio de salud: confianza y agenda de citas.', en: 'Health practice: trust and appointment booking.' }, cQuiro),
  concept('strichs', 'Strichs', S, 'Villavicencio', { es: 'Estética: servicio sensible explicado con cuidado.', en: 'Aesthetics: a sensitive service explained with care.' }, cStrichs),
  concept('academia-diyer', 'Academia Diyer', A, 'Villavicencio', { es: 'Escuela de natación: inscripciones por WhatsApp.', en: 'Swimming school: sign-ups via WhatsApp.' }, cDiyer),
  concept('clavelatina', 'Clave Latina', A, 'Bucaramanga', { es: 'Academia de baile: SEO local y clases de prueba.', en: 'Dance school: local SEO and trial classes.' }, cClavelatina),
  concept('academia-ballet-destellos', 'Ballet Destellos', A, 'Montería', { es: 'Academia de ballet: programas y contacto.', en: 'Ballet academy: programs and contact.' }, cBallet),
  concept('academia-belleza-lady', 'Academia Lady', A, 'Bucaramanga', { es: 'Academia de belleza: cursos y matrícula.', en: 'Beauty academy: courses and enrollment.' }, cLady),
  concept('glamping', 'Los Ángeles Glamping', T, 'Villavicencio', { es: 'Glamping: experiencia y reservas.', en: 'Glamping: experience and bookings.' }, cGlamping),
  concept('laventanilla', 'La Ventanilla', T, 'Oaxaca, MX', { es: 'Ecoturismo comunitario: recorridos y reservas.', en: 'Community ecotourism: tours and bookings.' }, cLaventanilla),
  concept('lume', 'Corte & Brasa', T, 'Bogotá', { es: 'Restaurante: carta y reserva de mesa.', en: 'Restaurant: menu and table booking.' }, cLume),
];
export const conceptUrl = (c: Concept) => `https://${c.slug}.oscardev.co/`;

export const publishedProjects = projects.filter((p) => p.published).sort((a, b) => a.displayOrder - b.displayOrder);
export const clientProjects = publishedProjects.filter((p) => p.kind === 'client');
export const ownProducts = publishedProjects.filter((p) => p.kind === 'own-product');
export const heroProjects = publishedProjects.filter((p) => p.heroPreview).slice(0, 3);

export const caseUrl = (slug: string, lang: Locale) => (lang === 'es' ? `/proyectos/${slug}/` : `/en/projects/${slug}/`);
export const projectsIndexUrl = (lang: Locale) => (lang === 'es' ? '/proyectos/' : '/en/projects/');

export function projectHref(p: PortfolioProject, lang: Locale): string {
  return p.hasCase ? caseUrl(p.slug, lang) : p.externalUrl;
}
export const isExternal = (p: PortfolioProject) => !p.hasCase;
export const getProject = (slug: string) => projects.find((p) => p.slug === slug)!;
