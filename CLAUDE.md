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

/* Footer / secciones oscuras (legacy, ya no se usan en componentes activos) */
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
│   └── openMeteo.js                 ← API clima (no usada en main page)
│
├── config/
│   ├── constants.js                 ← VITE_CONTACT_API_URL, endpoints
│   └── weatherCodes.js
│
├── components/
│   ├── Header/                      ← fixed, negro puro, borde azul; overlay full-screen en mobile/tablet
│   ├── Carousel_Projectos/          ← Hero (min-height 82svh), fondo negro + grilla técnica
│   ├── Servicios/                   ← Acordeón sidebar + panel derecho
│   ├── StatsStrip/                  ← Franja de métricas (NUEVA), entre Servicios y Proyectos
│   ├── Proyectos/                   ← Featured card (izq) + sidebar apilado (der)
│   ├── Clientes/                    ← Franja con Logo1 y Logo2 (sin hover, sin grayscale)
│   ├── Contacto/                    ← Sección oscura 2 columnas (copy + tarjetas)
│   ├── Cotizacion/                  ← Hero negro + formulario negro; centrado en tablet/mobile
│   ├── SobreNosotros/               ← Hero negro + quiénes somos + misión/visión + stats; centrado en tablet/mobile
│   ├── Footer/                      ← 3 columnas (Marca | Navegación | Contacto) + barra inferior; negro puro
│   ├── ScrollToTop.jsx              ← util: scroll al top en cambio de ruta
│   └── Api_WeatherCard/             ← Widget clima (no se usa en main page)
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
    ├── Carousel_Projectos   ← Hero (82svh)
    ├── Servicios            ← id="servicios"
    ├── StatsStrip           ← franja de métricas (negra)
    ├── Proyectos            ← id="proyectos"
    ├── Contacto             ← id="contacto"
    ├── section.clientes-section
    │   └── Clientes
    └── Footer
```

---

## Tema oscuro unificado

Todo el sitio usa **negro puro `#000000`** como fondo para las secciones oscuras (no `var(--clr-footer)`).

### Patrón de grilla técnica (blueprint)

Usado en todas las secciones oscuras:

```css
background-image:
  linear-gradient(rgba(25, 169, 231, 0.055) 1px, transparent 1px),
  linear-gradient(90deg, rgba(25, 169, 231, 0.055) 1px, transparent 1px);
background-size: 48px 48px;
/* + mask-image radial para desvanecer bordes */
-webkit-mask-image: radial-gradient(ellipse 90% 85% at 50% 50%, rgba(0,0,0,0.8) 0%, transparent 100%);
mask-image: radial-gradient(ellipse 90% 85% at 50% 50%, rgba(0,0,0,0.8) 0%, transparent 100%);
```

**Aplica a:** `.contacto-section`, `.footer-main`, `.cot-hero`, `.cot-body`, `.sn-hero`, `.sn-hero` (SobreNosotros), overlay del menú hamburguesa.

### Secciones claras (fondo blanco)

`padding-top: 2rem; padding-bottom: 1.5rem;`
`.servicios-section` y `.proyectos-section` son blancas.

### Sección gris intermedia

`.clientes-section` en `App.css`: `background: var(--clr-surface-gray)` con bordes sutiles.

---

## Convenciones de diseño

### Headers de sección (patrón reutilizado)

Header minimalista integrado al contenido: `border-bottom: 1px solid rgba(25, 169, 231, 0.15)` y `padding: 0 20px 10px`. Títulos en `clamp(1.15rem, 1.7vw, 1.45rem)`, kicker en `0.68rem`.
**Aplica a:** `.servicios-header`, `.proyectos-header`.

### Glassmorphism

`background: rgba(255,255,255,0.055); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.1)`
Usado en `.contacto-card`.

### CTAs y botones principales

```css
background: var(--clr-primary-light);
border-radius: var(--radius-md);
box-shadow: 0 4px 14px rgba(25, 169, 231, 0.3);
/* hover: background: var(--clr-primary); transform: translateY(-2px) */
```

### Colores de texto atenuado (mínimos visibles)

- Subtítulos de sección: `rgba(33, 53, 71, 0.68)` — mínimo aceptable en fondos blancos
- Texto secundario en oscuro: `rgba(255, 255, 255, 0.55)`
- Kickers y antetítulos: `rgba(33, 53, 71, 0.65)` — no bajar de este valor
- **No usar opacidades menores a 0.65** en texto sobre fondo claro; visibilidad insuficiente

