'use client';
import React from 'react';
import { useState } from 'react';
import Pagination from '../pagination';
import Card from '../cards/brandCard';

type Brand = {
  id: string;
  name: string;
  image: string[];
};

type ContainerCardProps = {
  brand: Brand[];
};

const BrandCategory = ({ brand }: ContainerCardProps) => {
  const [pagination, setPagination] = useState({
    page: 1,
    itemsPage: 5,
  });

  const maximo = Math.ceil(brand.length / pagination.itemsPage);
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
      <h1 className="title">Marcas</h1>
      <div className="flex flex-wrap justify-center">
        {brand.slice(startIndex, endIndex).map((brand) => (
          <Card key={brand.id} title={brand.name} imageSrc={brand.image[0]} />
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

export default BrandCategory;
