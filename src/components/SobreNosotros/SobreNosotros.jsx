import { Link } from "react-router-dom";
import "./SobreNosotros.css";

function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="sobre-nosotros-section">
      <div className="about-hero">
        <div className="about-hero-content">
          <img
            src={`${import.meta.env.BASE_URL}assets/LogoHidrorural.png`}
            alt="Logo Hidrorural"
            className="about-hero-logo"
          />
          <h1 className="about-hero-title">Constructora Hidrorural Ltda.</h1>
          <p className="about-hero-subtitle">
            Líder en infraestructura y servicios hídricos, con foco en
            soluciones sostenibles y de alta calidad para comunidades urbanas y
            rurales.
          </p>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-image">
          <img src={`${import.meta.env.BASE_URL}assets/imagen1.webp`} alt="Obras y proyectos Hidrorural" />
        </div>
        <div className="about-text">
          <h2>Quiénes somos</h2>
          <p>
            Constructora Hidrorural es una empresa líder en el desarrollo de
            proyectos de infraestructura y servicios para el sector rural y
            urbano. Con años de experiencia, nos especializamos en soluciones
            innovadoras, sostenibles y de alta calidad, comprometidos con el
            crecimiento y bienestar de nuestras comunidades.
          </p>
          <div className="about-actions">
            <Link to="/cotizacion" className="btn-primary">
              Contáctanos
            </Link>
          </div>
        </div>
      </div>

      <div className="mv-cards">
        <div className="mv-card">
          <div className="mv-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l7 5v10l-7 5-7-5V7l7-5z"
                stroke="#19a9e7"
                strokeWidth="2"
              />
              <path
                d="M9 12h6"
                stroke="#19a9e7"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h3>Misión</h3>
          <p>
            Desarrollar proyectos que mejoren la disponibilidad y calidad de
            servicios de agua e infraestructura pública, aportando eficiencia,
            sostenibilidad y valor social a las comunidades.
          </p>
        </div>
        <div className="mv-card">
          <div className="mv-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#19a9e7" strokeWidth="2" />
              <path
                d="M12 7v10M7 12h10"
                stroke="#19a9e7"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h3>Visión</h3>
          <p>
            Ser referentes en soluciones hídricas e infraestructura, impulsando
            el desarrollo sostenible mediante altos estándares técnicos y
            operacionales.
          </p>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="5"
                width="18"
                height="16"
                rx="2"
                stroke="#19a9e7"
                strokeWidth="2"
              />
              <path
                d="M16 3v4M8 3v4"
                stroke="#19a9e7"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path d="M3 9h18" stroke="#19a9e7" strokeWidth="2" />
            </svg>
          </div>
          <div className="stat-content">
            <div className="stat-value">Desde 2019</div>
            <div className="stat-desc">
              Experiencia brindando soluciones de infraestructura y servicios
              hídricos para el sector público y privado.
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="7"
                width="7"
                height="13"
                rx="2"
                stroke="#19a9e7"
                strokeWidth="2"
              />
              <rect
                x="14"
                y="3"
                width="7"
                height="17"
                rx="2"
                stroke="#19a9e7"
                strokeWidth="2"
              />
              <path
                d="M7 10h1M7 13h1M7 16h1M18 6h1M18 9h1M18 12h1M18 15h1"
                stroke="#19a9e7"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="stat-content">
            <div className="stat-value">+60 proyectos ejecutados</div>
            <div className="stat-desc">
              Obras públicas y privadas para DOH, ESSBIO y otras entidades,
              abarcando diversa envergadura y complejidad.
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="11"
                width="4"
                height="8"
                rx="1"
                stroke="#19a9e7"
                strokeWidth="2"
              />
              <rect
                x="9"
                y="7"
                width="4"
                height="12"
                rx="1"
                stroke="#19a9e7"
                strokeWidth="2"
              />
              <rect
                x="15"
                y="3"
                width="4"
                height="16"
                rx="1"
                stroke="#19a9e7"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="stat-content">
            <div className="stat-value">$4.2 mil millones</div>
            <div className="stat-desc">
              Más de $4.200 millones invertidos en infraestructura y servicios,
              impulsando el bienestar de comunidades.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;
