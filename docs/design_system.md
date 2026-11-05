# OSCAR DEV · FASE 08
## Design System provisional V2 — Home y arquitectura multipágina

**Fecha:** 27 de octubre de 2026  
**Estado:** **PROVISIONAL / BASE PARA MOCKUPS V2** — no aprobado como especificación final de implementación.  
**Origen:** identidad de marca de Oscar Dev (`00`, `01`), registro de casos (`07`), Dirección B de Fase 04, Storytelling de Fase 05, propuestas V1 de nueve secciones y auditoría integral de Fase 07.  
**Objetivo:** unificar criterios antes de producir V2 desktop/mobile y evitar iteraciones por inconsistencias de estilo, contenido o evidencia.

---

## 0. Qué está decidido y qué no

| Elemento | Estado | Decisión / pendiente |
|---|---|---|
| Territorio creativo | **Aprobado para exploración** | Editorial, directo, expresivo, sin estética SaaS genérica. |
| Hero | **Dirección elegida** | Fondo naranja dominante, composición tipográfica, sin retratos ni interfaces. Referencia rectora: `oscar_dev_hero_manifiesto_tipografico.png`. |
| Hero mobile | **Propuesta aceptada** | Recompuesto en columna; auditar legibilidad, CTA y altura real. Referencia: `oscar_dev_hero_mobile_v1.png`. |
| Paleta de marca | **Conocida** | `#121214`, `#EBDDCA`, `#F29A2E`; negro/naranja/marfil. |
| Fuentes exactas | **Hipótesis** | Probar Inter Tight/Inter para sans e Instrument Serif (o serif comparable) para acentos; sin cambio irreversible antes de test visual. |
| Logo | **Marca existente; export pendiente** | Hay un gráfico compuesto (`logo.png`) con la marca, pero no es todavía un SVG/PNG de wordmark aislado. Usar activo oficial validado, no reinterpretar a ojo el monograma. |
| Secciones Home | **Arquitectura V1** | Nueve momentos, no nueve páginas ni nueve headers independientes. Revisar longitud en auditoría del Home completo. |
| Páginas internas | **Dirección general, sin diseños finales** | Proyectos/casos, servicios; contenido editorial después si tiene sentido. No fingir rutas terminadas. |
| Proyectos/capturas | **Pendiente de validación** | Sustituir arte generado por recursos reales y etiquetar estado del proyecto. |
| Fotografía de Oscar | **Pendiente** | Retrato auténtico. No usar rostro generado como si fuera Oscar. |
| Destinos de CTA, correo, legal y perfiles | **Pendiente de prueba** | Verificar antes de la versión para producción. |

**Jerarquía de referencia:** decisión explícita del usuario > identidad de marca > Hero aprobado en exploración > auditoría Fase 07 > demás propuestas V1 > referencias ajenas.

---

## 1. Principios del sistema

1. **Una idea por bloque.** Cada sección tiene una función distinta; nada se añade para llenar espacio.
2. **Composición primero.** Retícula, tipografía, blanco/aire, jerarquía y evidencia antes que efectos.
3. **El naranja debe importar.** Es color de marca y de atención, no tinte obligatorio en todas las imágenes.
4. **Lo real se distingue de lo conceptual.** Capturas, testimonios, cifras, fotografías y estados verificables.
5. **El diseño habla el idioma del cliente.** Beneficios y decisiones de negocio antes que nombres de frameworks.
6. **Un Home continuo.** Un header global, un footer global, márgenes y ritmo compartidos.
7. **Responsive real.** Reorganización por dispositivo; nunca miniaturizar un desktop ni envolver mobile en un dibujo de teléfono para el handoff.
8. **Accesibilidad incorporada.** Contraste, reflujo, teclado, focos visibles, tap targets y movimiento reducido.

---

## 2. Color y semántica

### 2.1 Paleta núcleo

