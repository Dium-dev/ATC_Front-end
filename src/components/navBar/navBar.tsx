'use client';
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/LOGO-ATC.png';
import ButtonNav from './buttonNav';
import ProfileButton from './profileButton';
import MobileMenu from './mobileMenu';
import ButtonComponent from '../button/button';

const navigation = [
  {
    label: 'Mi perfil',
    route: '/dashboardUser',
  },
  {
    label: 'Inicio',
    route: '/',
  },
  {
    label: 'Productos',
    route: '/products',
  },
  {
    label: 'Nosotros',
    route: '/aboutUs',
  },
  {
    label: 'Contacto',
    route: '/contact',
  },
];

export const NavBar = () => {
  return (
  
  <div className='h-fit w-[1080px] w-fit min-w-[800px] flex flex-row justify-between items-center bg-text-dm'>
      <div className='flex flex-row items-center' >
            <Image
                  className="h-18 w-18"
                  src={logo}
                  alt="Your Company"
                  width={150}
                  // height={100}
        />
        <ButtonComponent type="white" text='Categorías' className="px-4"/>
        <ButtonComponent type="white" text='Marca' />
        <ButtonComponent type="white" text='Precio'/>
    </div>
      <div>
        
    </div>
    <div></div>
  
  </div>
    
    // <div className="min-h-full bg-background-dm">
    //   <nav className="bg-gray-800">
    //     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //       <div className="flex h-16 items-center justify-center ">
    //         <div className="flex items-center">
    //           <div className="flex-shrink-0">
    //             <Image
    //               className="h-18 w-18"
    //               src={logo}
    //               alt="Your Company"
    //               width={150}
    //               // height={100}
    //             />
    //           </div>
    //           <div className="hidden md:block">
    //             <div className="ml-10 flex items-baseline space-x-4">
    //               {navigation.map(({ label, route }) => (
    //                 <ButtonNav key={route} label={label} route={route} />
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //         <ProfileButton />
    //         < MobileMenu navigation ={navigation} />
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};
