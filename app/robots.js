// robots.txt — points crawlers at the sitemap.

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://hfdesign.co.uk/sitemap.xml',
  }
}
