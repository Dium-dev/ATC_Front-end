import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Images } from '~/assets/img';

const Banner: React.FC = () => {
  return (
    <section className='w-full bg-black'>
    <Link className="bg-cover bg-center bg-no-repeat bg-fixed bg-banner flex items-center justify-center max-w-[1920px] mx-auto" href={'https://actualizatucarro.blogspot.com'} target='_blank'>
      <Image
        src={Images.banners.BannerTitle}
        alt="Título del Blog"
      />
    </Link>
    </section>
  );
};

export default Banner;
