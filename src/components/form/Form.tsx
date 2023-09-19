'use client';
import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputField } from '../inputs/InputField';
import { MainButton } from '../button/button';

interface FormProps {
  name: string;
  phone: string;
  message: string;
}

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>();

  const handleClearClick = () => {
    reset();
  };

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    console.log(data);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex border p-6 px-14 flex-col bg-white w-[440px] gap-4 rounded-xl"
      >
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

        <InputField
          placeholder="Mensaje"
          {...register('message', { required: true })}
          className="bg-input-bg"
        />

        <MainButton
          variant="tertiary"
          type="submit"
          className="bg-primary-lm mt-12 text-white"
        >
          ENVIAR
        </MainButton>
      </form>
    </div>
  );
};

export default Form;
