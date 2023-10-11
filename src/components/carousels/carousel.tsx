'use client';
import { useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

type CarouselProps = {
  children: React.ReactNode[];
  items?: 1 | 2 | 3 | 4;
};

export function Carousel({ children, items = 4 }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsView =
    items === 1
      ? 'min-w-full'
      : items === 2
      ? 'min-w-full ms:min-w-[calc(100%/2)]'
      : items === 3
      ? 'min-w-full ms:min-w-[calc(100%/2)] md:min-w-[calc(100%/3)]'
      : 'min-w-full ms:min-w-[calc(100%/2)]  lg:min-w-[calc(100%/4)]';

  function next() {
    if (!carouselRef.current) return;

    if (carouselRef?.current?.children?.length > 0) {
      const firstElement = carouselRef?.current?.children[0];
      carouselRef.current.style.transition = '300ms ease-out all';

      const size = carouselRef.current.children[0].clientWidth;

      carouselRef.current.style.transform = `translatex(-${size}px)`;

      const transicion = () => {
        if (!carouselRef.current) return;

        carouselRef.current.style.transition = 'none';
        carouselRef.current.style.transform = 'translatex(0px)';

        carouselRef.current.appendChild(firstElement);
        carouselRef.current.removeEventListener('transitionend', transicion);
      };

      carouselRef.current.addEventListener('transitionend', transicion);
    }
  }
  function previus() {
    if (!carouselRef.current) return;

    if (carouselRef?.current?.children.length > 0) {
      const endElement =
        carouselRef.current.children[carouselRef.current.children.length - 1];
      carouselRef.current.insertBefore(
        endElement,
        carouselRef?.current?.firstChild
      );

      carouselRef.current.style.transition = 'none';

      const size = carouselRef.current.children[0].clientWidth;
      carouselRef.current.style.transform = `translate(-${size}px)`;

      setTimeout(() => {
        if (!carouselRef.current) return;

        carouselRef.current.style.transition = '300ms ease-out all';
        carouselRef.current.style.transform = 'translatex(0)';
      }, 30);
    }
  }

  if (!children.length) return;

  return (
    <>
      <div className="flex gap-1 relative items-center px-2">
        <button
          onClick={() => previus()}
          className={`w-10 aspect-square rounded-full p-2 bg-white hover:scale-105 hover:text-primary-lm shadow hover:shadow-lg ${''}`}
        >
          <BsChevronCompactLeft size="100%" />
        </button>
        <div className="overflow-hidden w-full">
          <div
            ref={carouselRef}
            className="flex flex-nowrap justify-start min-h-[50px]"
          >
            {children.map((child, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    i < 4 ? '' : ''
                  } ${itemsView} px-1 grid place-content-center overflow-hidden`}
                >
                  {child}
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => next()}
          className={`w-10 aspect-square rounded-full p-2 bg-white shadow hover:scale-105 hover:text-primary-lm hover:shadow-lg ${''}`}
        >
          <BsChevronCompactRight size="100%" />
        </button>
      </div>
    </>
  );
}
