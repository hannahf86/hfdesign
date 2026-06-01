// AIWorkflow.jsx — "How I use AI" section.
// Centerpiece: the copy's own tension — what AI accelerates vs. what stays human —
// rendered as a two-column split, then process, review rigor, and a closing line.

const PRACTICE = [
  "Using Claude for ideation and copy iteration when establishing a design system or messaging framework",
  "Drafting pattern libraries and component documentation",
  "Generating test cases and edge cases I might miss",
  "Reviewing designs for accessibility compliance and WCAG standards",
  "Exploring implementation approaches before committing to code",
];

const ACCELERATES = [
  "Writing",
  "Code structure",
  "Accessibility considerations",
  "Testing logic",
];
const MINE = [
  "Understanding user needs",
  "Strategic decisions",
  "Final design direction",
  "Quality gates",
];

function AIWorkflow() {
  return (
    <section id="ai" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              How I use AI
            </div>
            <h2>A thinking tool, not an output tool.</h2>
          </div>
          <span className="meta">/ 03</span>
        </div>

        <div
          className="ai-top reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "start",
            marginBottom: 56,
          }}
        >
          <p
            style={{
              fontSize: 22,
              lineHeight: 1.45,
              color: "var(--fg-1)",
              margin: 0,
              maxWidth: "32ch",
              textWrap: "pretty",
            }}
          >
            I see AI as a thinking tool, not an output tool.
          </p>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--fg-2)",
              margin: 0,
              maxWidth: "46ch",
            }}
          >
            Claude accelerates the parts of my process that are about generating
            options and exploring patterns. The judgment calls remain mine.
          </p>
        </div>

        {/* The split — accelerates vs. mine */}
        <div
          className="ai-split reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 0,
            border: "1px solid var(--border)",
            borderRadius: "var(--r-4)",
            overflow: "hidden",
            marginBottom: 56,
          }}
        >
          {/* Left — what AI accelerates */}
          <div
            style={{
              padding: "clamp(24px, 3vw, 36px)",
              background: "var(--bg-1)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              borderRight: "1px solid var(--border)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 30,
                  height: 30,
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
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
                </svg>
              </span>
              <span className="mono" style={{ color: "var(--accent-hover)" }}>
                Claude accelerates
              </span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                lineHeight: 1.55,
                color: "var(--fg-3)",
                maxWidth: "34ch",
              }}
            >
              The parts about generating options and exploring patterns.
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {ACCELERATES.map((it, i) => (
                <li
                  key={it}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "13px 0",
                    borderTop: "1px solid var(--border-soft)",
                  }}
                >
                  <span
                    className="mono"
                    style={{ fontSize: 11, color: "var(--fg-4)", width: 18 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: 16, color: "var(--fg-1)" }}>
                    {it}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — what stays human */}
          <div
            style={{
              padding: "clamp(24px, 3vw, 36px)",
              background: "var(--bg-2)",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--fg-1)",
                  border: "1px solid var(--border)",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <span className="mono" style={{ color: "var(--fg-1)" }}>
                The judgment calls remain mine
              </span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                lineHeight: 1.55,
                color: "var(--fg-3)",
                maxWidth: "34ch",
              }}
            >
              The decisions that need a person who owns the outcome.
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {MINE.map((it) => (
                <li
                  key={it}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "13px 0",
                    borderTop: "1px solid var(--border-soft)",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      color: "var(--accent-hover)",
                      display: "inline-flex",
                    }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span style={{ fontSize: 16, color: "var(--fg-1)" }}>
                    {it}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* In practice */}
        <div
          className="ai-practice reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            gap: 56,
            alignItems: "start",
            marginBottom: 56,
          }}
        >
          <div style={{ position: "sticky", top: 100 }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              In practice
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.55,
                color: "var(--fg-3)",
              }}
            >
              This looks like:
            </p>
          </div>
          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {PRACTICE.map((p, i) => (
              <li
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "48px 1fr",
                  gap: 20,
                  alignItems: "baseline",
                  padding: "22px 0",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    color: "var(--accent-hover)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontSize: 18,
                    lineHeight: 1.6,
                    color: "var(--fg-1)",
                    maxWidth: "54ch",
                  }}
                >
                  {p}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Review rigor */}
        <div
          className="reveal"
          style={{
            padding: "clamp(28px, 3.5vw, 44px)",
            borderRadius: "var(--r-4)",
            background: "var(--hf-accent-tint)",
            border:
              "1px solid color-mix(in oklab, var(--accent) 30%, transparent)",
            marginBottom: 48,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="mono"
            style={{ color: "var(--accent-hover)", marginBottom: 14 }}
          >
            Every output has a human review step
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 19,
              lineHeight: 1.6,
              color: "var(--fg-1)",
              maxWidth: "64ch",
              textWrap: "pretty",
            }}
          >
            The key is that every output has a human review step. I validate
            that what AI proposed is correct, complete, and aligned with the
            brief. Sometimes I reject it entirely and start over. That rigor is
            what makes AI tools useful rather than just fast.
          </p>
        </div>

        {/* Closing line */}
        <div
          className="reveal ai-close"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.65,
              color: "var(--fg-3)",
              maxWidth: "40ch",
            }}
          >
            For a user-focused discipline like UX, this approach feels
            essential.
          </p>
          <blockquote
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "clamp(22px, 2.6vw, 32px)",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              color: "var(--fg-1)",
              textWrap: "balance",
            }}
          >
            The tool amplifies your expertise.{" "}
            <span style={{ color: "var(--fg-3)" }}>
              It doesn't replace your responsibility.
            </span>
          </blockquote>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .ai-top { grid-template-columns: 1fr !important; gap: 20px !important; }
          .ai-split { grid-template-columns: 1fr !important; }
          .ai-split > div:first-child { border-right: 0 !important; border-bottom: 1px solid var(--border) !important; }
          .ai-practice { grid-template-columns: 1fr !important; gap: 24px !important; }
          .ai-practice > div:first-child { position: static !important; }
          .ai-close { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}

export default AIWorkflow;
