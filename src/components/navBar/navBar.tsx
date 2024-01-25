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
import { useDashboardUserStore } from '~/store/dashboardUserStore';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [flagState, updateState] = useFlagState(false);
  const {registerForm, setRegisterForm} = useDashboardUserStore((state) => state);
  const {loginForm, setLoginForm} = useDashboardUserStore((state) => state);

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
        } dark:bg-primary-dm py-0.5`}
      >
        <div className="p-4 flex items-center h-[60px] xxxl:px-0 justify-between mx-auto max-w-[1920px] relative">
          {isOpenMenu && (
            <div
              className="absolute top-[108px] md:top-[60px] left-0 w-screen xs:max-w-[303px] bg-white bg-opacity-95 shadow-sm z-50 flex justify-center items-center rounded-b-md dark:bg-primary-dm mt-3 md:mt-0"
              onMouseLeave={toggleNavbar}
            >
              <MenuMobile updateState={updateState} />
            </div>
          )}
          {/* Contenedor lado izquierdo menu hamburguesa-imagenes*/}
          <div className="flex items-center gap-2">
            {/* Icono hamburguesa */}
            <div className="flex items-center gap-2 xxxl:gap-0">
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
                <Link href="/products">
                  <Image
                    src={Images.logos.LogoRedColor}
                    width={200}
                    height={30}
                    alt="Your Company"
                    className='w-52 h-9'
                  />
                </Link>
              </div>
              {/* imagen mobile */}
              <div className="md:hidden flex justify-center items-center">
                <Link href="/products">
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
            <div className="flex items-center justify-center bg-white px-2 rounded-lg shadow-md dark:shadow-sm dark:shadow-white dark:bg-primary-dm">
              <BiSearch size={22} />
              <input
                id="searchBar"
                type="text"
                placeholder="Buscar productos"
                className="w-full md:w-[400px] py-1.5 px-3 outline-none ml-5 mr-5 md:ml-10 md:mr-10 rounded-md text-secondary-dm bg-white dark:bg-primary-dm"
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
                {/* <button onClick={() => setLoginForm(true)}>
                  <p>Iniciar Sesión</p>
                </button> */}
                <div className="h-[35px] w-[35px]">
                  <Icon icon="Login" />
                </div>
              </>
            )}

            <div className="h-[35px] w-[35px]">
              <Link href={'/carShoping'}>
                <Icon icon="CarShoping" />
              </Link>
            </div>

            <ThemeModeButton />
          </div>
        </div>
        {/* Input mobile*/}
        <div className="md:hidden flex items-center justify-center px-2 py-1 rounded-lg mx-6 bg-white mb-4 shadow-md dark:shadow-sm dark:shadow-white dark:bg-primary-dm">
          <BiSearch size={22} />
          <input
            id="searchBar"
            type="text"
            placeholder="Buscar productos"
            className="w-full md:w-[400px] py-1.5 px-3 outline-none ml-5 mr-5 md:ml-10 md:mr-10 rounded-md text-secondary-dm bg-white dark:bg-primary-dm"
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
      <div>{/* Menu */}</div>
      {flagState && <Form updateState={updateState} />}
      {registerForm && (
        <FormSignUp
          updateStateRegister={setRegisterForm}
          updateState={setLoginForm}
        />
      )}
      {loginForm && (
        <FormLogin
          updateState={setLoginForm}
          updateStateRegister={setRegisterForm}
        />
      )}
    </nav>
  );
};

export default NavBar;
