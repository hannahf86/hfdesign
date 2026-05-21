// Micro-mockup visuals for each case study card

export function LucentVisual() {
  return (
    <div className="cv-frame">
      <div className="cv-chrome">
        <span className="cv-dot" style={{ background: '#ff5f57' }} />
        <span className="cv-dot" style={{ background: '#febc2e' }} />
        <span className="cv-dot" style={{ background: '#28c840' }} />
        <span className="cv-url">lucentbiopharma.com</span>
      </div>
      <div className="cv-body" style={{ background: '#fffaf3', color: '#054b57', padding: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 22px', borderBottom: '1px solid #e9e3d7' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 14, letterSpacing: '0.04em' }}>
            <span>LUCENT</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
          </div>
          <div style={{ display: 'flex', gap: 14, fontSize: 10, color: '#054b57' }}>
            <span>About</span><span>Services</span><span>Academy</span><span>Insights</span>
          </div>
          <div style={{ fontSize: 9, padding: '5px 10px', border: '1px solid #054b57', borderRadius: 2 }}>Contact</div>
        </div>
        <div style={{ background: '#5a7f94', color: 'white', padding: '20px 22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: 18, lineHeight: 1.15 }}>
            We offer our world-leading industry expertise
          </div>
          <div style={{ fontSize: 9, lineHeight: 1.5, opacity: 0.9 }}>
            Supporting you from Clinical Development through to Medical Affairs in the development and implementation of new medicines.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: '#e9e3d7' }}>
          {[
            { label: 'Our Services', bg: '#054b57', fg: '#fffaf3' },
            { label: '', bg: '#fffaf3', fg: '#054b57' },
            { label: 'Clinical Development', bg: '#ad3e28', fg: '#fffaf3' },
            { label: '', bg: '#fffaf3', fg: '#054b57' },
            { label: 'Medical Affairs', bg: '#054b57', fg: '#fffaf3' },
            { label: 'Field Medical', bg: '#054b57', fg: '#fffaf3' },
          ].map((b, i) => (
            <div key={i} style={{ background: b.bg, color: b.fg, padding: '14px 12px', minHeight: 56, fontFamily: 'Georgia, serif', fontSize: 11, fontWeight: 700, textAlign: 'center' }}>{b.label}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function FGMVisual() {
  return (
    <div className="cv-frame" style={{ overflow: 'hidden' }}>
      <div className="cv-chrome">
        <span className="cv-dot" style={{ background: '#ff5f57' }} />
        <span className="cv-dot" style={{ background: '#febc2e' }} />
        <span className="cv-dot" style={{ background: '#28c840' }} />
        <span className="cv-url">feelgoodmenopause.com</span>
      </div>
      <div className="cv-body" style={{ padding: 0, background: '#f2f0eb' }}>
        <img src="/assets/case-fgm-grid.webp" alt="Feel Good Menopause site"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left top', display: 'block' }} />
      </div>
    </div>
  )
}

export function WisemindVisual() {
  return (
    <div className="cv-frame" style={{ background: '#0c0a10' }}>
      <div className="cv-body" style={{ background: 'linear-gradient(180deg, #1a1632, #0c0a18)', padding: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{
          width: 200, height: '100%', maxHeight: 320,
          background: '#0c0a18', borderRadius: 24,
          border: '1px solid #2a2542',
          padding: 16, display: 'flex', flexDirection: 'column', gap: 12,
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04) inset',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 9, color: '#9388e8', letterSpacing: '0.1em' }}>
            <span>WISE MIND</span><span>09:24</span>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'white', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            How are you feeling?
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              { l: 'Overwhelmed', c: '#e85d8f' },
              { l: 'Numb', c: '#6657d4' },
              { l: 'Dysregulated', c: '#ffc46b' },
              { l: 'Reflective', c: '#5be6a8' },
            ].map(m => (
              <div key={m.l} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 10, padding: '10px 8px',
                fontSize: 10, color: 'white', textAlign: 'center',
              }}>
                <span style={{ display: 'block', width: 6, height: 6, borderRadius: 999, background: m.c, margin: '0 auto 6px' }} />
                {m.l}
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 'auto',
            background: '#6657d4', color: 'white', borderRadius: 12,
            padding: '10px 12px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            fontSize: 11, boxShadow: '0 8px 24px rgba(102,87,212,0.4)',
          }}>
            <span>Crisis · TIP skills</span>
            <span style={{ fontFamily: 'var(--font-mono)' }}>→</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PortalVisual() {
  return (
    <div className="cv-frame">
      <div className="cv-chrome">
        <span className="cv-dot" style={{ background: '#ff5f57' }} />
        <span className="cv-dot" style={{ background: '#febc2e' }} />
        <span className="cv-dot" style={{ background: '#28c840' }} />
        <span className="cv-url">portal.jorvikweb.dev</span>
      </div>
      <div className="cv-body" style={{ background: '#0c0a10', color: 'white', padding: 18, display: 'grid', gridTemplateColumns: '90px 1fr', gap: 14 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 10, color: 'var(--fg-3)' }}>
          {['Dashboard', 'Projects', 'Milestones', 'Handovers', 'Links'].map((item, i) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px', borderRadius: 6, background: i === 0 ? 'rgba(255,255,255,0.04)' : 'transparent', color: i === 0 ? 'white' : 'var(--fg-3)' }}>
              {i === 0 && <span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--accent)' }} />}
              {item}
            </div>
          ))}
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
            <div>
              <div style={{ fontSize: 16, fontFamily: 'var(--font-display)', fontWeight: 700 }}>Dashboard</div>
              <div style={{ fontSize: 9, color: 'var(--fg-3)' }}>Welcome back, Hannah</div>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-3)' }}>WED 19/05</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 10 }}>
            {[
              { n: '04', l: 'Active', c: 'var(--accent-hover)' },
              { n: '11', l: 'Open', c: '#ffc46b' },
              { n: '02', l: 'Overdue', c: '#ff6b8a' },
            ].map(s => (
              <div key={s.l} style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', padding: '8px 10px', borderRadius: 8 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: s.c, lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'var(--fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--bg-2)', border: '1px solid var(--border)', borderRadius: 8, padding: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[['Lucent Biopharma', 'Webflow build', '18 / 18'], ['FGM with Kirsty', 'Retainer', '04 / 06'], ['Wise Mind DBT', 'Build', '12 / 18']].map(r => (
              <div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 56px', gap: 8, fontSize: 10, padding: '4px 4px' }}>
                <span style={{ color: 'white' }}>{r[0]}</span>
                <span style={{ color: 'var(--fg-3)' }}>{r[1]}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--accent-hover)', textAlign: 'right' }}>{r[2]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function JorvikVisual() {
  return (
    <div className="cv-frame" style={{ overflow: 'hidden' }}>
      <div className="cv-chrome">
        <span className="cv-dot" style={{ background: '#ff5f57' }} />
        <span className="cv-dot" style={{ background: '#febc2e' }} />
        <span className="cv-dot" style={{ background: '#28c840' }} />
        <span className="cv-url">www.jorvikweb.dev</span>
      </div>
      <div className="cv-body" style={{ padding: 0, background: '#f7f5f0' }}>
        <img src="/assets/case-jorvik.png" alt="Jorvik Web Dev — homepage hero"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left top', display: 'block' }} />
      </div>
    </div>
  )
}

export const VISUALS = {
  lucent: LucentVisual,
  fgm: FGMVisual,
  wisemind: WisemindVisual,
  portal: PortalVisual,
  jorvik: JorvikVisual,
}
