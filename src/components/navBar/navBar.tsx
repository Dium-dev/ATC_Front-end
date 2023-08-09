'use client';
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/LOGO-ATC.png';
import ButtonNav from './buttonNav';
import ProfileButton from './profileButton';
import MobileMenu from './mobileMenu';
import ButtonComponent from '../button/button';
import { FaAtlas, FaUser } from "react-icons/fa"
import {BsCartFill} from "react-icons/bs"

export const NavBar = () => {
  return (
  
  <div className='h-fit w-full w-fit min-w-[800px] flex flex-row justify-between items-center bg-text-dm'>
      <div className='flex flex-row items-center space-x-8' >
            <Image
                  className="h-18 w-18"
                  src={logo}
                  alt="Your Company"
                  width={150}
                  // height={100}
        />
        <ButtonComponent type="white" text='Categorías' className="px-4"/>
        <ButtonComponent type="white" text='Marca' className="px-4" />
        
    </div>
      <div className='flex flex-row min-w-[500px] bg-secondary-lm'>
        <input type="text" className='w-full' />
    </div>
      <div className='flex flex-row space-x-8 items-center' >
        <ButtonComponent type="white" text='Acerca de nosotros'/>
        <ButtonComponent type="white" text='Contacto'/>
        <FaAtlas className="cursor-pointer" />
        <FaUser className="cursor-pointer"/>
        <BsCartFill className="cursor-pointer"/>
    </div>
  
  </div>
    
  
  );
};
