import React, { FC } from 'react';
import Link from 'next/link';

interface LinksProps {}

const LinksRoutes = [
  { name: 'Nosotros', route: '/aboutUs' },
  { name: 'Como comprar', route: '/como-comprar' },
  { name: 'Contacto', route: '/contact' },
  { name: 'Blog', route: '/blog' },
];

const Links: FC<LinksProps> = () => {
  return (
    <>
      {LinksRoutes.map((link) => (
        <>
          <Link href={link.route} key={link.name}>
            {link.name}
          </Link>
          <div key={link.name + 1} className="w-[3px] h-4 bg-primary-lm"></div>
        </>
      ))}
    </>
  );
};

export default Links;
