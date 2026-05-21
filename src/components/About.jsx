function AboutRow({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{label}</span>
      <span style={{ fontSize: 14, color: 'var(--fg-1)', textAlign: 'right' }}>{value}</span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>About</div>
            <h2>Designs and ships. Same person.</h2>
          </div>
          <span className="meta">/ 02</span>
        </div>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 56, alignItems: 'start' }}>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <p style={{ fontSize: 22, lineHeight: 1.45, color: 'var(--fg-1)', margin: 0, maxWidth: '54ch', textWrap: 'pretty' }}>
              I'm Hannah — a UX designer who codes, and a developer who designs.
              Google-certified UX, full-stack diploma, two years running my own
              studio out of York.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg-2)', margin: 0, maxWidth: '54ch' }}>
              The brief I keep getting is the same: a small business or product
              team needs design{' '}<em style={{ color: 'var(--fg-1)', fontStyle: 'normal', borderBottom: '1px solid var(--fg-4)' }}>and</em>{' '}the build, and would rather not coordinate two
              people across three time zones. I take projects from research
              and information architecture through to live Webflow or Next.js,
              and stay on as a retainer when there's reason to.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg-2)', margin: 0, maxWidth: '54ch' }}>
              When I'm not shipping client work I train small-business owners
              across North Yorkshire in digital skills — UX, e-commerce,
              data-driven decision making — on behalf of three regional
              partners. Same instincts, different audience.
            </p>

            <div style={{
              marginTop: 12, padding: '20px 24px',
              borderLeft: '2px solid var(--accent)',
              background: 'var(--hf-accent-tint)',
              borderRadius: '0 var(--r-2) var(--r-2) 0',
            }}>
              <div className="mono" style={{ marginBottom: 6, color: 'var(--accent-hover)' }}>How I work</div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: 'var(--fg-1)' }}>
                Research first. Decisions evidenced. Words before pictures, pictures before pixels, pixels before code. No deliverable I haven't held myself.
              </p>
            </div>
          </div>

          <aside className="reveal" style={{
            border: '1px solid var(--border)', borderRadius: 'var(--r-3)',
            padding: 22, background: 'var(--bg-2)',
            display: 'flex', flexDirection: 'column', gap: 18,
          }}>
            <div style={{
              aspectRatio: '1 / 1', borderRadius: 'var(--r-3)',
              overflow: 'hidden', position: 'relative',
              background: 'var(--bg-3)',
            }}>
              <img src="/assets/hannah-portrait.webp" alt="Hannah Feehan"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div aria-hidden style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 60%, rgba(12,10,16,0.45))',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', left: 14, bottom: 12,
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.16em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span className="dot-avail" style={{ width: 6, height: 6, boxShadow: 'none' }} />
                Hannah, at the desk
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <AboutRow label="Name" value="Hannah Feehan" />
              <AboutRow label="Based" value="York, United Kingdom" />
              <AboutRow label="Studio" value="Jorvik Web Dev" />
              <AboutRow label="Years solo" value="2" />
              <AboutRow label="Last shipped" value="May 2026" />
              <AboutRow label="Currently" value={
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <span className="dot-avail" style={{ width: 6, height: 6, boxShadow: 'none' }} />Available
                </span>
              } />
            </div>
            <div style={{ height: 1, background: 'var(--border-soft)' }} />
            <a href="mailto:hannahfeehan.dev@gmail.com"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-1)' }}>
              <span>hannahfeehan.dev</span>
              <span style={{ color: 'var(--fg-3)' }}>→</span>
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
  )
}
