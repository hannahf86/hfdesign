function AboutRow({ label, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 12,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--fg-3)",
        }}
      >
        {label}
      </span>
      <span style={{ fontSize: 14, color: "var(--fg-1)", textAlign: "right" }}>
        {value}
      </span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              About
            </div>
            <h2>Designs and ships. Same person.</h2>
          </div>
          <span className="meta">/ 02</span>
        </div>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: 56,
            alignItems: "start",
          }}
        >
          <div
            className="reveal"
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <p
              style={{
                fontSize: 22,
                lineHeight: 1.45,
                color: "var(--fg-1)",
                margin: 0,
                maxWidth: "54ch",
                textWrap: "pretty",
              }}
            >
              I'm Hannah — a UX designer based in York who codes, and a
              developer who designs. I take projects from research through to
              live Webflow or Next.js products, and work with clients as a web
              consultant and trainer.
            </p>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.65,
                color: "var(--fg-2)",
                margin: 0,
                maxWidth: "54ch",
              }}
            >
              The brief I keep getting is the same: small teams or product
              owners need research, designs and the build, and would rather not
              coordinate more than two people across timezones. By doing
              <em
                style={{
                  color: "var(--fg-1)",
                  fontStyle: "normal",
                  borderBottom: "1px solid var(--fg-4)",
                }}
              >
                all three
              </em>{" "}
              I get properly embedded in the product and the business — which,
              it turns out, makes everything better.
            </p>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.65,
                color: "var(--fg-2)",
                margin: 0,
                maxWidth: "54ch",
              }}
            >
              Good design needs real research behind it. I also genuinely enjoy
              the build side, which is lucky, because I do a lot of it. There's
              something satisfying about going back to those early sticky notes
              and seeing how it all shook out in the final product.
            </p>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.65,
                color: "var(--fg-2)",
                margin: 0,
                maxWidth: "54ch",
              }}
            >
              When I'm not on client work, I inflict digital skills training on
              small business owners across North Yorkshire — UX design,
              e-commerce, data-driven decision making — through three regional
              partners. They seem to enjoy it.
            </p>

            <div
              style={{
                marginTop: 12,
                padding: "20px 24px",
                borderLeft: "2px solid var(--accent)",
                background: "var(--hf-accent-tint)",
                borderRadius: "0 var(--r-2) var(--r-2) 0",
              }}
            >
              <div
                className="mono"
                style={{ marginBottom: 6, color: "var(--accent-hover)" }}
              >
                How I work
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: "var(--fg-1)",
                }}
              >
                Research first. I absorb myself in everything user-related;
                empathy maps, personas, user journeys, the works. The question I
                keep coming back to is: does this actually help someone get what
                they came for? If the answer's no, we're not done yet.
                <br />
                <br />
                Design with intention. It starts on paper. I push sections and
                elements around until something clicks, then take it into Figma
                for lo-fi. <br />
                <br />
                Branding comes in from a proper questionnaire at the start of
                every project. I'm not guessing at the vibe. The real puzzle is
                finding the middle ground between what the client wants and what
                the user needs. Genuinely one of my favourite parts of the job.
                <br />
                <br />
                Code with clarity. Skeleton up fast, components built as needed,
                testing as I go. Clean, labelled code, because future-me (or
                whoever picks this up next) deserves to actually understand
                what's happening. <br />
                <br />
                Test with real people. Once it's built, I get the client and a
                few developer contacts to run through five simple tasks and tell
                me where it falls apart. That's how I know it works — not just
                that it looks like it works.
              </p>
            </div>
          </div>

          <aside
            className="reveal"
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--r-3)",
              padding: 22,
              background: "var(--bg-2)",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              position: "sticky",
              top: 20, // Adjust this value to control how far from top it sticks
              height: "fit-content", // Important: lets it size to content
              alignSelf: "start", // Align to top of grid
            }}
          >
            <div
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "var(--r-3)",
                overflow: "hidden",
                position: "relative",
                background: "var(--bg-3)",
              }}
            >
              <img
                src="/assets/hannah-portrait.webp"
                alt="Hannah Feehan"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(12,10,16,0.45))",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 14,
                  bottom: 12,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.85)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  className="dot-avail"
                  style={{ width: 6, height: 6, boxShadow: "none" }}
                />
                Hannah, at the desk
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <AboutRow label="Name" value="Hannah Feehan" />
              <AboutRow label="Based" value="York, United Kingdom" />
              <AboutRow label="Studio" value="Jorvik Web Dev" />
              <AboutRow label="Years solo" value="2" />
              <AboutRow label="Last shipped" value="May 2026" />
              <AboutRow
                label="Currently"
                value={
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span
                      className="dot-avail"
                      style={{ width: 6, height: 6, boxShadow: "none" }}
                    />
                    Available
                  </span>
                }
              />
            </div>
            <div style={{ height: 1, background: "var(--border-soft)" }} />
            <a
              href="mailto:hannah@hfdesign.co.uk"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 8,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--fg-1)",
              }}
            >
              <span>hannah@hfdesign.co.uk</span>
              <span style={{ color: "var(--fg-3)" }}>→</span>
            </a>
          </aside>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