| Token semántico | Valor | Rol |
|---|---|---|
| `brand.orange` | `#F29A2E` | Hero y cierre naranja, CTA en fondos oscuros, acentos puntuales. |
| `brand.ink` | `#121214` | Titulares/fondo oscuros, botones sobre naranja. |
| `brand.ivory` | `#EBDDCA` | Texto cálido en fondos oscuros, superficie editorial secundaria. |
| `surface.paper` | `#F5F1E9` | Secciones de lectura en fondo claro. **Propuesta**, no color de marca fijado. |
| `surface.charcoal` | `#171719` | Variación sobria para índices y contenido oscuro. **Propuesta**. |
| `surface.warmDark` | `#211F1F` | Método/pausa oscura cálida. **Propuesta**. |
| `text.onLight` | `#121214` | Texto principal sobre papel/naranja. |
| `text.onDark` | `#EBDDCA` | Texto principal sobre carbón. |
| `text.mutedLight` | `#514A44` | Párrafos secundarios sobre papel. |
| `text.mutedDark` | `#B8ADA1` | Párrafos secundarios sobre carbón. |
| `accent.onLight` | `#984A0D` | Acento oscuro para **texto pequeño** y enlaces sobre marfil/papel. **Propuesto y probado por contraste**. |
| `line.onLight` | `#C9BFB1` | Divisores suaves sobre papel; no es color para texto. |
| `line.onDark` | `#45413E` | Divisores suaves sobre carbón; no es color para texto. |

### 2.2 Combinaciones de legibilidad calculadas

Calculadas sobre estos hex exactos por relación de luminancia; revisar de nuevo si cambian los valores o si se añaden imágenes/degradados.

| Primer plano / fondo | Contraste aprox. | Uso |
|---|---:|---|
| Negro `#121214` / naranja `#F29A2E` | **8.41:1** | Texto normal y titulares: apto. |
| Marfil `#EBDDCA` / negro `#121214` | **14.01:1** | Texto normal y titulares: apto. |
| Marfil `#EBDDCA` / carbón `#171719` | **13.41:1** | Texto normal y titulares: apto. |
| Naranja `#F29A2E` / carbón `#171719` | **8.05:1** | Etiquetas y enlaces en negro: apto. |
| Naranja `#F29A2E` / papel `#F5F1E9` | **1.98:1** | **No usar para texto legible**, ni siquiera titulares ordinarios. |
| Marfil `#EBDDCA` / naranja `#F29A2E` | **1.67:1** | **No usar como texto legible** sobre el Hero naranja. La cursiva blanca del mockup requiere corrección de tono, sombra de contraste controlada o tratamiento específico durante V2. |
| Acento oscuro `#984A0D` / papel `#F5F1E9` | **5.61:1** | Texto secundario / enlaces en claros. |
| Acento oscuro `#984A0D` / marfil `#EBDDCA` | **4.74:1** | Texto secundario / enlaces en claros. |

**Consecuencia importante:** el Hero escogido utiliza `funcionar.` en un tono claro sobre naranja. Se conserva la **idea editorial aprobada**, pero no se da por bueno su contraste final. Hay que resolverlo en la V2 sin perder impacto ni convertirlo en un cartel ilegible.

**Umbrales de diseño:** 4.5:1 en texto normal y 3:1 en texto grande; componentes e iconos funcionales 3:1, según WCAG 2.2 AA. El logo real tiene excepción de contraste como logotipo, aunque conviene que sea claramente visible.

### 2.3 Reglas de uso

- Hero y CTA final: fondo naranja real y bloques planos. Evitar gradientes, halos y textura digital para disimular faltas de composición.
- Oscuros: no añadir luz naranja artificial detrás de cada proyecto.
- Claros: utilizar `accent.onLight` para los textos pequeños; el naranja de marca puede permanecer como **decoración no informativa** o acento grande solo tras prueba de contraste.
- Divisores: 1 px, tono contextual y separación respirable. No poner una línea debajo de cada elemento por reflejo.
- Proporción visual: la cantidad de naranja por pantalla responde a la sección; **no existe una cuota fija 70/20/10**.

---

## 3. Tipografía provisional

### 3.1 Familias candidatas (requieren test final en navegador)

