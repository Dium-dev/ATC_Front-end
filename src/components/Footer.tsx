import Image from 'next/image';
import IconText from './IconText';
import ListItems from './ListItems';
import { Images } from '~/assets/img';

export function Footer() {
  return (
    <footer className="min-w-[390px] bg-background-dm text-text-dm px-8 py-[50px] sm:px-[5%]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-4 mb-10 gap-y-10 md:grid-cols-3 xl:grid-cols-4 max-w-7xl xl:mx-auto">
          <picture className="col-span-4 md:col-span-1 ">
            <Image
              src={Images.LogoRedColor}
              alt="Actualiza tu carro icono"
              width={200}
              height={100}
            />
          </picture>
          <ListItems className="col-span-2 md:col-span-1" title="Correo">
            <p>actualizatucarro@gmail.com</p>
          </ListItems>
          <ListItems
            className="col-span-2 row-start-3 md:row-start-2  md:col-span-1 md:col-start-2 xl:col-start-3 xl:row-start-1"
            title="Telefono"
          >
            <p>{'+7 (708) 802 88 88'}</p>
            <IconText icon="MapLocation" text="Bogota Dc" />
          </ListItems>
          <ListItems
            className="col-start-3 row-start-2 row-end-4 md:row-start-1 xl:col-start-4"
            title="Redes Sociales"
          >
            <IconText icon="Facebook" text="truck_service_ofFicIaL" />
            <IconText icon="Instagram" text="truck_service_ofFicIaL" />
            <IconText icon="Whatsapp" text="+7 (708) 802 88 88" />
          </ListItems>
        </div>
        <p className="border-t-2 border-text-lm pt-[18px] max-w-7xl xl:mx-auto">
          <span className="text-sm">Copyright ©</span>
        </p>
      </div>
    </footer>
  );
}
