import Image from 'next/image';
import { MainButton } from '../button/button';
import Icon from '~/assets/icons/icon';

interface ProductCardProps {
  title: string;
  price: number;
  nota: string;
  imageSrc: string;
}

export function ProductCard({ title, price, imageSrc }: ProductCardProps) {
  return (
    <div className="p-6 shadow-lg rounded-md overflow-hidden bg-white w-[250px] min-h-[330px] relative space-y-3">
      <Image
        src={imageSrc}
        alt="Cubre Volante"
        width={245}
        height={154}
        className="w-full h-[9.625rem] "
      />
      <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="line-through text-secondary-dm text-sm">{`${toCurrency(
          price
        )}`}</p>
        <p className="font-semibold text-primary-lm ">{`${toCurrency(
          price
        )}`}</p>
      </div>
      <div className="grid place-content-center">
        <MainButton color="red">
          <div className=" flex gap-2">
            Añadir al Carrito
            <div className="w-6 aspect-square">
              <Icon icon="CardCredit" />
            </div>
          </div>
        </MainButton>
      </div>
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