- **Display y titulares sans:** `Inter Tight` (candidata); fallback `Inter`, sistema sans. Priorizar letras con carácter y un peso entre 700 y 800; no deformar horizontalmente.
- **Lectura/UI:** `Inter` (candidata) o una sans equivalente de alta legibilidad. Pesos habituales 400, 500, 600.
- **Acento editorial serif:** `Instrument Serif` italic (candidata); fallback serif con métricas revisadas. **No usar en todas las secciones por obligación**.
- **Metadatos:** la misma sans, con tracking leve y mayúsculas; no añadir una cuarta familia monoespaciada solo por apariencia técnica.

Antes de implementación, verificar archivos oficiales, cobertura de tildes/ñ, licencia, comportamiento de números, métricas de fallback y presupuesto de carga. No distribuir fuentes por separado.

### 3.2 Escalas de partida (px CSS)

| Uso | Desktop ≥1200 | Tablet 768–1199 | Mobile ≤767 |
|---|---|---|---|
| Hero `H1` | 88–144 (según ancho) | 64–88 | 44–68 (sujeto a reflujo) |
| Título de sección `H2` | 56–88 | 44–64 | 36–52 |
| Subtítulo `H3` | 28–40 | 26–34 | 24–30 |
| Texto intro grande | 22–28 | 20–24 | 18–21 |
| Cuerpo | 16–18 | 16–18 | 16–17 |
| Metadatos | 11–13 | 11–12 | 11–12 |
| CTA / nav | 15–17 | 15–16 | 15–16 |

Usar `clamp()` y probar 320, 360, 375, 390, 430, 768, 1024, 1280 y 1440 px. Evitar `white-space: nowrap` en frases largas para mobile. Asegurar zoom de texto al 200 % y reflujo.

### 3.3 Ritmo y composición

- Hero: grandes líneas deliberadas. **Saltos manuales solo para puntos de control**, con cortes alternativos en móvil; jamás escalar como una imagen.
- Grandes titulares: `line-height` entre 0.94 y 1.10 según familia y tamaño; evitar choques entre descendentes de serif y sans.
- Párrafos: 1.45–1.65 según largo, máximo orientativo 60–68 caracteres por línea.
- Titulares: preferentemente de 8–13 palabras; son una referencia editorial, no regla rígida.
- El acento serif puede aparecer en **algunas secciones claves**: Hero, Manifiesto o Contacto; examinar si se reduce en Servicios, Método y FAQ.

---

## 4. Layout y espaciado

### 4.1 Contenedores y columnas (propuesta)

| Vista | Ancho de contenido | Márgenes horizontales | Retícula | Gap |
|---|---|---|---|---|
| Desktop grande | máximo 1440 px | `clamp(32px, 5vw, 88px)` | 12 columnas | 24–32 px |
| Desktop habitual | máximo 1280–1360 px | 40–64 px | 12 columnas | 24 px |
| Tablet | fluido | 28–40 px | 6 columnas | 20–24 px |
| Mobile | fluido | 20–24 px | 4 columnas (alineación lógica) | 12–16 px |
| Mobile compacto 320 | fluido | 16–20 px | una columna para contenido | 12 px |

No convertir cada sección en contenedor de distinto ancho. Algunas imágenes de proyectos pueden romper la retícula intencionalmente, pero sus **metadatos y bordes de texto** deben regresar a líneas comunes.

### 4.2 Espaciado

- Base modular 4 px; ritmo preferido 8, 12, 16, 24, 32, 48, 64, 96, 128.
- `section.paddingBlock`: 96–144 px desktop; 72–96 tablet; 56–80 mobile, ajustado según contenido.
- Header: alto orientativo 72–84 desktop; 60–72 mobile.
- Distancia subtítulo-titular: 16–28 px. Distancia titular-cuerpo: 24–36 px.
- No forzar `height: 100vh` en bloques de contenido. Hero puede usar `min-height: 100svh`, pero debe crecer si el CTA queda fuera de pantalla.
- Validar saltos entre secciones como flujo continuo y no como nueve capturas autónomas.

### 4.3 Bordes y formas

