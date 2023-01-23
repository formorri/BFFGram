/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


const path = require('path')

module.exports = {
  assetPrefix: './',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
  },
}

// module.exports = {
//   webpack: (config) => {
//     config.resolve.alias['constants'] = path.join(__dirname, 'src/constants');
//     return config;
//   },
// };

// /** @type {import('next').NextConfig} */

// const path = require('path');

// module.exports = {
//   reactStrictMode: true,
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
//   images: {
//     unoptimized: true,
//   },
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(mp4|mov|png|jpg|gif)$/i,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: false, // in bytes
//         },
//       },
//     },
//     {
//         test: /\.pdf$/,
//         use: {
//           loader: 'file-loader',
//         },
//     });
//     return config;
//   },
// };


