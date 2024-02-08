'use client';

import CardFavorites from '~/components/componetsDashboard/Cards/CardFavorites';
import { useFavorites } from '~/hooks/userDashboard/useFavorites';
import { ClipLoader } from 'react-spinners';

export interface Favorite {
  id: string;
  image: string;
  title: string;
  price: string;
}

const FavoritosPage = () => {
  const { favorites, loading, error } = useFavorites();

  return (
    <section className="w-full text-center">
      {loading ? (
        <ClipLoader color="rgb(140 3 3)" size={60} />
      ) : error ? (
        <p className="text-xl">Ocurrió un error al cargar los favoritos</p>
      ) : !favorites?.length ? (
        <h3 className="text-center text-xl">No has añadido favoritos</h3>
      ) : (
        <article className="border-x border-primary-lm">
          <div className="flex justify-around items-center text-center bg-primary-lm py-4 font-bold text-gray">
            <p className="w-[100px]">Imagen</p>
            <p className="w-72">Nombre</p>
            <p className="w-40">Precio</p>
            <p className="w-40">Eliminar de favoritos</p>
          </div>
          {favorites?.map((favorite) => (
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
