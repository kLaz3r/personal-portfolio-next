const withPWA = require('next-pwa')({
  dest: 'public',
  scope: '/',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withPWA(nextConfig);
