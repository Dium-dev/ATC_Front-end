import React, { FC } from 'react';
import Image from 'next/image';
import ButtonComponent from '../button/button';

interface CardProps {
  title: string;
  price: string;
  nota: string;
  imageSrc: string;
}

const Card: FC<CardProps> = ({ title, price, nota, imageSrc }) => {
  return (
    <div className="flex flex-col w-[15.3125rem] h-[268px] pb-1 border border-background-lm   ">
      <Image
        src={imageSrc}
        alt="Cubre Volante"
        width={245}
        height={154}
        className="w-full h-[9.625rem]  "
      />

      <div className=" p-[0.625rem] w-full  h-[57px] overflow-hidden flex items-center justify-center">
        <h3 className="font-oswald font-bold text-sm text-background-lm text-center line-clamp-2 ">
          {title}
        </h3>
      </div>

      <div className="w-full  overflow-hidden h-[33px] pb-2">
        <p className="font-oswald font-bold text-xl text-background-lm text-center line-clamp-1">
          {`$ ${price}`}
        </p>
      </div>

      <div className="flex justify-between items-center px-[10px] pb-[5px] w-full h-[27px] gap-2 overflow-hidden">
        <p className=" font-oswald font-bold text-xs text-background-lm w-1/3  overflow-hidden line-clamp-1">
          {nota}
        </p>
        <ButtonComponent variant="red" text="Añadir al carrito" />
      </div>
    </div>
  );
};

export default Card;
