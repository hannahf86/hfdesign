// lib/case-studies.js — reads and parses the markdown case studies in /content/case-studies.
// Content is deliberately kept as plain markdown + YAML frontmatter so it can be
// edited by hand without touching any component code.

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'case-studies')

/**
 * Read a content file with its line endings normalised to \n.
 * This matters: a file saved with Windows CRLF must parse identically to one
 * saved with LF. Without this, `.` in the heading regex refuses to match the
 * trailing \r and every `## Section` silently disappears from the page.
 */
function readNormalised(file) {
  return fs.readFileSync(file, 'utf8').replace(/\r\n?/g, '\n')
}

/** Turn a section heading into a stable URL anchor. */
function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Split a markdown body into its `## Heading` sections.
 * The case study template renders whatever sections a file declares, in file
 * order — so adding or reordering a section is a content edit, not a code one.
 */
function parseSections(markdown) {
  const lines = markdown.split('\n')
  const sections = []
  let current = null

  for (const line of lines) {
    const heading = /^##\s+(.*?)\s*$/.exec(line)
    if (heading) {
      if (current) sections.push(current)
      current = { title: heading[1].trim(), id: slugifyHeading(heading[1]), body: [] }
    } else if (current) {
      current.body.push(line)
    }
  }
  if (current) sections.push(current)

  return sections.map((s, i) => ({
    ...s,
    num: String(i + 1).padStart(2, '0'),
    body: s.body.join('\n').trim(),
  }))
}

/** All `[FILL IN ...]` markers in a string, including multi-line ones. */
export function findFillIns(text) {
  if (typeof text !== 'string') return []
  return [...text.matchAll(/\[FILL IN([\s\S]*?)\]/g)].map((m) =>
    m[0].replace(/\s+/g, ' ').trim(),
  )
}

export function getCaseStudySlugs() {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export function getCaseStudy(slug) {
  const file = path.join(CONTENT_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null

  const { data, content } = matter(readNormalised(file))
  // Frontmatter `sections` describes each block's structure (label, heading,
  // personas, counters); the markdown body carries the prose. They are matched
  // by id downstream, so the two are kept under separate keys here.
  const { sections: sectionMeta = [], ...rest } = data
  return {
    ...rest,
    sectionMeta,
    slug: data.slug || slug,
    sections: parseSections(content),
  }
}

/** Every case study, ordered by the `num` field in frontmatter. */
export function getAllCaseStudies() {
  return getCaseStudySlugs()
    .map((slug) => getCaseStudy(slug))
    .filter(Boolean)
    .sort((a, b) => String(a.num).localeCompare(String(b.num)))
}

/**
 * Every outstanding `[FILL IN]` across all case studies, grouped by file.
 * Used by `npm run fillins` to produce the outstanding-content report.
 */
export function getAllFillIns() {
  return getAllCaseStudies().map((cs) => {
    const frontmatter = []
    for (const [key, value] of Object.entries(cs)) {
      if (key === 'sections') continue
      for (const hit of findFillIns(typeof value === 'string' ? value : JSON.stringify(value ?? ''))) {
        frontmatter.push({ field: key, text: hit })
      }
    }
    const sections = cs.sections
      .map((s) => ({ section: s.title, hits: findFillIns(s.body) }))
      .filter((s) => s.hits.length > 0)

    return {
      slug: cs.slug,
      client: cs.client,
      frontmatter,
      sections,
      total: frontmatter.length + sections.reduce((n, s) => n + s.hits.length, 0),
    }
  })
}
