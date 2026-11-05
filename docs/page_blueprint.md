# OSCAR DEV · FASE 11
## Page Blueprint del Home — Versión 1 (candidato de implementación)

**Fecha:** 28 de octubre de 2026  
**Sitio:** `oscardev.co`  
**Tipo:** especificación funcional, editorial y de diseño de la página de inicio.  
**Estado:** **candidato para validación integral**; no equivale a aprobación de assets ni orden de programar.  
**Secciones:** nueve bloques de contenido, **un único header global** y **un único footer global**.  
**Alcance:** Home desktop, tablet y mobile; componentes, copy base, navegación, interacción, criterios responsive, SEO y analítica, dependencias y QA. **No incluye** diseños finales de páginas internas ni implementación.

---

## 0. Reglas de lectura y prioridad

### 0.1 Tres estados de decisión

- **[D] Decidido:** dirección explícitamente elegida durante las iteraciones; conservar salvo nueva indicación del usuario.
- **[C] Candidato:** decisión concreta propuesta para cerrar el diseño; exige revisión del overview completo o prueba en navegador.
- **[P] Pendiente:** dato, recurso o comprobación necesaria antes de publicarlo.

La prioridad en caso de conflicto es: **decisiones recientes del usuario → identidad y oferta de Oscar Dev → auditoría V2 → blueprint actual → Design System provisional/maquetas antiguas**. El documento de Design System previo que proponía Hero sin retrato y proyectos 1+2 **está superado** en esos dos puntos.

### 0.2 Fuentes internas consultadas

- `00_Oscar_Dev_Indice_Maestro_y_Reglas_de_Uso.md`
- `01_Oscar_Dev_Identidad_Voz_y_Oferta.md`
- `07_Oscar_Dev_Casos_Prueba_Social_y_Portafolio.md`
- `Oscar_Dev_Fase_05_Storytelling_y_Arquitectura_Home_V1.md` (solo para intención narrativa; no prevalece sobre decisiones nuevas)
- `Oscar_Dev_Fase_08_Design_System_Provisional_V2.md` (tokens preliminares)
- `Oscar_Dev_Fase_10_Auditoria_Integral_Home_V2.md`
- Mockups y HTML V2/V3 generados durante el proyecto; **referencias visuales, no evidencias de entregables reales**.

### 0.3 Propósito y conversión

**Tesis:** Oscar Dev ayuda a negocios a convertir necesidades y procesos en soluciones digitales útiles: webs, tiendas, aplicaciones y plataformas, con criterio de negocio.

**Audiencia primaria:** dueños y responsables de negocios, pequeñas empresas y profesionales que necesitan presencia digital, procesos mejor organizados o venta online. **Secundaria:** personas con ideas de producto digital y posibles colaboradores.

- **Conversión principal:** conversación calificada por WhatsApp Business desde un CTA claro.
- **Conversiones secundarias:** exploración de trabajos, lectura de un caso individual y consulta de servicios.
- **No optimizar** la portada para impresionar a otros desarrolladores con tecnología sin contexto, ni para prometer ventas o resultados no documentados.

---

## 1. Arquitectura global del Home

### 1.1 Recorrido narrativo [D]

```text
[Header global: transparente sobre Hero → carbón al salir del Hero]
01 HERO             Quién soy / qué hago / cómo contacto
   └─ adelanto compacto de trabajos (máximo tres, sujetos a verificación)
02 PROYECTOS        Prueba y descubrimiento de todo el catálogo publicado
03 MANIFIESTO       Mi criterio antes de diseñar
04 SERVICIOS        Qué puede contratar el visitante
05 SIGNATURE        Un recorrido de UX demostrable (condicional)
06 MÉTODO           Cómo se desarrolla la relación de trabajo
07 SOBRE MÍ         Identidad y confianza humana
08 FAQ              Objeciones comerciales habituales
09 CONTACTO         Una acción prioritaria para comenzar
[Footer global: navegación, canales reales, legales aplicables]
```

**Una función por sección**. No repetir el contenido del Manifiesto en Signature ni convertir el Método en una tercera declaración filosófica.

### 1.2 Ritmo y superficies [D / C]

| Sección | Superficie | Composición predominante | Regla de diferenciación |
|---|---|---|---|
| 01 Hero | Naranja principal | Titular monumental + retrato real | Emoción e identidad; no dashboard |
| 02 Proyectos | Carbón profundo | Carrusel horizontal de casos | Portadas auténticas como protagonista |
| 03 Manifiesto | Marfil/papel cálido | Tesis tipográfica breve | Sin imágenes, CTA ni pasos |
| 04 Servicios | Carbón | Índice editorial de cuatro filas | No tarjetas con íconos |
| 05 Signature | Papel cálido | Texto + única etapa interactiva | Un ejemplo, no nueva galería |
| 06 Método | Carbón cálido | Timeline de cuatro etapas | Entregables y expectativas comerciales |
| 07 Sobre mí | Marfil cálido | Retrato real + biografía | Sin lista de beneficios decorativos |
| 08 FAQ | Papel cálido | Acordeón de líneas | Preguntas comerciales concretas |
| 09 Contacto | Naranja → Footer carbón | Mensaje monumental y CTA | Evitar duplicar el Hero |

**Nota:** secciones 07 y 08 comparten tonos claros a propósito; separarlas mediante retícula, cambio de escala y espaciado, no insertando un bloque artificial.

### 1.3 Jerarquía de títulos y landmarks [C]

- Un solo `<h1>` en Hero: «Ideas que funcionan.»; el `<h1>` tendrá explicación semántica mediante el párrafo de propuesta de valor.
- Un `<h2>` por sección (02–09), `<h3>` para nombres de servicios, etapas y casos cuando corresponda.
- Un `<header>`, `<main>` y `<footer>` globales. Cada sección con `aria-labelledby` y un identificador estable.
- El header es **un componente único**, aunque las maquetas independientes lo dibujen repetidamente.

---

## 2. Navegación y arquitectura de información

### 2.1 Header [D]

