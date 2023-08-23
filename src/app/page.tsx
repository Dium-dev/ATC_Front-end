import MainCarousel from '~/components/carousels/mainCarousel';
import { productos } from '~/mockData/mockProducts';
import { ContainerCard } from '~/components/containerCards/containerCards';
import { createIconsTypes } from '~/utils/createIcons';
import { ContainerPage } from './container_page';

export default function Home() {
  createIconsTypes();
  return (
    <ContainerPage>
      <MainCarousel />
      <ContainerCard products={productos} />
    </ContainerPage>
  );
}
