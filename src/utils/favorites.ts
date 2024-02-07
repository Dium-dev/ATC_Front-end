import { ProductsProps } from '~/types/products';
import { Favorite } from '~/types/userDashboard';

export const getFavorites = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch(
    'http://localhost:3001/products/fav/all?page=1&limit=9',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error('Ocurrió un error al obtener los favoritos');
  }
  const data = await response.json();

  const favorites = data.allFavs[0].products;

  return fetch('http://localhost:3001/products?page=1&limit=300&order=NOMBRE ASC')
    .then((res) => res.json())
    .then((data) => {
      const filteredProducts = data.items.filter((product: ProductsProps) =>
        favorites?.some((fav: Favorite) => fav.id === product.id)
      );

      const mappedFavorites = filteredProducts.map(
        (product: ProductsProps) => ({
          id: product.id,
          image: product.image[0],
          title: product.title,
          price: product.price.toString(),
        })
      );

      return mappedFavorites;
    });
};

export const addFavorite = async (id: string) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`http://localhost:3001/products/fav/${id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Ocurrió un error al guardar el favorito');
  }
  return await response.json();
};
export const deleteFavorite = async (id: string) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`http://localhost:3001/products/fav/${id}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};
