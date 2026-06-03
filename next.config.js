/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com', 'cdn.sanity.io'],
  },
  async redirects() {
    return [
      {
        source: '/tjenester/kjoretoydekor',
        destination: '/tjenester/dekor-til-kjoretoy',
        permanent: true,
      },
    ]
  },
}
