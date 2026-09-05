import fs from 'node:fs'
import path from 'node:path'

// Where a downloadable CV should live. The button below only renders when the
// file is actually present, so the site never offers a download that 404s.
const CV_PATH = '/hannah-feehan-cv.pdf'
const cvExists = () => fs.existsSync(path.join(process.cwd(), 'public', CV_PATH.replace(/^\//, '')))

// Component: Contact — closing block. The hairline in row 2 spans the full
// section width and is the alignment anchor: heading and status sit above it,
// actions below. It wipes in and a dot travels its length once (motion layer).

export default function Contact() {
  const hasCv = cvExists()

  return (
    <section id="contact" className="wrap block">
      <div
        style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 56,
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
        }}
      >
        <div data-anim="up" className="contact-row">
          <h2
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 3.625rem)',
              lineHeight: 0.98,
              letterSpacing: '-.035em',
              maxWidth: '16ch',
            }}
          >
            Open to UX and product design roles.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className="label" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--fg-2)' }}>
              <span className="dot" data-dot="" aria-hidden="true" />
              available from September 2026
            </div>
            <div className="label">York, UK · open to remote or hybrid</div>
          </div>
        </div>

        <div
          data-cta-rule=""
          aria-hidden="true"
          style={{
            position: 'relative',
            height: 1,
            width: '100%',
            background: 'var(--border)',
            transformOrigin: 'left center',
          }}
        >
          <span
            data-cta-dot=""
            style={{
              position: 'absolute',
              top: -2,
              left: 0,
              width: 5,
              height: 5,
              borderRadius: 'var(--r-pill)',
              background: 'var(--accent-light)',
            }}
          />
        </div>

        <div data-anim="up" className="contact-row contact-actions">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href="mailto:hannahfeehan.dev@gmail.com" className="btn btn-primary">
              hannahfeehan.dev@gmail.com →
            </a>
            {hasCv && (
              <a href={CV_PATH} className="btn btn-ghost" download>
                download cv (pdf)
              </a>
            )}
          </div>
          <div
            className="contact-links"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 22,
              alignItems: 'center',
              justifyContent: 'flex-end',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              letterSpacing: '.18em',
              textTransform: 'uppercase',
            }}
          >
            <a href="https://www.linkedin.com/in/hannah-feehan/" target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
            <a href="https://github.com/hannahf86" target="_blank" rel="noopener noreferrer">
              github
            </a>
            <a href="https://www.jorvikweb.dev" target="_blank" rel="noopener noreferrer">
              jorvik web dev
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .contact-row {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: clamp(24px, 4vw, 64px);
          align-items: end;
        }
        /* Only the actions row centres: the heading row above it uses the same
           class and is meant to sit on its baseline. */
        .contact-row.contact-actions { align-items: center; }
        @media (max-width: 900px) {
          .contact-row { grid-template-columns: 1fr; align-items: start; gap: 24px; }
          /* Once the row stacks there is no right edge to hang off. */
          .contact-links { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  )
}
