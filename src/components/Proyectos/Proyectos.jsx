import { useState } from "react";
import WeatherCard from "../Api_WeatherCard/WeatherCard";
import "./Proyectos.css";
import Clientes from "../Clientes/Clientes";

const asset = (p) =>
  `${import.meta.env.BASE_URL}${String(p).replace(/^\//, "")}`;

const proyectos = [
  {
    nombre: "Mejoramiento planta de tratamiento, Santa Amelia y Villa Laja",
    ubicacion: "Laja, Región del Biobío",
    descripcion:
      "Mejoramiento planta de tratamiento servicio sanitario rural santa amelia, comuna de laja y mejoramiento servicio sanitario rural villa laja, comuna de laja.",
    imagen: "/assets/Proyecto1.webp",
    mapaImagen: "/assets/8vaRegion.webp",
    mapaAlt: "Mapa Región del Biobío",
    mapaAspect: "1088 / 960",
    top: "32%",
    left: "43%",
  },
  {
    nombre: "Conservación SSR El Ciprés",
    ubicacion: "Los Ángeles, Región del Biobío",
    descripcion: `Proyecto de conservación del SSR El Ciprés que moderniza el sistema de agua potable rural del sector. Incluye la construcción de un estanque de 20 m³, una nueva caseta de tratamiento, mejoras en las instalaciones eléctricas y la instalación de dos bombas, además de las pruebas y puesta en servicio.

  Con esta obra se beneficiarán alrededor de 50 familias del sector oriente de Avenida Las Industrias en Los Ángeles, mejorando la continuidad y calidad del suministro.`,
    imagen: "/assets/Proyecto2.webp",
    mapaImagen: "/assets/8vaRegion.webp",
    mapaAlt: "Mapa Región del Biobío",
    mapaAspect: "1088 / 960",
    top: "44%",
    left: "62%",
  },
  {
    nombre: "Conservación Planta de Tratamiento, Cholguán",
    ubicacion: "Yungay, Región de Ñuble",
    descripcion: `Proyecto de conservación y mejora de la planta de tratamiento de Cholguán. Modernizacion de las instalaciones, para asegurar el correcto funcionamiento sanitario.

  La inversión permitio mejorar la calidad de vida de más de 100 familias de Yungay; las obras responden al aumento poblacional del sector y su objetivo es garantizar un suministro estable y seguro.`,
    imagen: "/assets/Proyecto3.webp",
    mapaImagen: "/assets/ÑubleRegion.webp",
    mapaAlt: "Mapa Región de Ñuble",
    mapaAspect: "634 / 472",
    top: "80%",
    left: "45%",
  },
];

