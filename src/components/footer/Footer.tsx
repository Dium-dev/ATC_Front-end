import Image from 'next/image';
import Icon from '../../assets/icons/icon';
import ListItems from '../ListItems';
import { Images } from '~/assets/img';
import Link from 'next/link';
import SocialMediaImages from './ImagesList';

export function Footer() {
  return (
    <div className="h-[532px] md:h-[362px] bg-[black] p-6 relative">
      <footer
        className="
      flex flex-col gap-8 
      md:flex-row md:items-center md:px-16 md:mt-4"
      >
        <div className="flex flex-col items-center gap-6 ">
          <Image
            src={Images.logos.LogoShieldLight}
            alt=""
            width="200"
            height="120"
          />
          <div className="flex gap-4">{SocialMediaImages()}</div>
        </div>

        <div className="flex flex-col gap-6 items-center flex-1">
          <div className="flex text-white gap-4 items-center justify-center">
            <Link href="/aboutUs">Nosotros</Link>
            <Link href="/comoComprar">Como comprar</Link>
            <Link href="/contact">Contacto</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <Image
            src="https://i.postimg.cc/7Ymwd4mS/Mercado-Pago.png"
            alt=""
            width="400"
            height="240"
          />
        </div>
      </footer>

      <p className="text-xs text-white text-center absolute bottom-0 left-0 right-0 pb-4">
        ©Copyrigth 2023. Todos los derechos reservados - Desarrollado por: Work
        Team
      </p>
    </div>
  );
}
