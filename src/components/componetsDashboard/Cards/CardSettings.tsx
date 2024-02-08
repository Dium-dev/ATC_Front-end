import React, { useState, useEffect, useRef } from 'react';
import { useUser } from '~/hooks/userDashboard/useUser';
import { ClipLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';
import { Modal } from '../Modal';
import Swal from 'sweetalert2';

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  orders: [
    {
      direction: {
        address: string;
      };
      id: string;
      payment: {
        amount: number;
        state: string;
      };
      products: [
        {
          id: string;
          title: string;
          OrderProduct: {
            amount: number;
            price: number;
          };
          price: number;
        }
      ];
    }
  ];
}

export default function CardSettings() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [editing, setEditing] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const { user, isLoading, isError, update, updateError, error } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<UserData>({
    mode: 'all',
  });

  useEffect(() => {
    if (user) {
      setValue('firstName', user.firstName);
      setValue('lastName', user.lastName);
      setValue('email', user.email);
      setValue('phone', user.phone);
    }
    setIsReset(false);
  }, [setValue, user, isReset]);

  const alertErrors = (text: string) => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      title: 'Error',
      text,
      icon: 'error',
      showConfirmButton: false,
      timer: 4000,
    });
  };

  const alertSuccess = () => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      title: '¡Actualizado!',
      text: '¡Se ha actualizado su información!',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const onSubmit = (values: UserData) => {
    update(values);
    if (!isError) {
      alertSuccess();
      setIsOpenModal(false);
      setEditing(false);
    }
  };

  if (updateError) {
    updateError && alertErrors(updateError.message);
  }

  return (
    <>
      <form
        className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100"
        onSubmit={handleSubmit(onSubmit)}
        ref={formRef}
      >
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Mi cuenta</h6>
            <div>
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  editing && reset();
                  setIsReset(true);
                  setEditing(!editing);
                }}
              >
                {editing ? 'CANCELAR' : 'EDITAR'}
              </button>
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  if (!Object.keys(errors).length) {
                    setIsOpenModal(true);
                  }
                }}
              >
                GUARDAR
              </button>
            </div>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <section className="mt-7">
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Información de usuario
            </h6>
            {isLoading ? (
              <div className="text-center">
                <ClipLoader size={60} />
              </div>
            ) : (
              !isError && (
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Nombre
                      </label>
                      <input
                        defaultValue={user && user.firstName}
                        disabled={!editing}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Lucky"
                        {...register('firstName', {
                          required: {
                            value: true,
                            message: 'El nombre no puede estar vacío',
                          },
                          minLength: {
                            value: 3,
                            message: 'El nombre no es válido',
                          },
                        })}
                      />
                      {errors.firstName && (
                        <span className="text-sm text-secondary-lm">
                          {errors.firstName.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Apellido
                      </label>
                      <input
                        defaultValue={user && user.lastName}
                        disabled={!editing}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Jesse"
                        {...register('lastName', {
                          required: {
                            value: true,
                            message: 'El apellido no puede estar vacío',
                          },
                          minLength: {
                            value: 3,
                            message: 'El apellido no es válido',
                          },
                        })}
                      />
                      {errors.lastName && (
                        <span className="text-sm text-secondary-lm">
                          {errors.lastName.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Correo electrónico
                      </label>
                      <input
                        defaultValue={user && user.email}
                        disabled={!editing}
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="jesse@example.com"
                        {...register('email', {
                          required: {
                            value: true,
                            message: 'El correo no puede estar vacío',
                          },
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                            message: 'Ingresa un correo electrónico válido',
                          },
                        })}
                      />
                      {errors.email && (
                        <span className="text-sm text-secondary-lm">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        CELULAR
                      </label>
                      <input
                        defaultValue={user && user.phone}
                        disabled={!editing}
                        type="tel"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="3123456789"
                        {...register('phone', {
                          required: {
                            value: true,
                            message: 'El celular no puede estar vacío',
                          },
                          minLength: {
                            value: 10,
                            message: 'El número de celular no es válido',
                          },
                        })}
                      />
                      {errors.phone && (
                        <span className="text-sm text-secondary-lm">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
            {isError && (
              <h3 className="text-blueGray-400 font-bold text-sm text-center">
                {error?.message}
              </h3>
            )}
            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </section>
        </div>
        <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
          <div className="flex flex-col gap-y-8">
            <p className="font-bold mt-5">
              ¿Está seguro de actualizar su información personal?
            </p>
            <div className="flex items-center justify-evenly">
              <button
                onClick={() => setIsOpenModal(false)}
                className="bg-secondary-lm text-white py-2 px-4 rounded-md cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-green text-white py-2 px-4 rounded-md cursor-pointer"
              >
                Confirmar
              </button>
            </div>
          </div>
        </Modal>
      </form>
    </>
  );
}
