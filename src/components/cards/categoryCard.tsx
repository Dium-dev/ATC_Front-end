import React, { FC } from "react";

interface CardPropsCategory {
  name: string;
  description: string;
  imageSrc: string;
}

const CardCategory: FC<CardPropsCategory> = ({ name, description, imageSrc }) => {
  return (
    <div className="flex justify-start items-center w-[46%] h-[300px] ml-8 mr-8 mt-10 bg-inherit overflow-hidden hover:bg-primary-lm hover:text-secondary-background">
      <div className="flex-shrink-0 w-[55%] p-[0.625rem]">
        <h3 className="font-bold text-5xl mb-5  line-clamp-2 ">
          {name}
        </h3>
        <p className="text-lg overflow-hidden">
          {description}
        </p>
      </div>
      <div className=" w-[55%] bg-secondary-background h-[100%] flex justify-start   ">
        <img
          src={imageSrc}
          alt="Imagen de Categoria"
          className="w-full h-[15.625rem]"
          style={{ alignSelf: "center", marginLeft: "auto" }}
        />
      </div>
    </div>
  );
};

export default CardCategory;


