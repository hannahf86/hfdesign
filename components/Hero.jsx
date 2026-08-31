import { Fragment } from 'react'

// Component: Hero — eyebrow, the "UX Engineer" display line, the rule row, and
// a 1.35fr/1fr grid of lead copy against background + certifications.

// Split per character so the mask reveal can stagger, but grouped by word.
// Characters are inline-block, which lets the browser break between ANY two of
// them — that shipped a headline reading "UX En" at wide viewports. Each word
// is now a nowrap box, so a break can only ever happen at a space.
// The h1 carries an aria-label so assistive tech reads the phrase, not letters.
const DISPLAY = 'UX Engineer'
const WORDS = DISPLAY.split(' ')

const CERTS = ['Google UX Design', 'Webflow Foundations Partner', 'Meta Social Media Marketing']

export default function Hero() {
  return (
    <section
      id="top"
      className="wrap hero"
      style={{ position: 'relative', paddingTop: 180, paddingBottom: 96, overflow: 'hidden' }}
    >
      <div
        data-glow=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -180,
          left: '8%',
          width: 720,
          height: 720,
          borderRadius: 'var(--r-pill)',
          background: 'radial-gradient(circle, var(--glow), rgba(102,87,212,0) 68%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative' }}>
        <div data-hero-line="" style={{ overflow: 'hidden', paddingBottom: 2 }}>
          <span
            className="label"
            style={{ display: 'block', letterSpacing: '.2em' }}
          >
            <span className="ul-accent">Hannah Feehan</span> · York, UK · portfolio 2026
          </span>
        </div>

        <h1
          data-hero-chars=""
          className="hero-display"
          aria-label={DISPLAY}
          style={{
            fontSize: 'clamp(58px, 10vw, 168px)',
            lineHeight: 0.94,
            letterSpacing: '-.045em',
            margin: '16px 0 0',
          }}
        >
          <span aria-hidden="true" style={{ display: 'block', lineHeight: 1.02 }}>
            {WORDS.map((word, wi) => (
              <Fragment key={wi}>
                {wi > 0 && ' '}
                <span className="hero-word">
                  {word.split('').map((ch, ci) => (
                    <span key={ci} className="hero-char">
                      {ch}
                    </span>
                  ))}
                </span>
              </Fragment>
            ))}
          </span>
        </h1>

        <div
          data-hero-line=""
          style={{ overflow: 'hidden', marginTop: 34, borderTop: '1px solid var(--border)', paddingTop: 18 }}
        >
          <span
            className="label"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 20,
              justifyContent: 'space-between',
              letterSpacing: '.2em',
            }}
          >
            <span style={{ color: 'var(--fg-2)' }}>
              Data driven. One person. Results that <span className="ul-accent">make an impact</span>.
            </span>
            <span>UX designer and fullstack developer</span>
          </span>
        </div>

        <div className="hero-grid">
          <div data-anim="up">
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontVariationSettings: "'wdth' 100",
                fontSize: 'clamp(21px, 2.1vw, 29px)',
                lineHeight: 1.28,
                letterSpacing: '-.01em',
                color: 'var(--fg-1)',
                maxWidth: '22ch',
              }}
            >
              I design interfaces and ship the code behind them.
            </p>
            <p style={{ marginTop: 26, fontSize: '1rem', lineHeight: 1.85, maxWidth: '46ch' }}>
              Interviews and personas at the front, a design system in the middle, a built and
              accessible product at the end. Three end-to-end case studies below, one in progress.
            </p>
          </div>

          <div data-anim="up" style={{ display: 'flex', flexDirection: 'column', gap: 26, paddingTop: 8 }}>
            <div>
              <div className="label" style={{ marginBottom: 10 }}>
                background
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.85 }}>
                Moved into tech in 2022 via the Google UX Design certificate and full-stack training
                with IT Career Switch, after a prior career in music education.
              </p>
            </div>
            <div>
              <div className="label" style={{ marginBottom: 10 }}>
                certified
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {CERTS.map((c) => (
                  <span key={c} className="chip chip-pill">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: clamp(32px, 6vw, 96px);
          margin-top: 64px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .hero { padding-top: 132px !important; padding-bottom: 64px !important; }
          .hero-display { font-size: 42px !important; }
          .hero-grid { grid-template-columns: 1fr; gap: 40px; margin-top: 40px; }
        }
      `}</style>
    </section>
  )
}
