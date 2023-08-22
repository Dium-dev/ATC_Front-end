'use client';
import Image from 'next/image';
import React from 'react';
import { Images } from "~/assets/img";
import ButtonComponent from '../button/button';
import { FaAtlas, FaUser } from 'react-icons/fa';
import { BsCartFill } from 'react-icons/bs';
import Link from 'next/link';
import { DropDownMenu } from '../dropdownMenu/dropdownMenu';
import { ThemeModeButton } from '../ThemeMode';

export const NavBar = () => {
  return (
    <div className="w-full h-10 flex relative justify-between bg-text-dm">
      <div className="flex">
        <Link className=" flex items-center" href={'/'}>
          <Image 
          src={Images.LogoRedColor} 
          width={100} 
          height={100} 
          alt="Your Company" />
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
      </div>
      <input type="text" className="" />
      <ButtonComponent variant="white" text="Inicio" to="/" />
      <ButtonComponent variant="white" text="Sobre nosotros" to="/aboutUs" />
      <ButtonComponent variant="white" text="Contacto" to="/contact" />
      <div className="flex items-center">
        <FaAtlas className="cursor-pointer" />
        <FaUser className="cursor-pointer" />
        <BsCartFill className="cursor-pointer" />
      </div>
      <ThemeModeButton />
    </div>
  );
};