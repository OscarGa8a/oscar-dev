import type { ImageMetadata } from 'astro';
import conectaplay from '../assets/projects/conectaplay.png';
import fueradelmolde from '../assets/projects/fueradelmolde.png';
import upsteppers from '../assets/projects/upsteppers.png';
import lalocura from '../assets/projects/lalocura.png';

/**
 * Portfolio inventory (docs/inventario_proyectos_assets.md).
 *
 * Rules:
 * - `published: true` ONLY with authentic evidence (real screenshot in the repo + live public URL already
 *   shown on the current production site). Everything else stays `false` and is never rendered.
 * - Pley ↔ ConectaPlay: blocked. Never publish both. Pley stays unpublished until Oscar resolves it.
 * - Duarte's is AUDIOVISUAL work (reels/content). The repo only has a website screenshot, which must not be
 *   used to represent it → unpublished until real reel frames/covers arrive.
 * - `caseUrl` (/proyectos/{slug}) does not exist yet. Until it does, cards link to `externalUrl` (if any).
 */
export type ProjectKind = 'client' | 'own-product' | 'concept-demo' | 'in-development';

type L = { es: string; en: string };

export interface PortfolioProject {
  slug: string;
  title: string;
  kind: ProjectKind;
  type: L;
  sector: L;
  description: L;
  cover?: ImageMetadata;
  coverAlt?: L;
  /** Internal case page. Leave undefined until /proyectos/{slug} exists. */
  caseUrl?: string;
  externalUrl?: string;
  published: boolean;
  displayOrder: number;
  /** Shown in the Hero preview strip (max 3). */
  heroPreview?: boolean;
}

export const kindLabel: Record<ProjectKind, L> = {
  client: { es: 'Cliente', en: 'Client' },
  'own-product': { es: 'Producto propio', en: 'Own product' },
  'concept-demo': { es: 'Concept Demo', en: 'Concept Demo' },
  'in-development': { es: 'En desarrollo', en: 'In development' },
};

export const projects: PortfolioProject[] = [
  {
    slug: 'conectaplay',
    title: 'ConectaPlay',
    kind: 'own-product',
    type: { es: 'Aplicación web y móvil', en: 'Web & mobile app' },
    sector: { es: 'Deportes', en: 'Sports' },
    description: {
      es: 'Producto propio: reservas en tiempo real, pagos, panel administrativo y torneos para complejos deportivos.',
      en: 'Our own product: real-time bookings, payments, admin dashboard and tournaments for sports complexes.',
    },
    cover: conectaplay,
    coverAlt: {
      es: 'Pantalla de ConectaPlay «Encuentra tu próximo partido» con mapa de canchas',
      en: 'ConectaPlay “Find your next match” screen with a map of pitches',
    },
    externalUrl: 'https://app.conectaplay.co/',
    published: true,
    displayOrder: 1,
    heroPreview: true,
  },
  {
    slug: 'fuera-del-molde',
    title: 'Fuera del Molde',
    kind: 'client',
    type: { es: 'Tienda online', en: 'Online store' },
    sector: { es: 'Moda y personalizados', en: 'Fashion & custom products' },
    description: {
      es: 'Tienda de productos personalizables con catálogo claro y flujo de compra pensado para móvil.',
      en: 'Store for customizable products with a clear catalog and a mobile-first purchase flow.',
    },
    cover: fueradelmolde,
    coverAlt: {
      es: 'Página de inicio de la tienda Fuera del Molde con prendas personalizadas',
      en: 'Fuera del Molde store homepage showing custom apparel',
    },
    externalUrl: 'https://fueradelmolde.com/',
    published: true,
    displayOrder: 2,
    heroPreview: true,
  },
  {
    slug: 'upsteppers',
    title: 'Upsteppers',
    kind: 'client',
    type: { es: 'Tienda online', en: 'Online store' },
    sector: { es: 'Ropa urbana', en: 'Streetwear' },
    description: {
      es: 'Tienda online para una marca de streetwear de Villavicencio: catálogo, colecciones y pedidos por WhatsApp.',
      en: 'Online store for a streetwear brand from Villavicencio: catalog, collections and orders via WhatsApp.',
    },
    cover: upsteppers,
    coverAlt: {
      es: 'Portada de la tienda online Upsteppers',
      en: 'Upsteppers online store homepage',
    },
    externalUrl: 'https://www.upsteppers.co/',
    published: true,
    displayOrder: 3,
    heroPreview: true,
  },
  {
    slug: 'la-locura-bar',
    title: 'La Locura Bar',
    kind: 'client',
    type: { es: 'Sitio web', en: 'Website' },
    sector: { es: 'Bar y eventos', en: 'Bar & events' },
    description: {
      es: 'Web con carta, reservas por WhatsApp y ubicación para un bar con bolirana y fútbol en Villavicencio.',
      en: 'Website with menu, WhatsApp bookings and location for a bar with bolirana and football in Villavicencio.',
    },
    cover: lalocura,
    coverAlt: {
      es: 'Página de inicio del sitio web de La Locura Bar',
      en: 'La Locura Bar website homepage',
    },
    externalUrl: 'https://lalocurabar.com.co/',
    published: true,
    displayOrder: 4,
  },
  // ——— Unpublished until evidence arrives (never rendered) ———
  {
    slug: 'duartes-autodetailing',
    title: 'Duarte’s Autodetailing',
    kind: 'client',
    type: { es: 'Contenido audiovisual', en: 'Video content' },
    sector: { es: 'Automotriz', en: 'Automotive' },
    description: {
      es: 'Producción y edición de contenido audiovisual para redes sociales.',
      en: 'Video content production and editing for social media.',
    },
    published: false,
    displayOrder: 0,
  },
  { slug: 'pley', title: 'Pley', kind: 'own-product', type: { es: 'App', en: 'App' }, sector: { es: 'Deportes', en: 'Sports' }, description: { es: '', en: '' }, published: false, displayOrder: 99 },
  { slug: 'statum', title: 'Statum', kind: 'in-development', type: { es: 'Plataforma de gestión', en: 'Management platform' }, sector: { es: 'Gestión', en: 'Management' }, description: { es: '', en: '' }, published: false, displayOrder: 99 },
  { slug: 'optica-alemania', title: 'Óptica Alemania', kind: 'concept-demo', type: { es: 'Sitio web corporativo', en: 'Corporate website' }, sector: { es: 'Salud visual', en: 'Eyecare' }, description: { es: '', en: '' }, published: false, displayOrder: 99 },
  { slug: 'los-angeles-glamping', title: 'Los Ángeles Glamping', kind: 'concept-demo', type: { es: 'Sitio web turístico', en: 'Tourism website' }, sector: { es: 'Turismo', en: 'Tourism' }, description: { es: '', en: '' }, published: false, displayOrder: 99 },
  { slug: 'detour', title: 'DeTour', kind: 'in-development', type: { es: 'Turismo', en: 'Tourism' }, sector: { es: 'Turismo', en: 'Tourism' }, description: { es: '', en: '' }, published: false, displayOrder: 99 },
];

export const publishedProjects = projects
  .filter((p) => p.published && p.cover)
  .sort((a, b) => a.displayOrder - b.displayOrder);

if (publishedProjects.some((p) => p.slug === 'pley') && publishedProjects.some((p) => p.slug === 'conectaplay')) {
  throw new Error('Pley ↔ ConectaPlay editorial block: do not publish both.');
}

export const heroProjects = publishedProjects.filter((p) => p.heroPreview).slice(0, 3);

export function projectHref(p: PortfolioProject): string | undefined {
  return p.caseUrl ?? p.externalUrl;
}
