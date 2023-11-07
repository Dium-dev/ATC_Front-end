import Image from 'next/image';
import Link from 'next/link';

const socialMediaImages = [
  {
    name: 'Instagram',
    image: 'https://i.postimg.cc/cLC0Nzb2/instagram.png',
    route: 'https://instagram.com/',
  },
  {
    name: 'Facebook',
    image: 'https://i.postimg.cc/XYP3N8MJ/facebook.png',
    route: 'https://facebook.com/',
  },
  {
    name: 'Twitter',
    image: 'https://i.postimg.cc/bJxjTfZD/twiter.png',
    route: 'https://twitter.com/',
  },
  {
    name: 'Pinterest',
    image: 'https://i.postimg.cc/5tFJXC1m/pinterest.png',
    route: 'https://pinterest.com/',
  },
  {
    name: 'Youtube',
    image: 'https://i.postimg.cc/V6Q8nkkP/youtube.png',
    route: 'https://youtube.com/',
  },
];

import React, { FC } from 'react';

interface ImagesListProps {}

const ImagesList: FC<ImagesListProps> = () =>
  socialMediaImages.map((socialMedia) => (
    <Link href={socialMedia.route} className="hover:scale-[1.2] transition-all duration-300" key={socialMedia.name}>
      <Image
        src={socialMedia.image}
        width={40}
        height={40}
        alt=""
      />
    </Link>
  ));

export default ImagesList;
