/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local assets only for now; formats kept lean for the webp/png already in /public.
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