**Estado A — inicial sobre Hero:** transparente; sin bloque opaco; logo oficial en variante legible; enlaces contrastados; botón principal con tratamiento oscuro sobre naranja.

**Estado B — después del Hero:** fondo carbón `#121214`, logo/texto claros y CTA naranja. Transición sutil sin alterar tamaño ni causar salto visual.

**Comportamiento propuesto [C]:** header `position: sticky` / fixed controlado; usar `IntersectionObserver` sobre sentinela del Hero, no depender exclusivamente de un número arbitrario de píxeles; actualizar el estado cuando el encabezado deja de superponerse al área naranja. Animar color y fondo durante 150–220 ms; en `prefers-reduced-motion`, cambio sin animación.

**En desktop:** logo izquierda, navegación centro/derecha, CTA comercial al extremo.  
**En mobile:** logo + menú accesible; no imponer el CTA del header si hace que se amontone. Menú abierto con fondo sólido, foco gestionado, cierre con `Escape`, scroll y selección de enlace. Ninguna navegación oculta tras hover.

### 2.2 Enlaces y destinos propuestos

| Elemento | Destino | Estado | Regla |
|---|---|---|---|
| Logo | `/` | [D] | Siempre vuelve a inicio |
| Menú «Proyectos» | `/proyectos` | [C] | Archivo completo; el Home ya tiene carrusel |
| Menú «Servicios» | `/servicios` | [C] | Si la página interna aún no existe, usar `/#servicios` temporalmente, nunca enlace roto |
| Menú «Sobre mí» | `/#sobre-mi` | [C] | Página propia opcional para fase posterior |
| Menú «Contacto» | `/#contacto` | [C] | Desplaza al cierre comercial |
| CTA «Cuéntame tu proyecto» | enlace verificado WhatsApp | [P] | No incluir número de ejemplo ni prometer plazo de respuesta |
| Hero «Ver proyectos» | `/#proyectos` | [D] | Desplaza al carrusel, no abandona el Home |
| Franja Hero: mini proyecto | `/proyectos/{slug}` | [D] | Caso interno existente al publicar |
| Franja Hero: «Todos los proyectos» | `/proyectos` | [D] | No es flecha de carrusel |
| Tarjeta del carrusel | `/proyectos/{slug}` | [D] | No abrir URL externa inmediatamente |
| Enlace «Ver todos los proyectos» | `/proyectos` | [D] | Archivo completo adicional, no requisito para explorar |
| «Ver servicio» | `/servicios#id-servicio` o detalle creado | [C] | No inventar cuatro páginas antes de tenerlas |
| Signature «Explorar el caso» | `/proyectos/conectaplay` | [C] | Publicar solo cuando exista caso verificado |
| Footer, redes y legales | URLs verificadas | [P] | Renderizar solamente enlaces existentes/aplicables |

**Importante:** el contenido que aparece en mockups como `hola@oscardev.co`, métricas, enlaces a perfiles, soportes o políticas **no se convierte en dato real por aparecer dibujado**. Verificación antes de publicar.

### 2.3 Anclas del Home

`#inicio`, `#proyectos`, `#manifiesto`, `#servicios`, `#experiencia`, `#metodo`, `#sobre-mi`, `#preguntas`, `#contacto`.

Usar `scroll-margin-top` equivalente al header; evitar scrolls que dejen el título oculto.

---

## 3. Sección 01 — HERO

**ID:** `inicio` · **Estado visual:** [D] Hero V3 escogido, con pendientes de autenticidad.

### 3.1 Función

En pocos segundos, identificar Oscar Dev, diseño/desarrollo digital para negocios y posibilidad de comenzar conversación. Aportar personalidad humana; **no** intentar explicar ConectaPlay ni toda la oferta en esta pantalla.

### 3.2 Contenido candidato

- Eyebrow: `DESARROLLO WEB · APLICACIONES · SOLUCIONES DIGITALES`.
- H1: **Ideas que funcionan.**
- Descripción: **Diseño y desarrollo digital para negocios, marcas y proyectos que quieren crecer.**
- CTA principal: **Cuéntame tu proyecto** → WhatsApp validado.
- CTA secundario: **Ver proyectos** → `#proyectos`.
- Indicador discreto: «Scroll para explorar» (decorativo o botón de salto, definir en UI).
- Franja de adelantos con hasta tres trabajos, cada uno con nombre + tipo + miniatura real y una acción explícita «Todos los proyectos».

**Nota editorial:** el copy es el de la dirección visual seleccionada; se validará su claridad comercial en el overview. La expresión «que quieren crecer» es aspiracional, **no** una promesa de crecimiento medido.

### 3.3 Desktop [D / C]

- Fondo naranja dominante a todo el ancho; composición a dos masas: izquierda H1/copy/CTAs y derecha retrato de Oscar (fotografía auténtica requerida).
- Retrato integrado en el layout, no dentro de una tarjeta o pantalla ficticia; cuidar recorte, dirección de mirada y continuidad de fondo.
- Header visualmente transparente encima del Hero.
- Franja de proyectos como transición inferior; reducida respecto a la versión sobrecargada original.
- Garantizar que no tape H1, CTA ni rostro en 1280, 1366, 1440 y pantallas ultrapanorámicas.

### 3.4 Mobile [D / C]

- Layout vertical real **sin marco de teléfono**: header, eyebrow, titular refluido, propuesta de valor, CTA principal, CTA secundario, retrato y avance de proyectos.
- El retrato puede ubicarse bajo CTA y compartir área con fondo naranja, pero no ocultar el texto.
- Franja de proyectos en formato compacto: opción recomendada, **un acceso destacado y un enlace a todos** en el primer viewport extendido; no apilar tres miniaturas diminutas ni crear un segundo carrusel dentro del Hero.
- Min-altura flexible (`min-height` orientativa) sin forzar que todo quepa dentro de `100vh`; el contenido crece con accesibilidad y zoom.

### 3.5 Interacciones

