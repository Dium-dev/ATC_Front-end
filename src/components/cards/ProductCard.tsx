import Image from 'next/image';
import { MainButton } from '../button/button';
import Icon from '~/assets/icons/icon';
import { ProductCardProps } from '~/types/products';
import { useState } from 'react';
import Heart from '~/assets/icons/Heart';
import Link from 'next/link';

export function ProductCard({
  title,
  price,
  offer,
  imageSrc,
  id
}: ProductCardProps) {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => setFavorite((cur) => !cur);
  return (
    <Link className="px-10 py-6 shadow-md hover:shadow-xl rounded-md overflow-hidden bg-white w-[270px] min-h-[415px] relative space-y-3 dark:text-text-lm dark:bg-secondary-dm mt-2"
    href={`/products/${id}`}>
      <Image
        src={imageSrc}
        alt="Cubre Volante"
        width={500}
        height={500}
        className="w-full aspect-square"
      />
      <div className='h-28 flex flex-col justify-between'>
        <h3 className="font-semibold line-clamp-3 dark:text-white text-sm">{title}</h3>
        <div className='flex flex-col justify-between'>
          <p className="line-through text-secondary-dm text-sm dark:text-black">{`${toCurrency(
            price
          )}`}</p>
          <p className="font-semibold text-primary-lm text-lg">{`${toCurrency(
            price - price * offer
          )}`}</p>
        </div>
      </div>
      <div className="grid place-content-center">
        <MainButton color="red" className="flex gap-x-2 py-2 pl-5">
          Añadir al Carrito
          <div className="w-6 aspect-square">
            <Icon icon="CarShoping" />
          </div>
        </MainButton>
      </div>
      <button
        onClick={handleFavorite}
        className="group absolute right-1 top-1 w-8 aspect-square rounded-full p-0.5 grid place-content-center"
      >
        <Heart
          className={
            favorite
              ? 'fill-primary-lm stroke-primary-lm group-hover:stroke-text-lm group-hover:fill-text-lm'
              : 'fill-none stroke-text-lm group-hover:stroke-primary-lm'
          }
        />
      </button>
    </Link>
  );
}

function toCurrency(number: number, currency: string = 'COP') {
  const formatter = new Intl.NumberFormat(currency, {
    currency: currency,
    style: 'currency',
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}
