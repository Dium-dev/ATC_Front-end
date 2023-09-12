'use client';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { Images } from '~/assets/img';
import Icon from '~/assets/icons/icon';
import MenuMobile from './MenuMobile';
import { InputField } from '../inputs/InputField';
import { ThemeModeButton } from '../ThemeMode';
import { MainButton } from '../button/button';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-50 fixed top-0 bg-opacity-70 bg-white w-full backdrop-blur-sm flex-col shadow-sm">
      <nav className="p-4 flex items-center h-[60px] justify-between mx-auto">
        {/* Contenedor lado izquierdo menu hamburguesa-imagenes*/}
        <div className="flex items-center gap-2">
          {/* Icono hamburguesa */}
          <div className="flex items-center gap-2">
            <MainButton onClick={toggleNavbar}>
              <div className={isOpen ? 'h-14 w-14' : 'h-h-14 w-14'}>
                <Icon icon={isOpen ? 'HamburguerClose' : 'HamburguerOpen'} />
              </div>
            </MainButton>
          </div>
          <div>
            {/* imagenes tablet y desktop */}
            <div className="hidden md:flex justify-center items-center">
              <Link href="/">
                <Image
                  src={Images.logos.LogoRedColor}
                  width={200}
                  height={30}
                  alt="Your Company"
                />
              </Link>
            </div>
            {/* imagen mobile */}
            <div className="md:hidden flex justify-center items-center">
              <Link href="/">
                <Image
                  src={Images.logos.ActLogo}
                  width={55}
                  height={32}
                  alt="Your Company"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Contenedor central dropDownMenus e input */}
        <div className="hidden md:flex items-center justify-center gap-5">
          {/* input */}
          <div className="flex items-center justify-center ">
            <InputField
              className="w-[40vw] shadow-md bg-opacity-70 bg-white "
              placeholder="Buscar Productos"
              leftIcon={<Icon icon="SearchIcon" />}
            />
          </div>
        </div>
        {/* Contenedor lado derecho iconos*/}
        <div className="flex items-center gap-6">
          <div className="h-[35px] w-[35px]">
            <Link href={'/login'}>
              <Icon icon="Login" />
            </Link>
          </div>
          <div className="h-[35px] w-[35px]">
            <Link href={'#'}>
              <Icon icon="CarShoping" />
            </Link>
          </div>

          <ThemeModeButton />
        </div>
      </nav>
      {/* Input mobile*/}
      <div className="md:hidden flex items-center justify-center pb-3">
        <InputField
          className="w-[70vw] max-w-md shadow-md bg-opacity-70 bg-white"
          placeholder="Buscar Productos"
          leftIcon={<Icon icon="SearchIcon" />}
        />
      </div>
      {/* Menu */}
      {isOpen && (
        <div className="border-t-2 border-t-white" onMouseLeave={toggleNavbar}>
          <MenuMobile />
        </div>
      )}
    </div>
  );
};

export default NavBar;
