import Link from 'next/link';
import React, { FC } from 'react';

interface MenuMobileProps {}

const MenuMobile: FC<MenuMobileProps> = ({}) => {
  const navItems = [
    { label: 'Productos', url: '/products' },
    { label: 'Como comprar', url: '/how-to-buy' },
    { label: 'Blog', url: '/blog' },
    { label: 'Nosotros', url: '/about-us' },
    { label: 'Contacto', url: '/contact' },
  ];

  return (
    <div className="flex flex-col items-center">
      {navItems.map((item) => (
        <>
          <Link
            key={item.url}
            href={item.url}
            className="block p-4 hover:text-2xl hover:font-bold"
          >
            {item.label}
          </Link>
        </>
      ))}
    </div>
  );
};

export default MenuMobile;
