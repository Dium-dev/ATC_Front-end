'use client';
import React, { FC } from 'react';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputField } from '../inputs/InputField';
import { MainButton } from '../button/button';
import { type } from 'os';

interface FormProp {
  updateState: (isOpenContact: boolean) => void; // Corregido el tipo de isOpenContact
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

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    console.log(data);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,.5)]">
      <form className=" relative flex p-6 px-14 pt-10 flex-col bg-white w-[440px] gap-4 rounded-xl shadow-xl">
        <h1 className="text-[40px] font-bold">Contacto</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          unde. Iusto minus placeat at vitae.
        </p>
        <InputField
          placeholder="Nombre"
          {...register('name', { required: true })}
          className="bg-input-bg"
        />

        <InputField
          placeholder="Telefono / Correo"
          {...register('phone', { required: true })}
          className="bg-input-bg"
        />

        <textarea
          placeholder="Mensaje"
          {...register('message', { required: true })}
          className="bg-input-bg px-3 py-1.5 rounded-md autocomplete=off outline-none min-h-[100px] "
        />

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
          x
        </MainButton>
      </form>
    </div>
  );
};

export default Form;
