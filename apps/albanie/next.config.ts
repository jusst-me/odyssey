import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@odyssey/ui', '@odyssey/cms', '@odyssey/tradetracker', '@odyssey/utils'],
};

export default nextConfig;
