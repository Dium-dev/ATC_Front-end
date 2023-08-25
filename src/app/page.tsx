import MainCarousel from '~/components/carousels/mainCarousel';
import { productos } from '~/mockData/mockProducts';
import { ContainerCard } from '~/components/containerCards/containerCards';
import { createIconsTypes } from '~/utils/createIcons';

export default function Home() {
  createIconsTypes();
  return (
    <>
      <MainCarousel />
      <ContainerCard products={productos} />
    </>
  );
}
