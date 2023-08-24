import React, { FC } from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  imageSrc: string;
}

const Card: FC<CardProps> = ({ title, imageSrc }) => {
  return (
    <div className="flex flex-col w-[9.25rem] h-[11.5rem] p-2 group">
      <div className="w-full h-[138px] overflow-hidden">
        <Image
          src={imageSrc}
          alt="Cubre Volante"
          width={147}
          height={147}
          className=" rounded-full"
        />
      </div>

      <div className="w-full h-[2.3125rem] overflow-hidden flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="font-oswald font-bold text-xs text-background-lm text-center line-clamp-1 ">
          {title.toUpperCase()}
        </h3>
      </div>
    </div>
  );
};

export default Card;
