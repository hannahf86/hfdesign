// Component: CaseMarkdown — renders a case study markdown section using the
// site's own type and token system. Markdown tables become styled, horizontally
// scrollable tables; `[FILL IN ...]` markers become visible placeholder states
// rather than raw text.

import { Children } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { FillInBlock, FillInInline, FillInImage } from './FillIn'
import IMAGE_SIZES from '@/public/assets/case-studies/manifest.json'

const FILL_IN_SPLIT = /(\[FILL IN[\s\S]*?\])/g
const FILL_IN_WHOLE = /^\[FILL IN[\s\S]*\]$/

// A placeholder whose note is about visual material gets an image-shaped
// placeholder; everything else gets a note card.
const VISUAL_WORDS = /\b(image|images|photo|screenshot|screens?|wireframes?|sketch|mockup|diagram|before\/after)\b/i

/** Flatten a React subtree down to its plain text, for whole-block detection. */
function textOf(node) {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(textOf).join('')
  if (node.props?.children) return textOf(node.props.children)
  return ''
}

/** Swap any `[FILL IN ...]` spans inside text children for inline chips. */
function withFillIns(children) {
  return Children.map(children, (child, i) => {
    if (typeof child !== 'string') return child
    const parts = child.split(FILL_IN_SPLIT)
    if (parts.length === 1) return child
    return parts.map((part, j) =>
      part.startsWith('[FILL IN') ? (
        <FillInInline key={`${i}-${j}`} raw={part} />
      ) : (
        part
      ),
    )
  })
}

// In a case study the page h1 and the section h2 are owned by the template, so
// markdown headings start at h3. A blog post owns only the h1, so its headings
// start at h2. Either way the hierarchy can't skip a level.
function headingComponents(startLevel) {
  const Tag = `h${startLevel}`
  const Sub = `h${Math.min(startLevel + 1, 6)}`
  return {
    h1: ({ children }) => <Tag>{withFillIns(children)}</Tag>,
    h2: ({ children }) => <Tag>{withFillIns(children)}</Tag>,
    h3: ({ children }) => <Sub>{withFillIns(children)}</Sub>,
    h4: ({ children }) => <Sub>{withFillIns(children)}</Sub>,
  }
}

const components = {
  p({ children }) {
    const text = textOf(children).trim()
    if (FILL_IN_WHOLE.test(text)) {
      return VISUAL_WORDS.test(text) ? <FillInImage raw={text} /> : <FillInBlock raw={text} />
    }
    return <p>{withFillIns(children)}</p>
  },

  li({ children }) {
    return <li>{withFillIns(children)}</li>
  },

  strong({ children }) {
    return <strong>{withFillIns(children)}</strong>
  },

  em({ children }) {
    return <em>{withFillIns(children)}</em>
  },


  table({ children }) {
    return (
      <>
        <div className="cs-table-scroll" tabIndex={0} role="region" aria-label="Table, scrollable">
          <table className="cs-table">{children}</table>
        </div>
        <p className="cs-table-hint" aria-hidden="true">
          Scroll table horizontally →
        </p>
      </>
    )
  },

  td({ children }) {
    return <td>{withFillIns(children)}</td>
  },

  th({ children }) {
    return <th scope="col">{withFillIns(children)}</th>
  },

  a({ href, children }) {
    const external = href?.startsWith('http')
    return (
      <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    )
  },

  // Images in content are rendered through a figure so a caption can be added
  // from the markdown title attribute. Dimensions come from the manifest that
  // `npm run images` writes, so the space is reserved and nothing shifts on load.
  img({ src, alt, title }) {
    const dims = IMAGE_SIZES[src]
    return (
      <figure className="cs-figure">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || ''}
          loading="lazy"
          decoding="async"
          {...(dims ? { width: dims.width, height: dims.height } : {})}
        />
        {title && <figcaption>{title}</figcaption>}
      </figure>
    )
  },
}

// In a blog post a `>` blockquote is a pull quote: a line lifted out of the
// prose and set large, to break up the column. It repeats the sentence that
// follows it, so it is hidden from assistive tech — otherwise a screen reader
// hears the same sentence twice. Everywhere else a blockquote stays a
// blockquote, which is what the case studies use it for.
const blogComponents = {
  blockquote({ children }) {
    return (
      <figure className="post-pull" aria-hidden="true">
        <blockquote>{children}</blockquote>
      </figure>
    )
  },
}

export default function CaseMarkdown({ children, headingLevel = 3, variant, className = '' }) {
  if (!children?.trim()) return null
  return (
    <div className={`cs-prose ${className}`.trim()}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          ...components,
          ...headingComponents(headingLevel),
          ...(variant === 'blog' ? blogComponents : {}),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
