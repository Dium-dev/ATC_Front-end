import React, { FC } from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  imageSrc: string;
}

const BrandCard: FC<CardProps> = ({ title, imageSrc }) => {
  return (
    <>
      <Image
        src={imageSrc}
        alt={`imagen de la marca ${title}`}
        width={100}
        height={100}
        className="min-w-100"
      />
    </>
  );
};

export default BrandCard;
