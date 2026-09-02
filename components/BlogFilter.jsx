'use client'

// Component: BlogFilter — the search box, category tabs and result list on the
// writing index.
//
// The rows carry no `data-anim`. The global motion layer hides those with
// `html.js-anim [data-anim='up'] { opacity: 0 }` and only reveals what existed
// when it ran its sweep, so a row that appears later — when a filter changes —
// would be stranded invisible. This component owns its own reveal instead, and
// re-runs it whenever the result set changes.
//
// The gesture is the hero's: text rising out of a mask on an expo curve, here
// per row rather than per character. GSAP owns every transform; the CSS never
// sets one, so the two can't stack (which is what once left the hero blank).

import { useMemo, useState, useId, useRef, useEffect } from 'react'
import Link from 'next/link'

const ALL = 'all'

export default function BlogFilter({ posts = [], categories = [] }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(ALL)
  const searchId = useId()
  const listRef = useRef(null)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts.filter((post) => {
      if (active !== ALL && !(post.categories || []).includes(active)) return false
      return q ? post.haystack.includes(q) : true
    })
  }, [posts, query, active])

  // Keyed on which posts are showing, not on the raw query: typing a character
  // that doesn't change the results shouldn't restart the animation.
  const resultKey = results.map((r) => r.slug).join('|')

  useEffect(() => {
    const list = listRef.current
    if (!list) return
    if (document.documentElement.dataset.motion === 'reduced') return

    let ctx
    let timer
    let cancelled = false

    // Imported here rather than at module scope so a failure to load leaves the
    // rows in their natural, visible state instead of a half-applied one.
    import('gsap').then(({ gsap }) => {
      if (cancelled || !listRef.current) return
      const targets = listRef.current.querySelectorAll('.blog-row-mask > *')
      if (!targets.length) return

      // Masks clip during the reveal only: a permanent overflow:hidden would
      // also clip the focus ring on the row links.
      const duration = 0.9
      const stagger = 0.07
      list.classList.add('is-revealing')

      ctx = gsap.context(() => {
        gsap.fromTo(
          targets,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration,
            ease: 'expo.out',
            stagger,
            clearProps: 'transform,opacity',
            onComplete: () => list.classList.remove('is-revealing'),
          },
        )
      }, list)

      // onComplete rides GSAP's ticker, which is rAF-driven. If that never runs
      // the masks would stay clipped for good, so unmask on a timer too.
      timer = setTimeout(
        () => list.classList.remove('is-revealing'),
        (duration + stagger * targets.length) * 1000 + 400,
      )
    })

    return () => {
      cancelled = true
      clearTimeout(timer)
      list.classList.remove('is-revealing')
      // revert() strips every inline style the context set, so a filter change
      // mid-tween can never leave a row part-way up or at opacity 0.
      ctx?.revert()
    }
  }, [resultKey])

  // Only offer a tab that actually has something behind it.
  const shown = categories.filter((c) => posts.some((p) => (p.categories || []).includes(c)))
  const filtering = active !== ALL || query.trim() !== ''

  return (
    <>
      <div className="blog-filter">
        <div className="blog-search">
          <label htmlFor={searchId} className="sr-only">
            Search writing
          </label>
          <svg className="blog-search-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
            <path d="M10.5 10.5 14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search writing"
            autoComplete="off"
          />
          {query && (
            <button type="button" className="blog-search-clear" onClick={() => setQuery('')}>
              Clear<span className="sr-only"> search</span>
            </button>
          )}
        </div>

        <div className="blog-tabs" role="group" aria-label="Filter by category">
          <button
            type="button"
            className="blog-tab"
            aria-pressed={active === ALL}
            onClick={() => setActive(ALL)}
          >
            all
          </button>
          {shown.map((c) => (
            <button
              key={c}
              type="button"
              className="blog-tab"
              aria-pressed={active === c}
              onClick={() => setActive(active === c ? ALL : c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Announced on change, so a filter is not a silent update for anyone
          using a screen reader. Only speaks once a filter is actually on. */}
      <p className="blog-count" role="status" aria-live="polite">
        {filtering ? `${results.length} ${results.length === 1 ? 'post' : 'posts'}` : ' '}
      </p>

      {results.length === 0 ? (
        <p className="blog-empty">
          Nothing here yet for that.{' '}
          <button
            type="button"
            className="blog-reset"
            onClick={() => {
              setQuery('')
              setActive(ALL)
            }}
          >
            Show everything
          </button>
        </p>
      ) : (
        <ul className="blog-list" ref={listRef}>
          {results.map((post) => (
            <li key={post.slug}>
              <div className="blog-row-mask">
                <Link href={`/blog/${post.slug}`} className="post-row">
                  <div style={{ minWidth: 0 }}>
                    {post.pinned ? (
                      <span className="post-flag">featured</span>
                    ) : (
                      post.eyebrow && <div className="label">{post.eyebrow}</div>
                    )}
                    <h2>{post.title}</h2>
                    {post.excerpt && <p>{post.excerpt}</p>}
                  </div>
                  <span className="label" style={{ whiteSpace: 'nowrap' }}>
                    {post.dateLabel}
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
