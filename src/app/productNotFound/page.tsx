import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MainButton } from '../../components/button/button';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = ({}) => {
  return (
    <div className="flex flex-col items-center h-screen w-screen gap-9 p-12">
      <h1 className="text-center">
        La página que estás buscando no parece existir
      </h1>
      <div className="text-center">
      <Image
        src="https://i.postimg.cc/NjdR1VMt/product-No-Found.png"
        alt="404"
        width={500}
        height={500}
        className="mx-auto max-w-4xl object-cover mb-8"
      />
        <p className="text-lg">
          Te invitamos a ponerte en contacto con nosotros para que podamos
          verificar la disponibilidad a través de nuestros proveedores y
          recomendarte la mejor solución. Estaremos encantados de ayudarte a
          encontrar lo que necesitas.
        </p>
      </div>
      <MainButton
        variant="tertiary"
        className="bg-primary-lm text-white border font-bold"
      >
        <Link href="/contact">CONTACTANOS</Link>
      </MainButton>
    </div>
  );
};

export default NotFound;