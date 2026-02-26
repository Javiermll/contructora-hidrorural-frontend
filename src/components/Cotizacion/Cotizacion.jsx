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

  // autocierra el popup después de X segundos
  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => setStatus(null), STATUS_AUTO_CLOSE_MS);
    return () => clearTimeout(t);
  }, [status]);

  // cierre con tecla ESC (y cleanup del listener)
  useEffect(() => {
    if (!status) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setStatus(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [status]);

  return (
    <section
      className="cotizacion"
      id="cotizacion"
      aria-label="Cotiza tu proyecto"
    >
      <div className="cotizacion-container">
        <div className="cotizacion-left">
          <h2 className="cotizacion-title">Contáctanos</h2>
          <p className="cotizacion-copy">
            Somos una empresa enfocada en proyectos de construcción sanitaria e
            hidráulica. Si necesitas una cotización, cuéntanos sobre tu proyecto
            y te responderemos a la brevedad.
          </p>

          <div className="cotizacion-info">
            <div className="cotizacion-info-item">
              <div className="cotizacion-info-icon" aria-hidden="true">
                ✉
              </div>
              <div>
                <p className="cotizacion-info-label">CORREO</p>
                <p className="cotizacion-info-value">contacto@hidrorural.com</p>
              </div>
            </div>

            <div className="cotizacion-info-item">
              <div className="cotizacion-info-icon" aria-hidden="true">
                ⌂
              </div>
              <div>
                <p className="cotizacion-info-label">DIRECCIÓN</p>
                <p className="cotizacion-info-value">
                  San Pedro de la Paz, Región del Biobío – Chile.
                </p>
              </div>
            </div>

            <div className="cotizacion-info-item">
              <div className="cotizacion-info-icon" aria-hidden="true">
                ☎
              </div>
              <div>
                <p className="cotizacion-info-label">LLÁMANOS</p>
                <p className="cotizacion-info-value">+56 9 0000 0000</p>
                <p className="cotizacion-info-value">+56 9 0000 0000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cotizacion-right" aria-label="Formulario de cotización">
          <h3 className="cotizacion-form-title">COTIZA TU PROYECTO</h3>

          <form className="cotizacion-form" onSubmit={handleSubmit}>
            <label className="cotizacion-field">
              <span className="cotizacion-sr">Nombre</span>
              <input
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                autoComplete="name"
                required
              />
            </label>

            <label className="cotizacion-field">
              <span className="cotizacion-sr">Correo Electrónico</span>
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

            <label className="cotizacion-field">
              <span className="cotizacion-sr">Teléfono</span>
              <input
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                autoComplete="tel"
              />
            </label>

            <label className="cotizacion-field">
              <span className="cotizacion-sr">Cuéntanos sobre tu proyecto</span>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu proyecto"
                rows={8}
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

            <div className="cotizacion-actions">
              <button
                className="cotizacion-submit"
                type="submit"
                disabled={sending}
                aria-busy={sending}
              >
                {sending ? "ENVIANDO..." : "ENVIAR"}
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
                        xmlns="http://www.w3.org/2000/svg"
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
                        xmlns="http://www.w3.org/2000/svg"
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
  );
}

export default Cotizacion;
