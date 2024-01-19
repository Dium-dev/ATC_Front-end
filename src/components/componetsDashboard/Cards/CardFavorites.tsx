import Image from 'next/image';
import { MdDelete } from 'react-icons/md';
import { useDashboardUserStore } from '~/store/dashboardUserStore';

interface CardFavoritesProps {
  id: string;
  image: string;
  title: string;
  price: string;
}

export default function CardFavorites({
  image,
  title,
  price,
  id
}: CardFavoritesProps) {
  const deleteFavorite = useDashboardUserStore((state) => state.deleteFavorite);

  return (
    <div className="flex justify-around items-center text-center border-b border-primary-lm py-4">
      <div className='w-[100px]'>
        <Image src={image} alt="Carro" width={100} height={100} />
      </div>
      <div className="px-6 w-72 text-lg">
        <h3>{title}</h3>
      </div>
      <div className="flex items-center justify-center w-40 text-lg">
        <p>COP {price}</p>
      </div>
      <div className="w-40" onClick={() => deleteFavorite(id)}>
        <MdDelete size={40} style={{ color: 'red', margin: 'auto' }} />
      </div>
    </div>
  );
}
