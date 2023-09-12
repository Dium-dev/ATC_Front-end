import Image from 'next/image';
import React from 'react';
import { Images } from '~/assets/img';

const Banner: React.FC = () => {
  return (
    <div className="relative h-360">
      <div className=" inset-0">
        {/* Fondo del banner (imagen) */}
        <div className="h-full bg-no-repeat bg-bottom">
          <Image
            src={Images.banners.BannerBg}
            alt="Fondo del Blog"
            layout="fill" // Ocupar todo el espacio disponible
            objectFit="cover" // Ajustar la imagen sin distorsionarla
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-background-dm opacity-50"></div>
      <div className="inset-0 flex items-center justify-center">
        {/* Imagen del título con efecto de paralaje */}
        <Image
          src={Images.banners.BannerTitle}
          alt="Título del Blog"
          className="w-1920 transition-transform transform -translate-y-1/5" // Clases para el efecto de paralaje
        />
      </div>
    </div>
  );
};

export default Banner;