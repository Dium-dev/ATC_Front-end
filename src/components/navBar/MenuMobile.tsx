import Link from 'next/link';
import React, { FC } from 'react';
import { useProductStore } from '~/store/productStore';

interface MenuMobileProps {
  // eslint-disable-next-line no-unused-vars
  updateState: (isOpenContact: boolean) => void;
}

const MenuMobile: FC<MenuMobileProps> = ({ updateState }) => {
  const navItems = [
    { label: 'Productos', url: '/products' },
    { label: 'Como comprar', url: '/how-to-buy' },
    { label: 'Blog', url: 'https://actualizatucarro.blogspot.com' },
    { label: 'Nosotros', url: '/about-us' },
  ];
  const resetBody = useProductStore((state) => state.resetBody);
  return (
    <div className="flex flex-col items-center">
      {navItems.map((item) => (
        <>
          <Link
            onClick={() => {
              item.url === '/products' && resetBody();
            }}
            key={item.url}
            href={item.url}
            className="block p-4 transform hover:scale-125 hover:text-primary-lm hover:font-bold"
            target={item.url === 'https://actualizatucarro.blogspot.com' ? '_blank' : '_self'}
          >
            {item.label}
          </Link>
        </>
      ))}
      <button
        className="block p-4 transform hover:scale-125 hover:text-primary-lm hover:font-bold"
        onClick={() => updateState(true)}
      >
        Contacto
      </button>
    </div>
  );
};

export default MenuMobile;
