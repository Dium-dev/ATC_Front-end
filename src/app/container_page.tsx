'use client';
import Footer from '~/components/footer/Footer';
import NavBar from '~/components/navBar/navBar';
import Categories from '~/components/categories/categories';
import ContainerProducts from '~/components/containerProducts';
import PaginationProducts from '~/components/paginationProducts';
import { TopSellers } from '~/components/containerCards/containerCards';
import { usePathname } from 'next/navigation';
import CookieConsent from '~/components/cookieConsent/CookieConsent';
import { useProductStore } from '~/store/productStore';

type ContainerPageProps = {
    children: React.ReactNode;
    nav?: boolean | React.ReactNode;
    header?: React.ReactNode;
    footer?: boolean;
};

export function ContainerPage({
    nav = true,
    header,
    footer = true,
    children,
}: ContainerPageProps) {
  const pathname = usePathname();
  const pages = useProductStore(state => state.pages);
  return (
    <>
      {/* nav === true? */}
      {typeof nav === 'boolean' && nav ? <NavBar /> : nav}
      {header && header}
      <main className="min-h-screen overflow-hidden mx-auto">
        {pathname !== '/' && <Categories />}
        {pathname === '/products' ? (
          <section className="w-full h-full flex flex-col items-start justify-between md:gap-x-5 gap-y-6 md:gap-y-0 mt-20 md:mt-0">
            <ContainerProducts />
            {pages > 0 && <PaginationProducts />}
            <TopSellers />
          </section>
        ) : null}
        {children}
      </main>
      {footer && <Footer />}
      {/* Renderizar en todas las páginas hasta que el usuario lo cierre. La condición debe estar almacenada en localStorage */}
      <CookieConsent />
    </>
  );
}
