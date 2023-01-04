/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


const path = require('path')

module.exports = {
  // assetPrefix: './',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
  },
}
