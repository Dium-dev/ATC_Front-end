'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MainButton } from '~/components/button/button';

interface FormProps {
  message: string;
}

const AyudaPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormProps>();

  const handleForm: SubmitHandler<FormProps> = (data, event) => {
    event?.preventDefault();
  };

  return (
    <form
      className="bg-white py-12 max-h-screen relative rounded-xl flex flex-col gap-y-7 px-14"
      onSubmit={handleSubmit(handleForm)}
    >
      <h1 className="text-left font-bold text-[40px]">Contacto</h1>
      <div className="flex flex-col justify-center">
        <p>¿Tienes preguntas o necesitas ayuda para tu compra? </p>
        <p>¡Contáctanos! Nuestro equipo está aquí para asistirte.</p>
      </div>

      <textarea
        {...register('message', {
          required: 'El mensaje es requerido',
          maxLength: {
            value: 200,
            message: 'Mensaje debe tener maximo 400 caracteres',
          },
        })}
        className="w-full bg-input-bg rounded outline-none min-h-[150px] max-h-60"
        placeholder="Mensaje"
      ></textarea>
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
    </form>
  );
};
export default AyudaPage;
