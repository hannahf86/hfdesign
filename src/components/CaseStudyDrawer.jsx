import { useEffect } from "react";
import { VISUALS } from "./CaseVisuals.jsx";

export default function CaseStudyDrawer({ entry, onClose }) {
  useEffect(() => {
    if (!entry) return;
    const h = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", h);
      document.body.style.overflow = "";
    };
  }, [entry, onClose]);

  if (!entry) return null;
  const Visual = VISUALS[entry.visual];

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100 }}>
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--scrim)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          animation: "fadeIn 320ms var(--ease-out)",
        }}
      />
      <aside
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(820px, 100vw)",
          background: "var(--bg-1)",
          borderLeft: "1px solid var(--border)",
          boxShadow: "var(--shadow-3)",
          overflowY: "auto",
          animation: "slideIn 420ms var(--ease-out)",
        }}
      >
        {/* Sticky header */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 2,
            background: "rgba(12,10,16,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--border)",
            padding: "14px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 12,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--fg-3)",
            }}
          >
            <span style={{ color: "var(--fg-1)" }}>{entry.num}</span>
            <span>·</span>
            <span style={{ color: "var(--fg-2)" }}>{entry.client}</span>
            <span className="cs-meta">·</span>
            <span className="cs-meta">{entry.date}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 30,
              height: 30,
              borderRadius: 999,
              border: "1px solid var(--border)",
              display: "grid",
              placeItems: "center",
              color: "var(--fg-2)",
              transition: "all 220ms var(--ease-out)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--fg-1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--fg-2)";
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Per-case accent band */}
        <div style={{ height: 4, width: "100%", background: entry.accent }} />

        <div
          style={{
            padding: "40px 40px 80px",
            display: "flex",
            flexDirection: "column",
            gap: 36,
          }}
        >
          {/* Title block */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="eyebrow">{entry.sector}</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4.4vw, 52px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontWeight: 700,
                margin: 0,
                textWrap: "balance",
                maxWidth: "20ch",
              }}
            >
              {entry.title}
            </h2>
            <p
              style={{
                fontSize: 19,
                lineHeight: 1.55,
                color: "var(--fg-2)",
                margin: 0,
                maxWidth: "60ch",
              }}
            >
              {entry.summary}
            </p>
          </div>

          {/* Visual */}
          <div>
            <Visual />
          </div>

          {/* New: Description section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              paddingTop: 12,
              borderTop: "1px solid var(--border)",
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>
                Description
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {Array.isArray(entry.description) ? (
                  entry.description.map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: 16,
                        lineHeight: 1.65,
                        color: "var(--fg-2)",
                        margin: 0,
                      }}
                    >
                      {para}
                    </p>
                  ))
                ) : (
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.65,
                      color: "var(--fg-2)",
                      margin: 0,
                    }}
                  >
                    {entry.description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${entry.metrics.length}, 1fr)`,
              gap: 1,
              background: "var(--border)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-3)",
              overflow: "hidden",
            }}
          >
            {entry.metrics.map((m) => (
              <div
                key={m.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  padding: 24,
                  background: "var(--bg-2)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 32,
                    letterSpacing: "-0.02em",
                    color: "var(--fg-1)",
                    lineHeight: 1,
                  }}
                >
                  {m.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--fg-3)",
                  }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Meta */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "140px 1fr",
              rowGap: 18,
              columnGap: 24,
              paddingTop: 4,
            }}
          >
            <div className="mono">Role</div>
            <div style={{ color: "var(--fg-1)", fontSize: 15 }}>
              {entry.role}
            </div>
            <div className="mono">Stack</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {entry.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
            <div className="mono">Delivered</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                fontSize: 14,
                color: "var(--fg-2)",
              }}
            >
              {entry.deliverables.map((d, i) => (
                <span
                  key={d}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  {d}
                  {i < entry.deliverables.length - 1 && (
                    <span style={{ color: "var(--fg-4)" }}>·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              Process
            </div>
            <ol
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 22,
              }}
            >
              {entry.process.map((p, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "52px 1fr",
                    gap: 16,
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: entry.accent,
                      filter: "brightness(1.3) saturate(1.1)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 16,
                      lineHeight: 1.65,
                      color: "var(--fg-2)",
                    }}
                  >
                    {p}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Body content */}
          {entry.body && entry.body.length > 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 32,
                paddingTop: 8,
                borderTop: "1px solid var(--border)",
              }}
            >
              {entry.body.map((block, i) => {
                if (block.kind === "eyebrow-h")
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <div className="eyebrow">{block.label}</div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(20px, 2.4vw, 28px)",
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                          lineHeight: 1.15,
                          margin: 0,
                          color: "var(--fg-1)",
                          textWrap: "balance",
                        }}
                      >
                        {block.title}
                      </h3>
                    </div>
                  );
                if (block.kind === "p")
                  return (
                    <p
                      key={i}
                      style={{
                        fontSize: 16,
                        lineHeight: 1.65,
                        color: "var(--fg-2)",
                        margin: 0,
                        maxWidth: "62ch",
                      }}
                    >
                      {block.text}
                    </p>
                  );
                if (block.kind === "pull-quote")
                  return (
                    <blockquote
                      key={i}
                      style={{
                        borderLeft: `3px solid ${entry.accent}`,
                        paddingLeft: 20,
                        margin: 0,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(18px, 2vw, 22px)",
                          lineHeight: 1.4,
                          color: "var(--fg-1)",
                          fontStyle: "italic",
                          margin: 0,
                        }}
                      >
                        {block.text}
                      </p>
                    </blockquote>
                  );
                if (block.kind === "list")
                  return (
                    <ul
                      key={i}
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                      }}
                    >
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          style={{
                            display: "grid",
                            gridTemplateColumns: "20px 1fr",
                            gap: 12,
                            alignItems: "baseline",
                          }}
                        >
                          <span
                            style={{
                              width: 5,
                              height: 5,
                              borderRadius: 999,
                              background: entry.accent,
                              display: "block",
                              marginTop: 8,
                            }}
                          />
                          <p
                            style={{
                              fontSize: 15,
                              lineHeight: 1.6,
                              color: "var(--fg-2)",
                              margin: 0,
                            }}
                          >
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  );
                if (block.kind === "metrics-row")
                  return (
                    <div
                      key={i}
                      style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${block.items.length}, 1fr)`,
                        gap: 1,
                        background: "var(--border)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--r-3)",
                        overflow: "hidden",
                      }}
                    >
                      {block.items.map((m) => (
                        <div
                          key={m.label}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            padding: 24,
                            background: "var(--bg-2)",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--font-display)",
                              fontWeight: 700,
                              fontSize: 32,
                              letterSpacing: "-0.02em",
                              color: "var(--fg-1)",
                              lineHeight: 1,
                            }}
                          >
                            {m.value}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: 11,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              color: "var(--fg-3)",
                            }}
                          >
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  );
                return null;
              })}
            </div>
          )}

          {/* Footer CTA */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              paddingTop: 24,
              borderTop: "1px solid var(--border)",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={onClose}
              className="btn btn-ghost"
              style={{ padding: 0, color: "var(--fg-2)" }}
            >
              ← Back to all work
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                onClose();
                setTimeout(() => {
                  const el = document.getElementById("contact");
                  if (el)
                    window.scrollTo({
                      top: el.offsetTop - 40,
                      behavior: "smooth",
                    });
                }, 100);
              }}
            >
              Discuss a similar project <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </aside>
      <style>{`
        @media (max-width: 640px) { .cs-meta { display: none; } }
      `}</style>
    </div>
  );
}
