import { useState, useEffect } from 'react'

function HFMark({ size = 26 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 7,
      background: 'var(--accent)',
      display: 'grid', placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700, fontSize: size * 0.5,
      lineHeight: 1, color: 'white',
      letterSpacing: '-0.04em', flexShrink: 0,
      boxShadow: '0 0 0 1px rgba(255,255,255,0.08) inset',
    }}>HF</div>
  )
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      style={{
        width: 30, height: 30, borderRadius: 999,
        border: '1px solid var(--border)',
        display: 'grid', placeItems: 'center',
        color: 'var(--fg-2)',
        transition: 'all 220ms var(--ease-out)',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--fg-1)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--fg-2)'; }}
    >
      {theme === 'dark' ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
      )}
    </button>
  )
}

export default function Nav({ theme, onToggleTheme, onNavClick, active }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    h()
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = [
    { id: 'work', label: 'work' },
    { id: 'about', label: 'about' },
    { id: 'training', label: 'training' },
    { id: 'stack', label: 'stack' },
    { id: 'contact', label: 'contact' },
  ]

  const go = (id) => { setMobileOpen(false); onNavClick(id) }

  return (
    <div style={{
      position: 'fixed', top: 20, left: 0, right: 0, zIndex: 50,
      display: 'flex', justifyContent: 'center',
      pointerEvents: 'none',
    }}>
      <nav style={{
        pointerEvents: 'auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 24, padding: '11px 14px 11px 18px',
        background: scrolled ? 'var(--nav-bg)' : 'var(--nav-bg-top)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid var(--border)',
        borderRadius: 999,
        boxShadow: scrolled ? 'var(--shadow-1)' : 'none',
        transition: 'background 320ms var(--ease-out), box-shadow 320ms var(--ease-out)',
        width: 'min(720px, 92vw)',
      }}>
        <a href="#top" onClick={(e) => { e.preventDefault(); go('top') }} style={{ display: 'flex', alignItems: 'center', gap: 10, lineHeight: 1, flexShrink: 0 }}>
          <HFMark size={26} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, letterSpacing: '-0.02em', lineHeight: 1, display: 'inline-flex', alignItems: 'center', height: 26, whiteSpace: 'nowrap', flexShrink: 0 }}>HF Design</span>
        </a>

        <div className="nav-links" style={{ display: 'flex', gap: 22, fontSize: 14, color: 'var(--fg-3)' }}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`}
              onClick={(e) => { e.preventDefault(); go(l.id) }}
              style={{ color: active === l.id ? 'var(--fg-1)' : 'var(--fg-3)', transition: 'color 220ms var(--ease-out)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--fg-1)'}
              onMouseLeave={e => e.currentTarget.style.color = active === l.id ? 'var(--fg-1)' : 'var(--fg-3)'}
            >{l.label}</a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="nav-avail" style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--fg-2)' }}>
            <span className="dot-avail pulse" />
            Available
          </span>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button aria-label="Menu" onClick={() => setMobileOpen(o => !o)} className="nav-burger"
            style={{ display: 'none', width: 30, height: 30, borderRadius: 999, border: '1px solid var(--border)', placeItems: 'center', color: 'var(--fg-2)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="nav-sheet" style={{
          pointerEvents: 'auto',
          position: 'fixed', top: 80, left: '4vw', right: '4vw',
          background: 'var(--bg-2)', border: '1px solid var(--border)',
          borderRadius: 'var(--r-3)', padding: 16,
          display: 'flex', flexDirection: 'column', gap: 4,
          boxShadow: 'var(--shadow-2)',
        }}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); go(l.id) }}
              style={{ padding: '12px 8px', fontSize: 16, color: active === l.id ? 'var(--fg-1)' : 'var(--fg-2)' }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 760px) {
          .nav-links { display: none !important; }
          .nav-avail { display: none !important; }
          .nav-burger { display: grid !important; }
        }
      `}</style>
    </div>
  )
}
