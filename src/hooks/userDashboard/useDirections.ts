import { useState, useEffect } from 'react';
import { Address } from '~/store/dashboardUserStore';
import { getAddresses, deleteAddress, getDepartmentByName } from '~/utils/addresses';

export const useAddresses = (id: string) => {
  const [addresses, setAddresses] = useState<Address[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [refetch, setRetch] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    if (refetch) {
      getAddresses(id)
        .then((data) =>
          setAddresses(
            data.map(
              (address: { id: any; calle: any; estado: any; ciudad: any }) => {
                return {
                  id: address.id,
                  address: address.calle,
                  department: {
                    id: getDepartmentByName(address.estado),
                    name: address.estado,
                  },
                  city: address.ciudad,
                  phone: '3136299812',
                  barrio: '20 de abril',
                  references: 'Al lado de una casa',
                };
              }
            )
          )
        )
        .finally(() => {
          setLoading(false);
          setRetch(false);
        });
    }
  }, [id, refetch]);

  const remove = async (id: string) => {
    await deleteAddress(id);
    setRetch(true);
  };

  return {
    addresses,
    remove,
    loading,
  };
};
