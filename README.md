# HF Design Portfolio

A Vite + React portfolio for Hannah Feehan / HF Design.

## Quick start

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

Output goes to `dist/` — drop it on Vercel, Netlify, or any static host.

## Deploy to Vercel (recommended)

1. Push the project to GitHub
2. Import the repo in [vercel.com](https://vercel.com)
3. Framework preset: **Vite** (auto-detected)
4. Hit Deploy — done

## Project structure

```
src/
  components/
    Nav.jsx             Sticky pill nav with scroll-spy + theme toggle
    Hero.jsx            Animated headline, stats row, CTAs
    CaseVisuals.jsx     Micro browser-frame mockups for each case card
    WorkGrid.jsx        Alternating editorial cards (or compact list)
    CaseStudyDrawer.jsx Slide-in case detail panel
    About.jsx           Portrait card + bio
    Training.jsx        Credentials, partners, training photos
    SkillStack.jsx      Stack rows with highlighted/outlined pills
    Contact.jsx         Contact links + enquiry form
    Footer.jsx          Footer with studio + social links
  data/
    index.js            All case study data, stack, credentials — edit here
  styles/
    tokens.css          Design tokens (colors, type, spacing, motion)
    app.css             Global styles built on tokens
  App.jsx               Root component — theme, scroll-spy, reveal
  main.jsx              Entry point
public/
  assets/               Images (portrait, case visuals, training photos)
```

## Customising content

All copy and data lives in `src/data/index.js` — case studies, stack pills,
credentials, training topics. Edit there and the UI updates automatically.

## Adding real case study pages

Currently the case drawer opens inline. To add dedicated `/case/lucent` routes,
install React Router and create a `CasePage.jsx` — the body content is already
in each case object in `data/index.js`.

## Design system

Built on the HF Design token system (`src/styles/tokens.css`):
- **Background**: `#0c0a10` (dark) / `#f8f7f4` (light)
- **Accent**: `#6657d4` purple — change `--hf-accent` in tokens or call `applyAccent()` in App.jsx
- **Type**: Space Grotesk (headings) · DM Sans (body) · JetBrains Mono (labels)
- Light mode supported via `[data-theme="light"]` on `<html>`
