/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ebayimg.com',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
        protocol: 'https',
        hostname: '1000marcas.net',
      },
      {
        protocol: 'https',
        hostname: 'www.autopista.es',
      },
      {
        protocol: 'https',
        hostname: 'assets.stickpng.com',
      },
      {
        protocol: 'https',
        hostname: 'media.gm.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'postlmg.cc',
      },
      // Agrega otras configuraciones de dominio según sea necesario
    ],
  },
};

module.exports = nextConfig;