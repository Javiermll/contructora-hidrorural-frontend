import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Servicios.css";

const servicios = [
  {
    nombre: "Redes de Agua Potable Rural",
    descripcion:
      "Soluciones integrales para el diseño, construcción y mantención de sistemas de agua potable rural, cumpliendo con la normativa vigente y garantizando abastecimiento seguro y eficiente.",
    puntos: [
      "Diseño hidráulico de sistemas de agua potable rural conforme a normativa vigente.",
      "Construcción de redes de distribución para abastecimiento comunitario.",
      "Ampliación de sistemas existentes para aumento de cobertura y caudal.",
      "Mantención correctiva y preventiva de infraestructuras sanitarias rurales.",
      "Instalación de tuberías de distintos diámetros y materiales según diseño.",
      "Ejecución de conexiones domiciliarias individuales y colectivas.",
      "Construcción de cámaras de válvulas y ventosas para control operativo.",
      "Instalación de estanques elevados y semienterrados para regulación de consumo.",
      "Implementación de sistemas de cloración y desinfección.",
    ],
    imagen: "#",
    imagenDescriptiva: "/assets/ImagenDescriptiva1.webp",
  },
  {
    nombre: "Habilitación de Pozos",
    descripcion:
      "Realizamos proyectos completos de habilitación de pozos, desde la perforación y equipamiento hasta la mantención, asegurando eficiencia y durabilidad en el abastecimiento de agua subterránea.",
    puntos: [
      "Ejecución integral de proyectos de habilitación de pozos de agua subterránea para abastecimiento.",
      "Instalación de entubación definitiva y filtros según características del acuífero.",
      "Desarrollo y limpieza del pozo para optimizar rendimiento hidráulico.",
      "Instalación de equipos de bombeo sumergible.",
      "Pruebas de funcionamiento y caudal.",
      "Mantención preventiva y correctiva de sistemas de extracción.",
      "Aseguramiento de eficiencia operativa y prolongación de la vida útil del pozo.",
    ],
    imagen: "#",
    imagenDescriptiva: "/assets/perforacion_de_pozos.webp",
  },
  {
    nombre: "Pruebas de Bombeo",
    descripcion:
      "Ejecutamos pruebas hidráulicas especializadas para evaluar el rendimiento y la sostenibilidad de pozos, entregando información técnica clave para la gestión de recursos hídricos.",
    puntos: [
      "Ejecución de pruebas hidráulicas especializadas para la evaluación del comportamiento de pozos de agua subterránea.",
      "Determinación de capacidad de extracción y condiciones de explotación sostenible.",
      "Realización de pruebas de bombeo escalonadas para evaluar respuesta del acuífero.",
      "Ejecución de pruebas de bombeo continuo a caudal constante.",
      "Medición de niveles estáticos y dinámicos durante la operación.",
      "Análisis de recuperación del nivel freático posterior al bombeo.",
      "Determinación de parámetros hidráulicos como transmisividad y coeficiente de almacenamiento.",
      "Elaboración de informes técnicos para respaldo de proyectos y trámites regulatorios.",
    ],
    imagen: "#",
    imagenDescriptiva: "/assets/prueba_de_bombeo.webp",
  },
  {
    nombre: "Tratamiento de aguas servidas",
    descripcion:
      "Diseñamos y construimos sistemas de alcantarillado y tratamiento de aguas servidas adaptados a cada territorio, cumpliendo con normativas sanitarias y ambientales.",
    puntos: [
      "Diseño y construcción de sistemas de alcantarillado rural y urbano.",
      "Soluciones de tratamiento de aguas servidas adaptadas a la escala y características del territorio.",
      "Diseño de redes de recolección de aguas servidas.",
      "Construcción de cámaras de inspección y colectores.",
      "Implementación de plantas de tratamiento como fosas sépticas, biodigestores o sistemas compactos.",
      "Adecuación del sistema a normativa sanitaria y ambiental vigente.",
      "Puesta en marcha y ajustes operativos.",
      "Mantención preventiva para asegurar funcionamiento continuo y eficiente.",
    ],
    imagen: "#",
    imagenDescriptiva: "/assets/Tratamiento_Aguas_Servidas.webp",
  },
  {
    nombre: "Sistemas de aguas lluvias",
    descripcion:
      "Ofrecemos soluciones para la evacuación y control de aguas lluvias, previniendo inundaciones y protegiendo infraestructuras en zonas urbanas y rurales.",
    puntos: [
      "Diseño e implementación de soluciones de evacuación y control de aguas lluvias para zonas urbanas y rurales.",
      "Diseño de colectores y canalizaciones de aguas lluvias.",
      "Construcción de sumideros y cámaras de inspección.",
      "Implementación de obras de disipación y control de caudales.",
      "Integración con sistemas existentes.",
      "Evaluación de riesgos de inundación.",
      "Ejecución conforme a normativa técnica y planes reguladores.",
    ],
    imagen: "#",
    imagenDescriptiva: "/assets/Aguas_lluvia.webp",
  },
];

