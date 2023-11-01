import Image from 'next/image';
import { CategoryProps } from '~/types/products';

const CardCategory: React.FC<CategoryProps> = ({ name, image }) => {
  return (
    <div className="flex w-[10rem] h-[200px] flex-col items-center overflow-hidden my-1">
      <div className="w-full h-[78%] relative">
        <Image src={image} alt="Imagen de Categoria" layout="fill" />
      </div>
      <div>
        <h3 className="font-bold text-2xl w-[100%] h-[22%] mt-2">{name}</h3>
      </div>
    </div>
  );
};

export default CardCategory;
