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
import MenuMobile from './MenuMobile';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white">
      <div className="z-50 fixed top-0 bg-opacity-70 bg-white w-full backdrop-blur-sm flex-col">
        <nav className="p-4 flex items-center h-[60px] justify-between max-w-[1480px] mx-auto">
          {/* Contenedor lado izquierdo menu hamburguesa-imagenes*/}
          <div className="flex items-center gap-2">
            <div className="">
              {/* Iconos menu mobile */}
              <MainButton onClick={toggleNavbar}>
                {isOpen ? (
                  <div className="h-14 w-14">
                    <Icon icon="HamburguerClose" />
                  </div>
                ) : (
                  <div className="h-[30px] w-[36px]">
                    <Icon icon="HamburguerOpen" />
                  </div>
                )}
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
            <div className="flex items-center justify-center">
              <InputField
                placeholder="Buscar Productos"
                leftIcon={<Icon icon="SearchIcon" />}
              />
            </div>
          </div>
          {/* Contenedor lado derecho iconos*/}
          <div className="flex items-center gap-6">
            <div className="h-[35px] w-[35px]">
              <Icon icon="Login" />
            </div>
            <div className="h-[35px] w-[35px]">
              <Icon icon="CarShoping" />
            </div>

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
        {/* Menu */}
        {isOpen && (
          <div className="border-t-2 border-t-white">
            <MenuMobile />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
