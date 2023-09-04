'use client';
import Image from 'next/image';
import React from 'react';
import { Images } from '~/assets/img';
import ButtonComponent from '../button/button';
import { FaAtlas, FaUser } from 'react-icons/fa';
import { BsCartFill } from 'react-icons/bs';
import Link from 'next/link';
import { DropDownMenu } from '../dropdownMenu/dropdownMenu';
import { ThemeModeButton } from '../ThemeMode';
import { InputField } from '../inputs/InputField';

export const NavBar = () => {
  return (
    <div className="w-full h-20 flex bg-text-dm">
      <div className="flex items-center justify-center gap-[11px] mr-[26px] ">
        <Link className="pl-5 w-fit mr-[76px] " href={'/'}>
          <Image
            src={Images.LogoRedColor}
            width={200}
            height={30}
            alt="Your Company"
          />
        </Link>
        <DropDownMenu
          title="Categorias"
          anchorArray={[
            { title: 'Farolas', to: '/products/Farolas' },
            { title: 'Stops', to: '/products/Stops' },
          ]}
        />
        <DropDownMenu
          title="Marcas"
          anchorArray={[
            { title: 'Mazda', to: '/products/Mazda' },
            { title: 'Toyota', to: '/products/Toyota' },
          ]}
        />
        <ButtonComponent variant="white" text="Nosotros" to="/aboutUs" />
        <ButtonComponent variant="white" text="Contacto" to="/contact" />
      </div>
      <div className="flex items-center justify-center">
        {
          <InputField
            className="w-[309px] h-[40px]"
            placeholder="Buscar productos"
          />
        }
      </div>
      <div className="flex items-center justify-start">
        <ButtonComponent variant="white" text="Ingresar" to="/login" />
        <ThemeModeButton />
        <BsCartFill className="cursor-pointer" />I
      </div>
    </div>
  );
};
