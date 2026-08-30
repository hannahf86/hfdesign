'use client'

// Component: ArtefactGallery — a horizontally scrollable set of artefacts with
// prev/next arrows, for a slot that holds several boards rather than one.
//
// The scroller is a real overflow container with scroll-snap, so touch, trackpad
// and keyboard all work without any of our code running. The arrows drive the
// same scroll rather than a separate index, which means the three input methods
// can never disagree about where the gallery is.
//
// An item is the same shape as a single artefact: a bare string is a placeholder
// until the export exists, an object with `image` renders the figure.

import { useCallback, useEffect, useRef, useState } from 'react'
import IMAGE_SIZES from '@/public/assets/case-studies/manifest.json'

function Arrow({ dir }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === 'prev' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  )
}

function Slide({ item }) {
  if (typeof item === 'string') {
    return (
      <div className="cs-gallery-slide cs-gallery-placeholder" role="note">
        <span className="label">{item}</span>
      </div>
    )
  }

  const dims = IMAGE_SIZES[item.image]
  return (
    <figure className="cs-gallery-slide">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        alt={item.alt || item.label || ''}
        loading="lazy"
        decoding="async"
        {...(dims ? { width: dims.width, height: dims.height } : {})}
      />
      {item.label && <figcaption className="label">{item.label}</figcaption>}
    </figure>
  )
}

export default function ArtefactGallery({ label, items }) {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  // Derive the arrows' disabled state from the scroll position itself, so it
  // stays right however the reader got there. The 1px slack absorbs the
  // fractional scrollLeft browsers report at the extremes on zoomed displays.
  const sync = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 1)
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 1)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    sync()
    el.addEventListener('scroll', sync, { passive: true })
    // Slides are sized from the container, so a resize changes what "the end"
    // means even though no scrolling happened.
    const ro = new ResizeObserver(sync)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', sync)
      ro.disconnect()
    }
  }, [sync])

  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    // `data-motion` is the single source of truth for motion, same as Motion.jsx.
    const reduced = document.documentElement.dataset.motion === 'reduced'
    el.scrollBy({
      left: dir * el.clientWidth,
      behavior: reduced ? 'auto' : 'smooth',
    })
  }

  const many = items.length > 1

  return (
    <div className="cs-gallery">
      <div
        ref={trackRef}
        className="cs-gallery-track"
        // A scrollable region needs to be reachable and named, so a keyboard
        // user can scroll it and a screen reader says what it is.
        tabIndex={0}
        role="region"
        aria-label={`${label || 'Artefacts'}, scrollable`}
      >
        {items.map((item, i) => (
          <Slide key={typeof item === 'string' ? `${item}-${i}` : item.image} item={item} />
        ))}
      </div>

      <div className="cs-gallery-bar">
        {label && <span className="label">{label}</span>}
        {many && (
          <div className="cs-gallery-arrows">
            <button type="button" onClick={() => scroll(-1)} disabled={atStart} aria-label={`Previous ${label || 'artefact'}`}>
              <Arrow dir="prev" />
            </button>
            <button type="button" onClick={() => scroll(1)} disabled={atEnd} aria-label={`Next ${label || 'artefact'}`}>
              <Arrow dir="next" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
