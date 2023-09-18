import { useEffect, useState } from 'react';

const MAX_WIDTH = 2950;
const MIN_TRANSLATE = 1030;

export default function useSlideResponseive() {
  const [moveSlide, setMoveSlide] = useState<number>(0);

  const handleResize = () => {
    const widthPage = document.documentElement.clientWidth;
    const movement = MAX_WIDTH - widthPage;

    if (movement <= MIN_TRANSLATE) {
      setMoveSlide(-MIN_TRANSLATE);
    } else {
      setMoveSlide(-movement);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return { moveSlide };
}
