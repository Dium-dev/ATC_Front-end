'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { MainButton } from '~/components/button/button';
import FormAddress from '~/components/componetsDashboard/FormAddress';

import { useDashboardUserStore } from '~/store/dashboardUserStore';

const DireccionesPage = () => {
  const setFormAddress = useDashboardUserStore((state) => state.setFormAddress);
  const isOpenFormAddress = useDashboardUserStore(
    (state) => state.isOpenFormAddress
  );
  const addresses = useDashboardUserStore((state) => state.addresses);
  const deleteAddress = useDashboardUserStore((state) => state.deleteAddress);

  return (
    <div className="min-h-[70vh] flex flex-col justify-evenly">
      <h1 className="text-4xl font-bold text-center my-10">
        {!isOpenFormAddress ? 'Direcciones' : 'Dirección nueva'}
      </h1>
      {isOpenFormAddress ? (
        <FormAddress />
      ) : (
        <>
          <div className="flex flex-col gap-y-7 items-center w-full">
            <section className="border border-primary-lm">
              <article className="grid grid-cols-7 place-items-center p-4 text-center bg-primary-lm text-gray font-bold">
                <p>Teléfono</p>
                <p>Departamento</p>
                <p>Ciudad</p>
                <p>Dirección</p>
                <p>Barrio</p>
                <p>Editar</p>
                <p>Eliminar</p>
              </article>
              {addresses.map((address) => (
                <React.Fragment key={address.id}>
                  <article className="grid grid-cols-7 place-items-center px-4 py-3 text-center border-t border-primary-lm">
                    <p>{address.phone}</p>
                    <p>{address.department.name}</p>
                    <p>{address.city}</p>
                    <p>{address.address}</p>
                    <p>{address.barrio}</p>
                    <Link
                      className="flex justify-center items-center"
                      href={`/dashboardUser/Direcciones/${address.id}`}
                    >
                      <FaRegEdit size={30} />
                    </Link>
                    <p
                      className="flex justify-center items-center"
                      onClick={() => deleteAddress(address.id)}
                    >
                      <MdDelete size={30} style={{ color: 'red' }} />
                    </p>
                  </article>
                </React.Fragment>
              ))}
            </section>
            <MainButton
              variant="secondary"
              color="red"
              className=" w-1/6"
              onClick={() => setFormAddress(true)}
            >
              Agregar dirección
            </MainButton>
          </div>
        </>
      )}
    </div>
  );
};
export default DireccionesPage;
