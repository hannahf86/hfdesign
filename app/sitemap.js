// Sitemap — homepage plus one entry per case study, generated from /content.

import { getAllCaseStudies } from '@/lib/case-studies'
import { getAllPosts } from '@/lib/blog'

const BASE = 'https://hfdesign.co.uk'

export default function sitemap() {
  const now = new Date()

  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ...getAllCaseStudies().map((cs) => ({
      url: `${BASE}/work/${cs.slug}`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    })),
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    ...getAllPosts().map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : now,
      changeFrequency: 'yearly',
      priority: 0.5,
    })),
  ]
}
