'use client'

// Component: WorkAccordion — the three selected-work cards.
// One open at a time; Lucent is open on load. Height animates 0 ↔ auto and is
// then set to `auto` so later reflow (image load, resize) stays safe.
// The header is a real <button> so keyboard and screen-reader behaviour is free.

import { useState, useId, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Card prose is markdown, so a block can carry paragraphs, lists and the odd
// source link. External links open in a new tab, same rule as CaseMarkdown.
const MD_COMPONENTS = {
  a({ href, children }) {
    const external = href?.startsWith('http')
    return (
      <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    )
  },
}

// Component: StatCell — one figure in the three-up row under the cover image.
function StatCell({ stat }) {
  return (
    <div>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontVariationSettings: "'wdth' 112",
          fontSize: '1.8125rem',
          lineHeight: 1,
          color: 'var(--fg-1)',
        }}
        {...(stat.count ? { 'data-count': stat.value } : {})}
      >
        {stat.value}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          letterSpacing: '.16em',
          textTransform: 'uppercase',
          color: 'var(--fg-3)',
          marginTop: 6,
        }}
      >
        {stat.label}
      </div>
    </div>
  )
}

// Component: WorkCard — one accordion card.
function WorkCard({ item, isOpen, onToggle }) {
  const bodyRef = useRef(null)
  const panelId = `${useId()}-panel`


  return (
    <article
      data-anim="up"
      style={{
        background: 'var(--bg-2)',
        border: `1px solid ${isOpen ? 'var(--hf-glyph-mid)' : 'var(--border)'}`,
        borderRadius: 'var(--r-3)',
        overflow: 'hidden',
        transition: 'border-color var(--dur-3) var(--ease-out)',
      }}
    >
      <h3 style={{ margin: 0 }}>
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="work-head"
          style={{
            all: 'unset',
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
            cursor: 'pointer',
            padding: '34px clamp(20px, 3vw, 40px)',
          }}
        >
          <span
            className="work-head-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              gap: 'clamp(20px, 3vw, 44px)',
              alignItems: 'center',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontVariationSettings: "'wdth' 112",
                fontSize: '2.125rem',
                lineHeight: 1,
                color: 'var(--border)',
              }}
            >
              {item.num}
            </span>

            <span style={{ display: 'block' }}>
              <span style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 16 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontVariationSettings: "'wdth' 100",
                    fontSize: 'clamp(1.375rem, 2.2vw, 1.9375rem)',
                    lineHeight: 1.05,
                    letterSpacing: '-.02em',
                    color: 'var(--fg-1)',
                  }}
                >
                  {item.title}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    letterSpacing: '.18em',
                    textTransform: 'uppercase',
                    color: 'var(--fg-3)',
                  }}
                >
                  {item.meta}
                </span>
              </span>
              <span
                style={{
                  display: 'block',
                  marginTop: 12,
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'var(--fg-2)',
                  maxWidth: '62ch',
                }}
              >
                {item.summary}
              </span>
            </span>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8125rem',
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--accent-light)',
                whiteSpace: 'nowrap',
              }}
            >
              {isOpen ? 'close −' : 'expand +'}
            </span>
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        ref={bodyRef}
        data-work-panel={item.slug}
        data-open={isOpen ? 'true' : 'false'}
        role="region"
        aria-label={`${item.title} detail`}
        className="work-panel"
        onTransitionEnd={() => ScrollTrigger.refresh()}
      >
        <div className="work-panel-inner">
          <div style={{ padding: '0 clamp(20px, 3vw, 40px) 36px' }}>
          <div
            className="work-body-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr 1fr',
              columnGap: 'clamp(28px, 4vw, 56px)',
              rowGap: 20,
              borderTop: '1px solid var(--border-soft)',
              paddingTop: 32,
            }}
          >
            <div data-panel-stagger="" style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
              {item.blocks.map((b) => (
                <div key={b.label}>
                  <div className="label label-accent" style={{ marginBottom: 9 }}>
                    {b.label}
                  </div>
                  <div className="prose">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={MD_COMPONENTS}>
                      {b.body}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}

              {item.hasCaseStudy && (
                <Link
                  href={`/work/${item.slug}`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    letterSpacing: '.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  read the full case study →
                </Link>
              )}
            </div>

            {/* Third grid child, sitting between the prose and the aside in
                source order. Stacked, that puts the live link straight after
                the case study link; from 901px the CSS places it back at the
                foot of the aside. One element either way, never two. */}
            <div className="work-cta">
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                }}
              >
                visit the live site →
              </a>

              {item.credentials && (
                <p
                  style={{
                    marginTop: 12,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: 'var(--fg-3)',
                  }}
                >
                  Have a play:
                  <br />
                  Username: {item.credentials.username}
                  <br />
                  Password: {item.credentials.password}
                </p>
              )}
            </div>

            <div data-panel-aside="" style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div
                style={{
                  aspectRatio: '4 / 3',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-3)',
                  overflow: 'hidden',
                  background: 'var(--img-bg)',
                  position: 'relative',
                }}
              >
                <Image
                  src={item.cover}
                  alt={item.coverAlt}
                  fill
                  sizes="(max-width: 900px) 92vw, 440px"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: 14,
                  borderTop: '1px solid var(--border-soft)',
                  paddingTop: 20,
                }}
              >
                {item.stats.map((s) => (
                  <StatCell key={s.label} stat={s} />
                ))}
              </div>

              <div>
                <div className="label" style={{ marginBottom: 10 }}>
                  role
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--fg-3)' }}>{item.role}</p>

                <div className="label" style={{ marginTop: 18, marginBottom: 10 }}>
                  tools
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'var(--fg-3)' }}>{item.tools}</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .work-head { padding: 26px 20px !important; }
          .work-head-grid { grid-template-columns: auto 1fr !important; row-gap: 14px; }
          .work-head-grid > :last-child { grid-column: 1 / -1; }
          .work-body-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </article>
  )
}

export default function WorkAccordion({ items = [] }) {
  const [open, setOpen] = useState(() => items.find((i) => i.openByDefault)?.slug ?? null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 40 }}>
      {items.map((item) => (
        <WorkCard
          key={item.slug}
          item={item}
          isOpen={open === item.slug}
          onToggle={() => setOpen((cur) => (cur === item.slug ? null : item.slug))}
        />
      ))}
    </div>
  )
}
