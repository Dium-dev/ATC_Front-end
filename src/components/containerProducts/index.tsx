import Filters from '../filters';
import NotFoundProducts from '../notFoundProducts';
import { ProductCard } from '../cards/ProductCard';
import { ProductsProps } from '~/types/products';
import { useEffect } from 'react';
import { useProductStore } from '~/store/productStore';

const ContainerProducts = () => {
  const products = useProductStore((state) => state.products);
  const { page, limit, order, categoryId, brandId, name } = useProductStore(
    (state) => state.body
  );
  const updateProducts = useProductStore((state) => state.updateProducts);
  const setPages = useProductStore((state) => state.setPages);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `http://localhost:3001/products?page=${page}&limit=${limit}&order=${order}&categoryId=${categoryId}&brandId=${brandId}&name=${name}`
      );
      const { items, totalPages } = await response.json();
      setPages(totalPages);
      updateProducts(items);
    };
    fetchProducts();
  }, [brandId, categoryId, limit, name, order, page, setPages, updateProducts]);
  return (
    <section className="w-full min-h-screen flex flex-col items-center md:items-start justify-between py-10 px-10 xxxl:px-0 md:flex-row md:gap-x-5 gap-y-6 md:gap-y-0 max-w-[1920px] mx-auto">
      <Filters />
      <section className="w-full h-full border-red border-width-2 border-style-solid flex flex-wrap gap-6 mx-auto items-start justify-evenly">
        {!products.length && <NotFoundProducts />}
        {products?.map((producto: ProductsProps) => {
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
      </section>
    </section>
  );
};
export default ContainerProducts;
