import { useState, useEffect, useCallback } from 'react'
import { ACCENT_PRESETS } from './data/index.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import WorkGrid from './components/WorkGrid.jsx'
import About from './components/About.jsx'
import Training from './components/Training.jsx'
import SkillStack from './components/SkillStack.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CaseStudyDrawer from './components/CaseStudyDrawer.jsx'

function applyAccent(hex) {
  const p = ACCENT_PRESETS[hex] || ACCENT_PRESETS['#6657d4']
  const r = document.documentElement
  r.style.setProperty('--hf-accent', hex)
  r.style.setProperty('--hf-accent-light', p.hover)
  r.style.setProperty('--hf-accent-deep', p.deep)
  r.style.setProperty('--hf-accent-glow', p.glow)
  r.style.setProperty('--hf-accent-tint', p.tint)
}

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [accent] = useState('#6657d4')
  const [workLayout] = useState('editorial')   // 'editorial' | 'compact'
  const [heroVariant] = useState('evidenced')  // 'evidenced' | 'minimal'
  const [active, setActive] = useState('top')
  const [openCase, setOpenCase] = useState(null)

  // Apply theme
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  // Apply accent on mount
  useEffect(() => {
    applyAccent(accent)
  }, [accent])

  // Scroll-spy + reveal observer
  useEffect(() => {
    const ids = ['top', 'work', 'about', 'training', 'stack', 'contact']
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean)

    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.3
      let cur = 'top'
      for (const s of sections) {
        if (s.offsetTop <= y) cur = s.id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // Reveal animation
    const reveals = document.querySelectorAll('.reveal')
    const motionOK = window.matchMedia?.('(prefers-reduced-motion: no-preference)').matches
    if (motionOK) reveals.forEach(r => r.classList.add('pre-reveal'))

    const failsafe = setTimeout(() => {
      reveals.forEach(r => r.classList.add('is-in'))
    }, 400)

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('is-in'), i * 50)
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.05, rootMargin: '0px 0px -4% 0px' })
    reveals.forEach(r => obs.observe(r))

    return () => {
      window.removeEventListener('scroll', onScroll)
      obs.disconnect()
      clearTimeout(failsafe)
    }
  }, [workLayout, heroVariant])

  const goTo = useCallback((id) => {
    const el = id === 'top' ? document.documentElement : document.getElementById(id)
    if (!el) return
    const top = id === 'top' ? 0 : el.offsetTop - 40
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Nav
        theme={theme}
        onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
        onNavClick={goTo}
        active={active}
      />
      <Hero onCTA={goTo} variant={heroVariant} />
      <WorkGrid onOpen={setOpenCase} layout={workLayout} />
      <About />
      <Training />
      <SkillStack />
      <Contact />
      <Footer />
      <CaseStudyDrawer entry={openCase} onClose={() => setOpenCase(null)} />
    </>
  )
}
