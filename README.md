# Hannah Feehan — portfolio

Next.js (App Router), JavaScript, plain CSS on a token system. Implements the
2026 redesign from the Claude Design project "Hfdesign Portfolio Redesign".

Positioned for **employment** as a UX designer / frontend developer. Jorvik Web
Dev is a separate brand and is not what this site sells.

## Quick start

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on :3000 |
| `npm run build` | Production build (all case studies prerendered) |
| `npm start` | Serve the production build |
| `npm run fillins` | List every outstanding `[FILL IN]` across the case studies |
| `npm run images` | Re-export source artwork to web-sized webp + dimensions manifest |

## Project structure

```
app/
  layout.jsx          Root layout — fonts, theme bootstrap, site metadata
  page.jsx            Homepage
  work/[slug]/page.jsx  The single reusable case study template
  blog/page.jsx         Post index
  blog/[slug]/page.jsx  A single post
  sitemap.js          Sitemap (homepage + every case study)
  robots.js           robots.txt
  not-found.jsx       404
components/
  Nav.jsx             Fixed translucent header
  Hero.jsx            "UX Engineer" display block
  SelectedWork.jsx    Section head + accordion + Wise Mind panel
  WorkAccordion.jsx   The three expandable project cards
  WiseMind.jsx        "Currently building" panel
  Experience.jsx      Prose + timeline
  SkillStack.jsx      Five chip rows
  AIPractice.jsx      "How I use AI" + the three line glyphs
  Contact.jsx         Closing block with the travelling-dot hairline
  Footer.jsx          Footer
  CaseIndex.jsx       Sticky section index on a case study
  Motion.jsx          The whole GSAP layer
  case-study/
    CaseMarkdown.jsx  Markdown → styled prose, tables, placeholders
    FillIn.jsx        [FILL IN] placeholder states
content/
  work/*.md           Homepage accordion cards (card meta + four prose blocks)
  case-studies/*.md   Full case study pages
  blog/*.md           Blog posts
lib/
  work.js             Reads the homepage work cards
  case-studies.js     Reads the full case study pages
  blog.js             Reads blog posts
styles/
  tokens.css          Design tokens (colour, type, spacing, motion)
  app.css             Global styles
  case-study.css      Case study page styles
```

## Editing content

**Case studies** live in `content/case-studies/*.md` as YAML frontmatter plus
`## Heading` sections. The page template renders whatever sections a file
declares, in file order — adding, removing or reordering a section is a content
edit, not a code one. Markdown tables render as styled, scrollable tables.

Anything still to be written is marked `[FILL IN ...]` in the markdown and
renders as a visible placeholder rather than raw text. Run `npm run fillins` for
the outstanding list.

**Section numbers** ("/ 02", "/ 03" …) come from `data/sections.js`. They are
never typed into a component — reorder that array and every eyebrow renumbers.

**Blog posts** live in `content/blog/*.md` and use the same renderer. A post
owns its own h1, so its `##` headings render as h2; case study sections render
at h3 because the template owns the h2. That's the `headingLevel` prop on
`CaseMarkdown`.

**Stack, credentials and training topics** live in `data/index.js`.

### Line endings

Content files must be LF. `.gitattributes` enforces it and both loaders
normalise on read, because a stray CR byte stops `## Heading` matching and every
section silently vanishes from the page.

## Images

Source artwork lives outside the repo (`Desktop/JWD/UX Portfolio`). The FigJam
and Figma exports are up to 18000px wide and 10 MB, so `npm run images` resizes
them to webp and writes `public/assets/case-studies/manifest.json` with the
output dimensions. `CaseMarkdown` reads that manifest to set `width`/`height` on
every rendered image, so nothing shifts as they lazy-load.

To add an image: drop the export in the source folder, add a
`[file, output-name, maxWidth]` row to `FILES` in `scripts/optimise-images.mjs`,
run `npm run images`, then reference it from the markdown.

## Design system

Tokens live in `styles/tokens.css`.

- **Colour** bg `#0c0a10`, surface `#1a1920`, border `#2a2833`, accent `#6657d4`,
  accent light `#9388e8`, text soft `#cac8f3`, muted `#8a87a8`, success `#5be6a8`
- **Type** Archivo (display, variable `wdth` axis) · DM Sans (prose) ·
  DM Mono (labels) · Cormorant Garamond italic (the case-study pull quote only)
- **Dark only.** A light palette exists in `tokens.css` under
  `[data-theme="light"]`, taken from the HF design system, but nothing sets that
  attribute — there is no theme toggle. It is there so light mode is a small job
  later, not a rewrite. Note `--accent-light` has to resolve darker on light
  (#4a3da8) because #9388e8 is only 2.6:1 on the light canvas.

### Contrast rule

`#6657d4` and `#5a5870` fail 4.5:1 on this canvas and must never be used for
small text. Small labels use `#8a87a8` (5.3:1) or `#9388e8` (6.0:1); the accent
is reserved for borders, fills and large type.

## Motion

All motion lives in `components/Motion.jsx` (GSAP + ScrollTrigger), opted into
per element with data attributes — `data-anim="up"`, `data-hero-line`,
`data-glow`, `data-count`, `data-scrub`, `data-glyph`, `data-reveal`,
`data-cta-rule`, `data-dot`. `prefers-reduced-motion` skips every entry
animation and leaves content in its final state.

The one exception is the work accordion, whose open/close height is a CSS
`grid-template-rows` transition rather than a tween. GSAP cannot animate from
`height: auto`, and a tween that never ticks (backgrounded tab) leaves the panel
at the wrong height. The CSS version's collapsed/expanded state is a computed
style, so it is always correct.

### The motion toggle

The header carries a motion control. It writes `data-motion="full" | "reduced"`
on `<html>` and persists to `localStorage` under `hf-motion`; the bootstrap
script in the layout replays it before first paint. The default follows
`prefers-reduced-motion`, so the control is an override, not a replacement.

`data-motion` is the single source of truth — `Motion.jsx` reads it rather than
the media query, and the CSS gates its transitions on it too. Turning motion off
mid-animation kills tweens, so the reduce path sweeps every selector in the
`ANIMATED` list with `clearProps: 'all'`; without that, an element caught
mid-tween is stranded at opacity 0.

`js-anim` on `<html>` is what hides pre-animation state, and the bootstrap adds
it *only* when motion is allowed. No-JS, system-reduced-motion and
user-reduced-motion visitors therefore never receive hidden content.
