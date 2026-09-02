'use client'

// Component: BlogFilter — the search box, category tabs and result list on the
// writing index.
//
// The rows deliberately carry no `data-anim`: the GSAP layer hides those with
// `html.js-anim [data-anim='up'] { opacity: 0 }` and only reveals what existed
// when it ran its sweep. A row that appears later, when a filter changes, would
// stay stranded at opacity 0. The entrance is a CSS keyframe with
// `animation-fill-mode: both` instead, so it runs on mount every time and its
// end state is a computed style rather than something JS has to finish.

import { useMemo, useState, useId } from 'react'
import Link from 'next/link'

const ALL = 'all'

export default function BlogFilter({ posts = [], categories = [] }) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(ALL)
  const searchId = useId()

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts.filter((post) => {
      if (active !== ALL && !(post.categories || []).includes(active)) return false
      return q ? post.haystack.includes(q) : true
    })
  }, [posts, query, active])

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
        {filtering ? `${results.length} ${results.length === 1 ? 'post' : 'posts'}` : ' '}
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
        <ul className="blog-list">
          {results.map((post, i) => (
            <li key={post.slug} className="blog-row-in" style={{ animationDelay: `${i * 45}ms` }}>
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
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
