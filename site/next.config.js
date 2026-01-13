/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Edgeworks',
    description: 'Custom Kasm Images at edgeworks. No warranties',
    icon: '/img/logo.svg',
    listUrl: 'https://edgeworks.github.io/kasm-registry/',
    contactUrl: 'https://github.com/edgeworks/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