- Divisores lineales, generalmente 1 px.
- Radios: `0–4 px` en contenedores editoriales; `8–12 px` solo para capturas o elementos donde tenga sentido; el botón puede ser rectangular como en el Hero.
- Evitar pill buttons en toda la web por defecto. Evitar grid de tarjetas redondeadas con brillo y sombra.
- No más de una ilustración/ornamento abstracto relevante en una sección; por defecto ninguno.

---

## 5. Componentes compartidos

### 5.1 Header global

- Un único logo oficial (variantes oscuro/claro) y navegación compartida; no generar logo distinto por sección.
- Rutas iniciales visibles: **Proyectos / Servicios / Sobre mí / Contacto**; **Ideas** solo cuando exista contenido y ruta.
- En Hero naranja: header transparente respecto al fondo (sin caja opaca), texto negro y líneas discretas.
- Sobre otros fondos: variante accesible adecuada al color; el cambio por scroll ha de ser sutil y sin salto de layout.
- Enlaces activos representados por subrayado o peso + semántica `aria-current`, no solo color.
- Mobile: logo y menú real, botón grande con aria-label, menú operativo con foco, Escape y cierre al navegar.
- Header sticky: evaluar durante V2 contra altura visible; **no se congela** solo porque los mockups muestren header en todas las secciones.

### 5.2 Acciones y navegación

- **Primaria comercial:** `Cuéntame tu proyecto`, con destino WhatsApp/contacto verificado.
- **Exploración:** `Explorar proyectos` en Hero; no confundir que sea visualmente importante con cambiar la métrica comercial.
- **Enlace contextual:** `Ver proyecto`, `Ver servicio`; flecha discreta y foco visible.
- En una misma sección: máximo una acción principal y una secundaria cuando corresponda. No sumar CTA duplicados al final de cada bloque.
- Los textos deben indicar a dónde irás o qué sucederá después. No usar enlaces muertos.
- Hit targets: planear al menos 44×44 CSS px para controles relevantes, con separación adecuada.

### 5.3 Listados editoriales

- Proyectos: composición 1+2 desktop y columna mobile, sujeta a recurso real. Diferenciar estado (producto propio, proyecto entregado, desarrollo o concept demo) **sin convertirlo en un badge vistoso**.
- Servicios: filas numeradas; descripción orientada al beneficio y enlace; evitar cuatro tarjetas iguales.
- Método: timeline compacto de cuatro etapas con resultado/entregable por etapa; el texto debe representar la oferta real.
- FAQ: `<button>` accesible + panel expandible, una pregunta abierta por defecto **solo si la prueba de lectura lo justifica**; no imágenes decorativas.
- Signature: tres etapas `Descubrir`, `Elegir`, `Inscribirse` con navegación simple, estado perceptible y alternativa no animada. No es una demo ficticia transaccional.

### 5.4 Footer global

- Fondo `brand.ink`, logo validado, navegación y canales confirmados; pie legal según las rutas reales.
- Omitir correo de ejemplo, «respuesta rápida», disponibilidad inventada o políticas que todavía no existen como rutas.
- Reducir presencia de redes a las relevantes y comprobadas.

---

## 6. Identidad por sección (evitar repetir una fórmula)

| # | Sección | Fondo base provisional | Gesto editorial distintivo | No repetir |
|---|---|---|---|---|
| 01 | Hero | `brand.orange` | Titular monumental negro + intervención serif clara **a revisar contraste** | Fotos, teléfonos, apps, tres bloques de beneficios. |
| 02 | Proyectos | `brand.ink` | Imagen auténtica como argumento, asimetría 1+2 | Tres tarjetas SaaS clonadas, dispositivos artificiales. |
| 03 | Manifiesto | `surface.paper` | Una tesis tipográfica y párrafo breve | Cuatro pasos de proceso y CTA nuevo. |
| 04 | Servicios | `surface.charcoal` | Índice de cuatro filas, numeración, lenguaje comercial | Cursiva naranja en cada fila. |
| 05 | Signature | `brand.ivory` o papel cálido | Una interacción con una etapa protagonista | Tres móviles simultáneos, dashboards y cifras falsas. |
| 06 | Método | `surface.warmDark` | Timeline de expectativas de colaboración | Mismo argumento del Manifiesto, iconografía genérica. |
| 07 | Sobre mí | `brand.ivory` | Fotografía auténtica y copy personal reducido | Rostro inventado, tres íconos de capacidades. |
| 08 | FAQ | `surface.paper` | Acordeón de ancho editorial, 4–6 dudas | Decoraciones o tarjetas sin función. |
| 09 | Contacto / Footer | `brand.orange` → `brand.ink` | Titular de cierre + CTA negro + pie discreto | Hero repetido, promesas de respuesta, CTA duplicado. |

