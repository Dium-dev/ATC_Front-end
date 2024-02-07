import Image from 'next/image';
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { useFavorites } from '~/hooks/userDashboard/useFavorites';
import { Modal } from '../Modal';

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
  id,
}: CardFavoritesProps) {
  const { remove } = useFavorites();
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="flex justify-around items-center text-center border-b border-primary-lm py-4">
      <div className="w-[100px]">
        <Image src={image} alt="Carro" width={100} height={100} />
      </div>
      <div className="px-6 w-72 text-lg">
        <h3>{title}</h3>
      </div>
      <div className="flex items-center justify-center w-40 text-lg">
        <p>COP {price}</p>
      </div>
      <div className="w-40 cursor-pointer" onClick={() => setIsOpenModal(true)}>
        <MdDelete size={40} style={{ color: 'red', margin: 'auto' }} />
      </div>
      <Modal open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <div className="flex flex-col gap-y-8">
          <p className="font-bold mt-5">
            ¿Está seguro de eliminar el producto de favoritos?
          </p>
          <div className="flex items-center justify-evenly">
            <button
              onClick={() => setIsOpenModal(false)}
              className="bg-primary-dm text-white py-2 px-4 rounded-md cursor-pointer"
            >
              Cancelar
            </button>
            <button
              className="bg-secondary-lm text-white py-2 px-4 rounded-md cursor-pointer"
              onClick={() => remove(id)}
            >
              Confirmar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
