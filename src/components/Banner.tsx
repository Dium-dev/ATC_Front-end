import Image from 'next/image';
import React from 'react';
import { Images } from '~/assets/img';

const Banner: React.FC = () => {
  return (
      <div className="bg-cover bg-center bg-fixed bg-no-repeat bg-banner w-full flex items-center justify-center">
          <Image
            src={Images.banners.BannerTitle}
            alt="Título del Blog"
            className="w-1920"
            />
      </div>
          
      
  );
};

export default Banner;
