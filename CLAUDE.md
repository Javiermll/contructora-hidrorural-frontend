# CLAUDE.md — Constructora Hidrorural Frontend

Contexto persistente para sesiones de Claude Code en este proyecto.

---

## Proyecto

Landing page + formulario de cotización para **Constructora Hidrorural**, empresa chilena de ingeniería hídrica y construcción sanitaria (fundada 2019, con sede en San Pedro de la Paz, Biobío).

**Stack:**
- React 19.1.1 + Vite 7.1.2
- React Router DOM v7.12.0 (BrowserRouter, no HashRouter)
- CSS plano por componente — sin CSS Modules, sin Tailwind, sin SCSS
- Deploy: GitHub Pages via `npm run deploy` (gh-pages)

---

## Comandos

```bash
npm run dev        # servidor local (Vite)
npm run build      # build para producción
npm run deploy     # build + push a gh-pages
npm run lint       # ESLint
```

---

## Arquitectura CSS

**Regla principal: todos los tokens viven en `src/index.css`. No crear `:root` locales en componentes.**

Cada componente tiene su propio archivo `.css` importado directamente en el `.jsx`. Los estilos son selectores de clase globales (sin scope).

### Tokens clave (`src/index.css`)

```css
/* Tipografía */
--type-sans: system-ui, -apple-system, "Segoe UI", Roboto, ...
--type-serif: Georgia, "Times New Roman", Times, serif

/* Paleta principal (azul hídrico) */
--clr-primary: #1565c0
--clr-primary-mid: #3b89cb
--clr-primary-light: #19a9e7      /* color de acento principal en UI */
--clr-primary-pale: #b1dff3
--clr-primary-surface: #e3f2fd
--clr-primary-ghost: #fafdff

/* Texto */
--clr-text: #213547
--clr-text-strong: #0f172a

/* Superficies */
--clr-surface: #ffffff
--clr-surface-card: #f6fbff
--clr-surface-gray: #f6f8fa

/* Footer / secciones oscuras */
--clr-footer: #2b3940
--clr-footer-deep: #1f2a30
--clr-footer-link: #e0f7fa

/* Radios */
--radius-sm: 8px  --radius-md: 12px  --radius-lg: 14px
--radius-xl: 18px  --radius-pill: 999px

/* Transiciones */
--t-fast: 0.18s ease
--t-base: 0.25s
```

### Breakpoints responsivos (estándar en todos los componentes)

| Breakpoint | Rango |
|---|---|
| Desktop | > 1080px |
| Tablet | 546px – 1080px |
| Mobile | ≤ 545px |

```css
@media (max-width: 1080px) and (min-width: 546px) { ... }
@media (max-width: 545px) { ... }
```

---

## Estructura de archivos

```
src/
├── index.css                        ← tokens globales (NO tocar sin razón)
├── App.css                          ← body base + .main-content + .clientes-section
├── App.jsx                          ← página principal (ruta "/")
├── main.jsx
│
├── api/
│   ├── contact.js                   ← POST al backend de cotización
│   └── openMeteo.js                 ← API clima (usada en WeatherCard, no en main page)
│
├── config/
│   ├── constants.js                 ← VITE_CONTACT_API_URL, endpoints
│   └── weatherCodes.js
│
├── components/
│   ├── Header/                      ← fixed, transparente → sólido al scroll (header--solid)
│   ├── Carousel_Projectos/          ← Hero full-viewport (100svh), imagen + overlay + nav inferior
│   ├── Servicios/                   ← Sidebar de servicios + panel con banner imagen arriba
│   ├── Proyectos/                   ← Visor portafolio editorial (imagen izq + info der + thumbnails)
│   ├── Clientes/                    ← Franja de logos, todos visibles, grayscale → color en hover
│   ├── Contacto/                    ← Sección oscura 2 columnas (copy + tarjetas de contacto)
│   ├── Cotizacion/                  ← Formulario de contacto con backend
│   ├── SobreNosotros/               ← Contenido de página "Sobre Nosotros"
│   ├── Footer/                      ← 3 columnas (Marca | Navegación | Contacto) + barra inferior
│   ├── ScrollToTop.jsx              ← util: scroll al top en cambio de ruta
│   └── Api_WeatherCard/             ← Widget clima (no se usa en main page, existe para otras vistas)
│
└── pages/
    ├── Cotizacion/CotizacionPage.jsx
    ├── SobreNosotros/SobreNosotrosPage.jsx
    └── NotFound/NotFoundPage.jsx
```

### Orden de secciones en `App.jsx` (página principal `/`)

```
Header (fixed)
└── main.main-content
    ├── Carousel_Projectos   ← Hero (100svh)
    ├── Servicios            ← id="servicios"
    ├── Proyectos            ← id="proyectos"
    ├── section.clientes-section
    │   └── Clientes
    ├── Contacto             ← id="contacto"
    └── Footer
```

---

## Convenciones de diseño

### Secciones claras (fondo blanco)
`padding-top: 5rem; padding-bottom: 4rem;`
Cada sección define su propio background. `.servicios-section` y `.proyectos-section` son blancas.

