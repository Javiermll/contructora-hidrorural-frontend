import "../../App.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Cotizacion from "../../components/Cotizacion/Cotizacion";

function CotizacionPage() {
  return (
    <>
      <Header />
      <main className="main-content" role="main">
        <Cotizacion />
      </main>
      <Footer />
    </>
  );
}

export default CotizacionPage;
