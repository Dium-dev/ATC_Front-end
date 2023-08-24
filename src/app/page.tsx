import MainCarousel from '~/components/carousels/mainCarousel';
import { productos } from '~/mockData/mockProducts';
import { ContainerCard } from '~/components/containerCards/containerCards';
import { createIconsTypes } from '~/utils/createIcons';
import { ContainerPage } from './container_page';
import Card from '~/components/cards/brandCard';

export default function Home() {
  return (
    <ContainerPage>
      <MainCarousel />
      <ContainerCard products={productos} />
      <Card title={productos[0].brand.name} imageSrc={productos[0].image[0]} />
    </ContainerPage>
  );
}
