import Image from 'next/image';
import Icon from '../assets/icons/icon';
import ListItems from './ListItems';
import { Images } from '~/assets/img';
import Link from 'next/link';

export function Footer() {
  return (
    <footer
      className="
      flex flex-col items-center  h-[532px] bg-[black]
      md:flex-row  md:items-start  md:h-[362px]"
    >
      <div>
        <Image
          src={Images.logos.LogoShieldLight}
          alt=""
          width="200"
          height="120"
        />
        <div className="flex gap-4">
          <Icon icon="Instagram" />
          <Icon icon="Facebook" />
          <Icon icon="Instagram" />
          <Icon icon="Facebook" />
          <Icon icon="Instagram" />
        </div>
      </div>
      <div>
        <div className="flex text-white gap-4">
          <Link href="/aboutUs">Nosotros</Link>
          <Link href="/comoComprar">Como comprar</Link>
          <Link href="/contact">Contacto</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <Image
          src="https://user-images.githubusercontent.com/124757365/267495335-05e1a219-e6cb-4b8a-8984-eb00c8abc7e5.png"
          alt=""
          width="480"
          height="100"
        />
      </div>
      <p className="text-2xl text-white">
        ©Copyrigth Todos los derechos reservados - Desarrollado por: Work Team
      </p>
    </footer>
  );
}
