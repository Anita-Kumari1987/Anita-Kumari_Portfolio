import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  // Enable React Strict Mode for better development practices
  reactStrictMode: true,
  // Enable page-level ISR by default
  staticPageGenerationTimeout: 120,
  // Optimize fonts
  optimizeFonts: true,
  // Enable aggressive browser caching
  headers: async () => [
    {
      source: '/:all*(svg|jpg|png)',
      locale: false,
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, must-revalidate',
        },
      ],
    },
  ],
  // Minimize JavaScript bundles
  swcMinify: true,
};

export default nextConfig;
