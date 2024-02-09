'use client';
import Footer from '~/components/footer/Footer';
import NavBar from '~/components/navBar/navBar';
import CookieConsent from '~/components/cookieConsent/CookieConsent';
import LoadingStore from '~/components/loading/loadingStore';

type ContainerPageProps = {
  children: React.ReactNode;
  nav?: boolean;
  header?: React.ReactNode;
  footer?: boolean;
};

export function ContainerPage({
  nav = true,
  header,
  footer = true,
  children,
}: ContainerPageProps) {
  const isLoading = false; // Reemplazar esto con el estado de loading real

  return (
    <>
      <LoadingStore loading={isLoading} error={undefined} />
      {/* nav === true? */}
      {nav && <NavBar />}
      {header && header}
      <main className="min-h-screen overflow-hidden mx-auto">{children}</main>
      {footer && <Footer />}
      {/* Renderizar en todas las páginas hasta que el usuario lo cierre. La condición debe estar almacenada en localStorage */}
      <CookieConsent />
    </>
  );
}