### Secciones oscuras
Usan `var(--clr-footer)` → `var(--clr-footer-deep)` con gradiente 145°/160°.
Incluyen patrón de grilla técnica blueprint (linear-gradient a 5.5% opacidad, 48×48px) con `mask-image` radial para desvanecer bordes.
**Aplica a:** `.contacto-section`, `.footer-main`

### Sección gris intermedia
`.clientes-section` en `App.css`: `background: var(--clr-surface-gray)` con bordes sutiles arriba/abajo.

### Headers de sección (patrón reutilizado)
Fondo con radial-gradients azules + grilla mesh + `::before` full-width que se extiende 100vw.
Presente en: `.servicios-header`, `.proyectos-header`.

### Glassmorphism
`background: rgba(255,255,255,0.055); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.1)`
Usado en tarjetas de `.contacto-card` y `.header--solid`.

### CTAs y botones principales
```css
background: var(--clr-primary-light);
border-radius: var(--radius-lg);
box-shadow: 0 6px 22px rgba(25, 169, 231, 0.3);
/* hover: background: var(--clr-primary); transform: translateY(-2px) */
```
Consistente en: hero CTA, contacto CTA, servicios CTA, proyectos CTA.

### Animaciones de entrada
Fade + translateY(14px) con `cubic-bezier(0.4, 0, 0.2, 1)`, ~0.4s.
Usadas al cambiar servicio activo y proyecto activo.

---

## Rutas

| Ruta | Componente |
|---|---|
| `/` | `App.jsx` (página principal con todas las secciones) |
| `/cotizacion` | `CotizacionPage` → `Cotizacion` |
| `/sobrenosotros` | `SobreNosotrosPage` → `SobreNosotros` |
| `*` | `NotFoundPage` |

El `Footer` maneja navegación inteligente: si está en `/`, usa `scrollWithOffset(id)` hacia secciones; si está en otra ruta, usa `Link to="/"` + `setTimeout` para esperar carga y luego hacer scroll.

---

## Backend

- **URL:** `VITE_CONTACT_API_URL` (`.env`) → fallback `http://localhost:4000/api/contact`
- **Función:** `src/api/contact.js` → `postContactMessage(payload)` → POST JSON
- El formulario de cotización (`Cotizacion.jsx`) usa esta función

---

## Assets

Los assets están en `public/assets/` y se referencian con:
```js
const asset = (p) => `${import.meta.env.BASE_URL}${String(p).replace(/^\//, "")}`;
// Ejemplo: asset("/assets/Proyecto1.webp")
```
O directamente:
```js
`${import.meta.env.BASE_URL}assets/LogoHidrorural.png`
```
**No usar rutas absolutas sin `BASE_URL`** — el deploy en GitHub Pages usa un subdirectorio.

Imágenes existentes en `public/assets/`:
- `LogoHidrorural.png` — logo principal
- `Logo1.png` … `Logo5.png/jpg` — logos de clientes
- `Proyecto1.webp`, `Proyecto2.webp`, `Proyecto3.webp` — fotos de proyectos
- `ImagenDescriptiva1.webp`, `perforacion_de_pozos.webp`, `prueba_de_bombeo.webp`, `Tratamiento_Aguas_Servidas.webp`, `Aguas_lluvia.webp` — imágenes de servicios
- `8vaRegion.webp`, `ÑubleRegion.webp` — mapas (ya no se usan en la main page)

---

## Información de la empresa (datos de contacto reales)

```
Email:     contacto@hidrorural.com
Teléfono:  +56 9 0000 0000
Ubicación: San Pedro de la Paz, Biobío
WhatsApp:  https://wa.me/56900000000
LinkedIn:  https://cl.linkedin.com/company/hidrorural-ltda
```

Proyectos reales registrados:
1. Mejoramiento Planta Santa Amelia y Villa Laja — Laja, Biobío
2. Conservación SSR El Ciprés — Los Ángeles, Biobío
3. Conservación Planta Cholguán — Yungay, Ñuble

Servicios:
1. Redes de Agua Potable Rural
2. Habilitación de Pozos
3. Pruebas de Bombeo
4. Tratamiento de Aguas Servidas
5. Sistemas de Aguas Lluvias

---

## Lo que NO hacer

- **No crear `:root` con variables en archivos CSS de componentes** — todos los tokens van en `src/index.css`
- **No usar `color: var(--type-muted)`** — ese token fue eliminado; usar `rgba(33, 53, 71, 0.65)` o `var(--clr-primary-light)` según contexto
- **No usar `margin-top` negativo como hack** para pegar secciones — usar `padding` propio de cada sección
- **No agregar `overflow: auto` + `max-height` a paneles de contenido** — el contenido debe ser siempre visible sin scroll interno
- **No referenciar assets sin `import.meta.env.BASE_URL`**
- **No importar `Clientes` dentro de `Proyectos.jsx`** — ya está en `App.jsx` dentro de `.clientes-section`
- **No usar `WeatherCard` en la página principal** — fue removido del visor de proyectos por no aportar al portafolio
