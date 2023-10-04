'use client'
import Footer from '~/components/footer/Footer';
import NavBar from '~/components/navBar/navBar';
import Categories from '~/components/categories/categories';
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
        {children}
      </main>
      {footer && <Footer />}
    </>
  );
}
