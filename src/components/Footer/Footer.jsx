import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const location = useLocation();

  const scrollWithOffset = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.querySelector(".header");
    const headerHeight = header ? header.offsetHeight : 0;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (location.pathname === "/") {
      if (id === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        scrollWithOffset(id);
      }
    }
  };

  const navLinks = [
    {
      label: "Inicio",
      id: "inicio",
      path: "/",
      scrollId: "inicio",
    },
    {
      label: "Servicios",
      id: "servicios",
      path: "/",
      scrollId: "servicios",
    },
    {
      label: "Sobre Nosotros",
      id: "sobrenosotros",
      path: "/sobrenosotros",
    },
    {
      label: "Proyectos",
      id: "proyectos",
      path: "/",
      scrollId: "proyectos",
    },
    {
      label: "Contacto",
      id: "cotizacion",
      path: "/cotizacion",
    },
  ];

  const renderNavLink = ({ label, path, scrollId }) => {
    const isCurrentPage = location.pathname === path;
    const isScrollLink = !!scrollId;

    if (isCurrentPage && isScrollLink) {
      return (
        <a href={`#${scrollId}`} onClick={(e) => handleNavClick(e, scrollId)}>
          {label}
        </a>
      );
    }
    if (isCurrentPage && !isScrollLink) {
      return (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {label}
        </a>
      );
    }
    if (!isCurrentPage && isScrollLink) {
      return (
        <Link
          to={path}
          onClick={() =>
            setTimeout(() => scrollWithOffset(scrollId), 120)
          }
        >
          {label}
        </Link>
      );
    }
    return <Link to={path}>{label}</Link>;
  };

  return (
    <footer className="footer-main">
      {/* Patrón de grilla sutil */}
      <div className="footer-grid-bg" aria-hidden="true" />

      <div className="footer-inner">
        {/* Columna 1: Marca */}
        <div className="footer-brand">
          <img
            src={`${import.meta.env.BASE_URL}assets/LogoHidrorural.png`}
            alt="Constructora Hidrorural"
            className="footer-logo-img"
          />
          <p className="footer-tagline">
            Ingeniería hídrica con calidad técnica, eficiencia y cumplimiento
            normativo desde 2019.
          </p>
        </div>

        {/* Columna 2: Navegación */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navegación</h4>
          <nav aria-label="Footer navigation">
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>{renderNavLink(link)}</li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Columna 3: Contacto */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contacto</h4>
          <ul className="footer-contact-list">
            <li>
              <span className="footer-contact-icon" aria-hidden="true">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M21 6.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 6.5v11A2.5 2.5 0 0 0 5.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-11Zm-2.5-.5a.5.5 0 0 1 .5.5v.38l-7 4.67-7-4.67V6.5a.5.5 0 0 1 .5-.5h13ZM4 8.62l6.65 4.43a1.5 1.5 0 0 0 1.7 0L20 8.62V17.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V8.62Z"
                  />
                </svg>
              </span>
              <a href="mailto:contacto@hidrorural.com" className="footer-contact-link">
                contacto@hidrorural.com
              </a>
            </li>
            <li>
              <span className="footer-contact-icon" aria-hidden="true">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z"
                  />
                </svg>
              </span>
              <a href="tel:+56900000000" className="footer-contact-link">
                +56 9 0000 0000
              </a>
            </li>
            <li>
              <span className="footer-contact-icon" aria-hidden="true">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                  />
                </svg>
              </span>
              <span className="footer-contact-text">
                San Pedro de la Paz, Biobío
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="footer-copy">
            © 2026 Constructora Hidrorural. Todos los derechos reservados.
          </span>
          <div className="footer-social">
            <a
              href="https://wa.me/56900000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="footer-social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
                />
              </svg>
            </a>
            <a
              href="https://cl.linkedin.com/company/hidrorural-ltda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
