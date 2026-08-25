// Component: Experience — three prose paragraphs beside a four-row timeline.
// Replaces the old Training & Credentials block; the training work now sits
// inside the prose and the timeline rather than in its own section.

import SectionHead from './SectionHead'

const TIMELINE = [
  {
    year: '2022',
    role: 'Jorvik Web Dev, founder and sole trader',
    detail: 'Web design, SEO, Webflow. Certified Webflow Partner.',
  },
  {
    year: '2023',
    role: 'Digital skills trainer',
    detail: 'Enterprise Cube · York & North Yorkshire Growth Hub · LX Foundry',
  },
  {
    year: '2022',
    role: 'Google UX Design certificate · IT Career Switch full-stack',
    detail: 'Career transition into design and development.',
  },
  {
    year: 'before',
    role: 'Music education',
    detail:
      'Curriculum design and teaching across mixed-needs groups. Constant practice at working out why something is not landing and rebuilding it on the spot.',
  },
]

export default function Experience() {
  return (
    <section id="about" className="wrap block">
      <SectionHead index="02" title="Experience" />

      <div className="exp-grid">
        <div data-anim="up" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontVariationSettings: "'wdth' 100",
              fontSize: 'clamp(19px, 1.9vw, 25px)',
              lineHeight: 1.32,
              letterSpacing: '-.01em',
              color: 'var(--fg-1)',
              maxWidth: '24ch',
            }}
          >
            UX designer and full-stack developer, based in York.
          </p>
          <p style={{ fontSize: 13.5, lineHeight: 1.85, maxWidth: '52ch' }}>
            I run Jorvik Web Dev as a sole trader, doing web design, SEO and Webflow work for small
            businesses. Alongside that I deliver digital skills training through Enterprise Cube, the
            York &amp; North Yorkshire Growth Hub, and LX Foundry.
          </p>
          <p style={{ fontSize: 13.5, lineHeight: 1.85, maxWidth: '52ch' }}>
            My interest sits where accessibility, neurodivergent-informed design and shame-reduction
            meet: products people can still use on their worst day.
          </p>
        </div>

        <div>
          {TIMELINE.map((row) => (
            <div
              key={`${row.year}-${row.role}`}
              data-anim="up"
              className="exp-row"
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: 'clamp(20px, 3vw, 40px)',
                borderTop: '1px solid var(--border-soft)',
                padding: '20px 0',
              }}
            >
              <span className="label" style={{ letterSpacing: '.18em', minWidth: 56 }}>
                {row.year}
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--fg-1)' }}>
                  {row.role}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 12.5,
                    lineHeight: 1.75,
                    color: 'var(--fg-3)',
                    marginTop: 4,
                  }}
                >
                  {row.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 6vw, 96px);
          margin-top: 40px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .exp-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  )
}
