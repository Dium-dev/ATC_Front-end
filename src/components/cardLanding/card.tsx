import React, { FC } from "react";
import Image from "next/image";
import ButtonComponent from "../button/button";

interface CardProps {}

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/img/Actualizatucarro_Facebook.jpg",
    imageAlt: "Image product",
    price: "$35",
    color: "Black",
  },
];
// 227 + 268

const Card: FC<CardProps> = () => {
  return (
    <div className="flex flex-col w-1/2 max-w-sm  pb-3 gap-2  border border-background-lm rounded-xl md:w-[14.1875rem] md:h-[268px] ">
      <Image
        src={products[0].imageSrc}
        alt="Cubre Volante"
        width={227}
        height={154}
        className="w-full h-[154px] rounded-t-xl "
      />

      <div className=" p-[0.625rem] w-full  overflow-hidden">
        <h3 className="font-oswald font-bold text-sm text-background-lm  ">
          Cubre Volante Alta Calidad Cuerina Cocido Negro
        </h3>
      </div>

      <div className="w-full  overflow-hidden">
        <p className="font-oswald font-bold text-xl text-background-lm text-center ">
          $ 29500
        </p>
      </div>

      <div className="flex justify-between items-center px-[10px] pb-[5px] w-full  overflow-hidden">
        <p className=" font-oswald font-bold text-xs text-background-lm ">
          Performance
        </p>
        <ButtonComponent variant="red" text="Añadir al carrito" />
      </div>
    </div>
  );
};

export default Card;
