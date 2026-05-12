import "./Contacto.css";
import { Link } from "react-router-dom";

function Contacto() {
  return (
    <section className="contacto-section" id="contacto">
      {/* Patrón de grilla técnica de fondo */}
      <div className="contacto-grid-bg" aria-hidden="true" />

      <div className="contacto-inner">
        {/* Columna izquierda: copy + CTA */}
        <div className="contacto-left">
          <p className="contacto-kicker">Trabajemos juntos</p>
          <h2 className="contacto-headline">
            Hablanos acerca<br />de tu proyecto
          </h2>
          <p className="contacto-subtext">
            Cuéntanos tu desafío y nuestro equipo te entregará una propuesta
            técnica ajustada a tus necesidades y presupuesto.
          </p>
          <Link className="contacto-cta" to="/cotizacion">
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

        {/* Columna derecha: tarjetas de contacto */}
        <div className="contacto-right">
          <div className="contacto-cards">
            <div className="contacto-card">
              <div className="contacto-card-icon" aria-hidden="true">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M21 6.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 6.5v11A2.5 2.5 0 0 0 5.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-11Zm-2.5-.5a.5.5 0 0 1 .5.5v.38l-7 4.67-7-4.67V6.5a.5.5 0 0 1 .5-.5h13ZM4 8.62l6.65 4.43a1.5 1.5 0 0 0 1.7 0L20 8.62V17.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V8.62Z"
                  />
                </svg>
              </div>
              <div className="contacto-card-body">
                <p className="contacto-card-label">Email</p>
                <p className="contacto-card-value">contacto@hidrorural.com</p>
              </div>
            </div>

            <div className="contacto-card">
              <div className="contacto-card-icon" aria-hidden="true">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z"
                  />
                </svg>
              </div>
              <div className="contacto-card-body">
                <p className="contacto-card-label">Teléfono</p>
                <p className="contacto-card-value">+56 9 0000 0000</p>
              </div>
            </div>

            <div className="contacto-card">
              <div className="contacto-card-icon" aria-hidden="true">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                  />
                </svg>
              </div>
              <div className="contacto-card-body">
                <p className="contacto-card-label">Ubicación</p>
                <p className="contacto-card-value">
                  San Pedro de la Paz, Biobío
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
