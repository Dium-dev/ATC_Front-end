'use client';
import React from 'react';
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
  return (
    <div>
      <div className="flex flex-wrap justify-around xxxl:justify-between mt-12 max-w-[1920px] mx-auto">
        {CATEGORIES.map(({ name, image }, id) => (
          <CardCategory key={id} name={name} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
