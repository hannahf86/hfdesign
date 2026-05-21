import { CREDENTIALS, TRAINING_TOPICS } from "../data/index.js";

export default function Training() {
  const certs = CREDENTIALS.filter((c) => c.type === "cert");
  const partners = CREDENTIALS.filter((c) => c.type === "partner");

  return (
    <section
      id="training"
      className="section"
      style={{
        background: "var(--bg-2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              Training & Credentials
            </div>
            <h2>Certified to design. Trusted to teach.</h2>
          </div>
          <span className="meta">/ 03</span>
        </div>

        <div
          className="train-grid reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "start",
          }}
        >
          {/* Left: certs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.55,
                color: "var(--fg-2)",
                margin: 0,
                maxWidth: "46ch",
              }}
            >
              I deliver digital-skills training to small business owners across
              North Yorkshire on behalf of three regional partners, alongside
              client work.
            </p>

            <div className="eyebrow">Qualifications</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {certs.map((c) => (
                <div
                  key={c.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "40px 1fr auto",
                    gap: 16,
                    padding: "16px 0",
                    borderTop: "1px solid var(--border)",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "var(--hf-accent-tint)",
                      color: "var(--accent-hover)",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="6" />
                      <path d="M9 14l-1.5 7L12 18l4.5 3L15 14" />
                    </svg>
                  </span>
                  <div>
                    <div
                      style={{
                        color: "var(--fg-1)",
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      {c.label}
                    </div>
                    <div className="mono" style={{ marginTop: 2 }}>
                      {c.org}
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--fg-3)",
                    }}
                  >
                    {c.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: partners + photos */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              className="training-strip"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              <figure
                style={{
                  margin: 0,
                  position: "relative",
                  borderRadius: "var(--r-3)",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  aspectRatio: "4 / 3",
                  background: "var(--bg-3)",
                }}
              >
                <img
                  src="/assets/training-enterprise-cube.png"
                  alt="DIY Web Health Check with Enterprise Cube"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <figcaption
                  style={{
                    position: "absolute",
                    left: 10,
                    bottom: 10,
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "white",
                    background: "rgba(12,10,16,0.7)",
                    backdropFilter: "blur(6px)",
                    padding: "5px 9px",
                    borderRadius: 4,
                  }}
                >
                  Enterprise Cube
                </figcaption>
              </figure>
              <figure
                style={{
                  margin: 0,
                  position: "relative",
                  borderRadius: "var(--r-3)",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  aspectRatio: "4 / 3",
                  background: "var(--bg-3)",
                }}
              >
                <img
                  src="/assets/training-ygh.png"
                  alt="Steps into Digital — York & North Yorkshire Growth Hub"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <figcaption
                  style={{
                    position: "absolute",
                    left: 10,
                    bottom: 10,
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "white",
                    background: "rgba(12,10,16,0.7)",
                    backdropFilter: "blur(6px)",
                    padding: "5px 9px",
                    borderRadius: 4,
                  }}
                >
                  Y&NY Growth Hub
                </figcaption>
              </figure>
            </div>

            <div className="eyebrow">Official trainer & course provider</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {partners.map((p) => (
                <div
                  key={p.label}
                  className="card"
                  style={{
                    padding: "18px 20px",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 16,
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "var(--fg-1)",
                        fontSize: 17,
                        fontWeight: 500,
                        fontFamily: "var(--font-display)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {p.label}
                    </div>
                    <div className="mono" style={{ marginTop: 4 }}>
                      {p.org}
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--fg-3)",
                      textAlign: "right",
                    }}
                  >
                    {p.detail}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 12 }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>
                Topics I teach
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {TRAINING_TOPICS.map((t) => (
                  <span
                    key={t}
                    className="chip"
                    style={{ fontSize: 12, padding: "6px 12px" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .train-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  );
}
