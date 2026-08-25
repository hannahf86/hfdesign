// Component: SkillStack — five category rows of chips. No chip is emphasised:
// per the design, everything listed is current.

import SectionHead from './SectionHead'

// Reconciled against the CV: added Wireframing, Adobe Illustrator, GSAP,
// Framer, HTML, Tailwind, Node.js, Express, Prisma, NextAuth, Shopify/Liquid
// and WordPress, all of which the CV lists but the site was omitting.
const STACK = [
  {
    label: 'research',
    items: ['Interviews', 'Personas', 'Empathy maps', 'User journeys', 'Information architecture', 'Wireframing', 'Prototyping', 'Data analysis'],
  },
  {
    label: 'design',
    items: ['Figma', 'Design systems', 'Adobe Illustrator', 'Adobe XD', 'Canva', 'GSAP', 'Framer'],
  },
  {
    label: 'frontend',
    items: ['React', 'Next.js', 'TypeScript', 'React Native', 'Expo', 'HTML', 'CSS', 'Tailwind', 'Vite'],
  },
  {
    label: 'backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Prisma', 'NextAuth', 'SQL', 'Vercel'],
  },
  {
    label: 'platforms',
    items: ['Webflow', 'Webflow CMS', 'Shopify and Liquid', 'WordPress', 'SEO and analytics', 'GA4', 'Meta Pixel'],
  },
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
