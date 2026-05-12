import React from "react";
import { Link } from "react-router-dom";
import "./Carousel_projectos.css";
import { DEFAULT_PROJECTS } from "./defaultProjects";

export function CarouselSection({ children }) {
  const accesos = [
    {
      title: "Nuestros servicios",
      kind: "scroll",
      target: "servicios",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2.8S6.8 9.4 6.8 13.6c0 3.6 3 6.6 5.2 6.6 2.2 0 5.2-3 5.2-6.6C17.2 9.4 12 2.8 12 2.8Z"
            opacity="0.9"
          />
          <path
            d="M9.4 13.8c.8 1.2 2 2 3.5 2.2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      ),
    },
    {
      title: "Sobre nosotros",
      kind: "route",
      to: "/sobrenosotros",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-7 8v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z"
          />
        </svg>
      ),
    },
    {
      title: "Proyectos",
      kind: "scroll",
      target: "proyectos",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4.5 7.5A2.5 2.5 0 0 1 7 5h3l2 2h7A2.5 2.5 0 0 1 21.5 9.5v9A2.5 2.5 0 0 1 19 21H7A2.5 2.5 0 0 1 4.5 18.5v-11Z"
          />
          <path
            d="M4.5 10h17"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Contáctanos",
      kind: "route",
      to: "/cotizacion",
      highlight: true,
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M21 6.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 6.5v11A2.5 2.5 0 0 0 5.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-11Zm-2.5-.5a.5.5 0 0 1 .5.5v.38l-7 4.67-7-4.67V6.5a.5.5 0 0 1 .5-.5h13ZM4 8.62l6.65 4.43a1.5 1.5 0 0 0 1.7 0L20 8.62V17.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V8.62Z"
          />
        </svg>
      ),
    },
  ];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.querySelector(".header");
    const headerHeight = header ? header.offsetHeight : 0;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="hero">
      {/* Capa de imagen de fondo */}
      <div className="hero-bg" aria-hidden="true">
        {children}
      </div>

      {/* Overlay degradado */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Contenido principal */}
      <div className="hero-body">
        <span className="hero-kicker">Ingeniería Hídrica · Desde 2019</span>
        <h1 className="hero-headline">
          Soluciones<br />
          Hídricas
        </h1>
        <p className="hero-copy">
          Diseño, construcción y mantención de infraestructura sanitaria e
          hidráulica con calidad técnica, eficiencia y cumplimiento normativo.
        </p>
        <Link to="/cotizacion" className="hero-cta">
          Solicitar cotización
          <svg
            width="17"
            height="17"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M13 6l6 6-6 6"
            />
          </svg>
        </Link>
      </div>

      {/* Barra de accesos rápidos en la parte inferior */}
      <nav className="hero-nav" aria-label="Accesos rápidos">
        {accesos.map((acceso) => {
          const cls = `hero-nav-item${acceso.highlight ? " hero-nav-item--highlight" : ""}`;

          if (acceso.kind === "route") {
            return (
              <Link key={acceso.title} to={acceso.to} className={cls}>
                <span className="hero-nav-icon">{acceso.icon}</span>
                <span className="hero-nav-label">{acceso.title}</span>
              </Link>
            );
          }

          return (
            <button
              key={acceso.title}
              type="button"
              className={cls}
              onClick={() => scrollToId(acceso.target)}
            >
              <span className="hero-nav-icon">{acceso.icon}</span>
              <span className="hero-nav-label">{acceso.title}</span>
            </button>
          );
        })}
      </nav>
    </section>
  );
}

function CarouselProjectos({ projects = DEFAULT_PROJECTS }) {
  const proj = projects?.[0] ?? DEFAULT_PROJECTS[0];

  return (
    <CarouselSection>
      <div className="hero-carousel" role="img" aria-label={proj.title}>
        <img
          src={proj.image}
          alt={proj.title}
          className="hero-carousel-img"
          loading="eager"
          fetchpriority="high"
        />
      </div>
    </CarouselSection>
  );
}

export default CarouselProjectos;
