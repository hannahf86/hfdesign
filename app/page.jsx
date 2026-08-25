// Page: / — the single-scroll homepage.
// Block order and numbering follow the 2026 design: hero, selected work,
// experience, stack, how I use AI, contact.

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import SelectedWork from '@/components/SelectedWork'
import Experience from '@/components/Experience'
import SkillStack from '@/components/SkillStack'
import AIPractice from '@/components/AIPractice'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getAllWork } from '@/lib/work'

export const metadata = {
  alternates: { canonical: '/' },
}

export default function HomePage() {
  const work = getAllWork()

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <SelectedWork items={work} />
        <Experience />
        <SkillStack />
        <AIPractice />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
