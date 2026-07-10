/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the X-Powered-By header for security
  poweredByHeader: false,

  // Enable gzip/brotli compression
  compress: true,

  // Enable React strict mode
  reactStrictMode: true,

  // Production source maps disabled by default (keep .map files out of client bundles)
  productionBrowserSourceMaps: false,

  // Optimize images served via next/image
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000, // 1 year — immutable content-hashed images
  },

  // Bundle analysis
  experimental: {
    // Tree-shaking for barrel imports from lucide-react
    optimizePackageImports: ['lucide-react'],
  },

  // Cache headers for static assets
  async headers() {
    return [
      {
        source: '/:all*(woff2|woff|ttf|otf|eot)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(webp|avif|png|jpg|jpeg|gif|svg|ico)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig