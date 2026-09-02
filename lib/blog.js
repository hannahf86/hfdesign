// lib/blog.js — reads the markdown posts in /content/blog.
// Same shape as lib/case-studies.js: YAML frontmatter + `## Heading` sections,
// rendered through the shared CaseMarkdown component.

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

/** The category tabs on the index, in the order they are shown. A post opts in
 *  by listing any of these in its `categories` frontmatter. */
export const POST_CATEGORIES = [
  'work flow',
  'my story',
  'Neurodivergence',
  'Design',
  'Development',
  'research',
]

/** Read with line endings normalised to \n — see lib/case-studies.js. */
function readNormalised(file) {
  return fs.readFileSync(file, 'utf8').replace(/\r\n?/g, '\n')
}

export function getPostSlugs() {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export function getPost(slug) {
  const file = path.join(CONTENT_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null

  const { data, content } = matter(readNormalised(file))
  return {
    ...data,
    slug: data.slug || slug,
    pinned: data.pinned === true,
    // `order` places a post by hand; null means "sort me by date".
    order: Number.isFinite(data.order) ? data.order : null,
    // Dates come out of gray-matter as Date objects; keep them serialisable.
    date: data.date ? new Date(data.date).toISOString() : null,
    body: content.trim(),
  }
}

/**
 * Every post: hand-placed ones first in `order`, then the rest newest first.
 *
 * A post with `order: 1` holds the top of the index however many newer posts
 * arrive after it — the date no longer decides its position, which is the
 * point. Posts without an `order` fall in behind, sorted by date, so only the
 * ones that need placing need the field. `pinned: true` is separate: it draws
 * the FEATURED pill and says nothing about position.
 *
 * Ties fall back to the date, so the result never depends on the order readdir
 * happened to list the files in.
 */
export function getAllPosts() {
  return getPostSlugs()
    .map((slug) => getPost(slug))
    .filter(Boolean)
    .sort((a, b) => {
      const ao = a.order ?? Infinity
      const bo = b.order ?? Infinity
      if (ao !== bo) return ao - bo
      return (b.date || '').localeCompare(a.date || '')
    })
}

/** Heading text -> a stable, url-safe id. */
function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60)
}

/**
 * Split a post body into the intro (everything before the first `## `) and its
 * numbered sections. The page renders each section as its own block with a
 * number and an id, which is what turns a long post from one wall of text into
 * something with visible structure — and gives every heading an anchor.
 */
export function getPostSections(body = '') {
  const chunks = body.split(/\n(?=## )/)
  const intro = chunks[0].startsWith('## ') ? '' : chunks.shift().trim()

  const seen = new Set()
  const sections = chunks.map((chunk, i) => {
    const breakAt = chunk.indexOf('\n')
    const heading = chunk.slice(3, breakAt === -1 ? undefined : breakAt).trim()

    // Two identical headings in one post would otherwise share an anchor.
    let id = slugifyHeading(heading)
    if (seen.has(id)) id = `${id}-${i + 1}`
    seen.add(id)

    return {
      id,
      num: String(i + 1).padStart(2, '0'),
      heading,
      body: (breakAt === -1 ? '' : chunk.slice(breakAt + 1)).trim(),
    }
  })

  return { intro, sections }
}

/** "22 August 2026" — stable across server and client. */
export function formatPostDate(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