// Iconos SVG para cada servicio
const iconosServicios = [
  // Redes de Agua Potable Rural
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 2C11 2 4 11.5 4 16C4 19.3137 7.13401 22 11 22C14.866 22 18 19.3137 18 16C18 11.5 11 2 11 2Z"
      fill="#1976d2"
    />
    <circle cx="11" cy="16" r="3.5" fill="#fff" fillOpacity="0.8" />
  </svg>,
  // Habilitación de Pozos
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="6" y="10" width="10" height="7" rx="2" fill="#1976d2" />
    <rect x="9" y="4" width="4" height="8" rx="2" fill="#90caf9" />
    <rect x="10.25" y="13" width="1.5" height="4" rx="0.75" fill="#fff" />
  </svg>,
  // Pruebas de Bombeo
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="11"
      cy="11"
      r="9"
      stroke="#1976d2"
      strokeWidth="2"
      fill="#e3f2fd"
    />
    <path
      d="M11 6V11L15 13"
      stroke="#1976d2"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>,
  // Sistemas de tratamiento de aguas servidas
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="12" width="16" height="6" rx="3" fill="#1976d2" />
    <ellipse cx="11" cy="15" rx="7" ry="2" fill="#90caf9" />
    <rect x="8.5" y="6" width="5" height="7" rx="2.5" fill="#fff" />
  </svg>,
  // Sistemas de aguas lluvias
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 13C6 10.2386 8.23858 8 11 8C13.7614 8 16 10.2386 16 13"
      stroke="#1976d2"
      strokeWidth="2"
    />
    <ellipse cx="11" cy="16" rx="7" ry="3" fill="#90caf9" />
    <rect x="10" y="3" width="2" height="7" rx="1" fill="#1976d2" />
  </svg>,
];

function Servicios() {
  const [activo, setActivo] = useState(0);

  const servicioActivo = servicios[activo];

  const puntos = servicioActivo.puntos;

  return (
    <section
      className="servicios-section"
      id="servicios"
      aria-label="Nuestros servicios"
    >
      <div className="servicios-container">
        <header className="servicios-header">
          <p className="servicios-kicker">NUESTROS SERVICIOS</p>
          <h2 className="servicios-titulo">
            <span className="servicios-titulo-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.8C12 2.8 6.8 9.4 6.8 13.6C6.8 17.2 9.8 20.2 12 20.2C14.2 20.2 17.2 17.2 17.2 13.6C17.2 9.4 12 2.8 12 2.8Z"
                  fill="currentColor"
                  opacity="0.9"
                />
                <path
                  d="M9.2 13.8C10.1 15.1 11.4 15.9 12.9 16.1"
                  stroke="#ffffff"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
            </span>
            Servicios de Construcción Sanitaria
          </h2>
          <p className="servicios-subtitle">
            Selecciona un servicio para ver su alcance, actividades y enfoque
            técnico. Trabajamos con estándares de calidad, seguridad y
            cumplimiento normativo.
          </p>
        </header>

        <div className="servicios-layout">
          <nav className="servicios-nav" aria-label="Lista de servicios">
            <div className="servicios-cards">
              {servicios.map((s, idx) => (
                <button
                  key={s.nombre}
                  type="button"
                  className={`servicios-card${idx === activo ? " active" : ""}`}
                  onClick={() => setActivo(idx)}
                  aria-pressed={idx === activo}
                >
                  <span className="servicios-card-icon">
                    {iconosServicios[idx]}
                  </span>
                  <span className="servicios-card-text">{s.nombre}</span>
                </button>
              ))}
            </div>
          </nav>

          <div className="servicios-main">
            <article
              key={servicioActivo.nombre}
              className="servicios-panel servicios-panel--detalle servicios-detalle servicios-detalle-animado"
              aria-label="Detalle del servicio"
            >
              <h3 className="servicios-detalle-titulo visible">
                {servicioActivo.nombre}
              </h3>
              <p className="servicios-detalle-descripcion">
                {servicioActivo.descripcion}
              </p>
              <ul className="servicios-puntos">
                {puntos.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>

            <aside
              key={servicioActivo.imagenDescriptiva}
              className="servicios-panel servicios-panel--media servicios-imagen servicios-imagen-animada"
              aria-label="Imagen descriptiva"
            >
              <div className="servicios-media">
                <img
                  src={servicioActivo.imagenDescriptiva}
                  alt={`Imagen descriptiva de ${servicioActivo.nombre}`}
                  className="servicios-imagen-img"
                  loading="lazy"
                />
                <div className="servicios-media-body">
                  <Link to="/cotizacion" className="servicios-link-contacto">
                    Solicitar cotización
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
