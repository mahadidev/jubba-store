/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "jubbas.vercel.app",
      "vercel.app",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
