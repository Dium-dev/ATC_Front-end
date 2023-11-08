'use client';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { Images } from '~/assets/img';
import Icon from '~/assets/icons/icon';
import MenuMobile from './MenuMobile';
import { ThemeModeButton } from '../ThemeMode';
import { MainButton } from '../button/button';
import { useFlagState } from '~/hooks/useFlagState';
import { usePathname } from 'next/navigation';
import Form from '../form/Form';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useProductStore } from '~/store/productStore';
import { useAuth } from '~/context/AuthContext';
import FormSignUp from '../form/FormSignUp';
import FormLogin from '../form/FormLogin';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [flagState, updateState] = useFlagState(false);
  const [flagStateRegister, updateStateRegister] = useFlagState(false);
  const [flagStateLogin, updateStateLogin] = useFlagState(false);

  const { user, logout } = useAuth();

  const toggleNavbar = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const updateBody = useProductStore((state) => state.updateBody);
  const products = useProductStore((state) => state.products);
  const name = useProductStore((state) => state.body.name);

  const clearSearchBar = () => {
    const searchBar: HTMLInputElement | null | HTMLElement =
      document.getElementById('searchBar');
    if (searchBar !== null && searchBar instanceof HTMLInputElement) {
      searchBar.value = '';
    }
  };

  user && console.log(user)

  const pathname = usePathname();
  return (
    <nav>
      <div
        className={`z-50 fixed top-0 bg-opacity-70 bg-white w-full backdrop-blur-sm flex-col ${
          pathname !== '/' ? 'shadow-none' : 'shadow-md'
        }`}
      >
        <div className="p-4 flex items-center h-[60px] xxxl:px-0 justify-between mx-auto max-w-[1920px]">
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
            <div className="flex items-center justify-center bg-white px-2 rounded-lg">
              <BiSearch size={22} />
              <input
                id="searchBar"
                type="text"
                placeholder="Buscar productos"
                className="w-full py-1.5 px-3 outline-none rounded-md text-secondary-dm bg-white"
                onChange={(event) => {
                  updateBody('name', event.target.value);
                  products.length && updateBody('page', 1);
                }}
              />
              {name && (
                <span
                  onClick={() => {
                    updateBody('name', '');
                    clearSearchBar();
                  }}
                  className="cursor-pointer"
                >
                  <AiOutlineClose size={20} />
                </span>
              )}
            </div>
          </div>
          {/* Contenedor lado derecho iconos*/}
          <div className="flex items-center gap-6">
            {user ? (
              <>
                <Link href="/dashboardUser">
                  <p className="hidden md:block">¡Bienvenido!</p>
                </Link>
                <div className="h-[35px] w-[35px]">
                  <Icon icon="Login" />
                </div>
              </>
            ) : (
              <>
                <button onClick={() => updateStateLogin(true)}>
                  <p>Iniciar Sesión</p>
                </button>
                <div className="h-[35px] w-[35px]">
                  <Icon icon="Login" />
                </div>
              </>
            )}

            <div className="h-[35px] w-[35px]">
              <Link href={'#'}>
                <Icon icon="CarShoping" />
              </Link>
            </div>

            <ThemeModeButton />
          </div>
        </div>
        {/* Input mobile*/}
        <div className="md:hidden flex items-center justify-center px-2 py-1 rounded-lg mx-6 bg-white">
          <BiSearch size={22} />
          <input
            id="searchBar"
            type="text"
            placeholder="Buscar productos"
            className="w-full py-1.5 px-3 outline-none rounded-md text-secondary-dm"
            onChange={(event) => {
              updateBody('name', event.target.value);
              products.length && updateBody('page', 1);
            }}
          />
          {name && (
            <span
              onClick={() => {
                updateBody('name', '');
                clearSearchBar();
              }}
              className="cursor-pointer"
            >
              <AiOutlineClose size={20} />
            </span>
          )}
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
      {flagStateRegister && (
        <FormSignUp
          updateStateRegister={updateStateRegister}
          updateState={updateStateLogin}
        />
      )}
      {flagStateLogin && (
        <FormLogin
          updateState={updateStateLogin}
          updateStateRegister={updateStateRegister}
        />
      )}
    </nav>
  );
};

export default NavBar;
