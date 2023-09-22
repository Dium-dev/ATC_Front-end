'use client';
import Image from 'next/image';
import { Images } from '~/assets/img';
import ImagesList from './ImagesList';
import React, { FC, useState } from 'react';
import { MainButton } from '~/components/button/button';
import Links from './Links';
import Link from 'next/link';
import { useFlagState } from '~/hooks/useFlagState';
import Form from '~/components/form/Form';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const [flagState, updateState] = useFlagState(false);

  return (
    <div className="h-[532px] md:h-[362px] bg-[black] p-6 relative">
      <footer
        className="
      flex flex-col gap-8 
      md:flex-row md:items-center md:px-16 md:mt-4"
      >
        <div className="flex flex-col items-center gap-6 ">
          <Image
            src={Images.logos.LogoShieldLight}
            alt=""
            width="180"
            height="90"
          />
          <div className="flex gap-4">
            <ImagesList />
          </div>
        </div>
        <div className="hidden md:flex w-[2px] h-60 bg-gradient-to-t from-background-dm via-white to-background-dm md:ml-16 "></div>
        <div className="flex flex-col gap-14 items-center flex-1">
          <div className="flex text-white gap-4 items-center justify-center">
            <Links />
            <button onClick={() => updateState(true)}>Contacto</button>
          </div>
          <Image
            src="https://i.postimg.cc/7Ymwd4mS/Mercado-Pago.png"
            alt=""
            width="400"
            height="240"
          />
        </div>
        {flagState && <Form updateState={updateState} />}
      </footer>
      <p className="text-xs text-white text-center absolute bottom-0 left-0 right-0 pb-4">
        ©Copyrigth 2023. Todos los derechos reservados - Desarrollado por: Work
        Team
      </p>
    </div>
  );
};

export default Footer;
