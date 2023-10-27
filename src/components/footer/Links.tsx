import React from 'react';
import Link from 'next/link';

const LinksRoutes = [
    { name: 'Nosotros', route: '/aboutUs' },
    { name: '¿Cómo comprar?', route: '/como-comprar' },
    { name: 'Blog', route: 'https://actualizatucarro.blogspot.com/' },
];

const Links = () => {
    return (
        <>
            {LinksRoutes.map((link) => (
                <Link
                    key={link.name}
                    href={link.route}
                    target={link.name === "Blog" ? "_blank" : ""}
                    className="relative uppercase after:content-[''] after:absolute after:-bottom-[5px] after:left-0 after:w-full after:h-[2.5px] after:bg-secondary-lm after:scale-x-0 after:transform after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left">
                    {link.name}
                </Link>
            ))}
        </>
    );
};

export default Links;