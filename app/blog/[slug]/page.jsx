// Page: /blog/[slug] — a single post. Reuses the case study prose styles.

import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CaseMarkdown from '@/components/case-study/CaseMarkdown'
import { getPost, getPostSlugs, getAllPosts, formatPostDate } from '@/lib/blog'

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  const title = post.seo?.title || post.title
  const description = post.seo?.description || post.excerpt || ''
  const url = `/blog/${post.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: post.date || undefined,
      ...(post.seo?.ogImage ? { images: [{ url: post.seo.ogImage }] } : {}),
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const all = getAllPosts()
  const index = all.findIndex((p) => p.slug === post.slug)
  const next = all[index + 1] ?? null

  return (
    <>
      <Nav />
      <main id="main">
        <header className="wrap cs-top">
          <Link href="/blog" data-anim="up" className="cs-back">
            ← all writing
          </Link>

          {post.eyebrow && (
            <div data-anim="up" className="label" style={{ marginTop: 28 }}>
              {post.eyebrow}
            </div>
          )}

          <h1 data-anim="up" className="cs-title" style={{ maxWidth: '20ch' }}>
            {post.title}
          </h1>

          <div data-anim="up" className="cs-byline">
            <time dateTime={post.date || undefined}>{formatPostDate(post.date)}</time>
            {post.readingTime && (
              <>
                <span className="cs-sep" aria-hidden="true" />
                <span>{post.readingTime}</span>
              </>
            )}
            {post.tags?.length > 0 && (
              <>
                <span className="cs-sep" aria-hidden="true" />
                <span>{post.tags.join(' · ')}</span>
              </>
            )}
          </div>
        </header>

        <div className="wrap" style={{ paddingTop: 56 }}>
          <article style={{ maxWidth: 'var(--prose)' }}>
            <CaseMarkdown headingLevel={2}>{post.body}</CaseMarkdown>
          </article>

          <div className="cs-next" style={{ maxWidth: 'var(--prose)' }}>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 28 }}>
              <p style={{ fontSize: 13.5, marginBottom: 24 }}>
                Thanks for reading. Get in touch to talk through a project.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/#contact" className="btn btn-primary">
                  hannahfeehan.dev@gmail.com →
                </Link>
                {next && (
                  <Link href={`/blog/${next.slug}`} className="btn btn-ghost">
                    Next: {next.title} →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
