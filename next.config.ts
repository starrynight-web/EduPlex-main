import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // Image optimization and caching
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400, // Cache images for 1 day
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false, // Let Vercel handle ETags for better caching
  
  // Experimental features for performance
  experimental: {
    optimizeCss: true, // Optimize CSS bundles
  },
};

export default nextConfig;
