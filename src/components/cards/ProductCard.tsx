import Image from 'next/image';
import { MainButton } from '../button/button';
import Icon from '~/assets/icons/icon';
import { ProductCardProps } from '~/types/products';
import { useState } from 'react';
import Heart from '~/assets/icons/Heart';

export function ProductCard({
  title,
  price,
  offer,
  imageSrc,
}: ProductCardProps) {
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = () => setFavorite((cur) => !cur);
  return (
    <div className="p-6 shadow-md hover:shadow-xl rounded-md overflow-hidden bg-white w-[250px] min-h-[330px] relative space-y-3">
      <Image
        src={imageSrc}
        alt="Cubre Volante"
        width={245}
        height={154}
        className="w-[200px] h-[200px]"
      />
      <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="line-through text-secondary-dm text-sm">{`${toCurrency(
          price
        )}`}</p>
        <p className="font-semibold text-primary-lm ">{`${toCurrency(
          price - price * offer
        )}`}</p>
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
        className="group absolute right-2 top-0 w-8 aspect-square rounded-full bg-white p-0.5 grid place-content-center"
      >
        <Heart
          className={
            favorite
              ? 'fill-primary-lm stroke-primary-lm group-hover:stroke-text-lm group-hover:fill-text-lm'
              : 'fill-none stroke-text-lm group-hover:stroke-primary-lm'
          }
        />
      </button>
    </div>
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