- Header transparente → oscuro por intersección con Hero.
- CTA de WhatsApp abre canal real con texto inicial sencillo aprobado.
- «Ver proyectos» hace scroll anclado.
- Miniproyectos abren el caso; «Todos los proyectos» abre el archivo.
- No autoplay, video, 3D ni métricas de clientes.

### 3.6 Pendientes

**[P]** Foto real de Oscar y permiso de uso; logotipo oficial aislado con variantes; portadas auténticas; lista final de mini proyectos; contraste de palabra serif crema sobre naranja (actualmente insuficiente), URL de WhatsApp.

---

## 4. Sección 02 — PROYECTOS DESTACADOS

**ID:** `proyectos` · **Estado visual:** [D] carrusel horizontal, no mosaico fijo 1+2.

### 4.1 Función

El usuario puede **descubrir todos los trabajos publicados sin salir del Home**; cada tarjeta demuestra una capacidad y conduce a un caso completo. `/proyectos` se conserva como archivo categorizado, no como condición para poder ver más de tres casos.

### 4.2 Encabezado

- Eyebrow: `02 / PROYECTOS DESTACADOS`.
- H2 candidato: **Lo que he diseñado y construido.**
- Apoyo: **Proyectos de distintos sectores, cada uno con un problema y una solución diferente.**
- Navegación anterior/siguiente a la derecha en desktop y a una posición táctil cómoda en mobile.

Evitar «proyectos que generan resultados» si no existen indicadores verificables para cada caso.

### 4.3 Composición

**Desktop [D]:** aproximadamente 3 tarjetas enteras más parte de la siguiente (según ancho), portada protagonista, nombre, tipo de trabajo y descripción breve. Barra de progreso auténtica según posición; texto visible que invite a explorar; sin falsos counters.  
**Tablet [C]:** 1.8–2.3 tarjetas según viewport.  
**Mobile [D]:** una tarjeta legible y parte de la siguiente (aprox. 1.05–1.15); **no cortar el texto de la tarjeta principal**; swipe horizontal. Barra de progreso, flechas táctiles y enlace al archivo.  
**El carrusel no es infinito**: al llegar al final, deshabilitar avanzar; al principio, deshabilitar retroceder.

### 4.4 Modelo mínimo de tarjeta

| Campo | Ejemplo de contenido | Regla de integridad |
|---|---|---|
| `title` | `Duarte’s Autodetailing` | Nombre comercial exacto confirmado |
| `slug` | `duartes-autodetailing` | URL interna única y existente |
| `type` | `Contenido audiovisual` | Qué hizo Oscar realmente |
| `sector` | `Automotriz` | Sector visible, no categoría genérica |
| `description` | 1–2 líneas orientadas al problema / entrega | Sin promesa no comprobada |
| `status` | `Cliente`, `Producto propio`, `En desarrollo`, `Concept Demo` | Uno real, explícito y validado |
| `role` | `Diseño y edición de contenidos` | Participación verificable |
| `cover` | archivo original o captura auténtica | Prohibido reemplazar por interfaz inventada |
| `caseUrl` | `/proyectos/{slug}` | Debe funcionar |
| `externalUrl` | opcional | Solo dentro del caso, si existe |
| `imageAlt` | texto descriptivo del asset real | No duplicar nombre sin describir contenido |

### 4.5 Casos para inventario (orden final pendiente)

| Caso | Territorio demostrable | Aclaración obligatoria | Estado editorial |
|---|---|---|---|
| Duarte’s Autodetailing | Producción y edición de contenido para redes | **No representarlo con una página web atribuida a Oscar** si no fue el entregable | [P] verificar reel/portadas y permiso |
| ConectaPlay | Plataforma para explorar partidos, inscripción y pagos | Estado real, producto propio, funcionalidades demostrables | [P] verificación de pantallas |
| Fuera del Molde | Comercio electrónico y catálogo de moda | Confirmar rol, estado, assets y permiso | [P] |
| Statum | Plataforma de gestión | Validar estado y pantallas | [P] |
| Óptica Alemania | Concept Demo de presencia/catálogo | **Rotular Concept Demo** salvo contrato/producción confirmado | [P] |
| Los Ángeles Glamping | Concept Demo turístico | **Rotular Concept Demo** salvo cambio de estado confirmado | [P] |
| Upsteppers | Proyecto de marca/comercio | Confirmar entrega específica y portadas | [P] |
| La Locura Bar | Promoción/contenido de negocio local | Confirmar alcance de marketing vs desarrollo | [P] |
| Pley | Producto vinculado a experiencia deportiva | **Resolver relación Pley/ConectaPlay** antes de publicarlo aparte | [P] bloqueo de duplicación |

**Orden editorial candidato [C]:** abrir con diversidad (contenido audiovisual → producto digital → ecommerce), y continuar con plataformas y Concept Demos claramente rotulados. El orden se ajustará tras inventario real; **no** se congela solo porque una imagen generada haya colocado ciertos proyectos.

### 4.6 Semántica e interacción

- Región de carrusel con nombre accesible; cada proyecto es un enlace completo o un enlace claramente identificado.
- Botones anterior/siguiente con `aria-label`, estado `disabled` cuando aplica, foco visible y teclado.
- Swipe/drag no bloquea scroll vertical; se respeta `touch-action: pan-y` cuando corresponda.
- Indicador basado en posición real, no “progreso” decorativo fijo.
- Posible CSS `scroll-snap-type: x mandatory` + lógica pequeña de seguimiento con `IntersectionObserver`/scroll, con control de foco.
- No hay autoplay. Lazy-load de imágenes no visibles.

### 4.7 Relación con la franja del Hero

La franja es un **adelanto rápido** con 2–3 trabajos. El carrusel es **la experiencia completa de exploración**. Se admite repetir un caso si cumple una función clara, pero evitar la misma secuencia exacta y duplicados confusos de Pley/ConectaPlay.

---

## 5. Sección 03 — MANIFIESTO

**ID:** `manifiesto` · **Estado visual:** [D] marfil editorial.

