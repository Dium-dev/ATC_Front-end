'use client';
import React, { FC, useState, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputField } from '../inputs/InputField';
import { MainButton } from '../button/button';

interface FormProps {
  name: string;
  phone: string;
  message: string;
}

const Form: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>();

  const onSubmit: SubmitHandler<FormProps> = (data) => {
    console.log(data);
  };

  // al hacer clic fuera del form se haga setIsOpen a false.
  const handleOutsideClick = (event: MouseEvent) => {
    if (formRef.current && !formRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, []);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,.5)]">
        <form
          ref={formRef}
          className="flex p-6 px-14 pt-10 flex-col bg-white w-[440px] gap-4 rounded-xl shadow-xl"
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
        </form>
      </div>
    )
  );
};

export default Form;
