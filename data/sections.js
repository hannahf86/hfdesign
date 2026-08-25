// data/sections.js — single source of truth for the numbered section eyebrows
// ("/ 02" etc). Numbers are never hand-typed into a component; add or reorder a
// section here and every eyebrow on the site renumbers itself.

export const SECTIONS = [
  { id: 'work', eyebrow: 'Selected work' },
  { id: 'about', eyebrow: 'About' },
  { id: 'training', eyebrow: 'Training & Credentials' },
  { id: 'stack', eyebrow: 'Stack' },
  { id: 'contact', eyebrow: 'Contact' },
]

const INDEX = new Map(SECTIONS.map((s, i) => [s.id, String(i + 1).padStart(2, '0')]))

/** The display number for a section id, e.g. sectionNum('about') === '02'. */
export function sectionNum(id) {
  return INDEX.get(id) ?? ''
}

/** The eyebrow label for a section id. */
export function sectionEyebrow(id) {
  return SECTIONS.find((s) => s.id === id)?.eyebrow ?? ''
}
