'use client';
import Card from '../cards/landingCard';
import { productos } from '~/mockData/mockProducts';
import { Carousel } from '../carousels/carousel';
import { ProductsProps } from '~/types/products';

export function TopSellers() {
  const products = productos;

  return (
    <div className="my-8">
      <div className="grid place-content-center bg-[#13131D] text-white border-b-4 border-b-[#ff0000] py-5 mb-6">
        <h2 className="text-2xl">Lo más vendidos</h2>
      </div>
      <Carousel>
        {products.map((producto: ProductsProps) => {
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
      </Carousel>
    </div>
  );
}
