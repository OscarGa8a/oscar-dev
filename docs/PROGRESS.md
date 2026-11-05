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
