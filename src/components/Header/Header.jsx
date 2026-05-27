import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Logo_HidroRural.png";

function Header() {
  const location = useLocation();

  const mobileLabel = useCallback((key, text) => {
    const icons = {
      inicio: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 10.8L12 4l8 6.8V20a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 20v-9.2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 21.5v-6.3A1.2 1.2 0 0 1 10.7 14h2.6a1.2 1.2 0 0 1 1.2 1.2v6.3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      servicios: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2.8S6.8 9.4 6.8 13.6c0 3.6 3 6.6 5.2 6.6 2.2 0 5.2-3 5.2-6.6C17.2 9.4 12 2.8 12 2.8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.4 13.8c.8 1.2 2 2 3.5 2.2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      ),
      nosotros: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.5 20.5c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      proyectos: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.5 7.5A2.5 2.5 0 0 1 7 5h3l2 2h7A2.5 2.5 0 0 1 21.5 9.5v9A2.5 2.5 0 0 1 19 21H7A2.5 2.5 0 0 1 4.5 18.5v-11Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 10h17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      ),
      cotizacion: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 3.8h7l3 3V20a1.8 1.8 0 0 1-1.8 1.8H7A1.8 1.8 0 0 1 5.2 20V5.6A1.8 1.8 0 0 1 7 3.8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 12h6M9 15.5h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      ),
    };

    return (
      <>
        <span className="hamburger-menu__icon" aria-hidden="true">
          {icons[key]}
        </span>
        <span className="hamburger-menu__text">{text}</span>
      </>
    );
  }, []);

  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);

  const getInitialTab = () => {
    if (location.pathname === "/sobrenosotros") return "nosotros";
    if (location.pathname === "/cotizacion") return "cotizacion";
    return "inicio";
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector(".header");
    const headerHeight = header ? header.offsetHeight : 0;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  // Scroll a secciones si estamos en la home
  const handleSectionScroll = useCallback(
    (e, id) => {
      if (location.pathname !== "/") return;
      e.preventDefault();
      scrollToSection(id);
      setActiveTab(id);
    },
    [location.pathname, scrollToSection],
  );

  useEffect(() => {
    if (location.pathname === "/") {
      const onScroll = () => {
        const header = document.querySelector(".header");
        const headerHeight = header ? header.offsetHeight : 0;
        const y = window.scrollY + headerHeight + 10;
        const servicios = document.getElementById("servicios");
        const proyectos = document.getElementById("proyectos");

        if (
          proyectos &&
          y >= proyectos.offsetTop &&
          y < proyectos.offsetTop + proyectos.offsetHeight
        ) {
          setActiveTab("proyectos");
        } else if (
          servicios &&
          y >= servicios.offsetTop &&
          y < servicios.offsetTop + servicios.offsetHeight
        ) {
          setActiveTab("servicios");
        } else {
          setActiveTab("inicio");
        }
      };

      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    setActiveTab(() => {
      if (location.pathname === "/sobrenosotros") return "nosotros";
      if (location.pathname === "/cotizacion") return "cotizacion";
      return "inicio";
    });
  }, [location.pathname]);

  // Scroll por hash cuando entramos a la home desde otra ruta (ej: /cotizacion -> /#servicios)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const hash = (location.hash || "").replace(/^#/, "").trim();
    if (!hash) return;

    const start = performance.now();
    const attemptScroll = () => {
      const el = document.getElementById(hash);
      if (el) {
        scrollToSection(hash);
        setActiveTab(hash);
        return;
      }
      if (performance.now() - start < 1500)
        requestAnimationFrame(attemptScroll);
    };

    requestAnimationFrame(attemptScroll);
  }, [location.pathname, location.hash, scrollToSection]);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setShowHamburgerMenu(false);
  }, [location.pathname]);

  // Cerrar menú con Escape o click fuera
  useEffect(() => {
    if (!showHamburgerMenu) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowHamburgerMenu(false);
        menuButtonRef.current?.focus();
      }
    };

    const onPointerDown = (e) => {
      const target = e.target;
      if (!(target instanceof Node)) return;
      const clickedMenu = menuRef.current?.contains(target);
      const clickedButton = menuButtonRef.current?.contains(target);
      if (!clickedMenu && !clickedButton) setShowHamburgerMenu(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [showHamburgerMenu]);

  const navLinks = useMemo(
    () => [
      {
        key: "inicio",
        label: "Inicio",
        desktop:
          location.pathname === "/" ? (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveTab("inicio");
              }}
              className={`nav-link${activeTab === "inicio" ? " active" : ""}`}
            >
              Inicio
            </a>
          ) : (
            <Link
              to="/"
              className={`nav-link${activeTab === "inicio" ? " active" : ""}`}
            >
              Inicio
            </Link>
          ),
        mobile:
          location.pathname === "/" ? (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveTab("inicio");
                setShowHamburgerMenu(false);
              }}
              className={`nav-link${activeTab === "inicio" ? " active" : ""}`}
            >
              {mobileLabel("inicio", "Inicio")}
            </a>
          ) : (
            <Link
              to="/"
              onClick={() => setShowHamburgerMenu(false)}
              className={`nav-link${activeTab === "inicio" ? " active" : ""}`}
            >
              {mobileLabel("inicio", "Inicio")}
            </Link>
          ),
      },
      {
        key: "servicios",
        label: "Servicios",
        desktop:
          location.pathname === "/" ? (
            <a
              href="#servicios"
              onClick={(e) => handleSectionScroll(e, "servicios")}
              className={`nav-link${activeTab === "servicios" ? " active" : ""}`}
            >
              Servicios
            </a>
          ) : (
            <Link
              to="/#servicios"
              onClick={() => setActiveTab("servicios")}
              className={`nav-link${activeTab === "servicios" ? " active" : ""}`}
            >
              Servicios
            </Link>
          ),
        mobile:
          location.pathname === "/" ? (
            <a
              href="#servicios"
              onClick={(e) => {
                handleSectionScroll(e, "servicios");
                setShowHamburgerMenu(false);
              }}
              className={`nav-link${activeTab === "servicios" ? " active" : ""}`}
            >
              {mobileLabel("servicios", "Servicios")}
            </a>
          ) : (
            <Link
              onClick={() => {
                setShowHamburgerMenu(false);
                setActiveTab("servicios");
              }}
              to="/#servicios"
              className={`nav-link${activeTab === "servicios" ? " active" : ""}`}
            >
              {mobileLabel("servicios", "Servicios")}
            </Link>
          ),
      },
      {
        key: "nosotros",
        label: "Nosotros",
        desktop:
          location.pathname === "/sobrenosotros" ? (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`nav-link${activeTab === "nosotros" ? " active" : ""}`}
            >
              Nosotros
            </a>
          ) : (
            <Link
              to="/sobrenosotros"
              className={`nav-link${activeTab === "nosotros" ? " active" : ""}`}
            >
              Nosotros
            </Link>
          ),
        mobile:
          location.pathname === "/sobrenosotros" ? (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setShowHamburgerMenu(false);
              }}
              className={`nav-link${activeTab === "nosotros" ? " active" : ""}`}
            >
              {mobileLabel("nosotros", "Nosotros")}
            </a>
          ) : (
            <Link
              to="/sobrenosotros"
              onClick={() => setShowHamburgerMenu(false)}
              className={`nav-link${activeTab === "nosotros" ? " active" : ""}`}
            >
              {mobileLabel("nosotros", "Nosotros")}
            </Link>
          ),
      },
      {
        key: "proyectos",
        label: "Proyectos",
        desktop:
          location.pathname === "/" ? (
            <a
              href="#proyectos"
              onClick={(e) => handleSectionScroll(e, "proyectos")}
              className={`nav-link${activeTab === "proyectos" ? " active" : ""}`}
            >
              Proyectos
            </a>
          ) : (
            <Link
              to="/#proyectos"
              onClick={() => setActiveTab("proyectos")}
              className={`nav-link${activeTab === "proyectos" ? " active" : ""}`}
            >
              Proyectos
            </Link>
          ),
        mobile:
          location.pathname === "/" ? (
            <a
              href="#proyectos"
              onClick={(e) => {
                handleSectionScroll(e, "proyectos");
                setShowHamburgerMenu(false);
              }}
              className={`nav-link${activeTab === "proyectos" ? " active" : ""}`}
            >
              {mobileLabel("proyectos", "Proyectos")}
            </a>
          ) : (
            <Link
              onClick={() => {
                setShowHamburgerMenu(false);
                setActiveTab("proyectos");
              }}
              to="/#proyectos"
              className={`nav-link${activeTab === "proyectos" ? " active" : ""}`}
            >
              {mobileLabel("proyectos", "Proyectos")}
            </Link>
          ),
      },
      {
        key: "cotizacion",
        label: "Cotizacion",
        desktop:
          location.pathname === "/cotizacion" ? (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`nav-link nav-link-cta${activeTab === "cotizacion" ? " active" : ""}`}
            >
              Cotización
            </a>
          ) : (
            <Link
              to="/cotizacion"
              className={`nav-link nav-link-cta${activeTab === "cotizacion" ? " active" : ""}`}
            >
              Cotización
            </Link>
          ),
        mobile:
          location.pathname === "/cotizacion" ? (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setShowHamburgerMenu(false);
              }}
              className={`nav-link nav-link-cta${activeTab === "cotizacion" ? " active" : ""}`}
            >
              {mobileLabel("cotizacion", "Cotización")}
            </a>
          ) : (
            <Link
              to="/cotizacion"
              onClick={() => setShowHamburgerMenu(false)}
              className={`nav-link nav-link-cta${activeTab === "cotizacion" ? " active" : ""}`}
            >
              {mobileLabel("cotizacion", "Cotización")}
            </Link>
          ),
      },
    ],
    [activeTab, location.pathname, handleSectionScroll, mobileLabel],
  );

  return (
    <header className={`header${isScrolled ? " header--solid" : ""}`}>
      <div className="logo-container">
        {location.pathname === "/" ? (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setShowHamburgerMenu(false);
            }}
            aria-label="Ir al inicio"
          >
            <img
              src={logo}
              alt="Logo Constructora Hidrorural"
              className="logo"
            />
          </a>
        ) : (
          <Link
            to="/"
            aria-label="Ir al inicio"
            onClick={() => setShowHamburgerMenu(false)}
          >
            <img
              src={logo}
              alt="Logo Constructora Hidrorural"
              className="logo"
            />
          </Link>
        )}
      </div>

      <nav className="nav-bar" aria-label="Navegación principal">
        {navLinks.map((l) => (
          <React.Fragment key={l.key}>{l.desktop}</React.Fragment>
        ))}
      </nav>

      <button
        ref={menuButtonRef}
        type="button"
        className="hamburger"
        aria-label={showHamburgerMenu ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={showHamburgerMenu}
        aria-controls="header-mobile-menu"
        onClick={() => setShowHamburgerMenu((v) => !v)}
      >
        {showHamburgerMenu ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M4 17H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {showHamburgerMenu && (
        <div
          id="header-mobile-menu"
          ref={menuRef}
          className="hamburger-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <div className="hamburger-menu__grid-bg" aria-hidden="true" />
          <nav className="hamburger-menu__nav" aria-label="Menú móvil">
            {navLinks.map((l) => (
              <React.Fragment key={l.key}>{l.mobile}</React.Fragment>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
