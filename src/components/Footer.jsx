function FooterMark({ size = 24 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 6,
        background: "var(--accent)",
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: size * 0.5,
        lineHeight: 1,
        color: "white",
        letterSpacing: "-0.04em",
        flexShrink: 0,
        boxShadow: "0 0 0 1px rgba(255,255,255,0.08) inset",
      }}
    >
      HF
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 0 48px",
        borderTop: "1px solid var(--border)",
        marginTop: 32,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: "-0.02em",
              color: "var(--fg-1)",
              lineHeight: 1,
            }}
          >
            <FooterMark size={24} />
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: 24,
                whiteSpace: "nowrap",
              }}
            >
              HF Design
            </span>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: "var(--fg-3)",
              maxWidth: "36ch",
              lineHeight: 1.6,
            }}
          >
            A solo UX designer and full-stack developer in York, UK. Designs and
            builds for product teams and small businesses.
          </p>
        </div>

        <div
          className="footer-meta"
          style={{
            display: "flex",
            gap: 48,
            fontSize: 13,
            color: "var(--fg-3)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div className="mono">Studio</div>
            <a
              href="https://www.jorvikweb.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="ulink"
            >
              jorvikweb.dev
            </a>
            <a href="mailto:hannah@hfdesign.co.uk" className="ulink">
              hannah@hfdesign.co.uk
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div className="mono">Elsewhere</div>
            <a
              href="https://www.linkedin.com/in/hannah-feehan/"
              target="_blank"
              rel="noopener noreferrer"
              className="ulink"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hannahfeehan"
              target="_blank"
              rel="noopener noreferrer"
              className="ulink"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          marginTop: 36,
          paddingTop: 20,
          borderTop: "1px solid var(--border-soft)",
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--fg-4)",
        }}
      >
        <span>
          HF Design ·{" "}
          <a
            href="https://www.jorvikweb.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jorvik Web Dev
          </a>{" "}
          © 2026
        </span>
        <span>Designed and built by Hannah Feehan in York</span>
      </div>
    </footer>
  );
}
