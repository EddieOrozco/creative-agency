/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,  // ← This allows localhost images
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'creative-agency.local',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;