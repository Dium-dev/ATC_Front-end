import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CategoryProps } from '~/types/products';
import { useProductStore } from '~/store/productStore';


const CardCategory = ({ id, name, image, isHovered, handleCardHovering, handleCardLeave }: any) => {


    const updateBody = useProductStore((state) => state.updateBody);

    return (
        <Link
            href={"/products"}
            onClick={() => updateBody("categoryId", id)}
            className={`
                relative flex flex-col items-center w-full p-4 overflow-hidden bg-background-lm dark:bg-background-dm outline outline-[#D3D3D3] transition-transform&shadow duration-300
                ${isHovered === name ? "z-40 cursor-pointer scale-105 outline-[0px] shadow-category-lm dark:shadow-category-dm" : "outline-[.5px]"}`
            }
            onMouseEnter={handleCardHovering}
            onMouseLeave={handleCardLeave}
        >
            <div className="z-30 relative w-[60%] aspect-square m-4">
                <Image src={image} layout="fill" alt="Imagen de Categoria" style={{ transition: "filter cubic-bezier(0.4, 0, 0.2, 1) 150ms", filter: `${isHovered === name ? "brightness(120%)" : "none"}` }} />
            </div>
            <h3 className={`
                z-30 bottom-[5%] left-1/2 text-[clamp(0.5rem,calc(1vw+0.4rem),2.5rem)] ms:text-[clamp(0.5rem,calc(0.5vw+0.7rem),2.5rem)] xxl:text-[clamp(0.5rem,calc(0.25vw+0.75rem),2.5rem)] font-bold uppercase
                ${isHovered === name ? "text-background-lm dark:text-background-dm" : ""}
                `}>{name}</h3>
            <div className={`absolute bottom-0 left-0 w-full bg-background-dm dark:bg-background-lm origin-bottom ${isHovered === name ? "h-full opacity-50" : "h-0 opacity-0"} transition-all duration-700`} />
        </Link>
    );
};

export default CardCategory;