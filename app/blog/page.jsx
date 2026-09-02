// Page: /blog — the post index, with search and category filtering.

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BlogFilter from '@/components/BlogFilter'
import { getAllPosts, formatPostDate, POST_CATEGORIES } from '@/lib/blog'

export const metadata = {
  title: 'Writing',
  description:
    'Notes on UX research, design and building for the web — from Hannah Feehan, HF Design.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Writing · HF Design', url: '/blog', type: 'website' },
}

export default function BlogIndexPage() {
  // The search text is assembled here rather than in the browser: the filter
  // only ever needs one lowercase string per post, and the body never has to
  // cross into the client bundle.
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt || '',
    pinned: post.pinned,
    categories: post.categories || [],
    readingTime: post.readingTime || null,
    cover: post.cover || null,
    coverAlt: post.coverAlt || '',
    dateLabel: formatPostDate(post.date),
    haystack: [post.title, post.subtitle, post.excerpt, ...(post.categories || []), ...(post.tags || [])]
      .filter(Boolean)
      .join(' ')
      .toLowerCase(),
  }))

  return (
    <>
      <Nav />
      <main id="main">
        <header className="wrap cs-top">
          <div data-anim="up" className="label">Writing</div>
          <h1 data-anim="up" className="cs-title">Notes on the work.</h1>
          {/* Wider than the case study leads: this one is a full sentence
              rather than a standfirst, and 30ch breaks it into a narrow column. */}
          <p data-anim="up" className="cs-lead" style={{ maxWidth: '44ch' }}>
            My thoughts about research, design, development, and my journey to
            becoming a UX Engineer.
          </p>
        </header>

        <div className="wrap" style={{ paddingTop: 56, paddingBottom: 96 }}>
          {posts.length === 0 ? (
            <p className="label">Nothing published yet.</p>
          ) : (
            <BlogFilter posts={posts} categories={POST_CATEGORIES} />
          )}
        </div>

        {/* Section: closing call to action, from the redesign. */}
        <section className="wrap blog-cta">
          <div>
            <h2 data-anim="up">New notes land every few weeks.</h2>
            <p data-anim="up">
              Mostly research write-ups, accessibility notes, and what I got wrong on the way to
              shipping something.
            </p>
          </div>
          <div data-anim="up" className="blog-cta-actions">
            <Link href="/#contact" className="btn btn-primary">
              say hello <span aria-hidden="true">→</span>
            </Link>
            <Link href="/#work" className="btn btn-ghost">
              see the work
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
