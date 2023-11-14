import Image from 'next/image';
import { useProductStore } from '~/store/productStore';
import { CategoryProps } from '~/types/products';
import {useRouter} from 'next/navigation'

const CardCategory: React.FC<CategoryProps> = ({ name, image, id }) => {
  const router = useRouter()
  const updateBody = useProductStore(state =>  state.updateBody);
  const handleClick = () => {
    updateBody('categoryId', id)
    router.push('/products')
  }

  return (
    <div className="flex w-[10rem] h-[200px] flex-col items-center overflow-hidden my-1 cursor-pointer" onClick={handleClick}>
      <div className="w-full h-[78%] relative">
        <Image src={image} alt="Imagen de Categoria" width={300} height={300}/>
      </div>
      <div>
        <h3 className="font-bold text-2xl w-[100%] h-[22%] mt-2">{name}</h3>
      </div>
    </div>
  );
};

export default CardCategory;
