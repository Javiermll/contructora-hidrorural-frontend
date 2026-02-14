import "./Contacto.css";
import { Link } from "react-router-dom";

function Contacto() {
  return (
    <section className="contacto-outer" id="contacto">
      <div className="contacto-bg-rect">
        <div className="contacto-inner">
          <div className="contacto-top">
            <div className="contacto-title">
              <p className="contacto-kicker">TRABAJEMOS JUNTOS</p>
              <h2>Hablanos acerca de tu proyecto</h2>
            </div>
            <Link className="contacto-cta" to="/cotizacion">
              Contactar
            </Link>
          </div>

          <div className="contacto-bottom">
            <div className="contacto-cards">
              <div className="contacto-card">
                <div className="contacto-card-icon" aria-hidden="true">
                  ✉
                </div>
                <div className="contacto-card-body">
                  <p className="contacto-card-label">Email</p>
                  <p className="contacto-card-value">contacto@hidrorural.com</p>
                </div>
              </div>

              <div className="contacto-card">
                <div className="contacto-card-icon" aria-hidden="true">
                  ☎
                </div>
                <div className="contacto-card-body">
                  <p className="contacto-card-label">Teléfono</p>
                  <p className="contacto-card-value">+56 9 0000 0000</p>
                </div>
              </div>

              <div className="contacto-card">
                <div className="contacto-card-icon" aria-hidden="true">
                  ⌂
                </div>
                <div className="contacto-card-body">
                  <p className="contacto-card-label">Ubicación</p>
                  <p className="contacto-card-value">
                    San Pedro de la Paz, Región del Biobío
                  </p>
                </div>
              </div>
            </div>
            <div className="contacto-aside">
              <img
                src={`${import.meta.env.BASE_URL}assets/Hidrorural_Vertical.png`}
                alt="Ilustración contacto"
                loading="lazy"
              />
              <Link
                className="contacto-cta contacto-cta-aside"
                to="/cotizacion"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
