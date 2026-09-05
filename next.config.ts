import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/invite',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
