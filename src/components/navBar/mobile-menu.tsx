import Image from 'next/image';
import { useEffect, type ReactNode, useState } from 'react';
import Icon from '~/assets/icons/icon';
import { ToggleTheme } from '../ThemeMode';
import { useRouter } from 'next/navigation';
import { MainButton } from '../button/button';
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';

interface Props {
  buttonValue: ReactNode;
  open: boolean;
  user: undefined | User;
  handleOPen(): void;
  openSession(): void;
}

type User = {
  email: string;
};

export function MobileMenu({
  buttonValue,
  open,
  handleOPen,
  user,
  openSession,
}: Props) {
  const [curIndex, setCurIndex] = useState(0);
  const handleCurIndex = (index: number) => setCurIndex(index ? index : 0);
  const route = useRouter();
  const routes = [
    {
      label: 'Productos',
      url: '/products',
      sub: [
        {
          label: 'Farola',
          to: 'farolas',
        },
        {
          label: 'Luces',
          to: 'farolas',
        },
      ],
    },
    { label: 'Como comprar', url: '/how-to-buy' },
    { label: 'Blog', url: 'https://actualizatucarro.blogspot.com' },
    { label: 'Nosotros', url: '/about-us' },
  ];
  const [animations, setAnimations] = useState({
    openMenu: '1s mobile-menu-animate ',
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <button className="w-9 ms:hidden" onClick={handleOPen}>
        {buttonValue}
      </button>
      {open && (
        <div
          className="fixed top-0 left-0 h-screen bg-background-dm/70 w-full z-[60] ms:hidden"
          onClick={handleOPen}
        >
          <div
            style={{
              animation: animations.openMenu,
            }}
            className="h-full bg-background-lm max-w-[290px] p-3 gap-5 flex flex-col dark:bg-background-dm transition-all ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex items-center justify-between">
              <Image
                src={'./images/logo/logoD.svg'}
                width={200}
                height={30}
                alt="Your Company"
                onClick={() => route.back()}
              />
              <button
                className="w-10 aspect-square"
                onClick={() => {
                  handleOPen();
                }}
              >
                {' '}
                <Icon icon="Close" />
              </button>
            </header>
            {user ? (
              <AvatarProfile image="lola" name={user.email} />
            ) : (
              <MainButton
                onClick={openSession}
                color="red"
                className="w-full py-2 text-lg"
              >
                Ingresar
              </MainButton>
            )}
            <ul className="flex-1 space-y-3">
              {routes.map(({ label, url, sub }) => (
                <li
                  className="transition-all ease-in-out"
                  key={label}
                  onClick={() => route.push(url)}
                >
                  <div className="flex items-center">
                    <MainButton className="w-4/5 text-start">
                      {'' + label}
                    </MainButton>
                    {sub && (
                      <MainButton
                        className="w-1/5"
                        onClick={(evt) => {
                          evt.stopPropagation();
                          handleCurIndex(curIndex === 1 ? 0 : 1);
                        }}
                      >
                        <FiChevronDown className="w-full h-full" />
                      </MainButton>
                    )}
                  </div>

                  {sub && (
                    <Accordion index={1} current={curIndex} values={sub} />
                  )}
                </li>
              ))}
              <div className="pt-6">
                <hr className="border-secondary-dm/50 pb-6" />
                <p className="pl-3 flex items-center justify-between font-medium">
                  Apariencia: {<ToggleTheme />}
                </p>
              </div>
            </ul>

            <footer className="text-center flex flex-col items-center">
              {user && (
                <MainButton color="red" variant="tertiary">
                  Cerrar Sesión
                </MainButton>
              )}
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

interface AccordionProps {
  index: number;
  current: number;
  values: Array<{
    label: string;
    to: string;
  }>;
}

function Accordion({ index, current, values }: AccordionProps) {
  return (
    <div
      className={`${
        index === current ? 'h-auto' : 'h-0'
      } overflow-hidden ml-4 transition-all ease-in-out`}
    >
      {values.map(({ label }, i) => (
        <Link href={`/products?category=${label}`} key={i} className="block">
          {label}
        </Link>
      ))}
    </div>
  );
}

function AvatarProfile({ image, name }: { image: string; name: string }) {
  return (
    <div className="flex box-content">
      <Image
        src={'./images/logo/logoM.svg'}
        width={50}
        height={50}
        alt={name}
        className="border rounded-full"
      />
      <MainButton className="flex flex-col line-clamp-1">
        <span title={name} className="whitespace-nowrap line-clamp-1 w-full">
          {name.length > 21 ? name.slice(0, 21) + '...' : name}
        </span>
        <span className="text-xs font-normal">Ver Perfil</span>
      </MainButton>
    </div>
  );
}
