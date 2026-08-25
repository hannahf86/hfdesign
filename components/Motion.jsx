'use client'

// Component: Motion — the whole GSAP layer, ported from the design prototype.
// Mounted once in the root layout and re-run on every route change, which is the
// production equivalent of the prototype rebuilding its triggers on route state.
//
// Every animation is opt-in via a data attribute on the markup:
//   data-anim="up"    fade + rise on entry
//   data-hero-line    mask-up reveal (child element is the moving part)
//   data-glow         hero glow: parallax + slow breathe
//   data-count        count up to data-to
//   data-scrub        brighten word by word on scroll
//   data-glyph        draw an SVG line glyph (data-draw / data-tick / data-pop / data-align)
//   data-reveal       stagger direct children
//   data-cta-rule     hairline wipe + travelling dot
//   data-dot          pulsing availability ring
//   data-nav          header fill darkens past 40px
//   data-hero-chars   per-character mask reveal + variable width-axis settle
//   data-rule         section hairline wipes in from the left
//   data-chips        stagger a row of chips in
//
// prefers-reduced-motion skips all entry animation and leaves content in its
// final state — non-negotiable given the accessibility positioning.

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Everything the motion layer may leave inline styles on. Switching motion off
// kills tweens mid-flight, so every one of these has to be swept clean or an
// element can be stranded at opacity 0.
const ANIMATED = [
  '[data-anim="up"]',
  '[data-reveal="1"] > *',
  '[data-hero-line] > *',
  '.hero-char',
  '[data-chips] > *',
  '[data-rule]',
  '[data-panel-stagger] > *',
  '[data-panel-aside] > *',
  '[data-glyph] *',
  '[data-glow]',
].join(', ')

