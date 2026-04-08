/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
  },
  // Compress all responses
  compress: true,
  // Disable X-Powered-By header
  poweredByHeader: false,
  // Production source maps off (smaller JS)
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
