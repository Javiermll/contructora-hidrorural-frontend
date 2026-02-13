import "../../App.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SobreNosotros from "../../components/SobreNosotros/SobreNosotros";

function SobreNosotrosPage() {
  return (
    <>
      <Header />
      <main className="main-content" role="main">
        <SobreNosotros />
      </main>
      <Footer />
    </>
  );
}

export default SobreNosotrosPage;
