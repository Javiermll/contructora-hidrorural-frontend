# Constructora Hidrorural — Frontend

Sitio web institucional para Constructora Hidrorural, empresa chilena especializada en infraestructura hídrica y sanitaria. Desarrollado como proyecto de cliente real.

**Live:** [hidrorural.com](https://www.hidrorural.com)

---

## Stack

- **React 19** + **Vite 7** — SPA con componentes funcionales y hooks
- **React Router v7** — navegación client-side (Inicio, Sobre Nosotros, Cotización, 404)
- **CSS por componente** — sin frameworks de estilos, tema oscuro con grid técnico
- **Open-Meteo API** — widget de clima en tiempo real, sin API key
- **Fetch API** — integración con backend propio para el formulario de contacto
- **Vercel** — deploy con dominio personalizado

---

## Funcionalidades

- Formulario de cotización conectado a backend Node.js/Express con feedback visual
- Widget meteorológico en tiempo real via Open-Meteo
- Diseño completamente responsivo (mobile, tablet, desktop)
- Overlay menu para navegación en dispositivos móviles
- Página 404 personalizada

---

## Variables de entorno

```bash
# .env (ver .env.example)
VITE_CONTACT_API_URL=http://localhost:4000/api/contact
```

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
```
