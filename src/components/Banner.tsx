import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="relative h-360">
      <div className="absolute inset-0">
        <img
          src="/titulo.png" // Ruta de la imagen del título
          alt="Título del Blog"
          className="w-1920 transition-transform transform -translate-y-1/2" // Clases para el efecto de paralaje
        />
        <div className="bg-blue-500 h-full"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/titulo.png" // Ruta de la imagen del título
          alt="Título del Blog"
          className="w-1920 transition-transform transform -translate-y-1/2" // Clases para el efecto de paralaje
        />
      </div>
    </div>
  );
};

export default Banner;