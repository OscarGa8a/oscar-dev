import { cases } from '../data/cases';
import { services } from '../i18n/services';

/** ES ↔ EN route pairs. Single source for hreflang (BaseLayout), the language switch and the sitemap. */
export const routePairs: { es: string; en: string }[] = [
  { es: '/', en: '/en/' },
  { es: '/proyectos/', en: '/en/projects/' },
  { es: '/precios/', en: '/en/pricing/' },
  { es: '/diseno-web-villavicencio/', en: '/en/web-design-villavicencio/' },
  { es: '/paginas-web-negocios-latinos-usa/', en: '/en/hispanic-business-websites/' },
  { es: '/servicios/', en: '/en/services/' },
  { es: '/contacto/', en: '/en/contact/' },
  ...services.map((s) => ({ es: `/servicios/${s.slug.es}/`, en: `/en/services/${s.slug.en}/` })),
  ...Object.keys(cases).map((s) => ({ es: `/proyectos/${s}/`, en: `/en/projects/${s}/` })),
];

export function alternatesFor(pathname: string) {
  const p = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return routePairs.find((r) => r.es === p || r.en === p);
}
