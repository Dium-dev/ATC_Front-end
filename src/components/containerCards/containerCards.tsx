'use client';
import { useState } from 'react';
import Card from '../cards/landingCard';
import Pagination from '../pagination';

type Brand = {
  id: string;
  name: string;
};

type Category = {
  id: string;
  name: string;
};

type Products = {
  id: string;
  title: string;
  state: string;
  stock: number;
  price: number;
  availability: number;
  image: string[];
  model: string;
  year: string;
  brand: Brand;
  category: Category;
};

type ContainerCardProps = {
  products: Products[];
};

export function ContainerCard({ products }: ContainerCardProps) {
  const [pagination, setPagination] = useState({
    page: 1,
    itemsPage: 5,
  });

  const maximo = Math.ceil(products.length / pagination.itemsPage);
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
      <h1>
        Productos
      </h1>
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products.slice(startIndex, endIndex).map((producto: Products) => {
          const { title, id, price, image } = producto;
          return (
            <Card
              key={id}
              title={title}
              price={price.toString()}
              nota={title}
              imageSrc={image[0]}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center text-center m-10">
        <Pagination
          page={pagination.page}
          anteriorSiguiente={anteriorSiguiente}
          maximo={maximo}
        />
      </div>
    </div>
  );
}
