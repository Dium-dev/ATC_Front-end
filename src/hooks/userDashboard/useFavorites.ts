import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addFavorite, getFavorites, deleteFavorite } from '~/utils/favorites';
import { Favorite } from '~/app/dashboardUser/Favoritos/page';

export const useFavorites = () => {
  const queryClient = useQueryClient();

  const { isLoading, data, isError } = useQuery<Favorite[]>({
    queryKey: ['favorites'],
    queryFn: getFavorites,
  });

  const { mutate: addMutation } = useMutation({
    mutationFn: addFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });

  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });

  const add = (id: string) => {
    addMutation(id);
  };

  const remove = (id: string) => {
    deleteMutation(id);
  };

  return {
    favorites: data,
    loading: isLoading,
    add,
    remove,
    error: isError
  };
};
