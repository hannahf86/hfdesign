// Component: SkillStack — five category rows of chips. No chip is emphasised:
// per the design, everything listed is current.

import SectionHead from './SectionHead'

const STACK = [
  { label: 'research', items: ['Interviews', 'Personas', 'User journeys', 'Empathy maps', 'Data analysis'] },
  { label: 'design', items: ['Figma', 'Design systems', 'Adobe CC', 'Canva', 'UX research methods'] },
  { label: 'frontend', items: ['Webflow', 'React', 'TypeScript', 'React Native', 'Expo', 'Next.js', 'Vite'] },
  { label: 'backend', items: ['Supabase', 'Postgres', 'SQL', 'Vercel'] },
  { label: 'other', items: ['GA4', 'Meta Pixel', 'Webflow CMS', 'Client seat migration'] },
]

export default function SkillStack() {
  return (
    <section id="stack" className="wrap block">
      <SectionHead index="03" title="Stack" />

      <div style={{ marginTop: 40 }}>
        {STACK.map((row) => (
          <div
            key={row.label}
            data-anim="up"
            className="stack-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '180px 1fr',
              gap: 24,
              padding: '24px 0',
              borderBottom: '1px solid var(--border-soft)',
              alignItems: 'start',
            }}
          >
            <span className="label">{row.label}</span>
            <div data-chips="" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {row.items.map((i) => (
                <span key={i} className="chip">
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .stack-row { grid-template-columns: 1fr !important; gap: 14px !important; }
        }
      `}</style>
    </section>
  )
}
