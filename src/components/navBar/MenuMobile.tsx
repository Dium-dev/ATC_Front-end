import Link from 'next/link';
import React, { FC } from 'react';

interface MenuMobileProps {}

const MenuMobile: FC<MenuMobileProps> = ({}) => {
  return (
    <div className="flex flex-col items-center">
      <Link
        href="/products"
        className="block p-4 hover:text-2xl hover:font-bold"
      >
        Productos
      </Link>
      <Link
        href="/how-to-buy"
        className="block p-4 hover:text-2xl hover:font-bold"
      >
        Como comprar
      </Link>
      <Link href="/blog" className="block p-4 hover:text-2xl hover:font-bold">
        Blog
      </Link>
      <Link
        href="/about-us"
        className="block p-4 hover:text-2xl hover:font-bold"
      >
        Nosotros
      </Link>
      <Link
        href="/contact"
        className="block p-4 hover:text-2xl hover:font-bold"
      >
        Contacto
      </Link>
    </div>
  );
};

export default MenuMobile;
