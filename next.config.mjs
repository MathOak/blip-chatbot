/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    contractId: process.env.CONTRACT_ID,
    cookieKey: process.env.COOKIE_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flowbite.com',
        port: '',
        pathname: '/docs/images/**',
      },
      {
        protocol: 'https',
        hostname: 'flowbite.com',
        port: '',
        pathname: '/docs/images/**',
      },
    ],
  },
};

export default nextConfig;
