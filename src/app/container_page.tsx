'use client';
import Footer from '~/components/footer/Footer';
import NavBar from '~/components/navBar/navBar';
import Categories from '~/components/categories/categories';
import ContainerProducts from '~/components/containerProducts';
import Filters from '~/components/filters';
import { usePathname } from 'next/navigation';

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
  return (
    <>
      {typeof nav === 'boolean' && nav ? <NavBar /> : nav}
      {header && header}
      <main className="min-h-screen overflow-hidden mx-auto">
        {pathname !== '/' && <Categories />}
        <section className="w-full h-full flex flex-col items-start justify-between mt-20 md:mt-0 py-10 px-10 md:flex-row md:gap-x-5 gap-y-6 md:gap-y-0">
          {pathname === '/products' && <Filters />}
          {pathname === '/products' && <ContainerProducts />}
        </section>
        {children}
      </main>
      {footer && <Footer />}
    </>
  );
}
