import Image from 'next/image';
import React from 'react';
import { Images } from '~/assets/img';

const Banner: React.FC = () => {
  return (
    <div className="bg-auto bg-center bg-fixed bg-no-repeat bg-banner flex items-center justify-center max-w-[1920px] mx-auto">
      <Image
        src={Images.banners.BannerTitle}
        alt="Título del Blog"
      />
    </div>
  );
};

export default Banner;
