'use client';

import CardFavorites from '~/components/componetsDashboard/Cards/CardFavorites';
import { useEffect, useState } from 'react';
import { useDashboardUserStore } from '~/store/dashboardUserStore';
import { ProductsProps } from '~/types/products';

interface Favorite {
  id: string;
  image: string;
  title: string;
  price: string;
}

const FavoritosPage = () => {
  const favorites = useDashboardUserStore((state) => state.favorites);
  const [favoritesCards, setFavoritesCards] = useState<Favorite[]>();

  useEffect(() => {
    fetch('http://localhost:3001/products?page=1&limit=300&order=NOMBRE ASC')
      .then((res) => res.json())
      .then((data) =>
        setFavoritesCards(
          data.items
            .filter((product: ProductsProps) => favorites.includes(product.id))
            .map((product: ProductsProps) => ({
              id: product.id,
              image: product.image[0],
              title: product.title,
              price: product.price.toString(),
            }))
        )
      );
  }, [favorites]);

  return (
    <section className="w-full">
      <h1 className="text-4xl font-bold text-center my-10">Favoritos</h1>
      {!favoritesCards?.length ? (
        <h3 className='text-center text-xl'>No has añadido favoritos</h3>
      ) : (
        <article className="border-x border-primary-lm">
          <div className="flex justify-around items-center text-center bg-primary-lm py-4 font-bold text-gray">
            <p className="w-[100px]">Imagen</p>
            <p className="w-72">Nombre</p>
            <p className="w-40">Precio</p>
            <p className="w-40">Eliminar de favoritos</p>
          </div>
          {favoritesCards?.map((favorite) => (
            <CardFavorites
              key={favorite.title}
              image={favorite.image}
              title={favorite.title}
              price={favorite.price}
              id={favorite.id}
            />
          ))}
        </article>
      )}
    </section>
  );
};
export default FavoritosPage;
