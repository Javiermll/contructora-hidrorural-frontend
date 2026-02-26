import { useEffect, useState } from "react";
import "./Clientes.css";

function Clientes() {
  const logos = [
    { src: "assets/Logo1.png", alt: "Cliente 1" },
    { src: "assets/Logo2.png", alt: "Cliente 2" },
    { src: "assets/Logo3.jpg", alt: "Cliente 3" },
    { src: "assets/Logo4.jpg", alt: "Cliente 4" },
    { src: "assets/Logo5.jpg", alt: "Cliente 5" },
  ];
  const [logoActivo, setLogoActivo] = useState(0);

  useEffect(() => {
    if (!logos.length) return;
    const interval = setInterval(() => {
      setLogoActivo((prev) => (prev + 1) % logos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [logos.length]);

  const prevIdx = (logoActivo - 1 + logos.length) % logos.length;
  const nextIdx = (logoActivo + 1) % logos.length;

  return (
    <>
      <h3 className="clientes-titulo">Nuestros clientes</h3>
      <div className="logos-carrusel">
        {logos.map((logo, idx) => (
          <img
            key={logo.alt}
            src={`${import.meta.env.BASE_URL}${logo.src}`}
            alt={logo.alt}
            className={[
              "logo-cliente",
              logoActivo === idx ? "activo" : "",
              prevIdx === idx ? "prev" : "",
              nextIdx === idx ? "next" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            loading="lazy"
            onClick={() => setLogoActivo(idx)}
          />
        ))}
      </div>
    </>
  );
}

export default Clientes;
