'use client';
import React from 'react';
import CardCategory from '../cards/categoryCard';
import { CategoryProps } from '~/types/products';
import { Images } from '~/assets/img';

const CATEGORIES: CategoryProps[] = [
  {
    name: 'Farolas',
    image: [Images.categories.Cat04],
  },
  {
    name: 'Stops',
    image: [Images.categories.Cat05],
  },
  {
    name: 'Audio',
    image: [Images.categories.Cat07],
  },
  {
    name: 'Exploradoras',
    image: [Images.categories.Cat06],
  },
  {
    name: 'Exterior',
    image: [Images.categories.Cat02],
  },
  {
    name: 'Interior',
    image: [Images.categories.Cat08],
  },
  {
    name: 'Bombillos',
    image: [Images.categories.Cat03],
  },
  {
    name: 'Repuestos',
    image: [Images.categories.Cat01],
  },
];

const Categories = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-around mt-12">
        {CATEGORIES.map(({ name, image }, id) => (
          <CardCategory key={id} name={name} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
