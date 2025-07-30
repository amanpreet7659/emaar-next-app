/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'cdn.builder.io'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
