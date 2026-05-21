import { useState, useEffect } from "react";

function Stat({ n, l }) {
  return (
    <div
      style={{ borderLeft: "1px solid var(--border-soft)", paddingLeft: 18 }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 28,
          letterSpacing: "-0.02em",
          color: "var(--fg-1)",
          lineHeight: 1,
        }}
      >
        {n}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--fg-3)",
          marginTop: 10,
        }}
      >
        {l}
      </div>
    </div>
  );
}

export default function Hero({ onCTA, variant }) {
  const ROLES = [
    "follows data.",
    "ships the code.",
    "leads projects.",
    "trains teams.",
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      style={{
        position: "relative",
        paddingTop: 160,
        paddingBottom: 96,
        overflow: "hidden",
      }}
    >
      {/* Accent glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -80,
          left: "60%",
          transform: "translateX(-30%)",
          width: 880,
          height: 880,
          background:
            "radial-gradient(closest-side, var(--hf-accent-glow), transparent 70%)",
          filter: "blur(20px)",
          pointerEvents: "none",
          zIndex: 0,
          opacity: variant === "minimal" ? 0.4 : 1,
          transition: "opacity var(--dur-3) var(--ease-out)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Eyebrow row */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
          >
            <span className="dot-avail pulse" />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--fg-2)",
              }}
            >
              Available · Q3 2026
            </span>
          </span>
          <span style={{ width: 1, height: 12, background: "var(--border)" }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--fg-3)",
            }}
          >
            York, UK · Remote-friendly
          </span>
        </div>

        {/* Headline */}
        <h1
          className="reveal"
          style={{
            fontSize: "var(--t-display)",
            lineHeight: "var(--lh-display)",
            letterSpacing: "var(--ls-display)",
            fontWeight: 700,
            margin: 0,
            maxWidth: "15ch",
            textWrap: "balance",
          }}
        >
          UX designer.
          <br />
          <span style={{ color: "var(--fg-3)" }}>Who </span>
          <span style={{ position: "relative", display: "inline-block" }}>
            <span
              key={idx}
              style={{
                display: "inline-block",
                color: "var(--fg-1)",
                animation: "wordIn 420ms var(--ease-out)",
              }}
            >
              {ROLES[idx]}
            </span>
          </span>
        </h1>

        {/* Sub */}
        <p
          className="reveal"
          style={{
            fontSize: 20,
            lineHeight: 1.5,
            color: "var(--fg-2)",
            maxWidth: "54ch",
            marginTop: 32,
            marginBottom: 40,
          }}
        >
          I'm Hannah — a Google-certified UX designer and full-stack developer.
          I take projects from research to production: Figma to React, brief to
          live build. One person, end-to-end.
        </p>

        {/* CTAs */}
        <div
          className="reveal"
          style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
        >
          <button className="btn btn-primary" onClick={() => onCTA("contact")}>
            Get in touch <span className="arrow">→</span>
          </button>
          <button className="btn btn-secondary" onClick={() => onCTA("work")}>
            View selected work
          </button>
        </div>

        {/* Stats row */}
        {variant !== "minimal" && (
          <div
            className="reveal hero-evidence"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
              marginTop: 96,
              paddingTop: 28,
              borderTop: "1px solid var(--border)",
            }}
          >
            <Stat n="20+" l="Projects shipped" />
            <Stat n="08" l="Live retainers" />
            <Stat n="03" l="Training partners" />
            <Stat n="02 yrs" l="Solo studio" />
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 720px) {
          .hero-evidence { grid-template-columns: repeat(2, 1fr) !important; row-gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
