'use client';
/*eslint-disable*/
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '~/context/AuthContext';
import { usePathname } from 'next/navigation';
import NotificationDropdown from '~/components/componetsDashboard/Dropdowns/NotificationDropdown.js';
import UserDropdown from '~/components/componetsDashboard/Dropdowns/UserDropdown.js';

import { Images } from '~/assets/img';
import { redirect } from 'next/navigation';

export default function Sidebar() {
  const currentPath = usePathname();
  const [collapseShow, setCollapseShow] = React.useState('hidden');
  const { user, logout } = useAuth();
  const handleLogout = (e) => {
    // e.preventDefault();
    try {
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  !user ? redirect('/') : null;

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
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
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <Image
                      src={Images.logos.LogoRedColor}
                      width={200}
                      height={30}
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow('hidden')}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Dashboard
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={`text-xs uppercase py-3 font-bold block
                    ${
                      currentPath === '/dashboardUser'
                        ? 'text-lightBlue-500 hover:text-lightBlue-600'
                        : 'text-blueGray-700 hover:text-blueGray-500'
                    }`}
                  href="/dashboardUser"
                >
                  <i
                    className={`fas fa-tv mr-2 text-sm
                      ${
                        currentPath === '/dashboardUser'
                          ? 'opacity-75'
                          : 'text-blueGray-300'
                      }
                      `}
                  ></i>{' '}
                  Pedidos
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={`text-xs uppercase py-3 font-bold block
                  ${
                    currentPath === '/dashboardUser/Settings'
                      ? 'text-lightBlue-500 hover:text-lightBlue-600'
                      : 'text-blueGray-700 hover:text-blueGray-500'
                  }`}
                  href="/dashboardUser/Settings"
                >
                  <i
                    className={`fas fa-tools mr-2 text-sm'
                      ${
                        currentPath === '/dashboardUser/Settings'
                          ? 'opacity-75'
                          : 'text-blueGray-300'
                      }
                      `}
                  ></i>{' '}
                  Datos personales
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={`text-xs uppercase py-3 font-bold block
                  ${
                    currentPath === '/dashboardUser/Direcciones'
                      ? 'text-lightBlue-500 hover:text-lightBlue-600'
                      : 'text-blueGray-700 hover:text-blueGray-500'
                  }`}
                  href="/dashboardUser/Direcciones"
                >
                  <i
                    className={`fas fa-table mr-2 text-sm'
                      ${
                        currentPath === '/dashboardUser/Direcciones'
                          ? 'opacity-75'
                          : 'text-blueGray-300'
                      }
                      `}
                  ></i>{' '}
                  Direcciones
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={`text-xs uppercase py-3 font-bold block
                  ${
                    currentPath === '/dashboardUser/Favoritos'
                      ? 'text-lightBlue-500 hover:text-lightBlue-600'
                      : 'text-blueGray-700 hover:text-blueGray-500'
                  }`}
                  href="/dashboardUser/Favoritos"
                >
                  <i
                    className={`fa-solid fa-heart mr-2 text-sm
                      ${
                        currentPath === '/dashboardUser/Favoritos'
                          ? 'opacity-75'
                          : 'text-blueGray-300'
                      }
                    `}
                  ></i>{' '}
                  Favoritos
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={`text-xs uppercase py-3 font-bold block
                  ${
                    currentPath === '/dashboardUser/Ayuda'
                      ? 'text-lightBlue-500 hover:text-lightBlue-600'
                      : 'text-blueGray-700 hover:text-blueGray-500'
                  }`}
                  href="/dashboardUser/Ayuda"
                >
                  <i
                    className={`fa-solid fa-question mr-2 text-sm
                      ${
                        currentPath === '/dashboardUser/Ayuda'
                          ? 'opacity-75'
                          : 'text-blueGray-300'
                      }
                      `}
                  ></i>{' '}
                  Ayuda
                </Link>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Sesion
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <button
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  onClick={handleLogout}
                >
                  <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{' '}
                  Cerrar Sesion
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
