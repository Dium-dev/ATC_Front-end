import Image from 'next/image';
import banner from '../../assets/img/banners/BannerProductNotFound.png';
import Link from 'next/link';
const NotFoundProducts = () => {
  return (
    <section className="w-full min-h-screen text-lg flex flex-col justify-start items-center gap-y-4">
      <Image
        src={banner}
        alt={'Producto no encontrado'}
        className='h-[30vh] ms:h-[50vh] md:h-[60vh] w-auto'
      />
      <p className='w-full ms:w-[80%] md:w-[50%] text-center text-sm'>Te invitamos a ponerte en contacto con nosotros para que podamos verificar la disponibilidad a través de nuestros proveedores y ofrecerte la mejor solución. Estaremos encantados de ayudarte a encontrar lo que necesitas.</p>
      <Link href={'/contact'} className='text-primary-lm underline font-extrabold'>CONTACTANOS</Link>
    </section>
  );
};
export default NotFoundProducts;
