/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
