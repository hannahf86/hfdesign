// Lists every outstanding [FILL IN] across the case studies.
// Run with: npm run fillins

import { getAllFillIns } from '../lib/case-studies.js'

const reports = getAllFillIns()
let total = 0

for (const r of reports) {
  total += r.total
  console.log(`\n${r.client}  (content/case-studies/${r.slug}.md)  — ${r.total} outstanding`)
  console.log('─'.repeat(72))

  if (r.frontmatter.length) {
    console.log('  Frontmatter:')
    for (const f of r.frontmatter) console.log(`    • ${f.field}: ${f.text}`)
  }
  for (const s of r.sections) {
    console.log(`  ${s.section}:`)
    for (const hit of s.hits) console.log(`    • ${hit}`)
  }
  if (!r.total) console.log('  Nothing outstanding.')
}

console.log(`\n${'='.repeat(72)}\nTOTAL OUTSTANDING: ${total}\n`)
