'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { MainButton } from '~/components/button/button';
import FormAddress from '~/components/componetsDashboard/FormAddress';
import { useAddresses } from '~/hooks/userDashboard/useAddresses';
import { ClipLoader } from 'react-spinners';
import { Modal } from '~/components/componetsDashboard/Modal';

import { useDashboardUserStore } from '~/store/dashboardUserStore';

const DireccionesPage = () => {
  const setFormAddress = useDashboardUserStore((state) => state.setFormAddress);
  const isOpenFormAddress = useDashboardUserStore(
    (state) => state.isOpenFormAddress
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { addresses, remove, loading, error, isCreating } = useAddresses();

  return (
    <div className="min-h-[70vh] flex flex-col justify-evenly">
      {isOpenFormAddress ? (
        <FormAddress />
      ) : (
        <>
          <div className="flex flex-col gap-y-12 items-center w-full">
            {loading ? (
              <ClipLoader color="rgb(140 3 3)" size={60} />
            ) : error ? (
              <p className="text-xl">
                Ocurrió un error al cargar las direcciones
              </p>
            ) : !addresses?.length ? (
              <h3 className="py-8 px-12 text-xl">
                No has agregado una dirección
              </h3>
            ) : (
              <section className="border border-primary-lm text-center">
                <article className="grid grid-cols-8 place-items-center p-4 text-center bg-primary-lm text-gray font-bold">
                  <p>Departamento</p>
                  <p>Ciudad</p>
                  <p>Dirección</p>
                  <p>Barrio</p>
                  <p>Teléfono</p>
                  <p>Referencias</p>
                  <p>Editar</p>
                  <p>Eliminar</p>
                </article>
                {addresses?.map((address) => (
                  <React.Fragment key={address.id}>
                    <article className="grid grid-cols-8 place-items-center px-4 py-3 text-center border-t border-primary-lm">
                      <p>{address?.department?.name}</p>
                      <p>{address.city}</p>
                      <p>{address.address}</p>
                      <p>{address.barrio}</p>
                      <p>{address.phone}</p>
                      <p>{address.references}</p>
                      <Link
                        className="flex justify-center items-center"
                        href={`/dashboardUser/Direcciones/${address.id}`}
                      >
                        <FaRegEdit size={30} />
                      </Link>
                      <p
                        className="flex justify-center items-center cursor-pointer"
                        onClick={() => setIsOpenModal(true)}
                      >
                        <MdDelete size={30} style={{ color: 'red' }} />
                      </p>
                    </article>
                    <Modal
                      open={isOpenModal}
                      onClose={() => setIsOpenModal(false)}
                    >
                      <div className="flex flex-col gap-y-8">
                        <p className="font-bold mt-5">
                          ¿Está seguro de eliminar la dirección?
                        </p>
                        <div className="flex items-center justify-evenly">
                          <button
                            onClick={() => setIsOpenModal(false)}
                            className="bg-primary-dm text-white py-2 px-4 rounded-md cursor-pointer"
                          >
                            Cancelar
                          </button>
                          <button
                            className="bg-secondary-lm text-white py-2 px-4 rounded-md cursor-pointer"
                            onClick={() => {
                              remove(address.id);
                              setIsOpenModal(false);
                            }}
                          >
                            Confirmar
                          </button>
                        </div>
                      </div>
                    </Modal>
                  </React.Fragment>
                ))}
                {isCreating === 1 && (
                  <ClipLoader color="rgb(140 3 3)" size={60} />
                )}
              </section>
            )}
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
