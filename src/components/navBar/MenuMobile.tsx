import Link from 'next/link';
import React, { FC } from 'react';

interface MenuMobileProps {
  updateState: (isOpenContact: boolean) => void;
}

const MenuMobile: FC<MenuMobileProps> = ({ updateState }) => {
  const navItems = [
    { label: 'Productos', url: '/products' },
    { label: 'Como comprar', url: '/how-to-buy' },
    { label: 'Blog', url: 'https://actualizatucarro.blogspot.com' },
    { label: 'Nosotros', url: '/about-us' },
  ];

  return (
    <div className="flex flex-col items-center">
      {navItems.map((item) => (
        <>
          <Link
            key={item.url}
            href={item.url}
            className="block p-4 transform  hover:scale-125"
          >
            {item.label}
          </Link>
        </>
      ))}
      <button
        className="block p-4 transform  hover:scale-125"
        onClick={() => updateState(true)}
      >
        Contacto
      </button>
    </div>
  );
};

export default MenuMobile;
