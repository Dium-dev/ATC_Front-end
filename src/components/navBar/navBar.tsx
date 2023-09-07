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
              placeholder="Search Products"
              leftIcon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3333 9.33333H9.80667L9.62 9.15333C10.2733 8.39333 10.6667 7.40667 10.6667 6.33333C10.6667 3.94 8.72667 2 6.33333 2C3.94 2 2 3.94 2 6.33333C2 8.72667 3.94 10.6667 6.33333 10.6667C7.40667 10.6667 8.39333 10.2733 9.15333 9.62L9.33333 9.80667V10.3333L12.6667 13.66L13.66 12.6667L10.3333 9.33333V9.33333ZM6.33333 9.33333C4.67333 9.33333 3.33333 7.99333 3.33333 6.33333C3.33333 4.67333 4.67333 3.33333 6.33333 3.33333C7.99333 3.33333 9.33333 4.67333 9.33333 6.33333C9.33333 7.99333 7.99333 9.33333 6.33333 9.33333Z"
                    fill="#5F6974"
                  />
                </svg>
              }
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
      {/* Input */}
      <div className="md:hidden flex items-center justify-center pb-3">
        <InputField
          placeholder="Search Products"
          leftIcon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3333 9.33333H9.80667L9.62 9.15333C10.2733 8.39333 10.6667 7.40667 10.6667 6.33333C10.6667 3.94 8.72667 2 6.33333 2C3.94 2 2 3.94 2 6.33333C2 8.72667 3.94 10.6667 6.33333 10.6667C7.40667 10.6667 8.39333 10.2733 9.15333 9.62L9.33333 9.80667V10.3333L12.6667 13.66L13.66 12.6667L10.3333 9.33333V9.33333ZM6.33333 9.33333C4.67333 9.33333 3.33333 7.99333 3.33333 6.33333C3.33333 4.67333 4.67333 3.33333 6.33333 3.33333C7.99333 3.33333 9.33333 4.67333 9.33333 6.33333C9.33333 7.99333 7.99333 9.33333 6.33333 9.33333Z"
                fill="#5F6974"
              />
            </svg>
          }
        />
      </div>
      {/* Menu mobile */}
      {isOpen && (
        <div className="xs:hidden flex flex-col items-center">
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
  );
};

export default NavBar;
