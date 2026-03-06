# Constructora Hidrorural — Frontend

Sitio web institucional de Constructora Hidrorural, empresa especializada en infraestructura hídrica y sanitaria en Chile.

**Demo:** https://Javiermll.github.io/contructora-hidrorural-frontend/

## Descripcion / Objetivo

SPA (Single Page Application) que presenta los servicios, proyectos ejecutados, información corporativa y un formulario de cotización/contacto conectado a un backend propio de envío de correos. Orientada a captar clientes en el sector de agua potable rural, pozos y saneamiento.

## Tecnologias y herramientas

- React 19 (componentes funcionales, hooks)
- Vite como bundler
- React Router DOM — navegación entre páginas (Inicio, Sobre Nosotros, Cotización, 404)
- CSS por componente
- Open-Meteo API — widget de clima en tiempo real sin API key
- Fetch API — integración con backend propio para formulario de contacto
- Script de optimización de imágenes a WebP (`scripts/optimize-images.mjs`)
- ESLint para calidad de código
- GitHub Pages para despliegue
- Git / GitHub para control de versiones

## Funcionalidades principales

- **Formulario de cotizacion integrado:** envía solicitudes al backend Node.js/Express propio con validación de campos y feedback visual al usuario.
- **Widget de clima en tiempo real:** consume la API pública Open-Meteo para mostrar condiciones meteorológicas actuales, relevantes para los proyectos de la empresa.
- **Carousel de proyectos:** galería interactiva de proyectos ejecutados por la empresa.
- **Diseño responsivo:** adaptado a móvil, tablet y desktop con CSS por componente.
- **Optimizacion de imagenes:** script propio para convertir assets a formato WebP, reduciendo el peso de carga.
- **Paginas dedicadas:** Inicio, Servicios, Proyectos, Sobre Nosotros, Cotización y página 404 personalizada.

## Rol

Proyecto de cliente real desarrollado de forma individual: arquitectura de componentes React, integración de APIs externas (Open-Meteo) y propia (formulario de contacto), optimización de imágenes y despliegue en producción.

## Resultado / Impacto

- Sitio web en producción para un cliente real (Constructora Hidrorural, Chile).
- Formulario de cotización funcional conectado a backend propio con protección anti-spam.
- Integración de API pública de clima (Open-Meteo) sin costo ni API key requerida.
- Script de conversión de imágenes a WebP para mejorar tiempos de carga del sitio.

## Variables de entorno

Crear `.env` en la raíz (ver `.env.example`):

```
VITE_CONTACT_API_URL=http://localhost:4000/api/contact
```

En producción apuntar a la URL del backend desplegado.

## Instalacion y ejecucion

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # genera /dist
npm run preview
```

## Repositorio

- GitHub: https://github.com/Javiermll/contructora-hidrorural-frontend
- Demo: https://Javiermll.github.io/contructora-hidrorural-frontend/
