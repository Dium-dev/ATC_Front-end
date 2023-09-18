'use client';
import Image from 'next/image';
import { CSSProperties } from 'react';
import useSlideResponseive from '~/hooks/useSlideResponseive';

interface CSSPropertiesWithCustomProps extends CSSProperties {
  '--animation'?: string;
}

export default function BrandCarrousel() {
  const { moveSlide } = useSlideResponseive();
  const style: CSSPropertiesWithCustomProps = {
    '--animation': `${moveSlide}px`,
  };
  return (
    <div
      className="flex  flex-col items-center justify-between bg-background-dm "
      style={style}
    >
      <section className="overflow-hidden w-full max-w-f-hd relative bg-black pt-9 pb-9">
        <article className="w-full  flex animate-carousel gap-50 ">
          {Array.from({ length: 20 }, (_, index) => (
            <Image
              key={index}
              src={
                'https://user-images.githubusercontent.com/124757365/266650645-7b118906-6a8d-4c07-84be-b6ad1e7f3e7a.png'
              }
              alt="Logo de marca"
              width={100}
              height={100}
              className="min-w-100"
            />
          ))}
        </article>
      </section>
    </div>
  );
}
