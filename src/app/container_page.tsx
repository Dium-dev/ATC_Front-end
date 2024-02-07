'use client';
import Footer from '~/components/footer/Footer';
import NavBar from '~/components/navBar/navBar';
import Categories from '~/components/categories/categories';
import { usePathname } from 'next/navigation';
import CookieConsent from '~/components/cookieConsent/CookieConsent';
import ViewProducts from '~/components/viewProducts';
import LoadingStore from '~/components/loading/loadingStore';

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
  const isLoading = false; // Reemplazar esto con el estado de loading real

  return (
    <>
      <LoadingStore loading={isLoading} error={undefined} />
      {/* nav === true? */}
      {typeof nav === 'boolean' && nav ? <NavBar /> : nav}
      {header && header}
      <main className="min-h-screen overflow-hidden mx-auto">
        {pathname !== '/' && <Categories />}
        {pathname === '/products' ? (
          <ViewProducts />
        ) : null}
        {children}
      </main>
      {footer && <Footer />}
      {/* Renderizar en todas las páginas hasta que el usuario lo cierre. La condición debe estar almacenada en localStorage */}
      <CookieConsent />
      </>
     );
   }
