import { Link, useLocation } from "react-router-dom";
import "./NotFoundPage.css";
import logo from "../../assets/Logo_HidroRural.png";

function NotFoundPage() {
  const location = useLocation();

  return (
    <main className="notfound" role="main">
      <section className="notfound__card" aria-label="Página no encontrada">
        <img
          className="notfound__logo"
          src={logo}
          alt="Logo Constructora Hidrorural"
        />

        <p className="notfound__kicker">ERROR 404</p>
        <h1 className="notfound__title">Página no encontrada</h1>
        <p className="notfound__desc">
          No pudimos encontrar la ruta{" "}
          <span className="notfound__path">{location.pathname}</span>. Verifica
          el enlace o vuelve al inicio.
        </p>

        <div className="notfound__actions">
          <Link to="/" className="notfound__button">
            Ir al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
