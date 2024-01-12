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
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
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
      title: 'Registro exitoso!',
      text: 'Bienvenido, Inicie sesion para continuar',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
    });
  };
  const alertError = () => {
    Swal.fire(
      {
        toast: true,
        position: 'top-end',
        title: 'Error',
        text: '¡Este usuario ya existe, inicie sesión!',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
      }
    )
  }

  const handleFormSubmit: SubmitHandler<FormProps> = async (data, event) => {
    event?.preventDefault();
    try {
      const { email, password, firstName, lastName, phone } = data;
      if (!errors.email || !errors.password) {
        await signup(email, password, firstName, lastName, phone);
        alertSuccess();
        console.log(data);
        updateStateRegister(false);
        updateState(true);
      }
    } catch (error) {
      alertError();
      updateStateRegister(false);
      updateState(true);
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
          type="text"
          placeholder="Nombre"
          {...register('firstName', {
            required: {
              value: true,
              message: 'El nombre es requerido',
            },
            minLength: {
              value: 3,
              message: 'El nombre no es válido',
            },
          })}
          className="bg-input-bg `w-full px-3 outline-none rounded-md text-secondary-dm text-xs py-3"
        />
        {errors.firstName && (
          <p className="text-primary-lm text-sm">{errors.firstName.message}</p>
        )}
        <input type="text" placeholder='Apellido' className="bg-input-bg `w-full px-3 outline-none rounded-md text-secondary-dm text-xs py-3"
        {...register('lastName', {
          required: {
            value: true,
            message: 'El apellido es requerido'
          }
        })}
        />
        {errors.lastName && <p className='text-primary-lm text-sm'>{errors.lastName.message}</p>}
        <input
          placeholder={
            errors.email
              ? 'Móvil empieza por 3, longitud mínima 10 caracteres'
              : 'Correo electronico'
          }
          {...register('email', {
            required: 'Teléfono o correo requerido',
            validate: (value) =>
              /^3\d{9}$/.test(value) ||
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                value
              ) ||
              'Móvil o correo invalidos',
              minLength: {
                value: 3,
                message: 'El apellido no es válido'
              }
          })}
          autoComplete="off"
          className="bg-input-bg `w-full px-3 outline-none rounded-md text-secondary-dm text-xs py-3"
        />
        {errors.email && (
          <p className="text-primary-lm text-sm">{errors.email.message}</p>
        )}

        <input type="text" 
        className='bg-input-bg `w-full px-3 outline-none rounded-md text-secondary-dm text-xs py-3'
        placeholder='Teléfono'
        {...register('phone', {
          required: {
            value: true,
            message: 'El teléfono es requerido'
          },
          minLength: {
            value: 10,
            message: 'Ingrese un teléfono válido'
          }
        })}
        />
        {errors.phone && (
          <p className='text-primary-lm text-sm'>{errors.phone.message}</p>
        )}

        <input
          placeholder="Contraseña"
          {...register('password', {
            required: 'Contraseña requerida',
            minLength: {
              value: 6,
              message: 'Debe tener minimo 6 caracteres',
            },
            pattern: {
              value: /^(?=.*[A-Za-zñÑáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛ])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-zñÑáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛ\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/,
              message: 'La contraseña debe ser de 8 a 15 caracteres, tener una mayúscula, una minúscula, un número y un carácter especial.',
            },
          })}
          autoComplete="off"
          className="bg-input-bg `w-full px-3 outline-none rounded-md text-secondary-dm text-xs py-3"
        />
        {errors.password && (
          <p className="text-primary-lm text-sm">{errors.password.message}</p>
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
