import { useState } from "react";
import "./Proyectos.css";

const asset = (p) =>
  `${import.meta.env.BASE_URL}${String(p).replace(/^\//, "")}`;

const proyectos = [
  {
    nombre: "Mejoramiento planta de tratamiento, Santa Amelia y Villa Laja",
    ubicacion: "Laja, Región del Biobío",
    region: "Biobío",
    descripcion:
      "Mejoramiento planta de tratamiento servicio sanitario rural Santa Amelia, comuna de Laja, y mejoramiento servicio sanitario rural Villa Laja, comuna de Laja. Obras orientadas a garantizar la continuidad y calidad del suministro de agua potable en el sector rural.",
    imagen: "/assets/Proyecto1.webp",
  },
  {
    nombre: "Conservación SSR El Ciprés",
    ubicacion: "Los Ángeles, Región del Biobío",
    region: "Biobío",
    descripcion:
      "Proyecto de conservación del SSR El Ciprés que moderniza el sistema de agua potable rural del sector. Incluye la construcción de un estanque de 20 m³, una nueva caseta de tratamiento, mejoras en las instalaciones eléctricas y la instalación de dos bombas, además de las pruebas y puesta en servicio.\n\nCon esta obra se benefician alrededor de 50 familias del sector oriente de Avenida Las Industrias en Los Ángeles, mejorando la continuidad y calidad del suministro.",
    imagen: "/assets/Proyecto2.webp",
  },
  {
    nombre: "Conservación Planta de Tratamiento, Cholguán",
    ubicacion: "Yungay, Región de Ñuble",
    region: "Ñuble",
    descripcion:
      "Proyecto de conservación y mejora de la planta de tratamiento de Cholguán. Modernización de las instalaciones para asegurar el correcto funcionamiento sanitario del sector.\n\nLa inversión permitió mejorar la calidad de vida de más de 100 familias de Yungay. Las obras responden al aumento poblacional del sector y garantizan un suministro estable y seguro.",
    imagen: "/assets/Proyecto3.webp",
  },
];

function Proyectos() {
  const [activo, setActivo] = useState(0);
  const [anim, setAnim] = useState("in");

  const proyecto = proyectos[activo];

  const selectProyecto = (idx) => {
    if (idx === activo) return;
    setAnim("out");
    setTimeout(() => {
      setActivo(idx);
      setAnim("in");
    }, 300);
  };

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <header className="proyectos-header">
          <p className="proyectos-kicker">Nuestros Proyectos</p>
          <h2 className="proyectos-titulo">
            <span className="proyectos-titulo-icono" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="12" width="24" height="14" rx="3.5" fill="#19a9e7" opacity="0.85" />
                <rect x="10" y="6" width="12" height="8" rx="2.5" fill="#1565c0" opacity="0.92" />
                <rect x="14.5" y="18" width="3" height="8" rx="1.2" fill="#fff" opacity="0.85" />
                <rect x="8.5" y="18" width="3" height="5" rx="1.1" fill="#fff" opacity="0.7" />
                <rect x="20.5" y="18" width="3" height="5" rx="1.1" fill="#fff" opacity="0.7" />
                <rect x="13" y="9" width="2" height="3" rx="0.7" fill="#90caf9" />
                <rect x="17" y="9" width="2" height="3" rx="0.7" fill="#90caf9" />
              </svg>
            </span>
            Conoce alguno de nuestros proyectos
          </h2>
          <p className="proyectos-subtitle">
            Infraestructura hídrica ejecutada en distintas regiones del país,
            con estándares técnicos y cumplimiento normativo.
          </p>
        </header>

        <div className="proyectos-layout">

          {/* Card destacada */}
          <div className={`proyectos-featured proyectos-anim-${anim}`}>
            <img
              key={proyecto.imagen}
              src={asset(proyecto.imagen)}
              alt={proyecto.nombre}
              className="proyectos-featured-img"
              loading="lazy"
            />
            <div className="proyectos-featured-overlay" aria-hidden="true" />
            <div className="proyectos-featured-info">
              <span className="proyectos-region-chip">{proyecto.region}</span>
              <h3 className="proyectos-featured-nombre">{proyecto.nombre}</h3>
              <div className="proyectos-featured-ubicacion">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                  />
                </svg>
                {proyecto.ubicacion}
              </div>
            </div>
          </div>

          {/* Sidebar de proyectos */}
          <div className="proyectos-sidebar">
            {proyectos.map((p, idx) => (
              <button
                key={p.nombre}
                type="button"
                className={`proyectos-side-card${idx === activo ? " active" : ""}`}
                onClick={() => selectProyecto(idx)}
                aria-pressed={idx === activo}
              >
                <div className="proyectos-side-img">
                  <img src={asset(p.imagen)} alt="" loading="lazy" />
                </div>
                <div className="proyectos-side-info">
                  <span className="proyectos-side-region">{p.region}</span>
                  <h4 className="proyectos-side-nombre">{p.nombre}</h4>
                  <p className="proyectos-side-ubicacion">{p.ubicacion}</p>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Proyectos;
