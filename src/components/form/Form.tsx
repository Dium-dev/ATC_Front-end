'use client';
import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

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

  console.log(errors);

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center"
    >
      <label htmlFor="name">
        Nombre
        <input {...register('name', { required: true })} />
        {errors.name && <p>Este campo es obligatorio</p>}
      </label>

      <label htmlFor="phone">
        Telefono/Correo
        <input {...register('phone', { required: true })} />
        {errors.phone && <p>Este campo es obligatorio</p>}
      </label>

      <label htmlFor="message">
        Mensaje
        <input {...register('message', { required: true })} />
        {errors.message && <p>Este campo es obligatorio</p>}
      </label>
      <div className="flex items-center justify-center">
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleClearClick}>
          Limpiar
        </button>
      </div>
    </form>
  );
};

export default Form;
