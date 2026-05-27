import "./Clientes.css";

const logos = [
  { src: "assets/Logo1.png", alt: "Institución colaboradora 1" },
  { src: "assets/Logo2.png", alt: "Institución colaboradora 2" },
];

function Clientes() {
  return (
    <div className="clientes-wrapper">
      <div className="clientes-header">
        <span className="clientes-line" aria-hidden="true" />
        <p className="clientes-kicker">Instituciones con las que hemos participado</p>
        <span className="clientes-line" aria-hidden="true" />
      </div>
      <div className="clientes-logos">
        {logos.map((logo) => (
          <div key={logo.alt} className="clientes-logo-item">
            <img
              src={`${import.meta.env.BASE_URL}${logo.src}`}
              alt={logo.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clientes;
