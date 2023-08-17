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
  const [page, setPage] = useState(1);
  const [itemsPage, setitemsPage] = useState(5);

  const maximo = products.length / itemsPage;

  return (
    <div>
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {products
          .slice((page - 1) * itemsPage, (page - 1) * itemsPage + itemsPage)
          .map((producto: Products) => {
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
        <Pagination page={page} setPage={setPage} maximo={maximo} />
      </div>
    </div>
  );
}
