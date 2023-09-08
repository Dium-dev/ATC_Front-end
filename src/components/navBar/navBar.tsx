'use client';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { Images } from '~/assets/img';
import ButtonComponent, { MainButton } from '../button/button';
import { DropDownMenu } from '../dropdownMenu/dropdownMenu';
import { ThemeModeButton } from '../ThemeMode';
import { InputField } from '../inputs/InputField';
import Link from 'next/link';
import IconText from '../IconText';
import Icon from '~/assets/icons/icon';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white">
      <div className="z-50 fixed top-0 bg-opacity-70 bg-white w-full backdrop-blur-sm flex-col">
        <nav className="p-4 flex items-center h-[60px] justify-between">
          {/* Contenedor lado izquierdo menu hamburguesa-imagenes*/}
          <div className="flex items-center gap-2">
            <div className="">
              {/* Iconos menu mobile */}
              <MainButton onClick={toggleNavbar}>
                {isOpen ? (
                  <IconText
                    icon="HamburguerClose"
                    text=""
                    className="h-14 w-14"
                  />
                ) : (
                  <IconText
                    icon="HamburguerOpen"
                    text=""
                    className="w-[36px] h-[30px]"
                  />
                )}
              </MainButton>
            </div>
            <div>
              {/* imagenes tablet y desktop */}
              <div className="hidden md:flex justify-center items-center">
                <Link href="/">
                  <Image
                    src={Images.LogoRedColor}
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
                    src={Images.ActLogo}
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
            <ul className="flex items-center justify-center">
              <li>
                <DropDownMenu
                  title="Categorias"
                  anchorArray={[
                    { title: 'Farolas', to: '/products/Farolas' },
                    { title: 'Stops', to: '/products/Stops' },
                  ]}
                />
              </li>
              <li>
                <DropDownMenu
                  title="Marcas"
                  anchorArray={[
                    { title: 'Mazda', to: '/products/Mazda' },
                    { title: 'Toyota', to: '/products/Toyota' },
                  ]}
                />
              </li>
            </ul>
            {/* input */}
            <div className="flex items-center justify-center">
              <InputField
                placeholder="Buscar Productos"
                leftIcon={<Icon icon="SearchIcon" />}
              />
            </div>
          </div>
          {/* Contenedor lado derecho iconos*/}
          <div className="flex items-center gap-6">
            <IconText icon="Login" className="h-[35px] w-[35px]" />
            <IconText icon="CarShoping" className="h-[35px] w-[35px]" />
            <ThemeModeButton />
          </div>
        </nav>
        {/* Input mobile*/}
        <div className="md:hidden flex items-center justify-center pb-3">
          <InputField
            placeholder="Buscar Productos"
            leftIcon={<Icon icon="SearchIcon" />}
          />
        </div>
        {/* Menu mobile */}
        {isOpen && (
          <div className="xs:hidden flex flex-col items-center border-t-2 border-t-white">
            <a href="#" className="block p-4 hover:text-2xl hover:font-bold">
              Inicio
            </a>
            <a href="#" className="block p-4 hover:text-2xl hover:font-bold">
              Nosotros
            </a>
            <a href="#" className="block p-4 hover:text-2xl hover:font-bold">
              Productos
            </a>
            <a href="#" className="block p-4 hover:text-2xl hover:font-bold">
              Contacto
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
