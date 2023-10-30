import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Images } from '~/assets/img';

const Banner: React.FC = () => {
  return (
    <Link className="bg-auto bg-center bg-fixed bg-no-repeat bg-banner flex items-center justify-center max-w-[1920px] mx-auto" href={'https://actualizatucarro.blogspot.com'} target='_blank'>
      <Image
        src={Images.banners.BannerTitle}
        alt="Título del Blog"
      />
    </Link>
  );
};

export default Banner;
