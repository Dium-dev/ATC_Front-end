'use client';
import { Carousel } from '../carousels/carousel';
import BrandCard from '../cards/brandCard';
import Link from 'next/link';
import { useBrandStore } from '../../store/productStore';
import React from 'react';
import Image from 'next/image';

const ContainerCardsBrands: React.FC = () => {
  const setSelectedBrand = useBrandStore((state) => state.setSelectedBrand);
  const imagesBrands = [
    {
      name: 'Ford',
      image: '/images/brands/ford-logo.webp',
    },
    {
      name: 'Mazda',
      image: '/images/brands/mazda-logo.webp',
    },
    {
      name: 'Toyota',
      image: '/images/brands/toyota-logo.webp',
    },
    {
      name: 'Honda',
      image: '/images/brands/honda-logo.webp',
    },
    {
      name: 'Nissan',
      image: '/images/brands/nissan-logo.webp',
    },
    {
      name: 'Chevrolet',
      image: '/images/brands/chevrolet-logo.webp',
    },
    {
      name: 'Volkswagen',
      image: '/images/brands/volkswagen-logo.webp',
    },
    {
      name: 'Mercedes Benz',
      image: '/images/brands/mercedes-benz-logo.webp',
    },
    {
      name: 'BMW',
      image: '/images/brands/bmw-logo.webp',
    },
    {
      name: 'Ferrari',
      image: '/images/brands/ferrari-logo.webp',
    },
    {
      name: 'Lexus',
      image: '/images/brands/lexus-logo.webp',
    },
    {
      name: 'Mini',
      image: '/images/brands/mini-logo.webp',
    },
    {
      name: 'Audi',
      image: '/images/brands/audi-logo.webp',
    },
    {
      name: 'Jeep',
      image: '/images/brands/jeep-logo.webp',
    },
    {
      name: 'Lamborghini',
      image: '/images/brands/lamborghini-logo.webp',
    },
    {
      name: 'KIA',
      image: '/images/brands/kia-logo.webp',
    },
    {
      name: 'Land Rover',
      image: '/images/brands/land-rover-logo.webp',
    },
    {
      name: 'Porsche',
      image: '/images/brands/porsche-logo.webp',
    },
    {
      name: 'Subaru',
      image: '/images/brands/subaru-logo.webp',
    },
    {
      name: 'Tesla',
      image: '/images/brands/tesla-logo.webp',
    },
    {
      name: 'Volvo',
      image: '/images/brands/volvo-logo.webp',
    },
    {
      name: 'RAM',
      image: '/images/brands/ram-logo.webp',
    },
    {
      name: 'Hyundai',
      image: '/images/brands/hyundai-logo.webp',
    },
    {
      name: 'Mitsubishi',
      image: '/images/brands/mitsubishi-logo.webp',
    },
  ];

  const handleClick = (brandName: string) => {
    setSelectedBrand(brandName);
  };

  return (
    <div className="flex flex-col items-center justify-between mb-24 w-full flex-nowrap overflow-hidden">
      <div className="w-full max-w-f-hd py-9">
        <Carousel items={undefined} auto={true}>
          {imagesBrands.map((brand, index) => (
            <div
              key={index}
              onClick={() => handleClick(brand.name)}
              className="slider-infinite-scroll autoplay brand-link relative block w-32 h-32 sm:w-40 sm:h-40 m-0 flex items-center"
              aria-hidden="true"
            >
              <Link href={`/products?brand=${brand.name}`} key={index}>
                <Image
                  src={brand.image}
                  alt={brand.name}
                  className="brand-image object-contain w-full h-full m-0 max-h-[100px] max-w-[100px] hover:scale-110 hover:stop-autoplay"
                  width={300}
                  height={300}
                />
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ContainerCardsBrands;
