import { useState, useEffect } from "react";
import "./Cotizacion.css";
import { postContactMessage } from "../../api/contact";
import { STATUS_AUTO_CLOSE_MS } from "../../config/constants";

function Cotizacion() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
    hp: "",
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // { ok: boolean, msg: string }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (sending) return;

    setSending(true);
    setStatus(null);

    try {
      const { res, data } = await postContactMessage({
        nombre: form.nombre,
        correo: form.correo,
        telefono: form.telefono,
        mensaje: form.mensaje,
        hp: form.hp,
      });

      if (res.ok && data.ok) {
        setStatus({
          ok: true,
          msg: "Mensaje enviado. Gracias por contactarnos.",
        });
        setForm({ nombre: "", correo: "", telefono: "", mensaje: "", hp: "" });
      } else {
        setStatus({
          ok: false,
          msg: data.error || "Error al enviar el mensaje.",
        });
      }
    } catch {
      setStatus({
        ok: false,
        msg: "Error de red. Intentá nuevamente más tarde.",
      });
    } finally {
      setSending(false);
    }
  }

  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => setStatus(null), STATUS_AUTO_CLOSE_MS);
    return () => clearTimeout(t);
  }, [status]);

  useEffect(() => {
    if (!status) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setStatus(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [status]);

  return (
    <div className="cot-page">
      {/* Hero oscuro */}
      <section className="cot-hero" aria-label="Cotiza tu proyecto">
        <div className="cot-hero-grid-bg" aria-hidden="true" />
        <div className="cot-hero-content">
          <p className="cot-hero-kicker">Cotizaciones</p>
          <h1 className="cot-hero-title">Cotiza tu proyecto</h1>
          <p className="cot-hero-subtitle">
            Cuéntanos sobre tu proyecto y te responderemos a la brevedad.
            Trabajamos con comunidades, empresas y organismos públicos.
          </p>
        </div>
      </section>

      {/* Cuerpo: info + formulario */}
      <section className="cot-body" id="cotizacion" aria-label="Formulario de contacto">
        <div className="cot-body-inner">
          {/* Columna izquierda: info de contacto */}
          <div className="cot-info">
            <h2 className="cot-info-title">Contáctanos</h2>
            <p className="cot-info-copy">
              Somos una empresa especializada en proyectos de construcción
              sanitaria e hidráulica. Si necesitas una cotización, completa el
              formulario o comunícate directamente con nosotros.
            </p>

            <ul className="cot-contact-list">
              <li>
                <span className="cot-contact-icon" aria-hidden="true">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M21 6.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 6.5v11A2.5 2.5 0 0 0 5.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-11Zm-2.5-.5a.5.5 0 0 1 .5.5v.38l-7 4.67-7-4.67V6.5a.5.5 0 0 1 .5-.5h13ZM4 8.62l6.65 4.43a1.5 1.5 0 0 0 1.7 0L20 8.62V17.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V8.62Z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="cot-contact-label">Correo</p>
                  <a href="mailto:contacto@hidrorural.com" className="cot-contact-value">
                    contacto@hidrorural.com
                  </a>
                </div>
              </li>
              <li>
                <span className="cot-contact-icon" aria-hidden="true">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="cot-contact-label">Teléfono</p>
                  <a href="tel:+56900000000" className="cot-contact-value">
                    +56 9 0000 0000
                  </a>
                </div>
              </li>
              <li>
                <span className="cot-contact-icon" aria-hidden="true">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="cot-contact-label">Dirección</p>
                  <p className="cot-contact-value">
                    San Pedro de la Paz, Región del Biobío
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna derecha: formulario */}
          <div className="cot-form-card" aria-label="Formulario de cotización">
            <h3 className="cot-form-title">Envíanos tu consulta</h3>

            <form className="cot-form" onSubmit={handleSubmit}>
              <label className="cot-field">
                <span className="cot-sr">Nombre</span>
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="cot-field">
                <span className="cot-sr">Correo Electrónico</span>
                <input
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  placeholder="Correo Electrónico"
                  autoComplete="email"
                  required
                />
              </label>

              <label className="cot-field">
                <span className="cot-sr">Teléfono</span>
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="Teléfono (opcional)"
                  autoComplete="tel"
                />
              </label>

              <label className="cot-field">
                <span className="cot-sr">Cuéntanos sobre tu proyecto</span>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto"
                  rows={6}
                  required
                />
              </label>

              {/* Honeypot: oculto visualmente pero presente en el DOM */}
              <label
                style={{ position: "absolute", left: "-9999px" }}
                aria-hidden
              >
                <input
                  name="hp"
                  value={form.hp}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </label>

              <div className="cot-actions">
                <button
                  className="cot-submit"
                  type="submit"
                  disabled={sending}
                  aria-busy={sending}
                >
                  {sending ? "Enviando..." : "Enviar mensaje"}
                  {!sending && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {status && (
                <div
                  className="cotizacion-status-overlay"
                  role="presentation"
                  onMouseDown={(e) => {
                    if (e.target === e.currentTarget) setStatus(null);
                  }}
                >
                  <div
                    className={`cotizacion-status ${status.ok ? "ok" : "error"}`}
                    role="status"
                    aria-live="polite"
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    <div className="cotizacion-status-icon" aria-hidden>
                      {status.ok ? (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="#ffffff"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 9v4"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 17h.01"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>

                    <div className="cotizacion-status-body">
                      <div className="cotizacion-status-title">
                        {status.ok ? "Enviado" : "Error"}
                      </div>
                      <div className="cotizacion-status-msg">{status.msg}</div>
                    </div>

                    <button
                      className="cotizacion-status-close"
                      type="button"
                      aria-label="Cerrar mensaje"
                      onClick={() => setStatus(null)}
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cotizacion;
