import React, { FC } from "react";
import Image from "next/image";

interface CardPropsCategory {
  name: string;
  imageSrc: string;
}

const CardCategory: FC<CardPropsCategory> = ({ name, imageSrc }) => {
  return (
    <div className="flex w-[10rem] h-[200px] flex-col items-center overflow-hidden m-8">
      <div className="w-full h-[78%] relative">
        <Image
          src={imageSrc}
          alt="Imagen de Categoria"
          layout="fill"
          objectFit="cover"
        />
      </div>
        <div>
          <h3 className="font-bold text-2xl w-[100%] h-[22%] mt-2">
            {name}
          </h3>
        </div>
    </div>
  );
};

export default CardCategory;