export default function Motion() {
  const pathname = usePathname()
  // Bumped when the header's motion toggle fires, so the layer re-runs
  // immediately instead of waiting for the next navigation.
  const [pref, setPref] = useState(0)

  useEffect(() => {
    const onChange = () => setPref((n) => n + 1)
    window.addEventListener('hf:motion-change', onChange)
    return () => window.removeEventListener('hf:motion-change', onChange)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    // `data-motion` is the single source of truth: the bootstrap script seeds it
    // from the stored preference, falling back to the system setting.
    const reduce = root.dataset.motion === 'reduced'

    let pointerCleanup = null

    // The motion layer is alive, so the blank-page watchdog in the document head
    // is no longer needed.
    if (window.__hfMotionWatchdog) {
      clearTimeout(window.__hfMotionWatchdog)
      window.__hfMotionWatchdog = null
    }

    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.getAll().forEach((t) => t.kill())

    // The header fill is not an entry animation, so it runs even under
    // reduced motion — it is a state change, not decoration.
    // Toggling a class rather than tweening a literal colour keeps the header
    // correct in both themes — the fill and border come from tokens.
    const nav = document.querySelector('[data-nav]')
    if (nav) {
      ScrollTrigger.create({
        start: 40,
        end: 'max',
        onToggle: (self) => nav.classList.toggle('is-scrolled', self.isActive),
      })
      nav.classList.toggle('is-scrolled', window.scrollY > 40)
    }

    if (reduce) {
      root.classList.remove('js-anim')
      gsap.globalTimeline.clear()
      gsap.set(ANIMATED, { clearProps: 'all' })
      // The word-scrub writes opacity straight onto spans it created, so those
      // need resetting too or the statement stays greyed out.
      document.querySelectorAll('[data-scrub] span').forEach((el) => {
        el.style.opacity = '1'
      })
      return () => ScrollTrigger.getAll().forEach((t) => t.kill())
    }

    // Motion is allowed: re-arm the class that hides pre-animation state, in
    // case the visitor has just switched it back on.
    root.classList.add('js-anim')

    /**
     * Run `fn` now if the element is already within 93% of the viewport,
     * otherwise once when it scrolls in. This is what keeps reveals correct
     * after a client-side navigation — an element already on screen at mount
     * would never fire a scroll trigger.
     */
    const onView = (el, fn) => {
      if (!el) return
      if (el.getBoundingClientRect().top < window.innerHeight * 0.93) {
        fn()
        return
      }
      ScrollTrigger.create({ trigger: el, start: 'top 93%', once: true, onEnter: fn })
    }

    const ctx = gsap.context(() => {
      // Hero lines mask up out of their overflow-hidden parent.
      gsap.utils.toArray('[data-hero-line]').forEach((el, i) => {
        const inner = el.firstElementChild || el
        gsap.fromTo(
          inner,
          { yPercent: 118, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.05, ease: 'expo.out', delay: 0.08 + i * 0.11 },
        )
      })

      // Hero glow: fade in, then breathe forever; parallax on scroll.
      gsap.utils.toArray('[data-glow]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.85 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.6,
            ease: 'power2.out',
            onComplete: () => {
              gsap.to(el, {
                scale: 1.06,
                opacity: 0.86,
                duration: 9,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
              })
            },
          },
        )
        gsap.to(el, {
          yPercent: 28,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      gsap.utils.toArray('[data-anim="up"]').forEach((el) => {
        onView(el, () =>
          gsap.fromTo(el, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }),
        )
      })

      gsap.utils.toArray('[data-count]').forEach((el) => {
        const to = parseFloat(el.getAttribute('data-count'))
        if (Number.isNaN(to)) return
        const o = { v: 0 }
        onView(el, () =>
          gsap.to(o, {
            v: to,
            duration: 1.3,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = String(Math.round(o.v))
            },
          }),
        )
      })

      // Statement brightens word by word as it scrolls through.
      gsap.utils.toArray('[data-scrub]').forEach((el) => {
        if (!el.dataset.split) {
          const words = el.textContent.split(/(\s+)/)
          el.textContent = ''
          words.forEach((w) => {
            if (/^\s+$/.test(w)) {
              el.appendChild(document.createTextNode(w))
              return
            }
            const s = document.createElement('span')
            s.textContent = w
            s.style.opacity = '0.16'
            s.style.display = 'inline-block'
            el.appendChild(s)
          })
          el.dataset.split = '1'
        } else {
          // Already split from a previous run — put the words back to their
          // dimmed starting state so the scrub reads correctly again.
          el.querySelectorAll('span').forEach((w) => {
            w.style.opacity = '0.16'
          })
        }
        gsap.to(el.querySelectorAll('span'), {
          opacity: 1,
          ease: 'none',
          stagger: 0.04,
          scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 55%', scrub: 0.4 },
        })
      })

      // Line-drawn SVG glyphs in the AI section.
      gsap.utils.toArray('[data-glyph]').forEach((svg) => {
        const paths = svg.querySelectorAll('[data-draw]')
        paths.forEach((p) => {
          const L = p.getTotalLength ? p.getTotalLength() : 0
          if (L) gsap.set(p, { strokeDasharray: L, strokeDashoffset: L })
        })
        const ticks = svg.querySelectorAll('[data-tick]')
        const pop = svg.querySelectorAll('[data-pop]')
        const align = svg.querySelectorAll('[data-align]')
        if (ticks.length) gsap.set(ticks, { opacity: 0 })
        if (pop.length) gsap.set(pop, { scale: 0, transformOrigin: '50% 50%' })

        onView(svg, () => {
          gsap.to(paths, { strokeDashoffset: 0, duration: 0.9, ease: 'power2.out', stagger: 0.13 })
          if (ticks.length) {
            gsap.fromTo(
              ticks,
              { opacity: 0, y: -4 },
              { opacity: 1, y: 0, duration: 0.42, ease: 'power2.out', stagger: 0.22 },
            )
          }
          if (pop.length) gsap.to(pop, { scale: 1, duration: 0.5, ease: 'back.out(2)', delay: 0.75 })
          if (align.length) {
            gsap.fromTo(
              align,
              { x: (i) => (i < 2 ? -12 : 12), opacity: 0.25 },
              { x: 0, opacity: 1, duration: 0.85, ease: 'power3.out', stagger: 0.12, delay: 0.3 },
            )
          }
        })
      })

      gsap.utils.toArray('[data-reveal="1"]').forEach((el) => {
        onView(el, () =>
          gsap.fromTo(
            el.children,
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.62, ease: 'power2.out', stagger: 0.11 },
          ),
        )
      })

      // Contact hairline wipes in, then a dot travels its length once.
      gsap.utils.toArray('[data-cta-rule]').forEach((rule) => {
        const dot = rule.querySelector('[data-cta-dot]')
        onView(rule, () => {
          gsap.fromTo(rule, { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: 'expo.out' })
          if (dot) {
            gsap.fromTo(
              dot,
              { left: '0%', xPercent: 0 },
              { left: '100%', xPercent: -100, duration: 2.6, ease: 'power1.inOut', delay: 0.75 },
            )
          }
        })
      })

      // ---- Hero display: per-character mask reveal ----
      // The letters rise out of the h1's overflow while the variable width axis
      // expands from condensed to the design's 118. Two properties, one gesture.
      const heroDisplay = document.querySelector('[data-hero-chars]')
      if (heroDisplay) {
        const chars = heroDisplay.querySelectorAll('.hero-char')
        gsap.set(chars, { yPercent: 130, opacity: 0 })
        gsap.to(chars, {
          yPercent: 0,
          opacity: 1,
          duration: 1.15,
          ease: 'expo.out',
          stagger: 0.045,
          delay: 0.12,
        })
        gsap.fromTo(
          heroDisplay,
          { '--wdth': 88 },
          { '--wdth': 118, duration: 1.9, ease: 'expo.out', delay: 0.12 },
        )
      }

      // ---- Section hairlines wipe in ----
      gsap.utils.toArray('[data-rule]').forEach((rule) => {
        gsap.set(rule, { scaleX: 0 })
        onView(rule, () =>
          gsap.to(rule, { scaleX: 1, duration: 1.1, ease: 'expo.out' }),
        )
      })

      // ---- Stack chips arrive in sequence ----
      gsap.utils.toArray('[data-chips]').forEach((row) => {
        const chips = row.children
        gsap.set(chips, { opacity: 0, y: 10 })
        onView(row, () =>
          gsap.to(chips, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
            stagger: 0.035,
          }),
        )
      })

      // ---- Hero glow drifts toward the pointer ----
      // Fine pointers only, and small enough to read as depth rather than a toy.
      const glowEl = document.querySelector('[data-glow]')
      if (glowEl && window.matchMedia('(pointer: fine)').matches) {
        const onMove = (e) => {
          const x = e.clientX / window.innerWidth - 0.5
          const y = e.clientY / window.innerHeight - 0.5
          gsap.to(glowEl, {
            x: x * 70,
            y: y * 45,
            duration: 1.4,
            ease: 'power3.out',
            overwrite: 'auto',
          })
        }
        window.addEventListener('pointermove', onMove, { passive: true })
        pointerCleanup = () => window.removeEventListener('pointermove', onMove)
      }

      gsap.utils.toArray('[data-dot]').forEach((el) => {
        gsap.to(el, {
          boxShadow: '0 0 0 5px rgba(91,230,168,0.16)',
          duration: 1.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })
    })

    ScrollTrigger.refresh()

    return () => {
      if (pointerCleanup) pointerCleanup()
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [pathname, pref])

  return null
}
