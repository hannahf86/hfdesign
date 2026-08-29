// Page: 404 — keeps the site chrome so a wrong URL isn't a dead end.

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="wrap cs-top" style={{ paddingBottom: 96 }}>
        <div className="label">error 404</div>
        <h1 className="cs-title" style={{ maxWidth: '14ch' }}>
          That page isn&rsquo;t here.
        </h1>
        <p className="cs-lead">The link may be out of date, or the page may have moved.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 40 }}>
          <Link href="/" className="btn btn-primary">
            back to the homepage →
          </Link>
          <Link href="/#work" className="btn btn-ghost">
            see selected work
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
