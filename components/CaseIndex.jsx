'use client'

// Component: CaseIndex — the sticky section index beside the case study column.
// An accent marker slides to whichever block is currently in view, so the index
// reads as a position indicator rather than a static list.

import { useEffect, useRef, useState } from 'react'

export default function CaseIndex({ sections = [] }) {
  const [active, setActive] = useState(sections[0]?.id)
  const listRef = useRef(null)
  const markerRef = useRef(null)

  useEffect(() => {
    if (!sections.length) return
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean)
    if (!els.length) return

    const onScroll = () => {
      // The block whose top has most recently passed a third of the viewport.
      const line = window.innerHeight * 0.34
      let current = els[0].id
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) current = el.id
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  // Move the marker to the active link. Transform only, so it never reflows.
  useEffect(() => {
    const list = listRef.current
    const marker = markerRef.current
    if (!list || !marker) return
    const link = list.querySelector(`[data-index-id="${active}"]`)
    if (!link) return
    const offset = link.offsetTop + (link.offsetHeight - marker.offsetHeight) / 2
    marker.style.transform = `translateY(${offset}px)`
    marker.style.opacity = '1'
  }, [active, sections])

  return (
    <nav className="cs-index" aria-label="Case study sections" ref={listRef}>
      <span className="cs-index-marker" ref={markerRef} aria-hidden="true" style={{ opacity: 0 }} />
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          data-index-id={s.id}
          aria-current={active === s.id ? 'true' : undefined}
          style={{ color: active === s.id ? 'var(--accent-light)' : 'var(--fg-3)' }}
        >
          {s.label}
        </a>
      ))}
    </nav>
  )
}
