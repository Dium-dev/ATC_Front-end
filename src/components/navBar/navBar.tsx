'use client';
import Image from 'next/image';
import React from 'react';
import { Images } from '~/assets/img';
import ButtonComponent, { MainButton } from '../button/button';
import { DropDownMenu } from '../dropdownMenu/dropdownMenu';
import { ThemeModeButton } from '../ThemeMode';
import { InputField } from '../inputs/InputField';

export const NavBar = () => {
  return (
    <div className="flex items-center justify-center">
      <nav className="bg-white px-5 py-7 w-full h-auto flex items-center justify-between max-w-[1480px] ">
        <div className="">
          <Image
            src={Images.LogoRedColor}
            width={200}
            height={30}
            alt="Your Company"
          />
        </div>
        <ul className="flex justify-center items-center gap-x-6 mr-4">
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
          <li>
            <MainButton variant="tertiary">Nosotros</MainButton>
          </li>
          <li>
            <MainButton variant="tertiary">Contacto</MainButton>
          </li>
        </ul>
        <InputField
          className="w-[309px] h-[40px] "
          placeholder="Buscar productos"
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path
                d="M10.3333 9.33333H9.80667L9.62 9.15333C10.2733 8.39333 10.6667 7.40667 10.6667 6.33333C10.6667 3.94 8.72667 2 6.33333 2C3.94 2 2 3.94 2 6.33333C2 8.72667 3.94 10.6667 6.33333 10.6667C7.40667 10.6667 8.39333 10.2733 9.15333 9.62L9.33333 9.80667V10.3333L12.6667 13.66L13.66 12.6667L10.3333 9.33333V9.33333ZM6.33333 9.33333C4.67333 9.33333 3.33333 7.99333 3.33333 6.33333C3.33333 4.67333 4.67333 3.33333 6.33333 3.33333C7.99333 3.33333 9.33333 4.67333 9.33333 6.33333C9.33333 7.99333 7.99333 9.33333 6.33333 9.33333Z"
                fill="#5F6974"
              />
            </svg>
          }
        />
        <div className="flex items-center">
          <MainButton className="mr-8" variant="tertiary">
            Ingresar
          </MainButton>
          <ThemeModeButton />
          <MainButton variant="tertiary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H4C4.22306 6.1623e-05 4.4397 0.0747014 4.61546 0.212049C4.79122 0.349398 4.91602 0.541568 4.97 0.758L5.78 4H29C29.1479 4.00009 29.2939 4.03298 29.4276 4.0963C29.5612 4.15963 29.6792 4.25181 29.7729 4.3662C29.8666 4.48059 29.9338 4.61435 29.9696 4.75784C30.0054 4.90133 30.009 5.05098 29.98 5.196L27.98 15.196C27.9362 15.4141 27.821 15.6113 27.6526 15.7566C27.4842 15.9018 27.2721 15.9868 27.05 15.998L8.256 16.942L8.83 20H26C26.2652 20 26.5196 20.1054 26.7071 20.2929C26.8946 20.4804 27 20.7348 27 21C27 21.2652 26.8946 21.5196 26.7071 21.7071C26.5196 21.8946 26.2652 22 26 22H8C7.76686 21.9998 7.54113 21.9181 7.36182 21.7691C7.18251 21.6201 7.0609 21.4132 7.018 21.184L4.02 5.214L3.22 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1ZM6.204 6L7.884 14.958L26.172 14.04L27.78 6H6.204ZM10 22C8.93913 22 7.92172 22.4214 7.17157 23.1716C6.42143 23.9217 6 24.9391 6 26C6 27.0609 6.42143 28.0783 7.17157 28.8284C7.92172 29.5786 8.93913 30 10 30C11.0609 30 12.0783 29.5786 12.8284 28.8284C13.5786 28.0783 14 27.0609 14 26C14 24.9391 13.5786 23.9217 12.8284 23.1716C12.0783 22.4214 11.0609 22 10 22ZM24 22C22.9391 22 21.9217 22.4214 21.1716 23.1716C20.4214 23.9217 20 24.9391 20 26C20 27.0609 20.4214 28.0783 21.1716 28.8284C21.9217 29.5786 22.9391 30 24 30C25.0609 30 26.0783 29.5786 26.8284 28.8284C27.5786 28.0783 28 27.0609 28 26C28 24.9391 27.5786 23.9217 26.8284 23.1716C26.0783 22.4214 25.0609 22 24 22ZM10 24C10.5304 24 11.0391 24.2107 11.4142 24.5858C11.7893 24.9609 12 25.4696 12 26C12 26.5304 11.7893 27.0391 11.4142 27.4142C11.0391 27.7893 10.5304 28 10 28C9.46957 28 8.96086 27.7893 8.58579 27.4142C8.21071 27.0391 8 26.5304 8 26C8 25.4696 8.21071 24.9609 8.58579 24.5858C8.96086 24.2107 9.46957 24 10 24ZM24 24C24.5304 24 25.0391 24.2107 25.4142 24.5858C25.7893 24.9609 26 25.4696 26 26C26 26.5304 25.7893 27.0391 25.4142 27.4142C25.0391 27.7893 24.5304 28 24 28C23.4696 28 22.9609 27.7893 22.5858 27.4142C22.2107 27.0391 22 26.5304 22 26C22 25.4696 22.2107 24.9609 22.5858 24.5858C22.9609 24.2107 23.4696 24 24 24Z"
                fill="black"
              />
            </svg>
          </MainButton>
        </div>
      </nav>
    </div>
  );
};
