import MainCarousel from '~/components/carousels/mainCarousel';
import { productos } from '~/mockData/mockProducts';
import { ContainerCard } from '~/components/containerCards/containerCards';

export default function Home() {
  return (
    <>
      <MainCarousel />
      <ContainerCard products={productos} />
    </>
  );
}
