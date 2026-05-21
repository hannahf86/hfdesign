import { useState } from 'react'
import { CASES } from '../data/index.js'
import { VISUALS } from './CaseVisuals.jsx'

function CaseCard({ entry, idx, onOpen }) {
  const [hover, setHover] = useState(false)
  const Visual = VISUALS[entry.visual]
  const reverse = idx % 2 === 1

  return (
    <article
      className="reveal case-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 56, padding: '40px 0',
        borderBottom: '1px solid var(--border)',
        alignItems: 'center',
      }}
    >
      <div className="case-text" style={{ order: reverse ? 2 : 1, display: 'flex', flexDirection: 'column', gap: 18, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          <span style={{ color: 'var(--fg-1)' }}>{entry.num}</span>
          <span style={{ width: 24, height: 1, background: 'var(--border)' }} />
          <span style={{ color: 'var(--fg-2)' }}>{entry.client}</span>
          <span style={{ width: 3, height: 3, borderRadius: 999, background: 'var(--fg-4)' }} />
          <span style={{ color: 'var(--fg-3)' }}>{entry.sector}</span>
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(26px, 2.6vw, 34px)', lineHeight: 1.1,
          letterSpacing: '-0.02em', margin: 0, color: 'var(--fg-1)', textWrap: 'balance',
        }}>{entry.title}</h3>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)', margin: 0, maxWidth: '46ch' }}>{entry.summary}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {entry.stack.map(s => <span key={s} className="chip">{s}</span>)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 6, flexWrap: 'wrap' }}>
          <button onClick={() => onOpen(entry)} style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: hover ? 'var(--accent-hover)' : 'var(--fg-1)',
            transition: 'color 220ms var(--ease-out)',
            padding: '10px 0', display: 'inline-flex', alignItems: 'center', gap: 10,
          }}>
            View case study
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: hover ? 'translateX(4px)' : 'none', transition: 'transform 220ms var(--ease-out)' }}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-4)' }}>· {entry.date}</span>
        </div>
      </div>

      <div
        onClick={() => onOpen(entry)}
        className="case-visual-wrap"
        style={{
          order: reverse ? 1 : 2,
          cursor: 'pointer',
          transform: hover ? 'translateY(-3px)' : 'translateY(0)',
          transition: 'transform var(--dur-3) var(--ease-out)',
        }}
      >
        <Visual />
      </div>

      <style>{`
        @media (max-width: 880px) {
          .case-card { grid-template-columns: 1fr !important; gap: 28px !important; }
          .case-card .case-text { order: 2 !important; }
          .case-card .case-visual-wrap { order: 1 !important; }
        }
      `}</style>
    </article>
  )
}

function CompactRow({ entry, onOpen }) {
  const [hover, setHover] = useState(false)
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen(entry)}
      className="reveal"
      style={{
        width: '100%', display: 'grid', gridTemplateColumns: '52px 1fr auto auto',
        alignItems: 'center', gap: 24, padding: '24px 0',
        borderBottom: '1px solid var(--border)', textAlign: 'left',
        transition: 'all 220ms var(--ease-out)',
        background: hover ? 'linear-gradient(90deg, transparent, var(--hf-accent-tint), transparent)' : 'transparent',
        paddingInline: hover ? 16 : 0,
        marginInline: hover ? -16 : 0,
        borderRadius: hover ? 8 : 0,
      }}
    >
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-3)', letterSpacing: '0.04em' }}>{entry.num}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>
          <span style={{ color: 'var(--fg-2)' }}>{entry.client}</span>
          <span style={{ width: 3, height: 3, borderRadius: 999, background: 'var(--fg-4)' }} />
          <span>{entry.sector}</span>
          <span style={{ width: 3, height: 3, borderRadius: 999, background: 'var(--fg-4)' }} />
          <span>{entry.date}</span>
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, lineHeight: 1.15,
          letterSpacing: '-0.02em', margin: 0, color: 'var(--fg-1)', textWrap: 'balance', maxWidth: '38ch',
        }}>{entry.title}</h3>
      </div>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 11,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        color: hover ? 'var(--accent-hover)' : 'var(--fg-3)',
        display: 'inline-flex', alignItems: 'center', gap: 8,
        transition: 'color 220ms var(--ease-out)', flexShrink: 0,
      }}>
        View
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: hover ? 'translateX(4px)' : 'none', transition: 'transform 220ms var(--ease-out)' }}><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </span>
    </button>
  )
}

export default function WorkGrid({ onOpen, layout }) {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Selected work</div>
            <h2>Five projects, end-to-end.</h2>
          </div>
          <span className="meta">2024 — 2026 · 05 of 12</span>
        </div>
        <div>
          {CASES.map((e, i) => layout === 'compact'
            ? <CompactRow key={e.id} entry={e} onOpen={onOpen} />
            : <CaseCard key={e.id} entry={e} idx={i} onOpen={onOpen} />
          )}
        </div>
        <p className="reveal" style={{ marginTop: 28, color: 'var(--fg-3)', fontSize: 14, maxWidth: '60ch' }}>
          The rest live on the shelf. Happy to walk through anything else under NDA — drop me a line.
        </p>
      </div>
    </section>
  )
}
