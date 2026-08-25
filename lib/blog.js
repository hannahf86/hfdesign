// lib/blog.js — reads the markdown posts in /content/blog.
// Same shape as lib/case-studies.js: YAML frontmatter + `## Heading` sections,
// rendered through the shared CaseMarkdown component.

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

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
    // Dates come out of gray-matter as Date objects; keep them serialisable.
    date: data.date ? new Date(data.date).toISOString() : null,
    body: content.trim(),
  }
}

/** Every post, newest first. */
export function getAllPosts() {
  return getPostSlugs()
    .map((slug) => getPost(slug))
    .filter(Boolean)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
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
