/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com', 'cdn.sanity.io'],
  },
  async redirects() {
    return [
      {
        source: '/tjenester/bird-free',
        destination: 'https://www.bird-free.no',
        permanent: true,
      },
    ]
  },
}
