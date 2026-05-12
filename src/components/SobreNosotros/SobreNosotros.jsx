import { Link } from "react-router-dom";
import "./SobreNosotros.css";

function SobreNosotros() {
  return (
    <div className="sn-page">
      {/* Hero oscuro */}
      <section className="sn-hero" aria-label="Sobre nosotros">
        <div className="sn-hero-grid-bg" aria-hidden="true" />
        <div className="sn-hero-content">
          <p className="sn-hero-kicker">Sobre nosotros</p>
          <h1 className="sn-hero-title">Constructora Hidrorural</h1>
          <p className="sn-hero-subtitle">
            Empresa chilena de ingeniería hídrica y construcción sanitaria.
            Desde 2019 desarrollamos infraestructura de calidad para comunidades
            urbanas y rurales del sur de Chile.
          </p>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="sn-quienes">
        <div className="sn-quienes-inner">
          <div className="sn-quienes-img">
            <img
              src={`${import.meta.env.BASE_URL}assets/ImagenDescriptiva1.webp`}
              alt="Equipo de Constructora Hidrorural en obra"
            />
          </div>
          <div className="sn-quienes-text">
            <p className="sn-section-kicker">Quiénes somos</p>
            <h2 className="sn-section-title">
              Ingeniería hídrica con propósito
            </h2>
            <p className="sn-section-body">
              Somos una empresa especializada en el diseño y ejecución de
              proyectos de infraestructura sanitaria e hídrica. Trabajamos con
              organismos públicos como el DOH y ESSBIO, y con comunidades
              rurales a lo largo de la Región del Biobío y Ñuble.
            </p>
            <p className="sn-section-body">
              Nuestro equipo técnico combina experiencia en terreno con rigor
              normativo, asegurando que cada proyecto cumpla con los más altos
              estándares de calidad y eficiencia.
            </p>
            <Link to="/cotizacion" className="sn-cta">
              Contáctanos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="sn-mv">
        <div className="sn-mv-inner">
          <div className="sn-mv-card">
            <div className="sn-mv-icon-badge" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L4 7v10l8 5 8-5V7l-8-5z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22V12M4 7l8 5 8-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="sn-mv-title">Misión</h3>
            <p className="sn-mv-body">
              Desarrollar proyectos que mejoren la disponibilidad y calidad de
              los servicios de agua e infraestructura pública, aportando
              eficiencia, sostenibilidad y valor social a las comunidades que
              atendemos.
            </p>
          </div>
          <div className="sn-mv-card">
            <div className="sn-mv-icon-badge" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
                <path
                  d="M12 3v3M12 18v3M3 12h3M18 12h3"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="sn-mv-title">Visión</h3>
            <p className="sn-mv-body">
              Ser referentes en soluciones hídricas e infraestructura sanitaria
              a nivel nacional, impulsando el desarrollo sostenible mediante
              altos estándares técnicos, innovación y compromiso con el
              territorio.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="sn-stats">
        <div className="sn-stats-inner">
          <div className="sn-stat-card">
            <div className="sn-stat-value">2019</div>
            <div className="sn-stat-label">Año de fundación</div>
            <p className="sn-stat-desc">
              Más de 6 años entregando soluciones de infraestructura hídrica
              para el sector público y privado en el sur de Chile.
            </p>
          </div>
          <div className="sn-stat-card">
            <div className="sn-stat-value">+60</div>
            <div className="sn-stat-label">Proyectos ejecutados</div>
            <p className="sn-stat-desc">
              Obras públicas y privadas para DOH, ESSBIO y otras entidades,
              abarcando diversa envergadura y complejidad técnica.
            </p>
          </div>
          <div className="sn-stat-card">
            <div className="sn-stat-value">$4.2B</div>
            <div className="sn-stat-label">En infraestructura</div>
            <p className="sn-stat-desc">
              Más de $4.200 millones invertidos en infraestructura y servicios,
              impulsando el bienestar de comunidades rurales y urbanas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SobreNosotros;