### 5.1 Función

Una idea de criterio, sin explicar metodología ni vender un servicio. Pausa después del carrusel oscuro.

### 5.2 Copy base

- Eyebrow: `03 / MI FILOSOFÍA`.
- H2: **Antes de una pantalla, hay una decisión.**
- Cuerpo candidato, acortado: **Cada proyecto comienza con una necesidad concreta y un objetivo claro. La estrategia, el diseño y la tecnología vienen después, para resolver lo que realmente importa.**
- Sin CTA dentro de este bloque.

### 5.3 Layout y responsive

Desktop: titular grande alineado a retícula, párrafo secundario en columna con aire suficiente. Mobile: una columna, lectura natural, sin exagerar alturas, sin imagen, ni tres íconos ni pasos. La palabra «decisión.» puede llevar tratamiento serif pero **necesita un color de texto sobre marfil que supere contraste**.

### 5.4 Pendiente

**[C]** confirmar versión final del cuerpo y reparto de serif; **[P]** prueba real de contraste y reflujo en 320–430 px CSS.

---

## 6. Sección 04 — SERVICIOS

**ID:** `servicios` · **Estado visual:** [D] índice editorial oscuro de cuatro filas.

### 6.1 Función

Hacer reconocible la oferta sin exigir al cliente conocer términos técnicos. Debe poder identificar si necesita presencia, venta, producto o control de procesos.

### 6.2 Copy base (según V2)

H2: **Lo que puedo construir contigo.**  
Apoyo: **Webs, tiendas y plataformas digitales pensadas para resolver necesidades reales de tu negocio.**

| Nº | Servicio | Descripción comercial | Identificador |
|---|---|---|---|
| 01 | Sitios web profesionales | Presenta tu negocio con claridad, genera confianza y facilita el siguiente paso. | `sitios-web` |
| 02 | Tiendas online | Organiza tus productos y ofrece una experiencia de compra sencilla y bien diseñada. | `tiendas-online` |
| 03 | Aplicaciones web y móviles | Convierte una idea de producto en una experiencia digital útil para sus usuarios. | `aplicaciones` |
| 04 | Plataformas a medida | Centraliza reservas, pagos, usuarios y procesos cuando tu negocio necesita más control. | `plataformas` |

**No sustituir estas categorías por** «Backend», «Base de datos» o «Consultoría» como principales: la oferta del Home se organiza alrededor de necesidades, no de disciplinas técnicas.

### 6.3 Desktop/mobile

Desktop: cuatro filas amplias, número, titular, explicación y flecha. Mobile: una columna de filas con número → nombre → descripción → enlace; líneas finas; sin cards, fotografías, gadgets ni iconos decorativos.

### 6.4 Destinos

[C] Si `/servicios` ya existe, enlazar cada fila a su ancla correspondiente. Si más adelante hay páginas de detalle, migrar el destino sin cambiar el componente. Hasta tener rutas reales, usar enlace explícito a contacto con contexto o ancla, **no simular navegación**.

### 6.5 Estados interactivos

Fila/enlace clicable con `hover`, `focus-visible` y activación por teclado; no depender solo del ícono de flecha. Texto del enlace comprensible para lectores de pantalla. CTA adicional al pie solo si no duplica la acción del Header.

---

## 7. Sección 05 — SIGNATURE: UNA IDEA EN ACCIÓN

**ID:** `experiencia` · **Estado visual:** [C] mantener si la experiencia auténtica aporta valor.

### 7.1 Función

Microdemostración de UX, **no una segunda galería**. Explica una secuencia concreta que el usuario puede comprender, distinta de los servicios y del Método.

### 7.2 Ejemplo propuesto

- Eyebrow: `05 / UNA IDEA EN ACCIÓN`.
- H2: **Una necesidad sencilla. Una experiencia bien pensada.**
- Contexto: **Encontrar un partido debería ser sencillo. ConectaPlay sirve como ejemplo de cómo convertir esa necesidad en un recorrido: descubrir, elegir e inscribirse.**
- Producto utilizado como caso de demostración: ConectaPlay, sujeto a validación.

### 7.3 Estados interactivos

| Estado | Etiqueta | Qué se explica | Contenido que debe visualizarse |
|---|---|---|---|
| 0 | Descubrir | Encontrar partidos disponibles según contexto y preferencias | Captura real de búsqueda/listado |
| 1 | Elegir | Consultar detalle, lugar, fecha, condiciones, cupos | Captura real de detalle |
| 2 | Inscribirse | Confirmar participación y entender el paso de pago si corresponde | Captura real del flujo de inscripción |

**Regla crítica:** no simular disponibilidad, pagos confirmados, precios, personas o registros reales. Si se utiliza una pantalla ilustrativa, debe decir **«Ejemplo conceptual»**, no presentarse como captura de producción.

### 7.4 Desktop/mobile

Desktop: texto editorial a un lado y **un solo estado visual activo** al otro; tres controles/tab o stepper visibles, explicaciones que cambian al seleccionar cada etapa. Mobile: título, contexto, stepper o tres tabs adaptables, pantalla activa y explicación; flechas anterior/siguiente de al menos 44×44 CSS px. No tres teléfonos simultáneos.

### 7.5 Accesibilidad

- Patrón de tabs o stepper elegido con semántica coherente; foco/teclado, `aria-selected` si tabs, y panel etiquetado.
- Si la información cambia, actualizar panel perceptible sin scroll forzado ni animaciones que dependan de movimiento.
- Cumplir `prefers-reduced-motion`; alternativa estática legible incluso sin JS.

### 7.6 Gate editorial [P]

Mantener la sección completa **solo si** disponemos de tres pantallas verificadas y el visitante entiende una decisión de UX nueva. En caso contrario, **reducirla a una comparación estática breve** o trasladar la demostración al caso de estudio de ConectaPlay. No publicar una falsa “demo funcional”.

---

## 8. Sección 06 — MÉTODO DE TRABAJO

**ID:** `metodo` · **Estado visual:** [D] timeline editorial oscuro.

