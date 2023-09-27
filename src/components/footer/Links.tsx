import React, { FC } from 'react';
import Link from 'next/link';

interface LinksProps {}

const LinksRoutes = [
  { name: 'Nosotros', route: '/aboutUs' },
  { name: 'Como comprar', route: '/como-comprar' },
  { name: 'Blog', route: 'https://actualizatucarro.blogspot.com/' },
];

const Links: FC<LinksProps> = () => {
  return (
    <>
      {LinksRoutes.map((link, index) => (
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