**Nota de ritmo:** 07 y 08 son ambas claras; no agregar un fondo oscuro entre ellas automáticamente. Crear separación mediante composición, márgenes, cambio de columna o divisor editorial.

---

## 7. Lenguaje, imágenes y evidencia

### 7.1 Copy

- Voz: cercano, directo, colombiano, profesional, enfocado en negocio; sin promesas de ventas garantizadas.
- Cada sección debe aportar información nueva. **Hero:** qué haces; **Proyectos:** qué construiste; **Manifiesto:** criterio; **Servicios:** qué contratar; **Signature:** una experiencia; **Método:** relación cliente–proveedor; **Sobre mí:** quién es Oscar; **FAQ:** objeciones; **Contacto:** actuar.
- Evitar sobreusar «real», «funcionar», «con criterio», «bien pensado», «solución» y variantes en cada párrafo.
- No escribir `rápido`, `24/7`, `gratuito`, `garantizado`, `disponible` ni plazos concretos sin confirmación.

### 7.2 Inventario obligatorio por activo

Para cada imagen / caso / afirmación conservar un registro:

`ID | Sección | Fuente | Estado (real/verificado / conceptual/identificado / pendiente) | Permiso | Formato destino | Desktop/Mobile | Acción`

- Las pantallas generadas para Duarte’s, ConectaPlay y Fuera del Molde son **composición ilustrativa**, no capturas publicables.
- `logo.png` contiene un gráfico compuesto con retrato ilustrado y logotipo; pedir/exportar variante oficial aislada. No tomar el dibujo humano como una foto real.
- El retrato para Sobre mí debe venir de material auténtico proporcionado/autorizado; no se sustituye por una persona generada.
- Un Concept Demo se rotula como demo, y un producto propio en curso como tal; no insinuar clientes ni resultados no demostrados.
- Imagen web: `width` y `height` explícitos, formatos comprimidos, `alt` con función; no repetir fotografía por ausencia de assets.

---

## 8. Responsive y comportamiento

### Puntos de auditoría (no restricciones rígidas)

- **320 px:** menú funcional, título refluye sin corte lateral, botones caben y párrafos no desbordan.
- **360–430 px:** jerarquía estable, CTA aparece razonablemente temprano, espacios no quedan vacíos por `min-height` excesivo.
- **768–1024 px:** verificar layouts intermedios, especialmente 1+2 de proyectos, lista de Servicios y Signature.
- **1280–1440 px:** titulares expresivos sin sobrepasar su columna y calidad de imágenes a tamaño real.
- **200 % zoom / pantalla angosta:** texto refluye y los controles siguen disponibles.
- **Reduced motion:** toda la información existe sin animación, con controles accesibles.

### Movimiento y microinteracciones

- Animaciones solo para apoyar lectura o estados: aparición corta, cambios de etapa y hover enfocados.
- Duración indicativa 160–280 ms para controles; evitar scroll-jacking, parallax obligatorio, vídeos pesados decorativos y animaciones continuas.
- No ocultar contenido indispensable detrás de hover. Un usuario táctil debe acceder al mismo contenido.
- Respetar `prefers-reduced-motion`.

---

## 9. Checklist de accesibilidad de la V2

