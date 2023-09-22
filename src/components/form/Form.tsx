'use client';
import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>();

  const handleFormSubmit: SubmitHandler<FormProps> = (data) => {
    !errors.name || !errors.phone || !errors.message
      ? alertSuccess()
      : alertError();
    console.log(data);
  };

  const alertSuccess = () => {
    Swal.fire({
      title: 'Enviado!',
      text: 'El mensaje a sido enviado correctamente',
      icon: 'success',
      confirmButtonText: 'Cool',
    });
  };
  const alertError = () => {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool',
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,.5)]"
    >
      <div className="relative flex p-6 px-14 pt-10 flex-col bg-white w-[440px] gap-4 rounded-xl shadow-xl">
        <h1 className="text-[40px] font-bold">Contacto</h1>
        <p>
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
          })}
          autoComplete="off"
          className="bg-input-bg `w-full py-1.5 px-3 outline-none rounded-md text-secondary-dm "
        />
        {errors.name && (
          <p className="text-primary-lm">{errors.name.message}</p>
        )}

        <input
          placeholder={
            errors.phone
              ? 'Mobil empieza por 3, longitud minima 10'
              : 'Mobil / Correo'
          }
          {...register('phone', {
            required: 'Telefono o Correo requerido',
            validate: (value) =>
              /^3\d{9}$/.test(value) ||
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                value
              ) ||
              'Mobil o Correo invalidos',
          })}
          autoComplete="off"
          className="bg-input-bg `w-full py-1.5 px-3 outline-none rounded-md text-secondary-dm"
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
          className="bg-input-bg px-3 py-1.5 rounded-md autocomplete=off outline-none min-h-[100px] "
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