### 8.1 Función

Reducir incertidumbre contractual: qué sucede al contratar, qué se define y cuál es el entregable aproximado en cada etapa.

### 8.2 Copy base (V2)

- Eyebrow: `06 / CÓMO TRABAJAMOS`.
- H2: **De una conversación a una solución real.**
- Apoyo: **Un proceso claro para que sepas qué estamos definiendo, diseñando y construyendo en cada etapa.**

| Nº | Etapa | Descripción | Resultado / límite |
|---|---|---|---|
| 01 | Hablemos de tu negocio | Entendemos qué necesitas, qué problema quieres resolver y qué objetivo buscas conseguir. | Necesidades y prioridades identificadas |
| 02 | Definimos el proyecto | Aterrizamos la solución, sus funcionalidades, su alcance y una propuesta de trabajo. | Alcance y propuesta para revisar |
| 03 | Diseñamos y validamos | Damos forma a la experiencia y revisamos cómo debería funcionar antes de cerrar el diseño. | Propuesta visual y funcional revisada |
| 04 | Construimos y lanzamos | Desarrollamos, probamos y preparamos la solución para su entrega o publicación. | Entregables según el alcance acordado |

**No prometer** mantenimiento, rondas de corrección ilimitadas, plazo fijo o garantía de crecimiento. Cualquier variación se especifica en la propuesta comercial individual.

### 8.3 Composición

Desktop: título a la izquierda y timeline a la derecha, líneas delgadas y numeración; mobile: una columna vertical sin tarjetas, con etapa + explicación + resultado. No fotos, iconos 3D ni gráficas de crecimiento inventadas.

### 8.4 Interacción

Bloque principalmente estático; no necesita scroll-jacking, acordeones ni animación persistente. Una revelación opcional leve, desactivada con reduced motion.

---

## 9. Sección 07 — SOBRE MÍ

**ID:** `sobre-mi` · **Estado visual:** [D] composición editorial con fotografía auténtica.

### 9.1 Función

Mostrar quién hará el trabajo; reducir la sensación de agencia anónima. Marca personal, sin atribuirse un equipo no confirmado.

### 9.2 Copy base (V2)

- Eyebrow: `07 / SOBRE MÍ`.
- H2: **Hola, soy Oscar García.**
- Texto: **Desarrollador web y creador de soluciones digitales desde 2019.**
- Párrafo 1: **He trabajado en proyectos de comercio electrónico, turismo, deportes y otros sectores, combinando diseño y desarrollo para construir experiencias útiles.**
- Párrafo 2: **Me interesa entender cómo funciona cada negocio, qué necesita mejorar y cómo la tecnología puede ayudar sin complicar las cosas.**
- Metadato: `COLOMBIA · DESARROLLO INDEPENDIENTE`.
- Salida secundaria: **Conoce mis proyectos** → `#proyectos` o `/proyectos` [C]; evitar mandar a una URL inexistente.

**El dato «desde 2019» está recogido en la identidad interna del proyecto; no extrapolar cantidad de clientes ni proyectos a partir de él.**

### 9.3 Composición

Desktop: retrato de gran tamaño izquierda y bio derecha; sin tres beneficios ni íconos flotantes. Mobile: etiqueta, título, retrato amplio y texto; mismo **asset real** con recorte responsive, no dos rostros generados diferentes.

### 9.4 P0 de publicación

**[P]** Falta fotografía auténtica de Oscar; no publicar un retrato generado como si fuera suyo. Puede salir la versión sin fotografía y con diseño tipográfico ajustado si el recurso todavía no existe, sujeto a aprobación explícita.

---

## 10. Sección 08 — PREGUNTAS FRECUENTES

**ID:** `preguntas` · **Estado visual:** [D] acordeón editorial sin tarjetas.

### 10.1 Función

Resolver dudas reales **antes de contratar**, sin repetir servicios o método.

### 10.2 Copy base (V2)

H2: **Hablemos claro.**  
Apoyo: **Lo que probablemente quieres saber antes de comenzar un proyecto.**

| Nº | Pregunta | Respuesta candidata (validar condiciones) |
|---|---|---|
| 01 | No sé qué solución necesita mi negocio. ¿Podemos revisarlo? | Claro. Lo primero es entender qué quieres resolver. A partir de eso podemos identificar si tiene sentido una web, una tienda online, una aplicación o una plataforma a medida. |
| 02 | ¿Cuánto cuesta desarrollar un proyecto? | Depende del alcance, las funcionalidades y el trabajo necesario. Primero definimos qué necesitas y después preparo una propuesta con el presupuesto. |
| 03 | ¿Cuánto tiempo tarda? | Una landing y una plataforma a medida requieren esfuerzos diferentes. El cronograma se define según el alcance acordado y se comunica antes de iniciar. |
| 04 | ¿Qué necesito tener preparado? | Es útil contar con información de tu negocio, servicios, identidad visual y materiales disponibles. Si algo falta, podemos identificarlo durante la definición. |
| 05 | ¿Podré actualizar el contenido después? | Podemos contemplar una forma de administrar el contenido cuando el proyecto lo necesite. Se define desde el alcance para evitar funciones innecesarias. |
| 06 | ¿Qué sucede después de la entrega? | La publicación, capacitación, soporte y mantenimiento se especifican en la propuesta, según lo que necesite cada proyecto. |

**Las respuestas son base editorial, no contrato ni promesa de un servicio incluido.**

### 10.3 Comportamiento

- Primer panel abierto por defecto, como la maqueta validada; solo uno abierto a la vez [C] a probar en mobile para que la sección no sea demasiado larga.
- Cada pregunta usa botón semántico con `aria-expanded`, referencia `aria-controls`, región/panel asociado y contenido accesible.
- Divisores finos, iconos +/−, foco visible; `Enter` y `Space` activan. No tarjetas ni efectos de salto excesivo.
- Sin indexar preguntas con respuestas engañosas ni añadir marcado de FAQ rich result por rutina; si se considera esquema estructurado, comprobar pertinencia vigente durante implementación.

