import Icon from '~/assets/icons/icon';
import { MainButton } from '~/components/button/button';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormProp {
  // eslint-disable-next-line no-unused-vars
  setForm: (flagState: boolean) => void;
  id: String;
}
interface FormProps {
    message: string;
  }

export default function FormSupport({ setForm, id }: FormProp) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormProps>();

  const handleForm: SubmitHandler<FormProps> = (data, event) => {
    event?.preventDefault();
  };

  return (
    <form className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-opacity-50 z-50 flex flex-col items-center justify-center bg-[rgba(0,0,0,.5)]"
    onSubmit={handleSubmit(handleForm)}
    >
      <div className="bg-white py-12 max-h-screen relative rounded-xl flex flex-col gap-y-7 px-14">
        <h1 className="text-left font-bold text-[40px]">Ayuda</h1>
        <div className="flex flex-col justify-center">
          <p>¿Necesitas ayuda con tu pedido?</p>
          <p>¡Contáctanos! Nuestro equipo está aquí para asistirte.</p>
        </div>
        <MainButton
          type="button"
          onClick={() => {
            setForm(false);
          }}
          className="absolute top-2 right-2"
        >
          <div className="h-6 w-6">
            <Icon icon="Close" />
          </div>
        </MainButton>
        <div className="flex flex-col gap-y-1">
          <p>Elige tu solicitud</p>
          <select name="" id="" className="bg-input-bg rounded">
            <option value="" disabled>Seleccione una</option>
            <option value="">Envío</option>
            <option value="">Producto</option>
            <option value="">Pago</option>
          </select>
        </div>

        <textarea
            {...register('message', {
                required: 'El mensaje es requerido',
                maxLength: {
                    value: 200,
                    message: 'Mensaje debe tener maximo 400 caracteres',
                },
            })}
          className="w-full bg-input-bg rounded outline-none max-h-60 min-h-[125px]"
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
      </div>
    </form>
  );
}
