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

  return (
    <footer className="footer-main">
      <div className="footer-content">
        <nav className="footer-nav">
          <ul>
            {location.pathname === "/" ? (
              <li>
                <a href="#inicio" onClick={(e) => handleNavClick(e, "inicio")}>
                  Inicio
                </a>
              </li>
            ) : (
              <li>
                <Link to="/">Inicio</Link>
              </li>
            )}

            {location.pathname === "/" ? (
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => handleNavClick(e, "servicios")}
                >
                  Servicios
                </a>
              </li>
            ) : (
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    setTimeout(() => scrollWithOffset("servicios"), 120)
                  }
                >
                  Servicios
                </Link>
              </li>
            )}

            {location.pathname === "/sobrenosotros" ? (
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Sobre Nosotros
                </a>
              </li>
            ) : (
              <li>
                <Link to="/sobrenosotros">Sobre Nosotros</Link>
              </li>
            )}

            {location.pathname === "/" ? (
              <li>
                <a
                  href="#proyectos"
                  onClick={(e) => handleNavClick(e, "proyectos")}
                >
                  Proyectos
                </a>
              </li>
            ) : (
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    setTimeout(() => scrollWithOffset("proyectos"), 120)
                  }
                >
                  Proyectos
                </Link>
              </li>
            )}

            {location.pathname === "/cotizacion" ? (
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contacto
                </a>
              </li>
            ) : (
              <li>
                <Link to="/cotizacion">Contacto</Link>
              </li>
            )}
          </ul>
        </nav>

        <div className="footer-logo">
          <img src={`${import.meta.env.BASE_URL}assets/LogoHidrorural.png`} alt="Constructora Hidrorural" />
          <div className="footer-copy">
            Copyright © 2026 Constructora Hidrorural
          </div>
        </div>

        <div className="footer-social">
          <a
            href="https://wa.me/56900000000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14" cy="14" r="14" fill="#25D366" />
              <rect x="9" y="7" width="10" height="14" rx="2" fill="#ffffff" />
              <circle cx="14" cy="19" r="1.5" fill="#25D366" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/hidrorural/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14" cy="14" r="14" fill="#0077B5" />
              <path
                d="M10.5 12.5h2v1.5h.03c.28-.53 1-1.08 2.07-1.08 2.22 0 2.63 1.46 2.63 3.36v3.22h-2v-2.85c0-.68-.01-1.56-1-1.56-1 0-1.15.75-1.15 1.51v2.9h-2v-6zM8.5 10.5a1.13 1.13 0 1 1 0-2.26 1.13 1.13 0 0 1 0 2.26zm1 2h-2v6h2v-6z"
                fill="#fff"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
