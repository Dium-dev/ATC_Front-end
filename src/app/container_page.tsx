import { Footer } from '~/components/Footer';
import { NavBar } from '~/components/navBar/navBar';

type ContainerPageProps = {
  children: React.ReactNode;
  nav: boolean | React.ReactNode;
  footer: boolean;
};

export function ContainerPage({
  nav = true,
  footer = true,
  children,
}: ContainerPageProps) {
  return (
    <>
      {typeof nav === 'boolean' && nav ? <NavBar /> : nav}
      <main className="min-h-screen sm:px-[5%]">{children}</main>
      {footer && <Footer />}
    </>
  );
}
