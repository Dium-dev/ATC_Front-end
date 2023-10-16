'use client';
import { useState } from 'react';
import CardCategory from '../cards/categoryCard';
import { CategoryProps } from '~/types/products';

const CATEGORIES: CategoryProps[] = [
    {
        name: 'Farolas',
        image: 'https://i.postimg.cc/Gp1QbGmD/Cat04.png',
    },
    {
        name: 'Stops',
        image: 'https://i.postimg.cc/6qQcDK51/Cat05.png',
    },
    {
        name: 'Audio',
        image: 'https://i.postimg.cc/02bZn94z/Cat07.png',
    },
    {
        name: 'Exploradoras',
        image: 'https://i.postimg.cc/gcMN3xg9/Cat06.png',
    },
    {
        name: 'Exterior',
        image: 'https://i.postimg.cc/8P94nq8t/Cat03.png',
    },
    {
        name: 'Interior',
        image: 'https://i.postimg.cc/Sx9d0Dkq/Cat08.png',
    },
    {
        name: 'Bombillos',
        image: 'https://i.postimg.cc/63czjqwv/Cat02.png',
    },
    {
        name: 'Repuestos',
        image: 'https://i.postimg.cc/rsYjTHDy/Cat01.png',
    },
];

const Categories = () => {

    const [isHovered, setIsHovered] = useState<string>("");

    const handleCardHovering = (name: any) => {
        setIsHovered(name);
    }

    const handleCardLeave = () => {
        setIsHovered('')
    }

    return (
        <section className="flex flex-col items-center w-full xxl:w-[1920px]">
            <h2 className="w-full my-4 text-[clamp(1rem,calc(2vw+1rem+0.5vh),3rem)] uppercase text-start leading-normal">Categorías destacadas</h2>
            <div className="grid grid-cols-2 xs:grid-cols-3 ms:grid-cols-3 md:grid-cols-4 place-items-center mt-12 w-[70%]">
                {
                    CATEGORIES.map(({ name, image }, id) => (
                        <CardCategory key={id} name={name} image={image} handleCardHovering={() => handleCardHovering(name)} isHovered={isHovered} handleCardLeave={handleCardLeave} />
                    ))
                }
            </div>
        </section>
    );
};

export default Categories;