import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'sleigh.staymedia.ng' },
      { protocol: 'https', hostname: 'res.cloudinary.com' }
    ],
  },
  // Removed experimental.turbo to resolve config warnings
};

export default nextConfig;