### 10.4 Salida

Una única frase de ayuda al final: **¿Tienes otra pregunta? Podemos hablar de tu caso.** Enlace a contacto verificado sin repetir innecesariamente el mismo CTA visual grande de otras secciones.

---

## 11. Sección 09 — CONTACTO FINAL Y FOOTER

**ID:** `contacto` · **Estado visual:** [D] naranja protagonista y footer carbón.

### 11.1 Función

Dar la salida comercial más simple y menos intimidante después de recorrer la página.

### 11.2 Copy base

- Eyebrow: `09 / EMPECEMOS A CONVERSAR`.
- H2: **¿Qué tienes en mente?**
- Texto: **Cuéntame qué quieres crear, mejorar o solucionar en tu negocio. Revisamos juntos qué solución digital tiene sentido para tu proyecto.**
- CTA único del bloque: **Cuéntame tu proyecto** → WhatsApp Business verificado.

Evitar frases «respuesta rápida», «sin compromiso», disponibilidad abierta o «te respondo en X horas» si no hay política operativa confirmada.

### 11.3 Composición

- Bloque naranja a ancho completo, copy protagonista, **botón negro** de alto contraste, sin fotografía ni curvas ornamentales acumuladas.
- Footer carbón inmediatamente después, con logotipo oficial, breve descripción de marca, enlaces internos, contacto y redes confirmadas; línea legal solo con destinos existentes/aplicables.
- Mobile: orden vertical natural, CTA ancho cómodo, footer organizado por grupos; no repetir CTA 2–3 veces.

### 11.4 Footer: datos condicionados

| Elemento | Mostrar cuando | Pendiente |
|---|---|---|
| Identidad OSCAR DEV | Logo oficial exportado | [P] variantes fondo oscuro |
| Navegación | Rutas publicadas | [C] conjunto final |
| WhatsApp Business | URL exacta y prueba real | [P] |
| Instagram, TikTok, Facebook, otras | Perfil oficial y permiso de enlazar | [P] enlaces |
| Correo electrónico | Buzón configurado y recepción probada | [P] **no inventarlo** |
| Colombia · trabajo remoto | Identidad/modalidad vigente | [C] redacción |
| Política de privacidad | Texto/ruta aplicables al tratamiento real de datos | [P] si corresponde |
| Términos | Documento real publicado, si aplica | [P] |
| Copyright | Año dinámico | [C] evitar fecha fija que envejezca |

---

## 12. Sistema de diseño unificado — candidato actualizado

**Esto modifica los puntos obsoletos del Design System provisional V2; no reemplaza un kit de componentes de producción.**

### 12.1 Tokens base

| Token | Valor de partida | Uso |
|---|---|---|
| `color.brand.orange` | `#F29A2E` | Hero, CTA final, elementos de acción sobre fondos oscuros |
| `color.ink` | `#121214` | Texto sobre naranja; fondo principal oscuro |
| `color.charcoal` | `#171719` | Servicios/proyectos según contraste |
| `color.ivory` | `#EBDDCA` | Texto principal sobre carbón |
| `color.paper` | `#F5F1E9` | Manifiesto, Signature y FAQ |
| `color.orangeOnPaper` | `#995000` **candidato** | Texto pequeño/naranja sobre papel: requiere validación visual |
| `color.creamOnDark` | `#EBDDCA` | Texto legible en fondo carbón |
| `color.dividerLight` | derivado de tinta con opacidad medida | Divisores en fondos claros |
| `color.dividerDark` | derivado del marfil con opacidad medida | Divisores en fondos oscuros |

**Contraste aproximado calculado para estos pares:** negro `#121214` sobre naranja `#F29A2E` ≈ **8.41:1**; marfil `#EBDDCA` sobre naranja ≈ **1.67:1** (**no suficiente para texto**); `#995000` sobre papel `#F5F1E9` ≈ **5.32:1**. Los titulares crema sobre naranja del Hero/Contacto necesitan solución de contraste en el diseño final: cambiar tono, añadir superficie oscura apropiada o replantear su rol; **no exceptuarlos por ser decorativos si comunican texto esencial**.

### 12.2 Tipografía [C]

- Display sans candidata: **Inter Tight** (o equivalente probado).
- Lectura/UI: **Inter** (o alternativa equivalente).
- Acento editorial: **Instrument Serif Italic** (candidata, moderar uso).
- Evitar utilizar la serif naranja en cada H2. Reservarla para Hero y 2–3 momentos claves tras ver la composición integral.
- No usar imágenes para renderizar títulos: todo el texto es HTML real y seleccionable.

### 12.3 Retícula y medidas de partida [C]

| Entorno | Contenedor | Padding lateral | Gap/recomendación |
|---|---|---|---|
| ≥1440px | max-width 1360–1440px | 48–88px | 24–32px |
| 1200–1439px | fluido | 40–64px | 20–28px |
| 768–1199px | fluido | 28–40px | 20–24px |
| 360–767px | fluido | 20–24px | 12–16px |
| 320–359px | fluido | 16–20px | 12px |

- H1 aproximado: desktop `clamp(5rem, 8.5vw, 9rem)`; mobile `clamp(2.6rem, 11vw, 4.25rem)` tras probar reflujo.
- H2: desktop `clamp(3rem, 5.5vw, 5.5rem)`; mobile `clamp(2rem, 8vw, 3.25rem)`.
- Cuerpo: 16–18px; line-height 1.45–1.65; ancho de lectura 60–68 caracteres en textos corridos.
- Header: 72–84px desktop; 60–72px mobile.
- Espaciado de sección: 96–144px desktop; 56–88px mobile; **ajustar**, no forzar nueve paneles a pantalla completa.
- Bordes: 1px; radios contenidos; priorizar espacios y tipografía antes que sombras.

### 12.4 Motion

