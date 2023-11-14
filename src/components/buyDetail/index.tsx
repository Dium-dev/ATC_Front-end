import { ProductDetail } from '~/types/products';
import { Brand } from '~/types/products';
import { GoDotFill } from 'react-icons/go';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export const BuyDetail = ({product}: {product: ProductDetail}) => {
  const [brand, setBrand] = useState('');

  useEffect(() => {
    const fetchBrand = async () => {
      const response = await fetch('http://localhost:3001/brands');
      const brands = await response.json();
      const brandFiltered = brands.find(
        (brand: Brand) => brand.id === product.brandId
      );

      setBrand(brandFiltered.name);
    };

    fetchBrand();
  }, [product.brandId]);

  return (
    <div className="w-full md:h-[74vh] my-auto md:w-full flex flex-col justify-between">
      <div className="flex w-full justify-between">
        <p className={`flex items-center ${product.stock > 0 ? 'text-green' : 'text-secondary-lm'}`}>
          {product.stock > 0 ? (
            <GoDotFill color={'green'} />
          ) : (
            <GoDotFill color={'red'} />
          )}
          {product.stock > 0 ? 'Con stock' : 'Sin stock'}
        </p>
        <p className="flex items-center gap-x-1 font-medium">
          Agregar a favoritos <AiFillHeart color={'red'} />
        </p>
      </div>
      <p className="text-bold text-2xl font-black">{product.title}</p>
      <div className="w-full font-medium">
        <p className="text-primary-lm">Estado:</p>
        <p>Nuevo</p>
      </div>
      <div className="w-full font-medium">
        <p className="text-primary-lm">Marca:</p>
        <p>{brand}</p>
      </div>
      <div className="w-full font-medium">
        <p className="text-primary-lm">Tiempo de entrega:</p>
        <p>10 / 15 Días hábiles</p>
      </div>
      <div className="w-full">
        <p className="line-through text-xl text-primary-dm font-extralight">
          ${product.price - product.price * 0.1}
        </p>
        <p className="text-2xl text-secondary-lm font-black">
          ${product.price}
        </p>
      </div>
      <div className="w-full flex justify-between">
        <button className="w-[49%] bg-secondary-lm text-white rounded p-1 flex items-center justify-center gap-x-1 font-bold">
          Comprar
          <AiOutlineShopping size={25} />
        </button>
        <button className="w-[49%] bg-primary-lm text-white rounded p-1 flex items-center justify-center gap-x-1">
          Añadir al carrito
          <AiOutlineShoppingCart size={25} />
        </button>
      </div>
      <p className="font-light">
        Envio gratis por compras superiores a $200.000
      </p>
      <p>¿Tienes alguna pregunta? Consulta con un especialista</p>
      <Link href={'/contact'} className="text-primary-lm">
        Contactanos
      </Link>
    </div>
  );
};
export default BuyDetail;