/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local assets only for now; formats kept lean for the webp/png already in /public.
    formats: ['image/avif', 'image/webp'],
  },

  // The "How I use AI" post was published and then removed, so anyone holding
  // the link — or arriving from a search result that has not been recrawled —
  // lands on the index rather than a 404. Permanent, so search engines drop
  // the old URL rather than keeping it and retrying.
  async redirects() {
    return [{ source: '/blog/how-i-use-ai', destination: '/blog', permanent: true }]
  },
}

export default nextConfig
