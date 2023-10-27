'use client';
import { useRef, useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


type CarouselProps = {
  children: React.ReactNode[];
  items?: 1 | 2 | 3 | 4 | 5 | 9;
  // products/[id]:
  setMainImage?: Function,
  // products/[id]:
  highlight?: boolean,
  // styles:
  stl?: {
    width?: string,
    padding?: string,
    height?: string,
    buttonSquared?: boolean
  };
  auto?: boolean;

};

export function Carousel({ children, items = 4, setMainImage, highlight, auto = false, stl }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsView =
    items === 1
      ? 'min-w-full'
      : items === 2
        ? 'min-w-full ms:min-w-[calc(100%/2)]'
        : items === 3
        ? 'min-w-full ms:min-w-[calc(100%/2)] md:min-w-[calc(100%/3)]'
        : items === 5
        ? 'min-w-[calc(100%/5)]'
        : items === 9
        ? 'min-w-full ms:min-w-[calc(100%/2)]  md:min-w-[calc(100%/3)] lg:min-w-[calc(100%/9)]'
        : 'min-w-full ms:min-w-[calc(100%/2)] md:min-w-[calc(100%/3)] lg:min-w-[calc(100%/4)]';

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


  const [highlighted, setHighlighted] = useState<string>("");

  // Función solo válida para app/products/[id]/page.
  // Setear la propiedad src de "child", no funcionará de otra manera.
  function handleClickOnElement(child: any) {
    setMainImage && setMainImage(child.props.src);
    // En los estilos comparar child.props.src con el estado "highlighted".
    highlight && setHighlighted(child.props.src);
  };

  if (!children.length) return null;

  useEffect(() => {
    if (auto) {
      const interval = setInterval(() => {
        next();
      }, 4000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [auto]);

  return (
    <>
      <div className={`flex gap-1 relative ${stl?.buttonSquared ? "" : "items-center"} ${stl ? stl?.padding : "px-2"} max-w-[1920px] mx-auto`}>
        <button
          onClick={() => previus()}
          className={`${stl ? stl?.width : "w-10"} ${stl?.buttonSquared ? "" : "apect-square rounded-full"} p-2 bg-white text-[#000] shadow hover:scale-105 hover:text-primary-lm hover:shadow-lg transition-all`}
        >
          <BsChevronCompactLeft size="100%" />
        </button>
        <div className="overflow-hidden w-full">
          <div
            ref={carouselRef}
            className="flex flex-nowrap justify-start min-h-[50px]"
          >
            {children.map((child: any, i) => {
              // child: any => para poder acceder a child?.props.src
              return (
                <div
                  key={i}
                  className={`
                    ${itemsView} 
                    ${highlight ? (child?.props?.src === highlighted ? "opacity-1 transition-opacity duration-300" : "opacity-40") : ""}
                    px-1 grid place-content-center overflow-hidden
                  `}
                  onClick={() => handleClickOnElement(child)}
                >
                  {child}
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => next()}
          className={`${stl ? stl?.width : "w-10"} ${stl?.buttonSquared ? "" : "apect-square rounded-full"} p-2 bg-white text-[#000] shadow hover:scale-105 hover:text-primary-lm hover:shadow-lg transition-all`}
        >
          <BsChevronCompactRight size="100%" />
        </button>
      </div>
    </>
  );
}
