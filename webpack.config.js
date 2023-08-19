const path = require('path');

module.exports = {
  // ... Otras configuraciones de Webpack ...

  resolve: {
    extensions: ['.js', '.ts', '.webp'], // Agrega la extensión .webp
  },

  module: {
    rules: [
      // ... Otras reglas ...

      {
        test: /\.webp$/,
        use: 'file-loader', // O utiliza otros loaders según tus necesidades
      },
    ],
  },
};