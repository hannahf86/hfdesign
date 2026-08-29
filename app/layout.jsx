// Root layout — fonts, global styles, motion layer, site-wide metadata.
// The 2026 redesign is dark-only: there is no theme toggle and no theme
// bootstrap script. The light-mode palette is intentionally not shipped.

import { Archivo, DM_Sans, DM_Mono, Cormorant_Garamond } from 'next/font/google'
import Motion from '@/components/Motion'
import '@/styles/app.css'

// Display face. The design uses the width axis heavily — 'wdth' 100 for lead
// lines, 112 for headings, 118 for the hero — so the variable axis is required.
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

// Used exactly once, on the case-study pull quote.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://hfdesign.co.uk'),
  title: {
    default: 'Hannah Feehan — UX Engineer',
    template: '%s · Hannah Feehan',
  },
  description:
    'UX designer and full-stack developer in York. I design interfaces and ship the code behind them. Open to UX and product design roles.',
  openGraph: {
    siteName: 'Hannah Feehan',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/hf-monogram.svg' },
}

// Applies the stored motion preference before first paint, and only then marks
// the document as animating. `js-anim` is what the CSS uses to hide
// pre-animation state, so it is added ONLY when motion is allowed — no-JS and
// reduced-motion visitors never get hidden content.
//
// The watchdog is the safety net: if the app bundle never boots — blocked
// script, network failure, a runtime error — nothing would ever animate the
// hidden elements back in and the page would render blank. After 2.5s the class
// is removed and everything falls back to its final CSS state. Motion.jsx
// cancels the watchdog as soon as it has taken over.
const MOTION_BOOTSTRAP = `(function(){try{
var d=document.documentElement,s=null;
try{s=localStorage.getItem('hf-motion')}catch(e){}
var m=(s==='reduced'||s==='full')?s:(matchMedia('(prefers-reduced-motion: reduce)').matches?'reduced':'full');
d.dataset.motion=m;
if(m==='full'){d.classList.add('js-anim');window.__hfMotionWatchdog=setTimeout(function(){d.classList.remove('js-anim')},2500)}
}catch(e){}})()`

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${dmSans.variable} ${dmMono.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOTSTRAP }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <Motion />
      </body>
    </html>
  )
}
