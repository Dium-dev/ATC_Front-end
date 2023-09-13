/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.ebayimg.com',
      'i.postimg.cc',
      '1000marcas.net',
      'www.autopista.es',
      'assets.stickpng.com',
      'media.gm.com',
      'cdn-icons-png.flaticon.com'
    ], // Agrega aquí los dominios permitidos para las imágenes
  },
};

module.exports = nextConfig;
