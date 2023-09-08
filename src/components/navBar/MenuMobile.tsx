import React, { FC } from 'react';

interface MenuMobileProps {}

const MenuMobile: FC<MenuMobileProps> = ({}) => {
  return (
    <div className="flex flex-col items-center">
      <a href="#" className="block p-4 hover:text-2xl hover:font-bold">
        Productos
      </a>
      <a href="#" className="block p-4 hover:text-2xl hover:font-bold">
        Como comprar
      </a>
      <a href="#" className="block p-4 hover:text-2xl hover:font-bold">
        Blog
      </a>
      <a href="#" className="block p-4 hover:text-2xl hover:font-bold">
        Nosotros
      </a>
      <a href="#" className="block p-4 hover:text-2xl hover:font-bold">
        Contacto
      </a>
    </div>
  );
};

export default MenuMobile;
