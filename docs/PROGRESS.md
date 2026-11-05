# Home V2 — PROGRESS

Rama: `feat/home-v2`. No se hace merge a main ni se despliega a producción desde esta rama.

## Hecho
- Datos: `src/data/projects.ts` contiene el inventario tipado. Solo se publican proyectos con evidencia: ConectaPlay, Fuera del Molde, Upsteppers y La Locura Bar. Un guard de build impide publicar Pley y ConectaPlay a la vez, y Duarte's queda marcado como audiovisual y sin publicar.
- Copy ES/EN: `src/i18n/home.ts`, tomado del blueprint.
- Estilos V2: `src/styles/home.css`, con Inter Tight e Instrument Serif vía fontsource.
- Componentes en `src/components/home/`: SiteHeader (nav nueva, menú móvil en `<dialog>`, ES/EN), Hero, Projects (carrusel con scroll-snap), Manifesto, Services (4 filas), Signature (#experiencia, estático y con una captura real), Method (timeline), About, Faq (acordeón accesible), Contact y Footer.
- Las páginas `/` y `/en/` están recompuestas. Se mantienen el SEO, el JSON-LD (el FAQ ahora sale del copy), el GTM diferido, `data-event` y el CTA de WhatsApp del hero (`data-event-location="hero"`).
- Extras: `src/pages/404.astro` (noindex) y `@astrojs/sitemap` con alternates hreflang. El 404 se excluye del sitemap, se eliminó `public/sitemap.xml` y `robots.txt` ahora apunta a `sitemap-index.xml`.
- Verificación:
  - El build pasa y no hay overflow horizontal en 390, 768 ni 1536 px.
  - No hay enlaces internos rotos.
  - Lighthouse local (ES): móvil 95–100 / 100 / 100 / 100 y escritorio 100 / 100 / 100 / 100.
  - El header es transparente sobre el hero y se vuelve sólido al pasar el hero.

- Copy alineado con `plan-v2.md` (plan de Marketing), revisión del 4 nov 2026:
  - Cambian el title y la meta de `/` y `/en/`, la bajada del hero, las descripciones de los 4 proyectos, los servicios (tiendas, apps, plataformas), las respuestas de FAQ sobre costo y plazos ("desde COP 600.000 / USD 200", 2–4 y 6–12 semanas) y la ubicación de "Sobre mí", que ahora dice Villavicencio.
  - Upsteppers queda como pedidos por WhatsApp con pago por transferencia (Nequi, Daviplata, Bancolombia), sin pasarela. Se ajustaron `projects.ts`, `es.ts`, `en.ts`, `llms.txt` y `llms-full.txt`. Ya no se dice "integración de pasarelas de pago": el texto pasa a "Pedidos por WhatsApp o pagos en línea". También se quitó la "pasarela integrada" de Fuera del Molde, que no está confirmada.
  - Precio de Duarte's: se revisaron el repo (src, public, docs, historial git) y el build, y no aparece. No se debe publicar.

## Pendiente
- Retrato real de Oscar para el Hero y Sobre mí; ahora hay un placeholder punteado.
- Páginas `/proyectos/{slug}`. Por ahora las tarjetas enlazan al sitio externo y "Ver todos" ancla a #proyectos.
- Más capturas reales de ConectaPlay para convertir la sección #experiencia en tabs.
- Borrar los componentes V1 que ya no se usan (`src/components/*.astro`: Nav, Hero, CaseStudies, etc.) tras confirmarlo.
- Preview de Cloudflare Pages: verificar que la rama genera un deploy de preview.

## Decisiones
- Superficies según los mockups de escritorio. Hero en naranja; proyectos, firma y footer en oscuro; el resto en paper o ivory.
- Se eliminaron elementos de los mockups sin respaldo: métricas falsas, teléfonos inventados, el icono de YouTube y la foto de laptop. Statum, Pley y Óptica Alemania no aparecen porque están sin publicar.
- #experiencia es estática con la captura real de ConectaPlay, sin pestañas falsas.
- Los botones de servicios abren WhatsApp con `data-event=services_{id}`.

- Se mantiene el H1 de los mockups ("Ideas que funcionan."). El H1 SEO de plan-v2 ("Webs y plataformas a medida para negocios que quieren crecer") se usa como base de la bajada; queda pendiente de decisión.

## Dudas abiertas
- ¿H1 del mockup o el de plan-v2?
- Duarte's: plan-v2 lo trata como landing web en Bay Area, pero el inventario lo da como trabajo audiovisual. Sigue sin publicar hasta aclararlo.
- ConectaPlay: plan-v2 lo describe como reservas para complejos deportivos, y #experiencia muestra el flujo del jugador (la captura real disponible).
- ¿Hay foto/retrato profesional para el hero?
- ¿Se puede publicar Statum u Óptica Alemania (demo)? ¿Hay evidencia?
- ¿Pley o ConectaPlay? Hoy está ConectaPlay como producto propio.
- ¿Deseas páginas de caso por proyecto?

## Fase 2 (2026-11-04)

### Hecho
- H1 nuevo «Webs y plataformas a medida para negocios que quieren crecer» + tagline «Ideas que funcionan.» (ES/EN).
- Componente `Portrait` (placeholder elegante; pasar `src` para foto real).
- Páginas: /proyectos/ (Clientes / Productos propios / Conceptos), casos /proyectos/[slug]/ (ES/EN), /precios/, /diseno-web-villavicencio/, /paginas-web-negocios-latinos-usa/ y equivalentes EN.
- Duarte's publicado como cliente web (marketing/contenido con aliado), sin precio.
- Email hola@oscardev.co; sitemap con hreflang es-CO/en/x-default; schema por página (CreativeWork, OfferCatalog, Service, BreadcrumbList, FAQPage).
- Eliminados componentes V1 y src/i18n/es.ts, en.ts.
- Preload de fuentes woff2 (CLS móvil en casos 0.23 → 0).
- Lighthouse móvil: home 100/100/100/100, caso Óptica 96/100/100/100, caso Duarte's 97/100/100/100; resto 100s.

### Pendiente
- Foto real de Oscar (Portrait `src`).
- Merge a main / producción (lo decide Oscar).

### Decisiones
- Sin métricas ni testimonios inventados; conceptos con badge «Concepto» y rel=nofollow.
- Abogados: dominio correcto abogadosbucaramanga.com (abogadoslobo.com es el sitio viejo del cliente).

### Dudas abiertas




> Dudas de Fase 2 resueltas en Fase 3: rol del hermano en ConectaPlay, condiciones de pago, La Locura y Fuera del Molde.

## Fase 3: auditoría de Marketing (rama feat/home-v2)

### Hecho
- Schema ProfessionalService:
  - horario lunes a sábado 8:00–18:00 y `telephone` +57 318 020 9851;
  - areaServed: Villavicencio, Colombia y EE. UU.;
  - `founder` y `knowsLanguage` en lugar de `provider` e `inLanguage`.
- sameAs y footer con Instagram, TikTok, Facebook, LinkedIn y GitHub.
- Footer con NAP: WhatsApp, horario y ciudad.
- Marca unificada como «OscarDev».
- hreflang `es` en lugar de `es-CO`, también en el sitemap.
- Concepto lume con ciudad (Bogotá).
- Nuevas páginas con SEO por página, en el sitemap con hreflang:
  - /servicios/ y 6 páginas de servicio, en ES y EN (/en/services/…);
  - /contacto/ y /en/contact/.
- Header, footer y servicios de la home enlazan a las nuevas páginas.
- «Desde 2020 / más de 5 años», también en llms.txt y llms-full.txt.
- llms.txt y llms-full.txt reescritos: NAP, servicios, casos (URL del caso → sitio del cliente), productos propios y conceptos.
- ConectaPlay: Oscar es el desarrollador e hizo toda la programación; su hermano es socio del proyecto.
- Fuera del Molde eliminado por completo: datos, imagen, borrador del caso, sitemap y llms. En Sobre mí solo aparece «Frontend & Mobile en Grupo Tecnológico CATO (2020-2025)», en ES y EN.
- La Locura Bar: caso ampliado con lo visible en lalocurabar.com.co:
  - horario y planes;
  - carta con precios y calculadora de cuenta;
  - reservas por WhatsApp;
  - versión en inglés.
  No incluye métricas.
- /precios: bloque «Pagas cuando ves tu web terminada» (pago al entregar; en algunos proyectos, en dos partes a 1–2 meses). Se añadió a la FAQ en ES y EN. No se indican rondas de revisión.
- Lighthouse (móvil y escritorio) en servicios, contacto y sus versiones EN: 100/100/100/100.

### Decisiones
- 6 servicios según plan-v2.
- La página de contacto no tiene formulario porque no hay backend y no promete tiempo de respuesta.
- H1 de la home: la auditoría no propone otro; ya coincide con plan-v2.

### Dudas abiertas
- Formulario de contacto y backend.
- Tiempo de respuesta (SLA) a publicar.
- Perfil de Google Business para sameAs.
- Foto real de Oscar.

## Fase 4: ajustes previos a producción (aprobado por Oscar: publicar sin foto)

### Hecho
- /contacto sin formulario: solo WhatsApp y hola@oscardev.co. Respondo el mismo día hábil (ES, EN y llms).
- Nuevos H1 y subtítulo del Home en ES y EN; se redujo el tamaño del H1 para que los CTA queden en el primer pantallazo.
- Solo «desde 2020»: se quitó «más de 5 años» del sitio y de los llms.
- Plazos reales: 2–4 semanas (landing y web) y 6–12 semanas (apps y plataformas). Una app tipo Uber o un marketplace se cotiza aparte.
- «Pagas cuando ves tu web terminada. No te pido anticipo» solo en landing pages. En apps y plataformas: «Forma de pago: la acordamos por escrito antes de empezar».
- Medios de pago: Nequi, Daviplata, Bancolombia, Nu y Bre-B, en el schema y en el copy. Se quitaron «Wire transfer» y las comisiones de pasarela genéricas.
- ConectaPlay sin torneos (no existe esa función): solo reservas, pagos y panel. El hermano aparece solo como socio.
- Enlaces internos: Villavicencio → /servicios/diseno-web-pymes/; precios y latinos-usa → /servicios/landing-pages/. El H2 de landing-pages ahora es «Caso Duarte's…».
- Se mantiene la línea de CATO en Sobre mí y en llms-full.
- Merge de feat/home-v2 a main y deploy de producción.

### Dudas abiertas
- Foto real de Oscar.
- Perfil de Google Business para sameAs.