### Centering en tablet/mobile

Patrón estándar para centrar secciones de texto en responsive:
```css
.contenedor-texto {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
```
Aplica a: `.sn-quienes-text`, `.sn-mv-card`, `.sn-stat-card`, `.cot-info`, cabeceras de Servicios y Proyectos.

Para íconos a la derecha del título en tablet/mobile: `flex-direction: row-reverse; justify-content: center`.

### Animaciones de entrada

Fade + translateY(14px) con `cubic-bezier(0.4, 0, 0.2, 1)`, ~0.4s. Usadas al cambiar servicio y proyecto activo.

---

## Componentes clave

### Header (`Header/`)

- Fondo: `#000000` siempre (no transparente)
- Borde inferior: `1px solid rgba(25, 169, 231, 0.32)` → `0.4` al hacer scroll
- Logo: `Logo_HidroRural.png`, `width: 160px` en desktop
- `.header--solid` (al scroll): `box-shadow: 0 2px 28px rgba(0,0,0,0.55)`

**Menú móvil (tablet + mobile) — overlay full-screen:**
- Al abrir: `position: fixed; inset: 0; background: #000; z-index: 1100` con grilla técnica
- Fade-in overlay + slide-in escalonado por link (delays 60ms → 260ms)
- Botón hamburguesa: z-index 1200 (visible sobre el overlay), cambia ≡ → ✕ cuando está abierto
- Links: `font-size: 1.08rem`, con ícono a la izquierda y texto
- CTA Cotización: botón azul lleno separado al final

### StatsStrip (`StatsStrip/`)

Franja negra entre Servicios y Proyectos con 4 métricas:
- "+200 Familias", "5 Servicios", "2 Regiones", "100% Obras entregadas"
- Números: `color: var(--clr-primary-light)`, `clamp(1.7rem, 2.8vw, 2.4rem)`
- Labels: `rgba(255,255,255,0.45)`, uppercase, letter-spacing
- Bordes: `border-top/bottom: 1px solid rgba(25, 169, 231, 0.18)`
- Dividers verticales entre ítems (ocultos en mobile)
- Mobile: `flex-wrap: wrap`, cada ítem `flex: 0 0 50%` (grilla 2×2)

### Servicios (`Servicios/`)

Layout desktop: `grid-template-columns: minmax(200px, 260px) 1fr`

**Sidebar (izquierda):** acordeón — al seleccionar una card, la imagen se despliega debajo con animación. Card activa: `border-radius: 14px 14px 0 0`. Imagen: `object-fit: contain`, `aspect-ratio: 4/3`.

**Panel derecho:** título + descripción (`border-left` azul) + bullets + CTA.

**Tablet/mobile:**
- Cards en grid `auto-fill minmax(165px, 1fr)` (no flex wrap)
- `.servicios-card-imagen` oculta
- `.servicios-panel-img-responsive` visible: altura fija `160px` (tablet) / `130px` (mobile), `object-fit: cover`
- Cabecera y CTA centrados

### Proyectos (`Proyectos/`)

Layout desktop: `grid-template-columns: 1.65fr 1fr`, featured `height: 320px`.

**Card destacada:** imagen full-cover + overlay gradiente. Info absoluta con chip + nombre + ubicación.

**Sidebar:** 3 cards apiladas con `flex: 1`. Imagen 80px ancho, info con `-webkit-line-clamp: 3`.

**Tablet:** sidebar horizontal (`flex-direction: row`), cards con imagen arriba (70px) y texto abajo.

### Clientes (`Clientes/`)

- Solo **Logo1 y Logo2** visibles
- Sin filtro grayscale, sin hover effect
- Logos: `height: 72px` (desktop), `60px` (tablet), `52px` (mobile)
- Kicker: "Instituciones con las que hemos participado"
- Mobile fix: `flex: 1 1 auto; letter-spacing: 0.08em; white-space: normal` para evitar overflow horizontal hasta 321px

### Footer (`Footer/`)

- Fondo: `#000000` + grilla técnica
- Desktop: grid 3 columnas (`1.4fr 1fr 1.1fr`)
- Tablet: brand centrada verticalmente (logo + tagline apilados), separador `border-bottom: 1px solid rgba(255,255,255,0.07)`, 2 columnas para nav y contacto
- Mobile: columna única (`grid-template-columns: 1fr`), `word-break: break-all` en email

### SobreNosotros (`SobreNosotros/`)

