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
import { useFlagState } from '~/hooks/useFlagState';
import { usePathname } from 'next/navigation';
import Form from '../form/Form';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [flagState, updateState] = useFlagState(false);

  const toggleNavbar = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const pathname = usePathname()
  return (
    <nav>
      <div className={`z-50 fixed top-0 bg-opacity-70 bg-white w-full backdrop-blur-sm flex-col ${pathname !== '/' ? 'shadow-none' : 'shadow-md'}`}>
        <div className="p-4 flex items-center h-[60px] justify-between mx-auto">
          {/* Contenedor lado izquierdo menu hamburguesa-imagenes*/}
          <div className="flex items-center gap-2">
            {/* Icono hamburguesa */}
            <div className="flex items-center gap-2">
              <MainButton onClick={toggleNavbar}>
                <div className={isOpenMenu ? 'h-14 w-14' : 'h-h-14 w-14'}>
                  <Icon
                    icon={isOpenMenu ? 'HamburguerClose' : 'HamburguerOpen'}
                  />
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
                style={{ width: '50vw' }}
                className="shadow-md bg-opacity-70 bg-white "
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
        </div>
        {/* Input mobile*/}
        <div className="md:hidden flex items-center justify-center pb-3 shadow-md">
          <InputField
            style={{ width: '60vw' }}
            className="max-w-md shadow-md bg-opacity-70 bg-white"
            placeholder="Buscar Productos"
            leftIcon={<Icon icon="SearchIcon" />}
          />
        </div>
      </div>
      <div>
        {/* Menu */}
        {isOpenMenu && (
          <div
            className="fixed top-[108px] md:top-[60px] left-0 w-screen xs:max-w-[303px] backdrop-blur-sm bg-white bg-opacity-70 shadow-sm z-50 flex justify-center items-center rounded-b-md"
            onMouseLeave={toggleNavbar}
          >
            <MenuMobile updateState={updateState} />
          </div>
        )}
      </div>
      {flagState && <Form updateState={updateState} />}
    </nav>
  );
};

export default NavBar;
