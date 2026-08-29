// lib/work.js — reads the work cards in /content/work.
// Each file is one project: frontmatter for the card metadata, and `## Heading`
// sections for the four labelled prose blocks inside the accordion body.

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'work')

/** Read with line endings normalised to \n — see lib/case-studies.js. */
function readNormalised(file) {
  return fs.readFileSync(file, 'utf8').replace(/\r\n?/g, '\n')
}

function parseBlocks(markdown) {
  const lines = markdown.split('\n')
  const blocks = []
  let current = null

  for (const line of lines) {
    const heading = /^##\s+(.*?)\s*$/.exec(line)
    if (heading) {
      if (current) blocks.push(current)
      current = { label: heading[1].trim(), body: [] }
    } else if (current) {
      current.body.push(line)
    }
  }
  if (current) blocks.push(current)

  return blocks.map((b) => ({ ...b, body: b.body.join('\n').trim() }))
}

export function getWorkSlugs() {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

export function getWorkItem(slug) {
  const file = path.join(CONTENT_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null

  const { data, content } = matter(readNormalised(file))
  return { ...data, slug: data.slug || slug, blocks: parseBlocks(content) }
}

/** Every project, ordered by the `num` field. */
export function getAllWork() {
  return getWorkSlugs()
    .map((slug) => getWorkItem(slug))
    .filter(Boolean)
    .sort((a, b) => String(a.num).localeCompare(String(b.num)))
}
