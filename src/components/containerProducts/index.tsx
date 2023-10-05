import { ProductCard } from '../cards/ProductCard';
import { productos } from '~/mockData/mockProducts';
import { ProductsProps } from '~/types/products';

const ContainerProducts = () => {
  return (
    <section className="w-full h-full border-red border-width-2 border-style-solid py-10 flex flex-wrap gap-6 mx-auto items-start justify-center">
      {productos.map((producto: ProductsProps) => {
          const { title, id, price, image } = producto;
          return (
            <ProductCard
              key={id}
              title={title}
              price={price}
              offer={0.1}
              imageSrc={image[0]}
            />
          );
        })}
    </section>
  );
};
export default ContainerProducts;
