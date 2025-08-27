import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable 404 page generation for static export
  generateBuildId: async () => {
    return 'jam-band-landing-page'
  },
}

export default nextConfig
