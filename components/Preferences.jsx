'use client'

// Component: Preferences — the motion toggle, in the header.
//
// Writes `data-motion` on <html> and persists to localStorage; the bootstrap
// script in the layout replays it before first paint so the setting never
// flashes. The default follows the system's `prefers-reduced-motion`, so this
// is an override rather than a replacement for it.
//
// It lives in the header rather than a floating pill so it can never overlap
// page content, and it stays visible at every breakpoint — burying an
// accessibility control behind a hamburger defeats the point.

import { useCallback, useEffect, useState } from 'react'

// Motion allowed: a waveform. Motion reduced: the same waveform flattened.
function MotionIcon({ reduced }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {reduced ? <path d="M3 12h18" /> : <path d="M3 12h3l2.5-6 3.5 13 3-9 2 4h4.5" />}
    </svg>
  )
}

export default function Preferences() {
  const [motion, setMotion] = useState('full')

  // Adopt whatever the bootstrap script already applied.
  useEffect(() => {
    setMotion(document.documentElement.dataset.motion === 'reduced' ? 'reduced' : 'full')
  }, [])

  const toggle = useCallback(() => {
    setMotion((prev) => {
      const next = prev === 'full' ? 'reduced' : 'full'
      document.documentElement.dataset.motion = next
      try {
        localStorage.setItem('hf-motion', next)
      } catch {
        /* private mode — the preference just won't persist */
      }
      // The motion layer reads the attribute when it sets up, so tell it to
      // re-run rather than waiting for the next navigation.
      window.dispatchEvent(new Event('hf:motion-change'))
      return next
    })
  }, [])

  const reduced = motion === 'reduced'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={reduced}
      aria-label={reduced ? 'Allow full motion' : 'Reduce motion'}
      title={reduced ? 'Allow full motion' : 'Reduce motion'}
      className="pref-btn"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: 34,
        padding: '0 12px',
        borderRadius: 'var(--r-2)',
        border: `1px solid ${reduced ? 'var(--accent-light)' : 'var(--border)'}`,
        background: 'var(--bg-2)',
        color: reduced ? 'var(--accent-light)' : 'var(--fg-2)',
        cursor: 'pointer',
        flex: 'none',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}
    >
      <MotionIcon reduced={reduced} />
      {/* The label is the point of the control; it only collapses to the icon
          where the header genuinely runs out of room. The accessible name is on
          the button either way. */}
      <span className="pref-label">{reduced ? 'motion off' : 'reduce motion'}</span>
    </button>
  )
}
