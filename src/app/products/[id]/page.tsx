'use client';
import { usePathname } from 'next/navigation';
import Categories from '~/components/categories/categories';
import Footer from '~/components/footer/Footer';
import NavBar from '~/components/navBar/navBar';

export default function Dinamica() {
  const Pathname = usePathname();

  const RouteName = Pathname.split('/').pop() || '';

  return (
    <>
      <NavBar />
      <Categories />
      <div className="h-auto bg-white flex justify-center">
        <div className="ms:w-[90%] md:w-[90%] lg:w-[60%] xl:w-[60%] w-full">
          <div className="bg-primary-lm justify-center items-center flex w-52 h-10 rounded-ss-[10px] rounded-se-[10px]">
            <h1 className="text-2xl items-center">Descripción</h1>
          </div>
          <hr className="w-full bg-background-dm border-background-dm h-[2px]" />
          <p className="text-background-dm pl-2 pr-2 pt-5 pb-7 text-md">
            {
              // ingresar la descripcion por props
            }
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
