'use client';
import Image from 'next/image';
import { Carousel } from '../carousels/carousel';
import BrandCard from '../cards/brandCard';

const imagesBrands = [
  {
    name: 'Ford',
    image:
      'https://user-images.githubusercontent.com/124757365/266650645-7b118906-6a8d-4c07-84be-b6ad1e7f3e7a.png',
  },
  {
    name: 'Mazda',
    image:
      'https://user-images.githubusercontent.com/124757365/266650645-7b118906-6a8d-4c07-84be-b6ad1e7f3e7a.png',
  },
  {
    name: 'Toyota',
    image:
      'https://user-images.githubusercontent.com/124757365/266650645-7b118906-6a8d-4c07-84be-b6ad1e7f3e7a.png',
  },
  {
    name: 'Honda',
    image:
      'https://user-images.githubusercontent.com/124757365/266650645-7b118906-6a8d-4c07-84be-b6ad1e7f3e7a.png',
  },
  {
    name: 'Nissan',
    image:
      'https://user-images.githubusercontent.com/124757365/266650645-7b118906-6a8d-4c07-84be-b6ad1e7f3e7a.png',
  },
  {
    name: 'Chevrolet',
    image:
      'https://user-images.githubusercontent.com/124757365/266650645-7b118906-6a8d-4c07-84be-b6ad1e7f3e7a.png',
  },
  {
    name: 'Volkswagen',
    image:
      'https://user-images.githubusercontent.com/124757365/266650645-7b118906-6a8d-4c07-84be-b6ad1e7f3e7a.png',
  },
  {
    name: 'Mercedes Benz',
    image:
      'https://user-images.githubusercontent.com/124757365/266650645-7b118906-6a8d-4c07-84be-b6ad1e7f3e7a.png',
  },
  {
    name: 'BMW',
    image:
      'https://user-images.githubusercontent.com/124757365/266650645-7b118906-6a8d-4c07-84be-b6ad1e7f3e7a.png',
  },
];

const ContainerCardsBrands: React.FC = () => {
  return (
    <div className=" flex  flex-col items-center justify-between bg-[#13131D] mb-9 ">
      <div className=" w-full max-w-f-hd  bg-black py-9">
        <Carousel items={9} auto={true}>
          {imagesBrands.map((brand, index) => (
            <BrandCard key={index} imageSrc={brand.image} title={brand.name} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ContainerCardsBrands;
