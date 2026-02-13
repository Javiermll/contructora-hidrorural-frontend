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
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path
            fill="#1565c0"
            d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V19a1 1 0 0 1-2 0v-2h-2v2a1 1 0 0 1-2 0v-4.26A6.98 6.98 0 0 1 5 9a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5c0 1.93 1.08 3.68 2.8 4.52.13.06.2.19.2.32V17h4v-5.16c0-.13.07-.26.2-.32A5.01 5.01 0 0 0 17 9a5 5 0 0 0-5-5Z"
          />
        </svg>
      ),
      color: "#1565c0",
    },
    {
      title: "Sobre nosotros",
      kind: "route",
      to: "/sobrenosotros",
      icon: (
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path
            fill="#c0392b"
            d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-7 8v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z"
          />
        </svg>
      ),
      color: "#c0392b",
    },
    {
      title: "Proyectos",
      kind: "scroll",
      target: "proyectos",
      icon: (
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path
            fill="#1976d2"
            d="M3 13h2v-2H3v2Zm4 0h2v-2H7v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2ZM3 17h2v-2H3v2Zm4 0h2v-2H7v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2ZM3 21h2v-2H3v2Zm4 0h2v-2H7v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2ZM3 9h18V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2Z"
          />
        </svg>
      ),
      color: "#1976d2",
    },
    {
      title: "Contáctanos",
      kind: "route",
      to: "/cotizacion",
      variant: "contacto",
      icon: (
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path
            fill="#1565c0"
            d="M21 6.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 6.5v11A2.5 2.5 0 0 0 5.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-11Zm-2.5-.5a.5.5 0 0 1 .5.5v.38l-7 4.67-7-4.67V6.5a.5.5 0 0 1 .5-.5h13ZM4 8.62l6.65 4.43a1.5 1.5 0 0 0 1.7 0L20 8.62V17.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V8.62Z"
          />
        </svg>
      ),
      color: "#1565c0",
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
    <section className="carousel-section-flex">
      <div className="carousel-intro-text">
        <p className="carousel-kicker">Ingeniería y servicios</p>
        <h2>Soluciones hídricas</h2>
        <p className="carousel-hero-copy">
          Desarrollamos proyectos de construcción sanitaria e hidráulica con
          foco en calidad técnica, eficiencia, seguridad y cumplimiento
          normativo.
        </p>

        <div className="carousel-separador">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 4C16 4 7 15.5 7 21C7 25.4183 11.0294 29 16 29C20.9706 29 25 25.4183 25 21C25 15.5 16 4 16 4Z"
              fill="#1565c0"
            />
            <circle cx="16" cy="21" r="4.5" fill="#fff" fillOpacity="0.7" />
          </svg>
        </div>

        <div className="carousel-accesos-directos">
          {accesos.map((acceso) => {
            const commonProps = {
              className: `acceso-card${
                acceso.variant === "contacto" ? " acceso-contacto" : ""
              }`,
              style: { "--acceso-color": acceso.color },
            };

            if (acceso.kind === "route") {
              return (
                <Link key={acceso.title} to={acceso.to} {...commonProps}>
                  <span className="acceso-icon">{acceso.icon}</span>
                  <span className="acceso-title">{acceso.title}</span>
                  <span className="acceso-arrow">
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                      <path
                        fill="#1565c0"
                        d="M13.293 17.293a1 1 0 0 1 0-1.414L16.586 12l-3.293-3.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
                      />
                    </svg>
                  </span>
                </Link>
              );
            }

            return (
              <a
                key={acceso.title}
                href={`#${acceso.target}`}
                {...commonProps}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(acceso.target);
                }}
              >
                <span className="acceso-icon">{acceso.icon}</span>
                <span className="acceso-title">{acceso.title}</span>
                <span className="acceso-arrow">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path
                      fill="#1565c0"
                      d="M13.293 17.293a1 1 0 0 1 0-1.414L16.586 12l-3.293-3.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
                    />
                  </svg>
                </span>
              </a>
            );
          })}
        </div>
      </div>
      <div className="carousel-container-flex">{children}</div>
    </section>
  );
}

function CarouselProjectos({ projects = DEFAULT_PROJECTS }) {
  const proj = projects?.[0] ?? DEFAULT_PROJECTS[0];

  return (
    <CarouselSection>
      <div className="carousel" role="region" aria-label="Imagen destacada">
        <img
          src={proj.image}
          alt={proj.title}
          className="carousel-img"
          loading="lazy"
        />
      </div>
    </CarouselSection>
  );
}

export default CarouselProjectos;
