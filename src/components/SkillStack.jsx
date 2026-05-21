import { STACK } from '../data/index.js'

function StackRow({ row }) {
  return (
    <div className="reveal" style={{
      display: 'grid', gridTemplateColumns: '140px 1fr',
      alignItems: 'flex-start', gap: 32,
      padding: '22px 0', borderBottom: '1px solid var(--border)',
    }}>
      <div className="mono" style={{ paddingTop: 6 }}>{row.label}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {row.lead.map(it => (
          <span key={it} style={{
            fontFamily: 'var(--font-body)', fontSize: 14,
            color: 'var(--fg-1)', padding: '7px 14px', borderRadius: 999,
            border: '1px solid color-mix(in oklab, var(--accent) 50%, transparent)',
            background: 'var(--hf-accent-tint)',
          }}>{it}</span>
        ))}
        {row.rest.map(it => (
          <span key={it} style={{
            fontFamily: 'var(--font-body)', fontSize: 14,
            color: 'var(--fg-2)', padding: '7px 14px', borderRadius: 999,
            border: '1px solid var(--border-soft)', background: 'var(--bg-1)',
          }}>{it}</span>
        ))}
      </div>
    </div>
  )
}

export default function SkillStack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Stack</div>
            <h2>What I reach for.</h2>
          </div>
          <span className="meta">/ 04</span>
        </div>
        <div>
          {STACK.map(r => <StackRow key={r.label} row={r} />)}
        </div>
        <p className="reveal" style={{ marginTop: 28, color: 'var(--fg-3)', fontSize: 14, maxWidth: '60ch' }}>
          Filled pills are daily drivers. Outlined are tools I've shipped with in
          the last two years. Anything not listed I'd rather learn than fake.
        </p>
      </div>
    </section>
  )
}
