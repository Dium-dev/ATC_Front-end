import React, { FC } from "react";
import Image from "next/image";

interface CardProps {}

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Image product",
    price: "$35",
    color: "Black",
  },
];

const Card: FC<CardProps> = () => {
  return (
    <div className="relative w-[227px] h-[268px] border rounded-xl ">
      <img
        src={products[0].imageSrc}
        alt="Cubre Volante"
        className="object-center absolute w-[227px] h-[154px] border-t rounded-xl"
      />
      <div className="absolute bottom-0 flex flex-col h-[114px] w-full">
        <div className="w-[227px] h-[57px] p-[10px] overflow-hidden">
          <h3 className="w-[206px] h-[38px] font-oswald font-bold text-sm text-black ">
            Cubre Volante Alta Calidad Cuerina Cocido Negro Hilo Rojo casa
          </h3>
        </div>
        <div className="w-[227px] h-[33px]">
          <p className="font-oswald font-bold text-xl text-black text-center">
            $ 29500
          </p>
        </div>
        <div className="w-[227px] h-[27px] flex justify-between px-[10px] pb-[10px] ">
          <p className="font-oswald font-bold text-xs text-black">
            Performance
          </p>
          <p className="font-oswald font-bold text-xs text-black">
            Envío Gratis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
