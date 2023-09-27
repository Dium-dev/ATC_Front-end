import React, { FC } from 'react';
import Image from 'next/image';
import { MainButton } from '~/components/button/button';

interface notFoundProps {}

const notFound: FC<notFoundProps> = ({}) => {
  return (
    <div className="flex flex-col items-center h-screen w-screen gap-9 p-12">
      <h1 className="text-center">
        La pagina que estas buscando no parece existir
      </h1>
      <div>
        <h1 className="text-center font-medium text-secondary-lm text-4xl mb-2">
          ERROR
        </h1>
        <Image
          src="https://i.postimg.cc/fLdFDym8/notFound.png"
          alt="404"
          width={500}
          height={500}
          className="object-cover mb-8"
        ></Image>
      </div>
      <MainButton
        variant="tertiary"
        className="bg-primary-lm text-white border font-bold"
      >
        <a href="/">Ir Pagina Principal</a>
      </MainButton>
    </div>
  );
};

export default notFound;
