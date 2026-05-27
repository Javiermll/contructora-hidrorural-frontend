import "./App.css";

import Header from "./components/Header/Header";
import Servicios from "./components/Servicios/Servicios";
import StatsStrip from "./components/StatsStrip/StatsStrip";
import Proyectos from "./components/Proyectos/Proyectos";
import Clientes from "./components/Clientes/Clientes";
import Contacto from "./components/Contacto/Contacto";
import Carousel_projectos from "./components/Carousel_Projectos/Carousel_projectos";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main-content" role="main">
        <Carousel_projectos />
        <Servicios />
        <StatsStrip />
        <Proyectos />
        <Contacto />
        <section className="clientes-section">
          <Clientes />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
