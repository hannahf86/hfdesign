// Converts source artwork into web-sized webp in public/assets/case-studies.
// The source boards come out of Figma/FigJam at up to 18000px wide and 10 MB —
// far too big to put on a page. Run with: npm run images
//
// Edit SOURCE_DIR if the exports move, then add entries to FILES.

import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE_DIR = 'C:/Users/Hannah/Desktop/JWD/UX Portfolio'
// A source entry may also be an absolute path, for assets that live with their
// own project rather than in the portfolio export folder.
const isAbsolute = (p) => /^[A-Za-z]:[\/]|^\//.test(p)
const OUT_DIR = path.join(process.cwd(), 'public', 'assets', 'case-studies')

// [source file, output name, max width, options?]
// options.extract crops before resizing — used to remove a device bezel that is
// baked into a screenshot, so the site's own frame is the only frame.
// options.flatten composites onto white — for exports with a transparent
// background, whose own dark strokes would otherwise vanish on this canvas.
// Covers sit at 1600px; the wide research boards get 2600px so the sticky notes
// stay readable when a reader zooms in.
const FILES = [
  ['lucent-biopharma-cover.png', 'lucent-biopharma-cover', 1600],
  ['client-portal-cover.png', 'jwd-portal-cover', 1600],
  ['empathy-map.png', 'lucent-empathy-map', 2000],
  ['user-story-rp.png', 'lucent-user-stories-sarah-patel', 2600],
  ['User Journey - RL.png', 'lucent-user-stories-rebecca-lawson', 2600],
  ['CMS Relations-selection-sm.png', 'lucent-cms-collections', 2600, { flatten: true }],
  // The export below is mis-named at source: it is the Sarah Patel persona
  // board, not a journey map.
  ['User Journey - FULL.webp', 'LB-user-persona-02', 2600],
  // Wise Mind screens live in the app's own repo
  // These exports carry a 16px grey Android bezel; crop it so the screen fills
  // the frame the site draws around it.
  ['C:/Users/Hannah/Desktop/Developer/wise-mind/assets/Lesson - Wise Mind-selection.png', 'wisemind-lesson', 900, { extract: { left: 16, top: 16, width: 792, height: 1752 } }],
  ['C:/Users/Hannah/Desktop/Developer/wise-mind/assets/Journal - Wise Mind-selection.png', 'wisemind-journal', 900, { extract: { left: 16, top: 16, width: 792, height: 1752 } }],
]

fs.mkdirSync(OUT_DIR, { recursive: true })

let totalIn = 0
let totalOut = 0
// Seed from the existing manifest so an asset whose source is not present
// locally keeps its dimensions rather than silently losing them.
const MANIFEST_PATH = path.join(OUT_DIR, 'manifest.json')
const manifest = fs.existsSync(MANIFEST_PATH)
  ? JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'))
  : {}

for (const [src, name, maxWidth, opts = {}] of FILES) {
  const from = isAbsolute(src) ? src : path.join(SOURCE_DIR, src)
  if (!fs.existsSync(from)) {
    console.warn(`  skip (missing): ${src}`)
    continue
  }

  const to = path.join(OUT_DIR, `${name}.webp`)
  const meta = await sharp(from).metadata()

  let pipeline = sharp(from)
  if (opts.extract) pipeline = pipeline.extract(opts.extract)
  if (opts.flatten) pipeline = pipeline.flatten({ background: '#ffffff' })
  const sourceWidth = opts.extract ? opts.extract.width : meta.width
  await pipeline
    .resize({ width: Math.min(maxWidth, sourceWidth), withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(to)

  const inKb = fs.statSync(from).size / 1024
  const outKb = fs.statSync(to).size / 1024
  const out = await sharp(to).metadata()
  totalIn += inKb
  totalOut += outKb
  manifest[`/assets/case-studies/${name}.webp`] = { width: out.width, height: out.height }

  console.log(
    `  ${name}.webp  ${meta.width}x${meta.height} -> ${out.width}x${out.height}  ` +
      `${inKb.toFixed(0)} KB -> ${outKb.toFixed(0)} KB`,
  )
}

// Dimensions manifest so rendered images can reserve their space and avoid
// layout shift. Read by components/case-study/CaseMarkdown.jsx.
fs.writeFileSync(
  MANIFEST_PATH,
  JSON.stringify(manifest, null, 2) + '\n',
)

console.log(`\n  total: ${(totalIn / 1024).toFixed(1)} MB -> ${(totalOut / 1024).toFixed(1)} MB`)