- Ningún movimiento debe ser obligatorio para acceder a un contenido.
- Duraciones orientativas 150–250ms para cambios de estado; parallax y scroll-driven effects no necesarios.
- No autoplay de carrusel, ni bloqueo de scroll, ni desplazamientos horizontales que secuestren gestos verticales.
- `prefers-reduced-motion` debe suprimir desplazamientos/revelados no esenciales.

---

## 13. Modelo de datos y componentes para desarrollo

### 13.1 Componentes propuestos

```text
SiteHeader (variant: transparent | solid)
MobileNavigation
HeroSection
HeroProjectStrip
ProjectCarousel
ProjectCard
ManifestoSection
ServiceIndex + ServiceRow
ExperienceStepper + ExperienceStage
ProcessTimeline + ProcessStep
AboutSection
FaqAccordion + FaqItem
ContactSection
SiteFooter
SectionHeading / Eyebrow / TextLink / CTAButton
```

**Regla:** los elementos informativos son texto/datos semánticos, no grandes imágenes de maquetas rasterizadas. Los componentes deben existir independientemente en desktop y mobile, aunque compartan contenido.

### 13.2 Forma candidata de datos (ilustrativa, no lista de proyectos validada)

```ts
type ProjectKind = 'client' | 'own-product' | 'concept-demo' | 'in-development';

type PortfolioProject = {
  slug: string;
  title: string;
  sector: string;
  kind: ProjectKind;
  role: string[];
  shortDescription: string;
  cover: { src: string; alt: string; width: number; height: number };
  caseUrl: string;
  externalUrl?: string;
  published: boolean;
  displayOrder: number;
};

type Faq = { id: string; question: string; answer: string };

type ExperienceStep = {
  id: 'descubrir' | 'elegir' | 'inscribirse';
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  evidenceStatus: 'verified' | 'conceptual';
};
```

El estado `published` solo se habilita tras cumplir los gates de evidencia y enlace. Filtrar antes de renderizar el carrusel para no exponer proyectos incompletos.

### 13.3 Carga y renderizado [C]

La web actual y stack de trabajo apuntan a páginas ligeras; **una implementación con Astro y componentes interactivos pequeños es candidata**, no una decisión técnica definitiva en este Blueprint. Preferir HTML estático para ocho secciones predominantemente informativas; JS limitado a menú, cambio de header, carrusel, Signature y FAQ. Garantizar funcionamiento básico de navegación sin JS.

---

## 14. Matriz de assets y evidencias obligatorias

| Prioridad | Asset / dato | Dónde se usa | Condición de aceptación | Responsable de aportar/validar |
|---|---|---|---|---|
| P0 | Fotografía auténtica Oscar | Hero, Sobre mí | Uso autorizado, archivo original, recortes desktop/mobile | Oscar |
| P0 | Logo oficial independiente | Header, Footer | SVG/PNG apropiados, variantes oscuro/claro, márgenes | Oscar / diseño |
| P0 | Portada real por caso | Hero/carrusel/casos | Captura/imagen del trabajo realmente realizado | Oscar / proyecto |
| P0 | Ficha de cada proyecto | Carrusel/caso | Nombre, rol, estado, sector, permiso y URL | Oscar |
| P0 | WhatsApp Business verificado | Header/Hero/Contacto | URL probada en mobile/desktop; texto de inicio validado | Oscar |
| P0 | Rutas internas de casos | Todas las tarjetas | Caso publicado y accesible (sin 404) | Desarrollo |
| P0 | Resolución Pley ↔ ConectaPlay | Franja Hero/carrusel | No duplicar marcas del mismo producto accidentalmente | Oscar |
| P1 | 3 capturas UX ConectaPlay | Signature | Etapas reales o rotulación «conceptual» clara | Producto |
| P1 | Condiciones de servicio | Método/FAQ | Alcance, revisiones, soporte y entregables reales | Oscar |
| P1 | Redes y correo | Footer | URLs oficiales + correo operativo si aparece | Oscar |
| P1 | Páginas legales | Footer | Rutas disponibles y alcance jurídico real | Oscar / asesoría legal |
| P1 | Nuevos recortes y peso final | Responsive | AVIF/WebP optimizado, alturas y safe areas correctas | Desarrollo |

**No asumir** que un recurso generado como imagen o una cifra en un mockup puede convertirse en prueba social sin verificación.

---

## 15. SEO, contenido y medición

### 15.1 SEO on-page [C]

- URL canónica del Home `https://oscardev.co/` después de verificar la publicación.
- `<title>` candidato: **Oscar Dev | Diseño y desarrollo web para negocios**.
- Meta description candidata: **Diseño y desarrollo sitios web, tiendas online, aplicaciones y plataformas a medida para negocios. Conoce mis proyectos y cuéntame qué necesitas.**
- H1 único, H2 por sección, texto real indexable, imágenes descriptivas, enlaces internos a casos.
- Open Graph: imagen de marca auténtica y optimizada; no retrato provisional o pantalla ficticia.
- Schema: evaluar `Person` y/o `ProfessionalService` solo con datos públicos reales; no inventar dirección física, reseñas ni ratings.
- Sitemap y robots según rutas existentes; evitar enlazar a `/ideas` si no hay contenido original publicado.
- Si el sitio actual tiene URLs indexadas, auditar antes de reemplazar y redirigir cambios de ruta. **Este Blueprint no ha inventariado el estado actual de indexación.**

### 15.2 Rendimiento [C]

- Retrato del Hero prioritario con dimensiones explícitas, tamaño apropiado y versión adaptable; no usar background gigantesco si elimina semántica y dificulta LCP.
- Imágenes del carrusel fuera de pantalla con carga diferida; evitar un solo megaasset para toda la sección.
- Fuentes con subset y `font-display: swap`, fallback de métricas similares; validar CLS.
- Interacciones sin bibliotecas pesadas innecesarias; no convertir FAQ/timeline en componentes hidratados si HTML/CSS alcanza.
- Presupuesto y umbrales finales se fijarán mediante medidas reales (Core Web Vitals/Lighthouse), no usando estimaciones de mockups.

### 15.3 Eventos opcionales de analítica [C]

