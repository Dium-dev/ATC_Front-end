/* eslint-disable no-unused-vars */
'use client';
import Link from 'next/link';
import { useBrandStore, useProductStore } from '../../store/productStore';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Ticker from 'framer-motion-ticker';

interface TickerProps {
  ref?: React.MutableRefObject<null>;
  children: Element[];
  duration: number;
  items: { name: string; image: string; }[];
  auto: boolean;
}

type AnimatedValue = {
  animate(): void;
};

const ContainerCardsBrands: React.FC = () => {
  const setBrand = useBrandStore((state) => state.setBrand);
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

  // Functions from product store
  const updateBody = useProductStore((state) => state.updateBody);

  // Function to handle brand click
  const handleClick = (id: string): void => {
    updateBody('brandId', id);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const tickerRef = useRef(null);

  const value: AnimatedValue = {
    animate() {
      // Implement the animate method
    },
  };
  value.animate(); // This will work because value is an AnimatedValue

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      tickerRef.current?.animate({ transform: 'translateX(100%)' });
    } else {
      setActiveIndex(imagesBrands.length - 1);
      tickerRef.current?.animate({ transform: 'translateX(-100%)' });
    }
  };

  const handleNextClick = () => {
    if (activeIndex < imagesBrands.length - 1) {
      setActiveIndex(activeIndex + 1);
      tickerRef.current?.animate({ transform: 'translateX(-100%)' });
    } else {
      setActiveIndex(0);
      tickerRef.current?.animate({ transform: 'translateX(0)' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-between mb-3 mt-1 w-full flex-nowrap overflow-hidden max-w-[1920px] mx-auto">
      <div className="flex items-center justify-center w-full max-w-f-hd py-2 gap-1 relative">
        <button
          onClick={handlePrevClick}
          className="w-10 h-10 apect-square rounded-full flex items-center justify-center p-2 bg-white text-[#000] shadow hover:scale-105 hover:text-primary-lm hover:shadow-lg transition-all"
        >
          <BsChevronCompactLeft size="100%" />
        </button>
        <Ticker duration={70}>
          {imagesBrands.map((brand, index) => (
            <div
              key={index}
              onClick={() => handleClick(brand.name)}
              className="brand-link relative w-32 h-32 sm:w-40 sm:h-40 m-2 flex items-center"
              aria-hidden="true"
            >
              <Link href={`/products?brand=${brand.name}`} key={index}>
                <Image
                  src={brand.image}
                  alt={brand.name}
                  className="brand-image object-contain w-full h-full m-2 max-h-[100px] max-w-[100px] hover:scale-110 ${!isHovering && 'hover:stop-autoplay'}`;"
                  width={300}
                  height={300}
                />
              </Link>
            </div>
          ))}
          </Ticker>
          <button
          onClick={handleNextClick}
          className="w-10 h-10 apect-square rounded-full flex items-center justify-center p-2 bg-white text-[#000] shadow hover:scale-105 hover:text-primary-lm hover:shadow-lg transition-all"
        >
          <BsChevronCompactRight size="100%" />
          </button>
      </div>
    </div>
  );
};

export default ContainerCardsBrands;
