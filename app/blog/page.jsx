// Page: /blog — the post index.

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getAllPosts, formatPostDate } from '@/lib/blog'

export const metadata = {
  title: 'Writing',
  description:
    'Notes on UX research, design and building for the web — from Hannah Feehan, HF Design.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Writing · HF Design', url: '/blog', type: 'website' },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <>
      <Nav />
      <main id="main">
        <header className="wrap cs-top">
          <div data-anim="up" className="label">Writing</div>
          <h1 data-anim="up" className="cs-title">Notes on the work.</h1>
          <p data-anim="up" className="cs-lead">
            Research, design and build — written up as I go.
          </p>
        </header>

        <div className="wrap" style={{ paddingTop: 64, paddingBottom: 96 }}>
          {posts.length === 0 ? (
            <p className="label">Nothing published yet.</p>
          ) : (
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="post-row"
                    data-anim="up"
                  >
                    <div style={{ minWidth: 0 }}>
                      {post.pinned ? (
                        <span className="post-flag">featured</span>
                      ) : (
                        post.eyebrow && <div className="label">{post.eyebrow}</div>
                      )}
                      <h2>{post.title}</h2>
                      {post.excerpt && <p>{post.excerpt}</p>}
                    </div>
                    <span className="label" style={{ whiteSpace: 'nowrap' }}>
                      {formatPostDate(post.date)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
