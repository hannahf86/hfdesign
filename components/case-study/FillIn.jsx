// Component: FillIn — the styled placeholder state for `[FILL IN ...]` markers
// in the case study markdown. Two forms: a block card when a whole paragraph is
// outstanding, and an inline chip when only part of a sentence is.
// Nothing here invents copy — it renders the note as written in the content file.

/** Strip the `[FILL IN` … `]` wrapper down to the note itself. */
export function fillInNote(raw) {
  return raw
    .replace(/^\[FILL IN[:\s—-]*/i, '')
    .replace(/\]$/, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function PencilIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  )
}

/** Block-level placeholder: an entire paragraph or section is still outstanding. */
export function FillInBlock({ raw }) {
  const note = fillInNote(raw)
  return (
    <div className="fillin-block" role="note">
      <span className="fillin-icon">
        <PencilIcon />
      </span>
      <span>
        <span className="fillin-label">Content to add</span>
        <p className="fillin-text">{note || 'Content still to be written.'}</p>
      </span>
    </div>
  )
}

/** Inline placeholder: a phrase inside an otherwise-finished sentence. */
export function FillInInline({ raw }) {
  const note = fillInNote(raw)
  return (
    <span className="fillin-inline" role="note">
      <PencilIcon />
      {note || 'to add'}
    </span>
  )
}

/**
 * Renders a plain frontmatter string, turning any `[FILL IN ...]` span inside it
 * into an inline chip. Used for cover/meta fields like subtitle, role, sector.
 */
export function FillInText({ value, fallback = null }) {
  if (typeof value !== 'string' || !value.trim()) return fallback
  const parts = value.split(/(\[FILL IN[\s\S]*?\])/g)
  if (parts.length === 1) return value
  return parts.map((part, i) =>
    part.startsWith('[FILL IN') ? <FillInInline key={i} raw={part} /> : part,
  )
}

/** True if a frontmatter value still carries an unresolved placeholder. */
export function hasFillIn(value) {
  return typeof value === 'string' && /\[FILL IN/.test(value)
}

/** Placeholder standing in for an image that hasn't been supplied yet. */
export function FillInImage({ raw }) {
  const note = fillInNote(raw)
  return (
    <div className="cs-image-placeholder" role="note">
      <span className="fillin-icon">
        <PencilIcon />
      </span>
      <span className="fillin-label" style={{ marginBottom: 0 }}>
        Image to add
      </span>
      <p className="fillin-text" style={{ maxWidth: '42ch' }}>
        {note || 'Image still to be supplied.'}
      </p>
    </div>
  )
}
