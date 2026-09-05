// Component: Experience — three prose paragraphs beside a four-row timeline.
// Replaces the old Training & Credentials block; the training work now sits
// inside the prose and the timeline rather than in its own section.

import Link from 'next/link'
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
    year: '2022',
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
              fontSize: 'clamp(1.1875rem, 1.9vw, 1.5625rem)',
              lineHeight: 1.32,
              letterSpacing: '-.01em',
              color: 'var(--fg-1)',
              maxWidth: '24ch',
            }}
          >
            UX designer and full-stack developer, based in York.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, maxWidth: '52ch' }}>
            Five years in, I run Jorvik Web Dev as a sole trader, which is a professional way of
            saying I have personally argued with 20+ small business owners about why their homepage
            needs fewer fonts. Alongside that I deliver digital skills training through Enterprise
            Cube, the York &amp; North Yorkshire Growth Hub, and LX Foundry. Over 100 participants
            now know what a call-to-action is, whether they wanted to or not.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, maxWidth: '52ch' }}>
            I move fast and I hold the whole picture at once, which sounds like a LinkedIn platitude
            until you&apos;ve watched me untangle a client&apos;s three-year-old Webflow build while
            also remembering why they don&apos;t want the button red. Mostly it means I&apos;ve
            spent a lot of years watching people get stuck on things and quietly figuring out
            whether the stuck was theirs or mine. Spoiler: it&apos;s usually mine, and fixing that
            is the actual job.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.85, maxWidth: '52ch' }}>
            My interest sits where accessibility, neurodivergent-informed design, and
            shame-reduction meet: products people can still use on their worst day, not just their
            best one. Freelance work has been genuinely good to me, but I&apos;m ready for a
            full-time role with more room to grow, and ideally someone else&apos;s problem to obsess
            over for a change.
          </p>

          {/* Last child of the prose column, so it lands under the copy and
              above the timeline at both breakpoints: stacked, the prose column
              comes first; side by side, it closes that column. */}
          <Link href="/blog/career-switchers-case-study" className="btn btn-ghost exp-cta">
            Read more about my story
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="exp-timeline">
          {TIMELINE.map((row) => (
            <div key={`${row.year}-${row.role}`} data-anim="up" className="exp-row">
              <span className="label exp-year">{row.year}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--fg-1)' }}>
                  {row.role}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
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
        /* The timeline is one grid, not five. Each row subgrids onto the shared
           columns so the year column is sized once, to the widest label
           ("2006 — 2023"), and every role starts at the same x. Sizing the
           column per-row is what pushed the ranged rows out of alignment. */
        .exp-timeline {
          display: grid;
          grid-template-columns: max-content 1fr;
          column-gap: clamp(20px, 3vw, 40px);
        }
        .exp-row {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: subgrid;
          border-top: 1px solid var(--border-soft);
          padding: 20px 0;
        }
        .exp-year { letter-spacing: .18em; }
        @supports not (grid-template-columns: subgrid) {
          .exp-timeline { display: block; }
          .exp-row {
            grid-template-columns: 108px 1fr;
            column-gap: clamp(20px, 3vw, 40px);
          }
        }
        /* The prose column is a flex column with a 20px gap, which is the
           rhythm between paragraphs rather than the space a button wants
           before it. align-self keeps the button to its own width instead of
           stretching it across the column. (No backticks in here: this block
           is a template literal, and they would close it.) */
        .exp-cta {
          align-self: start;
          margin-top: 8px;
        }
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
