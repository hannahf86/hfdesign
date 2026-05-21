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
              live Webflow or Next.js, then stay on as a retainer when there's
              reason to.
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
              owners need design and the build, and would rather not coordinate
              two people across timezones. By doing both, I maintain continuity
              across the project and develop a deep understanding of the product
              and the company{" "}
              <em
                style={{
                  color: "var(--fg-1)",
                  fontStyle: "normal",
                  borderBottom: "1px solid var(--fg-4)",
                }}
              >
                and
              </em>{" "}
              develop a deep understanding of the product and the company.
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
              You can't create a good design without real research, and I
              genuinely enjoy the building process too. It's extremely
              satisfying to reflect back on the research and see the end product
              come together.
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
              When I'm not shipping client work, I train small-business owners
              across North Yorkshire in digital skills. These include UX design,
              e-commerce, data-driven decision making, and I do this on behalf
              of three regional partners.
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
                Research first. I absorb myself in everything user-related. I
                use empathy maps extensively, then apply that thinking to
                personas and user journeys. <br />
                <br />I constantly ask myself: "What do I want from this
                product?" and "Am I achieving my goal here?" Design with
                intention. <br />
                <br />I start with basic paper layouts of main sections and
                elements, playing with them until something feels natural and
                efficient. <br />
                <br />
                Then I move to Figma for lofi design. I implement branding in a
                way that suits the client's characteristics — learned through a
                thorough questionnaire at the start. The design becomes finding
                the middle ground between client goals and user goals. I love
                this challenge. <br />
                <br />
                Code with clarity. I get the skeleton up quickly, create
                components as needed, and test as I go. I believe in clean code
                — everything is labelled so it's easy to read and troubleshoot
                later. <br />
                <br />
                Test with real people. Once it's done, I ask the client and a
                few developers I know to complete five simple tasks and give
                feedback. This is how I know it actually works.
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
