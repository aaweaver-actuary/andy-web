/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['robohash.org', 'raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;
