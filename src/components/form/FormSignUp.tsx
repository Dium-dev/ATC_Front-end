'use client';
import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputField } from '../inputs/InputField';
import { MainButton } from '../button/button';
import Icon from '~/assets/icons/icon';
import Swal from 'sweetalert2';

import { useAuth } from '~/context/AuthContext';
import { useRouter } from 'next/navigation';

interface FormProp {
  updateStateRegister: (flagState: boolean) => void; // formulario registro
  updateState: (flagState: boolean) => void; // formulario login
}

interface FormProps {
  email: string;
  password: string;
}

const Form: FC<FormProp> = ({ updateStateRegister, updateState }) => {
  const { user, signup } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>();

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

  const handleFormSubmit: SubmitHandler<FormProps> = async (data, event) => {
    event?.preventDefault();
    try {
      const { email, password } = data;
      if (!errors.email || !errors.password) {
        await signup(email, password);
        alertSuccess();
        console.log(data);
        updateStateRegister(false);
        updateState(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,.5)]"
    >
      <div className="relative flex p-6 px-14 pt-10 flex-col bg-white xs:w-[440px] gap-4 rounded-xl shadow-xl w-[440px]">
        <h1 className="text-[40px] font-bold py-1 text-ellipsis">
          Registrarse
        </h1>
        <p className="text-xs"></p>
        <input
          placeholder={
            errors.email
              ? 'Mobil empieza por 3, longitud minima 10 caracteres'
              : 'Correo electronico'
          }
          {...register('email', {
            required: 'Telefono o Correo requerido',
            validate: (value) =>
              /^3\d{9}$/.test(value) ||
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                value
              ) ||
              'Mobil o Correo invalidos',
          })}
          autoComplete="off"
          className="bg-input-bg `w-full px-3 outline-none rounded-md text-secondary-dm text-xs py-3"
        />
        {errors.email && (
          <p className="text-primary-lm">{errors.email.message}</p>
        )}

        <input
          placeholder="Contraseña"
          {...register('password', {
            required: 'Contraseña requerida',
            minLength: {
              value: 6,
              message: 'Debe tener minimo 6 caracteres',
            },
            // pattern: {
            //   value: /^[A-Za-z]+$/,
            //   message: 'Ingresa solo letras',
            // },
          })}
          autoComplete="off"
          className="bg-input-bg `w-full px-3 outline-none rounded-md text-secondary-dm text-xs py-3"
        />
        {errors.password && (
          <p className="text-primary-lm">{errors.password.message}</p>
        )}

        <MainButton
          variant="tertiary"
          type="submit"
          className="bg-primary-lm  text-white py-3 rounded-md"
        >
          Registrarse
        </MainButton>

        <MainButton
          type="button"
          onClick={() => {
            updateStateRegister(false);
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








