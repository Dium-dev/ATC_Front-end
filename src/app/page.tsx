import MainCarousel from '~/components/carousels/mainCarousel';
import { productos } from '~/mockData/mockProducts';
import { ContainerCard } from '~/components/containerCards/containerCards';
import Card from '~/components/cards/brandCard';

export default function Home() {
  return (
    <>
      <MainCarousel />
      <ContainerCard products={productos} />
      <Card title={productos[0].brand.name} imageSrc={productos[0].image[0]} />
    </>
  );
}
