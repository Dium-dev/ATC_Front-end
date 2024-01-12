/* eslint-disable no-unused-vars */
'use client';
import React, { FC } from 'react';
import { InputField } from '../inputs/InputField';
import { MainButton } from '../button/button';
import Icon from '~/assets/icons/icon';
import Swal from 'sweetalert2';

import { useAuth } from '~/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import usePasswordVisibilityStore from '~/store/PasswordVisibilityStore';
import Eye from '~/assets/icons/Eye';
import EyeBlocked from '~/assets/icons/EyeBlocked';

interface FormProp {
  updateState: (flagState: boolean) => void; // formulario login
  updateStateRegister: (flagState: boolean) => void; // formulario registro
}

interface FormProps {
  email: string;
  password: string;
}

const Form: FC<FormProp> = ({ updateState, updateStateRegister }) => {
  const { user, login } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>();

  // Get password visibility state
  const { isPasswordVisible, updateStateHide } = usePasswordVisibilityStore();
  
  const alertSuccess = () => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      title: 'Ingreso exitoso!',
      text: 'Bienvenido',
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
        text: '¡Acceso inválido!',
        icon: 'error',
        showConfirmButton: false,
        timer: 2000,
      }
    )
  }

  const handleLogin = async (data: FormProps, event: any) => {
    try {
      const { email, password } = data;
      if (!errors.email || !errors.password) {
        await login(email, password);
        alertSuccess();
        updateState(false);
        console.log('Login successful' + user);
        router.push('/dashboardUser');
      }
    } catch (error) {
      console.log(error);
      alertError()
      // Handle login error here if needed.
    }
  };

   // Define a function to toggle password visibility
   const handlePasswordVisibility = () => {
    updateStateHide({ isPasswordVisible: !isPasswordVisible });
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,.5)]"
    >
      <div className="relative flex p-6 px-14 pt-10 flex-col bg-white xs:w-[440px] gap-4 rounded-xl shadow-xl w-[440px]">
        <h1 className="text-[40px] font-bold py-1 text-ellipsis">Ingresar</h1>
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
          className="bg-input-bg w-full px-3 outline-none rounded-md text-secondary-dm text-xs py-3"
        />
        {errors.email && (
          <p className="text-primary-lm">{errors.email.message}</p>
        )}

        <input
          placeholder="Contraseña"
          type={isPasswordVisible ? 'text' : 'password'}
          {...register('password', {
            required: 'Nombre requerido',
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
          className="bg-input-bg w-full px-3 outline-none rounded-md text-secondary-dm text-xs py-3"
        />

        <button className="absolute text-secondary-dm text-xs inset-y-0 right-0 flex items-center px-4 cursor-pointer pt-5 mr-14 py-3" onClick={handlePasswordVisibility}>
          {isPasswordVisible ? <Eye /> : <EyeBlocked />}
        </button>

        {errors.password && (
          <p className="text-primary-lm">{errors.password.message}</p>
        )}

        <MainButton
          variant="tertiary"
          type="submit"
          className="bg-primary-lm  text-white py-3 rounded-md"
        >
          Ingresar
        </MainButton>

        <MainButton
          variant="tertiary"
          type="submit"
          className="bg-primary-lm  text-white py-3 rounded-md"
          onClick={() => {
            updateStateRegister(true), updateState(false);
          }}
        >
          Registrarse
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
