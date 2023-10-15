import Image from 'next/image';
import { useState } from 'react';
import { CategoryProps } from '~/types/products';

const CardCategory = ({ name, image, isHovered, handleCardHovering, handleCardLeave }: any) => {

    return (
        <div
            className="flex flex-col items-center m-8 md:mx-16 w-[50%] hover:cursor-pointer"
            onMouseEnter={handleCardHovering}
            onMouseLeave={handleCardLeave}
        >
            <div className={`relative min-w-full bg-background-lm aspect-square rounded-full box-border border-[3px] border-primary-dm ${isHovered === name ? "border-secondary-lm" : ""}`}>
                <Image src={image} alt="Imagen de Categoria" layout="fill" />
            </div>
            <h3 className={`mt-2 text-[calc(2vw+0.5rem+0.5vh)] xs:text-[clamp(0.5rem,1.25rem,3rem)] font-bold ${isHovered === name ? "underline" : ""}`}>{name}</h3>
        </div>
    );
};

export default CardCategory;