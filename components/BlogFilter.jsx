'use client'

// Component: BlogFilter — the writing index: filter bar, featured card,
// numbered rows.
//
// The rows carry no `data-anim`. The global motion layer hides those with
// `html.js-anim [data-anim='up'] { opacity: 0 }` and only reveals what existed
// when it ran its sweep, so a row that appears later — when a filter changes —
// would be stranded invisible. This component owns its own reveal instead, and
// re-runs it whenever the result set changes.
//
// The gesture is the hero's: content rising out of a mask on an expo curve.
// GSAP owns every transform; the CSS never sets one, so the two can't stack
// (which is what once left the hero blank).

import { useMemo, useState, useId, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import IMAGE_SIZES from '@/public/assets/case-studies/manifest.json'

const ALL = 'all'

// Section: the cover slot on the featured card. A post without a `cover` gets a
// visibly unfinished box rather than a collapsed layout — the same rule the
// case studies follow for an artefact that has not been made yet.
function Cover({ post }) {
  if (!post.cover) {
    return (
      <div className="blog-cover blog-cover-empty" role="note">
        <span className="label">cover image</span>
      </div>
    )
  }
  const dims = IMAGE_SIZES[post.cover]
  return (
    <div className="blog-cover">
      <Image
        src={post.cover}
        alt={post.coverAlt || ''}
        width={dims?.width || 1024}
        height={dims?.height || 1024}
        sizes="(max-width: 900px) 92vw, 420px"
        priority
      />
    </div>
  )
}

function Cats({ items }) {
  if (!items?.length) return null
  return <div className="label label-accent blog-cats">{items.join(' · ')}</div>
}

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

  // The featured card is only drawn when the pinned post leads the current
  // results. Filter it out and everything falls back to the numbered list, so
  // there is never an empty hero slot or a card out of sequence.
  const featured = results[0]?.pinned ? results[0] : null
  const rows = featured ? results.slice(1) : results

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
      const targets = listRef.current.querySelectorAll('.blog-mask > *')
      if (!targets.length) return

      const duration = 0.9
      const stagger = 0.07
      // Masks clip during the reveal only: a permanent overflow:hidden would
      // also clip the focus ring on the row links.
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

  return (
    <>
      <div className="blog-filter">
        <div className="blog-search-col">
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
            placeholder="search writing"
            autoComplete="off"
          />
            {query && (
              <button type="button" className="blog-search-clear" onClick={() => setQuery('')}>
                Clear<span className="sr-only"> search</span>
              </button>
            )}
          </div>

          {/* The visible count is gone at Hannah's request, but the change
              still has to be announced — otherwise filtering silently rewrites
              the page for anyone using a screen reader. */}
          <p className="sr-only" role="status" aria-live="polite">
            showing {results.length} of {posts.length}
          </p>
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
        <div ref={listRef}>
          {featured && (
            <div className="blog-mask">
              <Link href={`/blog/${featured.slug}`} className="blog-feature">
                <div className="blog-feature-body">
                  <div className="blog-feature-tags">
                    <span className="post-flag">featured</span>
                    <Cats items={featured.categories} />
                  </div>
                  <h2>{featured.title}</h2>
                  {featured.excerpt && <p>{featured.excerpt}</p>}
                  <div className="blog-feature-foot">
                    <span className="label">
                      {featured.dateLabel}
                      {featured.readingTime ? ` · ${featured.readingTime}` : ''}
                    </span>
                    <span className="label label-accent blog-read">
                      read the post <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
                <Cover post={featured} />
              </Link>
            </div>
          )}

          <ol className="blog-list">
            {rows.map((post, i) => (
              <li key={post.slug} className="blog-mask">
                <Link href={`/blog/${post.slug}`} className="blog-row">
                  {/* The featured card is 01, so the rows carry on from there
                      rather than restarting the sequence. */}
                  <span className="label blog-num" aria-hidden="true">
                    {String(i + (featured ? 2 : 1)).padStart(2, '0')}
                  </span>
                  <div className="blog-row-body">
                    <Cats items={post.categories} />
                    <h2>{post.title}</h2>
                    {post.excerpt && <p>{post.excerpt}</p>}
                  </div>
                  <div className="blog-row-meta">
                    <span className="label">{post.dateLabel}</span>
                    {post.readingTime && <span className="label">{post.readingTime}</span>}
                    <span className="label label-accent blog-read">
                      read <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  )
}
