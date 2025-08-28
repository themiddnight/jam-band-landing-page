import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Removed static export to enable API routes
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  generateBuildId: async () => {
    return 'jam-band-landing-page'
  },
}

export default nextConfig
