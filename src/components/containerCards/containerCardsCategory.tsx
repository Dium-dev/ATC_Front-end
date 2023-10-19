'use client';
import { useState, useEffect } from 'react';
import CardCategory from '../cards/categoryCard';
import { CategoryProps } from '~/types/products';

const Categories = () => {

    const [isHovered, setIsHovered] = useState<string>("");

    const handleCardHovering = (name: any) => {
        setIsHovered(name);
    }

    const handleCardLeave = () => {
        setIsHovered('')
    }

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/categories')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            });
    });

    return (
        <section className="flex flex-col items-center w-full xxl:w-[1920px]">
            <h2 className="w-full my-4 text-[clamp(1rem,calc(2vw+1rem+0.5vh),3rem)] uppercase text-start leading-normal">Categorías destacadas</h2>
            <div className="grid grid-cols-2 xs:grid-cols-3 ms:grid-cols-4 md:grid-cols-8 place-items-center mt-12 w-[100%]">
                {
                    categories.map(({ name, image }, id) => (
                        <CardCategory key={id} name={name} image={image} handleCardHovering={() => handleCardHovering(name)} isHovered={isHovered} handleCardLeave={handleCardLeave} />
                    ))
                }
            </div>
        </section>
    );
};

export default Categories;