- Hero: negro puro + grilla técnica, ya centrado por defecto
- Tablet/Mobile: `.sn-quienes-text`, `.sn-mv-card`, `.sn-stat-card` todos centrados (`align-items: center; text-align: center`)
- Imagen "Quiénes somos": `300px` en tablet, `240px` en mobile

### Cotizacion (`Cotizacion/`)

- Hero: negro puro + grilla técnica, ya centrado por defecto
- Body: negro puro + grilla técnica más sutil (`0.04` opacidad)
- Formulario: `background: rgba(255,255,255,0.04)`, `border: 1px solid rgba(25,169,231,0.2)`
- Tablet/Mobile: columna única, `max-width: 640px`, `.cot-info` y `.cot-form-title` centrados

---

## Rutas

| Ruta | Componente |
|---|---|
| `/` | `App.jsx` (página principal con todas las secciones) |
| `/cotizacion` | `CotizacionPage` → `Cotizacion` |
| `/sobrenosotros` | `SobreNosotrosPage` → `SobreNosotros` |
| `*` | `NotFoundPage` |

El `Footer` maneja navegación inteligente: si está en `/`, usa `scrollWithOffset(id)`; si está en otra ruta, usa `Link to="/"` + `setTimeout` para scroll.

---

## Backend

- **URL:** `VITE_CONTACT_API_URL` (`.env`) → fallback `http://localhost:4000/api/contact`
- **Función:** `src/api/contact.js` → `postContactMessage(payload)` → POST JSON
- El formulario de cotización (`Cotizacion.jsx`) usa esta función

---

## Assets

Los assets están en `public/assets/` y se referencian con:
```js
`${import.meta.env.BASE_URL}assets/LogoHidrorural.png`
```
**No usar rutas absolutas sin `BASE_URL`** — el deploy en GitHub Pages usa un subdirectorio.

Imágenes existentes en `public/assets/`:
- `LogoHidrorural.png` — logo principal (usado en Footer)
- `Logo_HidroRural.png` — logo usado en Header
- `Logo1.png`, `Logo2.png` — logos de clientes (los únicos activos en Clientes)
- `Proyecto1.webp`, `Proyecto2.webp`, `Proyecto3.webp` — fotos de proyectos
- `ImagenDescriptiva1.webp`, `perforacion_de_pozos.webp`, `prueba_de_bombeo.webp`, `Tratamiento_Aguas_Servidas.webp`, `Aguas_lluvia.webp` — imágenes de servicios

---

## Información de la empresa

```
Email:     contacto@hidrorural.com
Teléfono:  +56 9 0000 0000
Ubicación: San Pedro de la Paz, Biobío
WhatsApp:  https://wa.me/56900000000
LinkedIn:  https://cl.linkedin.com/company/hidrorural-ltda
```

Proyectos reales:
1. Mejoramiento Planta Santa Amelia y Villa Laja — Laja, Biobío
2. Conservación SSR El Ciprés — Los Ángeles, Biobío
3. Conservación Planta Cholguán — Yungay, Ñuble

Servicios: Redes de Agua Potable Rural · Habilitación de Pozos · Pruebas de Bombeo · Tratamiento de Aguas Servidas · Sistemas de Aguas Lluvias

---

## Lo que NO hacer

- **No crear `:root` con variables en archivos CSS de componentes** — todos los tokens van en `src/index.css`
- **No usar `color: var(--type-muted)`** — ese token fue eliminado; usar `rgba(33, 53, 71, 0.65)` mínimo
- **No usar `var(--clr-footer)` para fondos oscuros** — las secciones oscuras ahora usan `#000000` directo
- **No usar `margin-top` negativo como hack** para pegar secciones
- **No agregar `overflow: auto` + `max-height` a paneles de contenido**
- **No referenciar assets sin `import.meta.env.BASE_URL`**
- **No importar `Clientes` dentro de `Proyectos.jsx`** — está en `App.jsx`
- **No usar `WeatherCard` en la página principal**
- **No restaurar el header `::before` full-width** en Servicios o Proyectos
- **No volver al layout anterior de Proyectos** (viewer imagen-izq + info-der + thumbnails abajo)
- **No volver al menú hamburguesa tipo dropdown** — el menú es overlay full-screen en tablet/mobile
- **No usar `aspect-ratio` en las imágenes responsive de Servicios** — usar altura fija con `object-fit: cover`
- **No bajar la opacidad de texto sobre fondo claro por debajo de 0.65** — genera texto invisible