- [ ] Relaciones de contraste calculadas para cada combinación de primer plano/fondo.
- [ ] Resolver específicamente la serif marfil sobre Hero naranja.
- [ ] Tablas o listados navegables con teclado y orden de foco lógico.
- [ ] Foco visible con contraste suficiente; no oculto por header sticky.
- [ ] Acordeones y tabs con etiquetas y estados accesibles.
- [ ] Texto redimensionable a 200 %, sin clipping horizontal.
- [ ] No depender exclusivamente del color para comunicar selección.
- [ ] Botones/enlaces reales, no texto estático que parece clicable.
- [ ] CTA usable sin efectos; respeto por movimiento reducido.
- [ ] Imágenes con función y descripción alternativa contextual.

---

## 10. Reglas anti-AI-Slop para dirección visual

**Rechazar directamente:**

1. Retratos ficticios presentados como reales.
2. Dispositivos flotantes o interfaces inventadas sin función narrativa.
3. Capturas con texto ilegible o funcionalidades inexistentes.
4. Gradientes, sombras luminosas, círculos orbitales, estrellas decorativas y brillos por defecto.
5. Cuatro tarjetas iguales con ícono + título + tres líneas por hábito.
6. Tipografía serif naranja añadida automáticamente a todo H2.
7. Títulos grandilocuentes que no indican qué se ofrece.
8. Métricas, testimonios, marcas, tiempos o correo sin verificar.
9. Textos densos en primera pantalla y CTA repetido sin intención.
10. Mockups presentados dentro de varios teléfonos cuando se solicitó una sola vista responsive.

**Aceptar cuando aporte:** una retícula deliberada, recortes auténticos de proyecto, un efecto de transición discreto, una decisión tipográfica intencional, una composición que mejora comprensión, un recurso decorativo único con función clara.

---

## 11. Puertas de aprobación para cada mockup V2

Para pasar de exploración a final por sección deben completarse estas seis comprobaciones:

1. **Contenido**: texto revisado, sin afirmaciones falsas ni redundancia con sección vecina.
2. **Composición**: una idea visual dominante, coherente con el sistema, no plantilla genérica.
3. **Identidad**: logo, familia tipográfica, paleta y retícula consistente.
4. **Desktop/mobile**: dos diseños independientes, ambos realmente usables y coherentes.
5. **Interacción**: destino y estados descritos; no hay affordances engañosos.
6. **Evidencia**: activos reales o placeholders explícitos en mockup; no se publican los pendientes.

**Estados:** `Propuesto → Auditado → Corregido → Aprobado por Oscar → Congelado para desarrollo`.

No aprobar automáticamente una vista por haberla generado. El cierre se registra en matriz por sección y dispositivo.

---

## 12. Próximas decisiones y orden de ejecución

1. **Hero desktop V2**: conservar composición naranja/negro y mensaje aprobado; resolver contraste de serif clara, wordmark auténtico, tipografía, reflujo y CTA.
2. **Hero mobile V2**: comprobar altura total, legibilidad 320–430 y acceso a proyecto/contacto; no recortar la frase central.
3. **Proyectos 02**: integrar recursos auténticos de los tres proyectos y etiquetas correctas de estado.
4. Continuar con **03 → 09**, cada sección desktop + mobile, auditando contra sus adyacentes.
5. Componer **Home completo desktop + Home completo mobile** y comprobar ritmo, altura, duplicaciones y experiencia.
6. Solo entonces **congelar el Design System**, los tokens definitivos, copy y Page Blueprint, y comenzar diseños de páginas internas.

### Pendientes P0 del usuario / repositorio

- Fuente aislada oficial del monograma + wordmark de Oscar Dev (SVG/PNG exportado y autorizado).
- Capturas verificadas de Duarte’s, ConectaPlay y Fuera del Molde; estado/rol de cada proyecto.
- Fotografía real para Sobre mí, o mantener placeholder hasta obtenerla.
- WhatsApp real, correo operativo, rutas, redes y políticas si se van a mostrar.

**Decisión editorial para salir de esta fase:** utilizar este documento como norma **provisional** y empezar el Hero V2; no convertir todavía estas cifras y tipografías en una implementación inamovible.
