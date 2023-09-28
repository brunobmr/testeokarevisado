/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
}

module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  experimental: {
    forceSwcTransforms: true,
  }
}