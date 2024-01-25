'use client';
import ViewProducts from '~/components/viewProducts';
import { ContainerPage } from '../container_page';
import { useEffect } from 'react';
import { api } from 'services';

export default function ProductsPage() {
  useEffect(() => {
    api
      .getProducts({})
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  }, []);
  return (
    <ContainerPage>
      <ViewProducts />
    </ContainerPage>
  );
}
