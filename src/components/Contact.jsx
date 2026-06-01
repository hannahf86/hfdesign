import { useState } from "react";

function ContactLink({ label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      style={{
        display: "grid",
        gridTemplateColumns: "96px 1fr auto",
        gap: 18,
        padding: "16px 0",
        borderBottom: "1px solid var(--border)",
        alignItems: "baseline",
        transition: "color 220ms var(--ease-out)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector(".cv").style.color =
          "var(--accent-hover)";
        e.currentTarget.querySelector(".ca").style.transform =
          "translateX(3px)";
        e.currentTarget.querySelector(".ca").style.color =
          "var(--accent-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector(".cv").style.color = "var(--fg-2)";
        e.currentTarget.querySelector(".ca").style.transform = "translateX(0)";
        e.currentTarget.querySelector(".ca").style.color = "var(--fg-3)";
      }}
    >
      <span className="mono">{label}</span>
      <span
        className="cv"
        style={{
          fontSize: 16,
          color: "var(--fg-2)",
          transition: "color 220ms var(--ease-out)",
        }}
      >
        {value}
      </span>
      <span
        className="ca"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 14,
          color: "var(--fg-3)",
          transition:
            "transform 220ms var(--ease-out), color 220ms var(--ease-out)",
        }}
      >
        →
      </span>
    </a>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  textarea,
}) {
  const C = textarea ? "textarea" : "input";
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
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
      <C
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={textarea ? 4 : undefined}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15,
          color: "var(--fg-1)",
          background: "var(--bg-1)",
          border: "1px solid var(--border)",
          padding: "12px 14px",
          borderRadius: "var(--r-2)",
          width: "100%",
          boxSizing: "border-box",
          resize: textarea ? "none" : undefined,
          outline: "none",
          transition:
            "border-color 220ms var(--ease-out), box-shadow 220ms var(--ease-out)",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "var(--accent)";
          e.target.style.boxShadow = "0 0 0 2px rgba(102,87,212,0.25)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "var(--border)";
          e.target.style.boxShadow = "none";
        }}
      />
    </label>
  );
}

function Segmented({ label, value, onChange, options }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span className="mono" style={{ fontSize: 10 }}>
        {label}
      </span>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${options.length}, 1fr)`,
          gap: 4,
          padding: 4,
          background: "var(--bg-1)",
          border: "1px solid var(--border)",
          borderRadius: "var(--r-2)",
        }}
      >
        {options.map((o) => {
          const active = value === o.v;
          return (
            <button
              key={o.v}
              type="button"
              onClick={() => onChange(o.v)}
              style={{
                padding: "9px 8px",
                fontSize: 13,
                borderRadius: 6,
                background: active ? "var(--accent)" : "transparent",
                color: active ? "white" : "var(--fg-2)",
                transition: "all 180ms var(--ease-out)",
                fontWeight: 500,
              }}
            >
              {o.l}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [vals, setVals] = useState({
    name: "",
    email: "",
    kind: "project",
    msg: "",
  });

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>
              Contact
            </div>
            <h2>Working on something interesting?</h2>
          </div>
          <span className="meta">/ 06</span>
        </div>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          <div
            className="reveal"
            style={{ display: "flex", flexDirection: "column", gap: 24 }}
          >
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.5,
                color: "var(--fg-2)",
                margin: 0,
                maxWidth: "40ch",
              }}
            >
              I take on a handful of full builds a year and a small number of
              ongoing retainers. Currently booking{" "}
              <strong style={{ color: "var(--fg-1)" }}>from Q3 2026</strong>.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <ContactLink
                label="Email"
                value="hannah@hfdesign.co.uk"
                href="mailto:hannah@hfdesign.co.uk"
              />
              <ContactLink
                label="Studio"
                value="jorvikweb.dev"
                href="https://www.jorvikweb.dev"
              />
              <ContactLink
                label="LinkedIn"
                value="in/hannah-feehan"
                href="https://www.linkedin.com/in/hannah-feehan/"
              />
              <ContactLink
                label="GitHub"
                value="https://github.com/hannahf86"
                href="https://github.com/hannahf86"
              />
            </div>

            <div
              style={{
                marginTop: 8,
                padding: "16px 18px",
                border: "1px solid var(--border)",
                borderRadius: "var(--r-3)",
                background: "var(--bg-2)",
              }}
            >
              <div className="mono" style={{ marginBottom: 8 }}>
                Good fit if
              </div>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 18,
                  color: "var(--fg-2)",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                <li>You'd rather hire one person than three.</li>
                <li>You want research evidence, not vibes.</li>
                <li>
                  You're comfortable with weekly video updates over weekly
                  calls.
                </li>
              </ul>
            </div>
          </div>

          <form
            className="reveal"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            style={{
              border: "1px solid var(--border)",
              borderRadius: "var(--r-3)",
              padding: 24,
              background: "var(--bg-2)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {sent ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  padding: "20px 4px",
                }}
              >
                <span
                  className="eyebrow"
                  style={{ color: "var(--hf-success)" }}
                >
                  Sent ✓
                </span>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Got it — I'll reply within 48 hours.
                </h3>
                <p style={{ margin: 0, color: "var(--fg-3)", fontSize: 14 }}>
                  Thanks for reaching out{vals.name ? `, ${vals.name}` : ""}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setVals({ name: "", email: "", kind: "project", msg: "" });
                  }}
                  className="btn btn-ghost"
                  style={{ alignSelf: "flex-start" }}
                >
                  Send another →
                </button>
              </div>
            ) : (
              <>
                <Field
                  label="Name"
                  value={vals.name}
                  onChange={(v) => setVals({ ...vals, name: v })}
                  placeholder="Your name"
                />
                <Field
                  label="Email"
                  value={vals.email}
                  onChange={(v) => setVals({ ...vals, email: v })}
                  placeholder="you@company.com"
                  type="email"
                />
                <Segmented
                  label="Enquiry"
                  value={vals.kind}
                  onChange={(v) => setVals({ ...vals, kind: v })}
                  options={[
                    { v: "project", l: "Project" },
                    { v: "retainer", l: "Retainer" },
                    { v: "training", l: "Training" },
                    { v: "other", l: "Other" },
                  ]}
                />
                <Field
                  label="What are you building?"
                  value={vals.msg}
                  onChange={(v) => setVals({ ...vals, msg: v })}
                  placeholder="A sentence or two is plenty."
                  textarea
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: "flex-start", marginTop: 6 }}
                >
                  Send <span className="arrow">→</span>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
