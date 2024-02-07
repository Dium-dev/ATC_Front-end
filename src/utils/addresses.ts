export const createAddress = async (address: any) => {
  const token = localStorage.getItem('token');
  await fetch('http://localhost:3001/directions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(address),
  });
};

export const getAddresses = async () => {
  const token = localStorage.getItem('token');

  const response = await fetch('http://localhost:3001/directions', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.status === 401) {
        throw new Error('Su sesión ha expirado, ingrese nuevamente', {
          cause: 'Unauthorized'
        });
      }
      if(!res.ok){
        throw new Error('Ocurrió un error al cargar las direcciones')
      }
      return res;
    })
    .catch((error: Error) => {
      if(error.cause){
        throw new Error(error.message);
      }
      throw new Error(error.message);
    });
  const data = await response.json();
  if (!data.direction) {
    return [];
  }
  const updatedAddresses = await Promise.all(
    data.direction.map(
      async (address: {
        addressReference: any;
        neighborhood: any;
        phone: any;
        id: any;
        address: any;
        district: any;
        city: any;
      }) => {
        return {
          id: address.id,
          address: address.address,
          department: {
            id: await getDepartmentByName(address.district),
            name: address.district,
          },
          city: address.city,
          phone: address.phone,
          barrio: address.neighborhood,
          references: address.addressReference,
        };
      }
    )
  );
  return updatedAddresses;
};
export const deleteAddress = async (id: string) => {
  const token = localStorage.getItem('token');
  await fetch(`http://localhost:3001/directions/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getDepartmentByName = async (name: string) => {
  const response = await fetch('https://api-colombia.com/api/v1/Department');
  const data = await response.json();

  const { id } = data.find(
    (department: { id: string; name: string }) =>
      department.name === name && department
  );
  return id;
};
export const updateAddress = async (address: any) => {
  const token = localStorage.getItem('token');
  await fetch('http://localhost:3001/directions', {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(address),
  });
};
