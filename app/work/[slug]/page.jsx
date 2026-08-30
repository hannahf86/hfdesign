// Page: /work/[slug] — the case study template.
// Frontmatter carries the structured parts (meta bar, personas, numbered
// decisions, counters); the markdown body carries the prose for each section,
// matched to its frontmatter entry by the `## heading` id.

import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CaseIndex from '@/components/CaseIndex'
import { FillInText, hasFillIn } from '@/components/case-study/FillIn'
import CaseMarkdown from '@/components/case-study/CaseMarkdown'
import IMAGE_SIZES from '@/public/assets/case-studies/manifest.json'
import { getCaseStudy, getCaseStudySlugs } from '@/lib/case-studies'

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return {}

  const clean = (s, fallback) => (!s || hasFillIn(s) ? fallback : s)
  const title = clean(cs.seo?.title, `${cs.client} — case study`)
  const description = clean(cs.seo?.description, clean(cs.lead, 'A case study by Hannah Feehan.'))
  const url = `/work/${cs.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      ...(cs.seo?.ogImage ? { images: [{ url: cs.seo.ogImage }] } : {}),
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

// Section: pull quote — the only Cormorant Garamond on the site.
function PullQuote({ quote }) {
  return (
    <figure className="cs-quote">
      <blockquote>&ldquo;{quote.text}&rdquo;</blockquote>
      <figcaption>{quote.attribution}</figcaption>
    </figure>
  )
}

// Section: persona cards — three across, from the research section.
function Personas({ personas }) {
  return (
    <div className="cs-personas">
      {personas.map((p) => (
        <div key={p.name} className="cs-persona">
          <div className="label label-accent">{p.name}</div>
          <p>
            <FillInText value={p.body} />
          </p>
        </div>
      ))}
    </div>
  )
}

// Section: an artefact slot. A bare string is still an empty placeholder; an
// object with `image` renders the artefact, captioned by its label. Dimensions
// come from the manifest `npm run images` writes, so the space is reserved.
function Artefact({ artefact }) {
  if (typeof artefact === 'string') {
    return (
      <div className="cs-artefact" role="note">
        <span className="label">{artefact}</span>
      </div>
    )
  }

  const dims = IMAGE_SIZES[artefact.image]
  return (
    <figure className="cs-figure cs-artefact-figure">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={artefact.image}
        alt={artefact.alt || artefact.label || ''}
        loading="lazy"
        decoding="async"
        {...(dims ? { width: dims.width, height: dims.height } : {})}
      />
      {artefact.label && <figcaption className="label">{artefact.label}</figcaption>}
    </figure>
  )
}

// Section: numbered decision rows.
function NumberedRows({ rows }) {
  return (
    <ol className="cs-numbered">
      {rows.map((r, i) => (
        <li key={r} data-anim="up">
          <span className="label label-accent">{String(i + 1).padStart(2, '0')}</span>
          <p>{r}</p>
        </li>
      ))}
    </ol>
  )
}

// Section: the outcome counters.
// Only a bare number gets `data-count`. The count-up tween rewrites the whole
// textContent on every frame, so a value like "4 → 1" or "5-10" would parse to
// its leading digit and land as "4" / "5", silently losing the rest.
const isCountable = (value) => /^\d+(\.\d+)?$/.test(String(value).trim())

function Counters({ stats }) {
  return (
    <div className="cs-counters">
      {stats.map((s) => (
        <div key={s.label}>
          <div
            className="cs-counter-value"
            {...(isCountable(s.value) ? { 'data-count': s.value } : {})}
          >
            {s.value}
          </div>
          <div className="label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) notFound()

  // Merge the frontmatter section definitions with the markdown prose.
  const bodyById = new Map(cs.sections.map((s) => [s.id, s.body]))
  const sections = (cs.sectionMeta || []).map((s) => ({ ...s, body: bodyById.get(s.id) || '' }))

  return (
    <>
      <Nav />
      <main id="main">
        <section className="wrap cs-top">
          <Link href="/#work" data-anim="up" className="cs-back">
            ← all work
          </Link>

          <div data-anim="up" className="label" style={{ marginTop: 28 }}>
            {cs.eyebrow}
          </div>

          <h1
            data-anim="up"
            className="cs-title"
            aria-label={cs.titleLine2 ? `${cs.title} ${cs.titleLine2}` : cs.title}
          >
            <span aria-hidden="true">
              {cs.title}
              {cs.titleLine2 && (
                <>
                  <br />
                  {cs.titleLine2}
                </>
              )}
            </span>
          </h1>

          <p data-anim="up" className="cs-lead">
            {cs.lead}
          </p>

          <div data-anim="up" className="cs-meta">
            {cs.meta?.map((m) => (
              <div key={m.label}>
                <div className="label">{m.label}</div>
                <div className="cs-meta-value">
                  <FillInText value={m.value} />
                </div>
              </div>
            ))}
          </div>

          <div data-anim="up" data-img-reveal="" className="cs-hero">
            <Image
              src={cs.hero}
              alt={cs.heroAlt || ''}
              width={1440}
              height={1200}
              sizes="(max-width: 1240px) 92vw, 1240px"
              priority
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </section>

        <section className="wrap cs-body">
          <CaseIndex sections={sections} />

          <div className="cs-column">
            {sections.map((s) => (
              <article key={s.id} id={s.id} data-reveal="1" className="cs-block">
                <div className="label label-accent">
                  {s.num} · {s.label}
                </div>
                {s.heading && <h2 className="cs-heading">{s.heading}</h2>}

                {s.body && <CaseMarkdown headingLevel={3}>{s.body}</CaseMarkdown>}
                {s.quote && <PullQuote quote={s.quote} />}
                {s.personas && <Personas personas={s.personas} />}
                {/* Numbered rows sit above the artefact by default. A section
                    sets numberedAfterArtefact when the list reads as a summary
                    of what the artefact shows, rather than a lead-in to it. */}
                {!s.numberedAfterArtefact && s.numbered && <NumberedRows rows={s.numbered} />}
                {s.artefact && <Artefact artefact={s.artefact} />}
                {s.numberedAfterArtefact && s.numbered && <NumberedRows rows={s.numbered} />}
                {s.stats && <Counters stats={s.stats} />}
                {s.closing && <p className="cs-closing">{s.closing}</p>}
                {s.id === 'outcome' && cs.liveUrl && (
                  <p className="cs-live">
                    <a href={cs.liveUrl} target="_blank" rel="noopener noreferrer">
                      {cs.liveLabel || 'View the live project'} <span aria-hidden="true">↗</span>
                    </a>
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        {cs.next && (
          <section className="wrap cs-next">
            <Link href={`/work/${cs.next.slug}`} data-anim="up">
              <div className="label">next</div>
              <h2>{cs.next.label} →</h2>
            </Link>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
