'use client';
import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from '~/context/AuthContext';
import { InputField } from '../inputs/InputField';
import { MainButton } from '../button/button';
import Icon from '~/assets/icons/icon';
import Swal from 'sweetalert2';

interface FormProp {
  updateState: (flagState: boolean) => void; // Corregido el tipo de isOpenContact
}

interface FormProps {
  name: string;
  phone: string;
  message: string;
}

const Form: FC<FormProp> = ({ updateState }) => {
  const {user} = useAuth()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>();

  const handleFormSubmit: SubmitHandler<FormProps> = (data, event) => {
    event?.preventDefault();
    if (!errors.name || !errors.phone || !errors.message) {
      updateState(false);
      alertSuccess();
      console.log(data);
    }
  };

  const alertSuccess = () => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      title: 'Enviado!',
      text: 'El mensaje a sido enviado correctamente',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,.5)]"
    >
      <div className="relative flex p-6 px-14 pt-10 flex-col bg-white xs:w-[440px] gap-4 rounded-xl shadow-xl w-full dark:bg-primary-dm dark:shadow dark:shadow-white">
        <h1 className="text-[40px] font-bold py-1 overflow-hidden text-ellipsis dark:text-white">
          Contacto
        </h1>
        <p className="text-xs">
          ¿Tienes preguntas o necesitas ayuda para tu compra? ¡Contáctanos!
          Nuestro equipo está aquí para asistirte.
        </p>
        <input
          placeholder="Nombre"
          {...register('name', {
            required: 'Nombre requerido',
            minLength: {
              value: 3,
              message: 'Debe tener minimo 3 caracteres',
            },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: 'Ingresa solo letras',
            },
          })}
          autoComplete="off"
          className="bg-input-bg `w-full px-3 outline-none rounded-md text-secondary-dm text-xs py-3 dark:bg-secondary-dm dark:shadow-sm dark:shadow-white"
        />
        {errors.name && (
          <p className="text-primary-lm">{errors.name.message}</p>
        )}

        <input
          defaultValue={user && user.email}
          placeholder={
            errors.phone
              ? 'Móvil empieza por 3, longitud minima 10 caracteres'
              : 'Móvil / Correo'
          }
          {...register('phone', {
            required: 'Telefono o Correo requerido',
            validate: (value) =>
              /^3\d{9}$/.test(value) ||
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                value
              ) ||
              'Móvil o Correo invalidos',
          })}
          autoComplete="off"
          className="bg-input-bg `w-full px-3 outline-none rounded-md text-secondary-dm text-xs py-3 dark:bg-secondary-dm dark:shadow-sm dark:shadow-white"
        />
        {errors.phone && (
          <p className="text-primary-lm">{errors.phone.message}</p>
        )}

        <textarea
          placeholder="Mensaje"
          {...register('message', {
            required: 'Mensaje requerido',
            maxLength: {
              value: 200,
              message: 'Mensaje debe tener maximo 400 caracteres',
            },
          })}
          autoComplete="off"
          className="bg-input-bg px-3 py-3 rounded-md autocomplete=off outline-none min-h-[100px] text-xs max-h-[55vh] dark:bg-secondary-dm dark:shadow-sm dark:shadow-white"
        />
        {errors.message && (
          <p className="text-primary-lm">{errors.message.message}</p>
        )}

        <MainButton
          variant="tertiary"
          type="submit"
          className="bg-primary-lm  text-white py-3 rounded-md"
        >
          ENVIAR
        </MainButton>

        <MainButton
          type="button"
          onClick={() => {
            updateState(false);
          }}
          className="absolute top-2 right-2"
        >
          <div className="h-6 w-6">
            <Icon icon="Close" />
          </div>
        </MainButton>
      </div>
    </form>
  );
};

export default Form;
