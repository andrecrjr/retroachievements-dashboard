/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'retroachievements.org',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;