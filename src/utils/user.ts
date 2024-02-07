import { UserData } from '~/components/componetsDashboard/Cards/CardSettings';

export const getUser = async () => {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:3001/users/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.status === 401) {
        throw new Error('Su sesión ha expirado, ingrese nuevamente', {
          cause: 'Unauthorized',
        });
      }
      if (!res.ok) {
        throw new Error('Ocurrió un error al cargar la información');
      }
      return res;
    })
    .catch((error: Error) => {
      if (error.cause) {
        throw new Error(error.message);
      }
      if (error.message === 'Load failed') {
        throw new Error('Ocurrió un error al cargar la información');
      }
      throw new Error(error.message);
    });

  return await response.json();
};

export const updateUser = async (updateUser: UserData) => {
  const token = localStorage.getItem('token');
  return await fetch('http://localhost:3001/users', {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateUser),
  })
    .then((res) => {
      if (res.status === 401) {
        throw new Error('Su sesión ha expirado, ingrese nuevamente', {
          cause: 'Unathorized',
        });
      }
      if (!res.ok) {
        throw new Error('Ocurrió un error al actualizar la información');
      }
    })
    .catch((error: Error) => {
      if (error.cause) {
        throw new Error(error.message);
      }
      throw new Error('error.message');
    });
};
