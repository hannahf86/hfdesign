'use client'

// Component: Nav — fixed translucent header. The fill darkens and a hairline
// border fades in past 40px of scroll; that transition is driven by the GSAP
// layer via the data-nav hook, not from here.

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Preferences from './Preferences'

const LINKS = [
  { id: 'work', label: 'work' },
  { id: 'about', label: 'about' },
  { id: 'stack', label: 'stack' },
  { id: 'ai', label: 'ai' },
]

export default function Nav() {
  const pathname = usePathname()
  const onHome = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const h = (e) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', h)
    return () => document.removeEventListener('keydown', h)
  }, [menuOpen])

  // In-page anchors scroll smoothly with a 78px offset for the sticky header.
  // scrollIntoView is deliberately not used — it ignores the offset.
  const handleAnchor = (e, id) => {
    setMenuOpen(false)
    if (!onHome) return
    const el = document.getElementById(id)
    if (!el) return
    e.preventDefault()
    window.scrollTo({ top: el.offsetTop - 78, behavior: 'smooth' })
    history.replaceState(null, '', `/#${id}`)
  }

  return (
    <header
      data-nav=""
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      }}
    >
      <div
        className="wrap"
        style={{ display: 'flex', alignItems: 'center', gap: 32, paddingTop: 14, paddingBottom: 14 }}
      >
        <Link
          href="/"
          style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 'none', color: 'var(--fg-1)' }}
        >
          <Image src="/hf-monogram.svg" alt="" width={26} height={26} priority />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontVariationSettings: "'wdth' 108",
              fontSize: '1rem',
              letterSpacing: '-.01em',
              color: 'var(--fg-1)',
            }}
          >
            Hannah Feehan
          </span>
        </Link>

        <div style={{ flex: 1 }} />

        <nav
          className="nav-links"
          aria-label="Primary"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 26,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8125rem',
            letterSpacing: '.18em',
            textTransform: 'uppercase',
          }}
        >
          {LINKS.map((l) => (
            <Link
              key={l.id}
              href={`/#${l.id}`}
              onClick={(e) => handleAnchor(e, l.id)}
              style={{ color: 'var(--fg-3)' }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/blog" style={{ color: pathname.startsWith('/blog') ? 'var(--fg-1)' : 'var(--fg-3)' }}>
            writing
          </Link>
        </nav>

        <div
          className="nav-avail"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-pill)',
            padding: '6px 14px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8125rem',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: 'var(--fg-2)',
            whiteSpace: 'nowrap',
          }}
        >
          <span className="dot" data-dot="" aria-hidden="true" />
          open to roles
        </div>

        <Preferences />

        <a
          href="/#contact"
          onClick={(e) => handleAnchor(e, 'contact')}
          className="nav-cv"
          style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-2)',
            padding: '8px 16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8125rem',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: 'var(--fg-1)',
            background: 'var(--bg-2)',
            whiteSpace: 'nowrap',
          }}
        >
          cv →
        </a>

        <button
          className="nav-burger"
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="nav-sheet"
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            display: 'none',
            width: 40,
            height: 40,
            borderRadius: 'var(--r-2)',
            border: '1px solid var(--border)',
            background: 'var(--bg-2)',
            color: 'var(--fg-1)',
            placeItems: 'center',
            cursor: 'pointer',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          id="nav-sheet"
          className="wrap"
          style={{
            paddingBottom: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            borderTop: '1px solid var(--border-soft)',
            paddingTop: 12,
          }}
        >
          {LINKS.map((l) => (
            <Link
              key={l.id}
              href={`/#${l.id}`}
              onClick={(e) => handleAnchor(e, l.id)}
              style={{
                padding: '12px 4px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.875rem',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--fg-2)',
                minHeight: 44,
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            style={{
              padding: '12px 4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'var(--fg-2)',
              minHeight: 44,
            }}
          >
            writing
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links, .nav-avail { display: none !important; }
          .nav-burger { display: grid !important; }
        }
        @media (max-width: 520px) {
          .nav-cv { display: none !important; }
        }
      `}</style>
    </header>
  )
}
