// Component: Experience — three prose paragraphs beside a four-row timeline.
// Replaces the old Training & Credentials block; the training work now sits
// inside the prose and the timeline rather than in its own section.

import SectionHead from './SectionHead'

// Dates and roles follow the CV (Hannah-Feehan-UX-Designer-Web-Developer-CV-2026).
// The site previously had Jorvik Web Dev at 2022 and the training at 2023; both
// were a year early, and the two 2021 contract roles were missing entirely.
const TIMELINE = [
  {
    year: '2024',
    role: 'Digital skills trainer',
    detail:
      'York & North Yorkshire Growth Hub · Enterprise Cube · LX Foundry. Seven workshops to 100+ business owners, plus five Growth Hub webinars.',
  },
  {
    year: '2023',
    role: 'Jorvik Web Dev, founder and sole trader',
    detail:
      'Web design, SEO and Webflow for small businesses. Certified Webflow Foundations Partner, 20 paying clients and a five-star Google rating.',
  },
  {
    year: '2022 — 2023',
    role: 'Retrained into design and development',
    detail:
      'Google UX Design Professional Certificate (Coursera) · Fullstack Engineer (IT Career Switch and Codecademy).',
  },
  {
    year: '2021',
    role: 'UX Designer, CareDial · UI Designer, Miricyl',
    detail:
      'Contract and freelance, both remote. Journey maps and information architecture for a care staffing agency; the Self-Care section of a mental health app, built inside its existing design system.',
  },
  {
    year: '2006 — 2023',
    role: 'Teacher of music, graphic design and ICT',
    detail:
      'Bootham School, York, and private tuition. Curriculum design across mixed-needs groups. Constant practice at working out why something is not landing and rebuilding it on the spot.',
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
