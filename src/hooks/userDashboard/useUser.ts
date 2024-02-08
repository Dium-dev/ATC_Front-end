import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { UserData } from '~/components/componetsDashboard/Cards/CardSettings';
import { getUser, updateUser } from '~/utils/user';

export const useUser = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery<UserData>({
    queryKey: ['user'],
    queryFn: getUser,
  });

  const { mutate: updateMutation, error: errorMutation } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const update = (updateUser: UserData) => {
    updateMutation(updateUser);
  };

  return {
    user: data,
    update,
    isLoading,
    isError,
    updateError: errorMutation,
    error
  };
};
