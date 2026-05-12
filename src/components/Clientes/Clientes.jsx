import "./Clientes.css";

const logos = [
  { src: "assets/Logo1.png", alt: "Cliente 1" },
  { src: "assets/Logo2.png", alt: "Cliente 2" },
  { src: "assets/Logo3.jpg", alt: "Cliente 3" },
  { src: "assets/Logo4.jpg", alt: "Cliente 4" },
  { src: "assets/Logo5.jpg", alt: "Cliente 5" },
];

function Clientes() {
  return (
    <div className="clientes-wrapper">
      <div className="clientes-header">
        <span className="clientes-line" aria-hidden="true" />
        <p className="clientes-kicker">Empresas que confían en nosotros</p>
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
