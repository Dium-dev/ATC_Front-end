'use client';
import React from "react";
import CardCategory from "../cards/categoryCard";
import { useState } from 'react';
import Pagination from '../pagination';


type Category = {
  id: string;
  name: string;
  image: string[];
  description: string;
};

type ContainerCardProps = {
  category: Category[];
};

const CategoryCategory = ({ category }: ContainerCardProps) => {

  const [pagination, setPagination] = useState({
    page: 1,
    itemsPage: 4,
  });

  const maximo = Math.ceil(category.length / pagination.itemsPage);
  const startIndex = (pagination.page - 1) * pagination.itemsPage;
  const endIndex = startIndex + pagination.itemsPage;

  const anteriorSiguiente = (action: 'Anterior' | 'Siguiente') => {
    if (action === 'Anterior')
      setPagination({
        ...pagination,
        page: pagination.page - 1,
      });
    else if (action === 'Siguiente')
      setPagination({
        ...pagination,
        page: pagination.page + 1,
      });
  };

  return (
    <div>
      <h1 className='title'>
        Categorías
      </h1>
      <div className="flex flex-wrap justify-center">
        {category.slice(startIndex, endIndex).map((category) => (
          <CardCategory
            key={category.id}
            name={category.name}
            imageSrc={category.image[0]}
            description={category.description}
          />
        ))}
      </div>
      <div className="flex justify-center items-center text-center my-8">
        <Pagination
          page={pagination.page}
          anteriorSiguiente={anteriorSiguiente}
          maximo={maximo}
        />
      </div>
    </div>
  );
};

export default CategoryCategory;