| Evento | Momento | Parámetros no sensibles |
|---|---|---|
| `hero_primary_cta_click` | Click principal del Hero | ubicación `hero` |
| `project_carousel_navigate` | Flechas/swipe | dirección, índice visible |
| `project_case_open` | Abre caso interno | slug público |
| `services_open` | Abre servicio | id servicio |
| `signature_step_change` | Cambia etapa | nombre etapa |
| `faq_open` | Abre pregunta | id pregunta |
| `contact_cta_click` | Contacto en footer/header/contacto | ubicación |

**No enviar** nombre, teléfono, mensaje de WhatsApp, email, datos de formularios ni información privada como parámetros analíticos. Implementar solo si se configura una solución de medición y privacidad adecuada.

---

## 16. Accesibilidad y responsive: criterios concretos

### 16.1 Breakpoints de prueba, no solo breakpoint de CSS

**320 / 360 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440 px** y pantallas anchas. Verificar zoom de 200 % y orientación horizontal donde sea relevante.

### 16.2 Checklist de aceptación

- [ ] Header no oculta anclas, foco o encabezados.
- [ ] Logo y navegación legibles sobre fondo naranja y carbón.
- [ ] Los textos esenciales cumplen contraste WCAG 2.2 AA: texto normal ≥4.5:1; grande ≥3:1; iconos/controles relevantes ≥3:1.
- [ ] H1 y H2 reflow sin desbordar a 320px.
- [ ] Carrusel admite teclado, swipe y botones accesibles; sin arrastrar la página lateralmente.
- [ ] La parte visible de la próxima tarjeta **no contiene texto importante recortado** que parezca error.
- [ ] FAQ tiene estados `aria-expanded` correctos y opera con teclado.
- [ ] Signature tiene alternativa estática y estados interpretables.
- [ ] Menú móvil abre/cierra y devuelve foco correctamente.
- [ ] Objetivos táctiles cómodos (orientación mínima 44×44 CSS px para controles principales).
- [ ] Animaciones reducidas según preferencia del sistema.
- [ ] Imágenes con dimensiones, `alt` apropiados o `alt=""` si son puramente decorativas.
- [ ] Ningún texto importante está incrustado como raster dentro de una portada generada.
- [ ] No hay 404, CTA vacío, contenido de prueba ni cifra inventada.

---

## 17. Handoff: puertas de salida por fase

### Gate A · Blueprint validado

- [ ] Nueve secciones y orden aprobado.
- [ ] Header/menú/rutas y CTA definidos.
- [ ] Diferencia Hero-franja-carrusel clara.
- [ ] Signature aprobada o reducida de forma deliberada.
- [ ] Copy sin duplicación importante.
- [ ] Tokens de contraste candidatos aceptados para pruebas.

### Gate B · Evidencia lista para maquetación real

- [ ] Foto real y logo oficial.
- [ ] Inventario de proyectos con rol, estado y permiso.
- [ ] Portadas originales/capturas reales.
- [ ] Enlaces de caso y WhatsApp reales.
- [ ] FAQ/servicios con condiciones revisadas.

### Gate C · Overview del Home continuo

- [ ] Un overview desktop completo (no nueve mockups sueltos).
- [ ] Un overview mobile completo (sin marcos de teléfono).
- [ ] Se validaron transiciones, escalas, repeticiones y altura total.
- [ ] Se resolvió el contraste de los titulares claros sobre naranja.
- [ ] Se aprobó la composición integral antes de diseñar páginas internas.

### Gate D · Implementación/QA

- [ ] Semántica y responsive reales en navegador.
- [ ] Analítica/SEO/canonicals y legales donde apliquen.
- [ ] QA de interacción, teclado, rendimiento, imágenes y enlaces.
- [ ] Lanzamiento sin fotos ficticias ni pruebas sociales inventadas.

---

## 18. Próximo paso propuesto tras esta Fase 11

**Primero:** revisión y cierre de la matriz de activos/casos (P0), especialmente retrato de Oscar, Duarte’s, ConectaPlay/Pley y Concept Demos.  
**Después:** crear el **overview continuo del Home — desktop y mobile, uno a la vez**, integrando las nueve secciones y un solo header/footer.  
**Luego:** aprobar el sistema como conjunto, y diseñar `/proyectos`, `/proyectos/[slug]` y `/servicios` con rutas reales y casos documentados.  
**Al final:** handoff a desarrollo.

No iniciar otra ronda general de exploración estética salvo que el overview revele un problema estructural real.

---

## 19. Registro de decisiones: resumen

| Código | Decisión | Estado |
|---|---|---|
| D-01 | Hero naranja + retrato + «Ideas que funcionan.» | [D] |
| D-02 | Header transparente en Hero, carbón al scroll | [D] |
| D-03 | Franja inferior del Hero: casos internos / «Todos los proyectos» | [D] |
| D-04 | Carrusel de todos los casos publicados en Home, no tres fijos | [D] |
| D-05 | Tarjetas abren caso interno; `/proyectos` es archivo alternativo | [D] |
| D-06 | Manifiesto marfil tipográfico | [D] |
| D-07 | Servicios oscuros en cuatro filas editoriales | [D] |
| D-08 | Signature de tres etapas con una pantalla visible | [C] condicionado a evidencia |
| D-09 | Método de cuatro etapas, con resultado/entregable | [D] |
| D-10 | Sobre mí con foto real y copy directo | [D] / foto [P] |
| D-11 | FAQ de seis preguntas, una abierta de ejemplo | [D] / condiciones [P] |
| D-12 | Contacto naranja + CTA negro + footer carbón | [D] |
| D-13 | Una imagen/vista por vez cuando se hagan nuevos mockups | [D] |
| D-14 | Blog `/ideas` no se presupone necesario ni se publica vacío | [C] |

**Cierre:** este documento es la **fuente de verdad candidata** de la estructura del Home. Ante incoherencias con mockups antiguos, preservar decisiones D y registrar cualquier cambio antes de programar.
