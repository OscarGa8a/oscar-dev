# Home V2 — PROGRESS

Rama: `feat/home-v2` (desde `main` @ 0335c5c). Este archivo se actualiza en cada commit relevante.

## 1. Hecho
- Rama creada; dependencias instaladas (pnpm). Añadidas fuentes `@fontsource-variable/inter-tight` y `@fontsource/instrument-serif`.
- `src/data/projects.ts`: inventario tipado con `published` (solo con evidencia: captura real en repo + URL pública), bloqueo Pley↔ConectaPlay en build, Duarte's como audiovisual no publicado.
- `src/i18n/home.ts`: copy ES/EN del blueprint para las 9 secciones.
- `public/logo-oscar-dev.webp`: logo oficial (Cloudinary `oscar_dev/logo_horizontal2_e5gcg8`) en local, usado como máscara monocroma sobre naranja.
- `src/assets/projects/upsteppers.png` descargado de Cloudinary (asset ya publicado en el sitio actual).

## 2. Pendiente
- Componentes de las 9 secciones + Header/Footer nuevos; ES y EN.
- BaseLayout: FAQ JSON-LD con las 6 preguntas nuevas; mantener SEO, GTM diferido y tracking `data-event`.
- Build, capturas Playwright vs mockups (`/workspace/home-v2-compare/`), Lighthouse móvil/escritorio.
- Extras: `404.astro`, `@astrojs/sitemap`.

## 3. Decisiones
- Lenguaje visual de los mockups (layout, eyebrows `0N /`, acentos serif itálicos, metadatos laterales) + reglas estructurales del blueprint/usuario (Servicios en 4 filas sin cards; sin métricas ni teléfonos falsos).
- Copy: el del blueprint (coincide con los mockups móviles); se evita copy de mockup con promesas no verificadas.
- Superficies: las del mockup desktop para ambos breakpoints.
- Proyectos publicados: ConectaPlay, Fuera del Molde, Upsteppers, La Locura Bar. Como no existen `/proyectos/{slug}`, las tarjetas enlazan a la web pública del proyecto (`rel=noopener`); “Ver todos” → `#proyectos`.
- Retrato: no hay foto real (solo un avatar ilustrado) → hueco de retrato marcado como pendiente.
- Signature: reducida a versión estática (solo hay 1 captura real de ConectaPlay, no 3).
- Contraste: acentos serif sobre papel en `#984A0D`; sobre naranja se trata el crema para cumplir contraste.

## 4. Dudas abiertas (para Oscar)
- Foto real de Oscar (alta resolución, recortable) y permiso de uso.
- ¿La Locura Bar fue desarrollo web o marketing? ¿Upsteppers: entrega concreta?
- Material audiovisual real de Duarte's (frames/portadas) y permiso.
- Relación Pley/ConectaPlay.
- Capturas reales de ConectaPlay para Elegir e Inscribirse.
- Variante del logo para fondo naranja.
- ¿Correo `oscar.garcia.development@gmail.com` es el definitivo para el footer/contacto? ¿YouTube existe?
