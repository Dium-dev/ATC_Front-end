'use client';
import { ProductCard } from '../cards/ProductCard';
import { productos } from '~/mockData/mockProducts';
import { Carousel } from '../carousels/carousel';
import { ProductsProps } from '~/types/products';

export function TopSellers() {
  const products = productos.slice(0, 10);

  return (
    <div className="mb-8 w-full">
      <div className="grid place-content-center bg-[#13131D] text-white border-b-4 border-b-[#ff0000] py-5 mb-6">
        <h2 className="text-2xl">Los más vendidos</h2> 
      </div>
      <Carousel>
        {products.map((producto: ProductsProps) => {
          const { title, id, price, image } = producto;
          return (
            <ProductCard
              id={id}
              key={id}
              title={title}
              price={price}
              offer={0.1}
              imageSrc={image[0]}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
