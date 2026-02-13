import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CotizacionPage from "./pages/Cotizacion/CotizacionPage.jsx";
import SobreNosotrosPage from "./pages/SobreNosotros/SobreNosotrosPage.jsx";
import NotFoundPage from "./pages/NotFound/NotFoundPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cotizacion" element={<CotizacionPage />} />
        <Route path="/sobrenosotros" element={<SobreNosotrosPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
