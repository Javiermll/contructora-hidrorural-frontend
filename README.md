# Constructora Hidrorural — Frontend

Frontend SPA construido con **React + Vite**.

## Requisitos

- Node.js (LTS recomendado)
- npm

## Variables de entorno

Crea un archivo `.env` (o usa `.env.example`) con:

```
VITE_CONTACT_API_URL=http://localhost:4000/api/contact
```

En producción debe apuntar a tu backend desplegado (URL completa del endpoint `POST /api/contact`).

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Optimización de imágenes

Se incluye un script para convertir imágenes usadas a **WebP** (reduce peso y mejora carga):

```bash
node scripts/optimize-images.mjs
```

## Despliegue (estático)

- Build command: `npm run build`
- Publish directory: `dist`

## Enlace del despliegue

La aplicación se ha desplegado en GitHub Pages en:

https://Javiermll.github.io/contructora-hidrorural-frontend/

Si más adelante quieres cambiar el dominio, edita `vite.config.js` y la URL en este README.
