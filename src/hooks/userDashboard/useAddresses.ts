import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getAddresses,
  deleteAddress,
  updateAddress,
  createAddress,
} from '~/utils/addresses';

import { Address } from '~/store/dashboardUserStore';
import { AddressDB } from '~/types/userDashboard';

export const useAddresses = () => {
  const queryClient = useQueryClient();

  const isMutating = queryClient.isMutating();

  const { data, isLoading, isError, error } = useQuery<Address[]>({
    queryKey: ['addresses'],
    queryFn: getAddresses,
  });

  const { mutate: createMutation } = useMutation({
    mutationFn: createAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['addresses'] });
    },
  });

  const { mutate: removeMutation } = useMutation({
    mutationFn: deleteAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['addresses'] });
    },
  });

  const { mutate: updateMutation } = useMutation({
    mutationFn: updateAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['addresses'] });
    },
  });

  const create = (address: AddressDB) => {
    createMutation(address);
  };

  const remove = (id: string) => {
    removeMutation(id);
  };

  const update = (address: AddressDB) => {
    updateMutation(address);
  };

  return {
    addresses: data,
    remove,
    update,
    create,
    error: isError,
    loading: isLoading,
    isCreating: isMutating,
    errorMessage: error,
  };
};