function Proyectos() {
  // Proyecto 1 siempre visible al inicio
  const [activo, setActivo] = useState(0);
  const [animTarjeta, setAnimTarjeta] = useState("in");

  const mapaImagen = proyectos[activo].mapaImagen || "/assets/8vaRegion.webp";
  const mapaAlt = proyectos[activo].mapaAlt || "Mapa";
  const mapaAspect = proyectos[activo].mapaAspect || "16 / 10";
  const proyectosEnMapa = proyectos.filter(
    (p) => (p.mapaImagen || "/assets/8vaRegion.webp") === mapaImagen,
  );

  // (Carrusel de clientes ahora vive en <Clientes />)

  const selectProyecto = (idx) => {
    if (idx === activo) return;
    setAnimTarjeta("out");
    setTimeout(() => {
      setActivo(idx);
      setAnimTarjeta("in");
    }, 400);
  };

  // Botón para avanzar al siguiente proyecto
  const handleSiguienteProyecto = () => {
    const next = (activo + 1) % proyectos.length;
    selectProyecto(next);
  };

  return (
    <section id="proyectos" className="proyectos-section">
      <div className="proyectos-container">
        <header className="proyectos-header">
          <p className="proyectos-kicker">PROYECTOS</p>
          <h2 className="proyectos-titulo">
            <span className="proyectos-titulo-icono" aria-hidden="true">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="12"
                  width="24"
                  height="14"
                  rx="3.5"
                  fill="#19a9e7"
                  opacity="0.85"
                />
                <rect
                  x="10"
                  y="6"
                  width="12"
                  height="8"
                  rx="2.5"
                  fill="#1565c0"
                  opacity="0.92"
                />
                <rect
                  x="14.5"
                  y="18"
                  width="3"
                  height="8"
                  rx="1.2"
                  fill="#fff"
                  opacity="0.85"
                />
                <rect
                  x="8.5"
                  y="18"
                  width="3"
                  height="5"
                  rx="1.1"
                  fill="#fff"
                  opacity="0.7"
                />
                <rect
                  x="20.5"
                  y="18"
                  width="3"
                  height="5"
                  rx="1.1"
                  fill="#fff"
                  opacity="0.7"
                />
                <rect
                  x="13"
                  y="9"
                  width="2"
                  height="3"
                  rx="0.7"
                  fill="#90caf9"
                />
                <rect
                  x="17"
                  y="9"
                  width="2"
                  height="3"
                  rx="0.7"
                  fill="#90caf9"
                />
              </svg>
            </span>
            Conoce alguno de nuestros proyectos
          </h2>
          <p className="proyectos-subtitle">
            Explora el mapa y selecciona una ubicación para ver el detalle del
            proyecto y su descripción.
          </p>
        </header>

        <div
          className="proyectos-layout"
          style={{ "--map-aspect": mapaAspect }}
        >
          <div className="proyectos-panel proyectos-panel--info">
            <div
              className={`proyecto-info-horizontal tarjeta-anim-${animTarjeta}`}
            >
              <div className="proyecto-info-img">
                <img
                  src={asset(
                    proyectos[activo].imagen || "/assets/proyecto-default.jpg",
                  )}
                  alt={proyectos[activo].nombre}
                  loading="lazy"
                />
              </div>
              <div className="proyecto-info-detalle">
                <strong>{proyectos[activo].nombre}</strong>
                <div className="proyecto-info-ubicacion">
                  <span className="ubicacion-icono" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2C7.37258 2 2 7.37258 2 14C2 23.5 14 34 14 34C14 34 26 23.5 26 14C26 7.37258 20.6274 2 14 2Z"
                        fill="#e53935"
                        stroke="black"
                        strokeWidth="2"
                      />
                      <circle
                        cx="14"
                        cy="14"
                        r="5"
                        fill="white"
                        stroke="black"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                  <span>{proyectos[activo].ubicacion}</span>
                </div>
                <div className="proyecto-clima-mapa-row">
                  <WeatherCard locationName={proyectos[activo].ubicacion} />
                  <div className="proyecto-mapa-inline">
                    <div
                      className="proyectos-mapa-container proyectos-mapa-container--inline"
                      style={{ "--map-aspect": mapaAspect }}
                    >
                      <img
                        src={asset(mapaImagen)}
                        alt={mapaAlt}
                        className="proyectos-mapa"
                        loading="lazy"
                      />
                      {proyectosEnMapa.map((p) => (
                        <button
                          key={p.nombre}
                          className={`proyecto-punto${
                            activo === proyectos.indexOf(p) ? " activo" : ""
                          }`}
                          style={{ top: p.top, left: p.left }}
                          onClick={() => selectProyecto(proyectos.indexOf(p))}
                          aria-label={p.nombre}
                          aria-pressed={activo === proyectos.indexOf(p)}
                          type="button"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  className="siguiente-proyecto"
                  onClick={handleSiguienteProyecto}
                  title="Siguiente proyecto"
                  aria-label="Siguiente proyecto"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ pointerEvents: "none" }}
                  >
                    <circle
                      cx="14"
                      cy="14"
                      r="13"
                      fill="#e3f2fd"
                      stroke="#19a9e7"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 14L18 14"
                      stroke="#19a9e7"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14 10L18 14L14 18"
                      stroke="#19a9e7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="proyectos-panel proyectos-panel--map">
            <div
              className="proyectos-mapa-container"
              style={{ "--map-aspect": mapaAspect }}
            >
              <img
                src={asset(mapaImagen)}
                alt={mapaAlt}
                className="proyectos-mapa"
                loading="lazy"
              />
              {proyectosEnMapa.map((p) => (
                <button
                  key={p.nombre}
                  className={`proyecto-punto${
                    activo === proyectos.indexOf(p) ? " activo" : ""
                  }`}
                  style={{ top: p.top, left: p.left }}
                  onClick={() => selectProyecto(proyectos.indexOf(p))}
                  aria-label={p.nombre}
                  aria-pressed={activo === proyectos.indexOf(p)}
                  type="button"
                />
              ))}
            </div>
            <p className="proyectos-map-hint">
              Selecciona un punto en el mapa para cambiar de proyecto.
            </p>
          </div>
        </div>

        <div className="proyecto-descripcion-strip" aria-live="polite">
          <div className="proyecto-descripcion-strip-label">Descripción</div>
          <p className="proyecto-descripcion-strip-text">
            {proyectos[activo].descripcion}
          </p>
        </div>

        {/* Clientes: carrusel de logos */}
        <Clientes />
      </div>
    </section>
  );
}

export default Proyectos;
