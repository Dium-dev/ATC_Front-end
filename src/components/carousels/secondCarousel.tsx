'use client';
import React, { FC, useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

interface SecondCarouselProps {}

const slidesList = [
  {
    url: 'https://user-images.githubusercontent.com/124757365/267684986-ff0802dd-37d4-496a-9665-53dd8ae362b6.png',
  },
  {
    url: 'https://user-images.githubusercontent.com/124757365/267684986-ff0802dd-37d4-496a-9665-53dd8ae362b6.png',
  },
];

const mobileSlidesList = [
  {
    url: 'https://user-images.githubusercontent.com/124757365/267684987-30227360-5971-48d3-952e-ee05519a2002.png',
  },
  {
    url: 'https://user-images.githubusercontent.com/124757365/267684987-30227360-5971-48d3-952e-ee05519a2002.png',
  },
];

const SecondCarousel: FC<SecondCarouselProps> = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth <= 600;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slidesList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slidesList.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const containerClass = isMobile ? 'mobile-carousel' : 'desktop-carousel';

  return (
    <div
      className={`max-w[1920px] h-[600px] w-full m-auto relative group ${containerClass}`}
    >
      <div
        style={{
          backgroundImage: `url(${
            isMobile
              ? mobileSlidesList[currentIndex].url
              : slidesList[currentIndex].url
          })`,
        }}
        className="w-full h-full bg-center bg-cover duration-700"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/50 text-background-dm cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/50 text-background-dm cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default SecondCarousel;
