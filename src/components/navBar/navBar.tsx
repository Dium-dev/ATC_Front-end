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
import { InputField } from '../inputs/InputField';
import { MobileMenu } from './mobile-menu';
import { FiChevronRight } from 'react-icons/fi';
interface NavBarProps {}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleOPen = () => setOpen((cur) => !cur);
  const { user } = useAuth();
  const [flagState, updateState] = useFlagState(false);
  const { registerForm, setRegisterForm } = useDashboardUserStore(
    (state) => state
  );
  const { loginForm, setLoginForm } = useDashboardUserStore((state) => state);

  console.log(user);

  function openSession() {
    setLoginForm(true);
  }
  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-sm bg-background-lm/90 dark:bg-background-dm/90 shadow rounded-b">
        <nav className=" max-w-[1920px] mx-auto p-3 flex justify-between items-center ms:justify-start gap-6  ">
          <MobileMenu
            user={user}
            buttonValue={<Icon icon={'HamburguerOpen'} />}
            open={open}
            handleOPen={handleOPen}
            openSession={openSession}
          />
          <Image
            src={'./images/logo/logoM.svg'}
            width={50}
            height={50}
            alt="Your Company"
            onClick={() => {}}
            className="hidden ms:block md:hidden"
          />
          <Image
            src={'./images/logo/logoD.svg'}
            width={200}
            height={30}
            alt="Your Company"
            onClick={() => {}}
            className="hidden md:block"
          />

          <div className="flex-1 ms:max-w-sm lg:max-w-md">
            <InputField
              className=""
              placeholder="Busca tu producto"
              rightIcon={<Icon icon="SearchIcon" />}
            />
          </div>

          <ul className="hidden ms:flex mx-auto xxxl:gap-10">
            <li>
              <MainButton>Productos</MainButton>
            </li>
            <li>
              <MainButton>Blog</MainButton>
            </li>
            <li>
              <MainButton className="hidden xl:block">Nosotros</MainButton>
            </li>
            <li>
              <MainButton className="flex gap-2 items-center">
                Mas {<FiChevronRight />}
              </MainButton>
            </li>
          </ul>
          <div className="ms:flex ms:ml-auto ms:gap-4">
            {!user?.email ? (
              <MainButton
                onClick={() => setLoginForm(true)}
                className="hidden ms:block"
              >
                Ingresar
              </MainButton>
            ) : (
              user.email
            )}
            <button className="w-9 aspect- group hover:bg-primary-dm/20 p-1 rounded text-text-lm relative dark:text-text-dm">
              <span className="absolute bg-primary-lm rounded-full aspect-square w-4 text-xs grid place-content-center text-white group-hover:animate-bounce shadow -right-1 -top-1">
                1
              </span>
              <Icon icon="CarShoping" />
            </button>
          </div>
        </nav>
      </div>

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
    </>
  );
}

const NavBars: FC<NavBarProps> = ({}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [flagState, updateState] = useFlagState(false);
  const { registerForm, setRegisterForm } = useDashboardUserStore(
    (state) => state
  );
  const { loginForm, setLoginForm } = useDashboardUserStore((state) => state);

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

  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50">
      <div
        className={`z-50 bg-opacity-70 bg-white w-full backdrop-blur-sm flex-col ${
          pathname !== '/' ? 'shadow-none' : 'shadow-md'
        } dark:bg-primary-dm/90 py-0.5`}
      >
        <div className="p-4 flex items-center h-[60px] xxxl:px-0 justify-between mx-auto max-w-[1920px] relative">
          {/* Contenedor lado izquierdo menu hamburguesa-imagenes*/}
          <div className="flex items-center gap-2">
            {/* Icono hamburguesa */}
            <div className="flex items-center gap-2 xxxl:gap-0 ">
              <MainButton
                onClick={toggleNavbar}
                onMouseOver={() => setIsOpenMenu(true)}
              >
                <div className={isOpenMenu ? 'h-14 w-14' : 'h-h-14 w-14'}>
                  <Icon
                    icon={isOpenMenu ? 'HamburguerClose' : 'HamburguerOpen'}
                  />
                </div>
              </MainButton>
              {isOpenMenu && (
                <div
                  className="absolute top-[108px] md:top-[60px] left-0 w-screen xs:max-w-[303px] bg-white bg-opacity-95 shadow-sm z-50 flex justify-center items-center rounded-b-md dark:bg-primary-dm mt-3 md:mt-0"
                  onMouseLeave={toggleNavbar}
                >
                  <MenuMobile updateState={updateState} />
                </div>
              )}
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
                    className="w-52 h-9"
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
                <button onClick={() => setLoginForm(true)}>
                  <p>Iniciar Sesión</p>
                </button>
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
      {/* <Categories /> */}
    </nav>
  );
};
