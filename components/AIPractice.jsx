// Component: AIPractice — the "How I use AI" section (/ 04).
// The statement brightens word by word on scroll (data-scrub). The three glyphs
// are hand-authored line SVGs lifted verbatim from the design and animated by
// the motion layer via data-draw / data-tick / data-pop / data-align.

import SectionHead from './SectionHead'

const GLYPH_STYLE = { width: 120, height: 44, display: 'block', marginBottom: 20, overflow: 'visible' }
const DASHED = { fill: 'none', stroke: 'var(--glyph-dim)', strokeWidth: 1.5, strokeDasharray: '3 4' }
const SOLID_ACCENT = { fill: 'none', stroke: 'var(--accent-light)', strokeWidth: 1.5 }
const RING = { fill: 'none', stroke: 'var(--hf-glyph-mid)', strokeWidth: 1.5 }
const TICK = { fill: 'none', stroke: 'var(--accent-light)', strokeWidth: 1.5, strokeLinecap: 'round' }

// Glyph: four dashed candidate paths from one node, one solid path drawn last.
function GlyphWhereItHelps() {
  return (
    <svg data-glyph="" viewBox="0 0 120 44" style={GLYPH_STYLE} aria-hidden="true" focusable="false">
      <circle cx="8" cy="22" r="3" style={{ fill: 'var(--accent-light)' }} />
      <path data-draw="" d="M11 22 C48 22 60 4 112 4" style={DASHED} />
      <path data-draw="" d="M11 22 C48 22 60 13 112 13" style={DASHED} />
      <path data-draw="" d="M11 22 C48 22 60 40 112 40" style={DASHED} />
      <path data-draw="" d="M11 22 C48 22 60 27 112 27" style={SOLID_ACCENT} />
      <circle data-pop="" cx="112" cy="27" r="3.5" style={{ fill: 'var(--accent-light)' }} />
    </svg>
  )
}

// Glyph: four ringed stage nodes on a line, each receiving a tick in sequence.
function GlyphHumanReview() {
  return (
    <svg data-glyph="" viewBox="0 0 120 44" style={GLYPH_STYLE} aria-hidden="true" focusable="false">
      <path data-draw="" d="M10 30 H110" style={{ fill: 'none', stroke: 'var(--glyph-dim)', strokeWidth: 1.5 }} />
      <circle cx="10" cy="30" r="4" style={RING} />
      <circle cx="43" cy="30" r="4" style={RING} />
      <circle cx="76" cy="30" r="4" style={RING} />
      <circle cx="109" cy="30" r="4" style={RING} />
      <path data-tick="" d="M6 13 L9.5 17 L15 8" style={TICK} />
      <path data-tick="" d="M39 13 L42.5 17 L48 8" style={TICK} />
      <path data-tick="" d="M72 13 L75.5 17 L81 8" style={TICK} />
      <path data-tick="" d="M105 13 L108.5 17 L114 8" style={TICK} />
    </svg>
  )
}

// Glyph: two pairs of bars settling flush against one vertical accent rule.
function GlyphOneStandard() {
  return (
    <svg data-glyph="" viewBox="0 0 120 44" style={GLYPH_STYLE} aria-hidden="true" focusable="false">
      <path data-draw="" d="M60 2 V42" style={SOLID_ACCENT} />
      <rect data-align="" x="12" y="10" width="44" height="7" rx="3.5" style={{ fill: 'var(--hf-glyph-mid)' }} />
      <rect data-align="" x="12" y="27" width="44" height="7" rx="3.5" style={{ fill: 'var(--hf-glyph-mid)' }} />
      <rect data-align="" x="64" y="10" width="44" height="7" rx="3.5" style={{ fill: 'var(--hf-glyph-mid)' }} />
      <rect data-align="" x="64" y="27" width="44" height="7" rx="3.5" style={{ fill: 'var(--hf-glyph-mid)' }} />
    </svg>
  )
}

const CARDS = [
  {
    glyph: <GlyphWhereItHelps />,
    title: 'where it helps',
    body: 'Pressure-testing research questions, sketching alternative IAs, second-guessing my own assumptions, and getting unstuck on unfamiliar parts of a stack.',
  },
  {
    glyph: <GlyphHumanReview />,
    title: 'human review, every stage',
    body: 'Nothing reaches a client, a user or an employer without me reading it line by line and taking responsibility for it. Research findings come from participants, not from a model.',
  },
  {
    glyph: <GlyphOneStandard />,
    title: 'one standard',
    body: 'The same rule applies to client work and to job applications. If I would not defend a sentence in a room, it does not go out with my name on it.',
  },
]

export default function AIPractice() {
  return (
    <section id="ai" className="wrap block">
      <SectionHead index="04" title="How I use AI" />

      <div style={{ maxWidth: 'var(--prose-wide)', margin: '48px 0 56px' }}>
        <p
          data-scrub=""
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontVariationSettings: "'wdth' 100",
            fontSize: 'clamp(21px, 2.4vw, 33px)',
            lineHeight: 1.35,
            letterSpacing: '-.02em',
            color: 'var(--fg-1)',
          }}
        >
          A thinking tool, not an output tool. It helps me interrogate a problem faster. It does not
          decide, write or ship anything on my behalf.
        </p>
      </div>

      <div className="ai-cards">
        {CARDS.map((c) => (
          <div
            key={c.title}
            data-anim="up"
            style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-3)',
              padding: 32,
            }}
          >
            {c.glyph}
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 400,
                fontSize: 11,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--accent-light)',
                marginBottom: 14,
              }}
            >
              {c.title}
            </h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.85 }}>{c.body}</p>
          </div>
        ))}
      </div>

      <style>{`
        .ai-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 900px) { .ai-cards { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
