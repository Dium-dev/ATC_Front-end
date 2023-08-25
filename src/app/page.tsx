import MainCarousel from '~/components/carousels/mainCarousel';
import { productos } from '~/mockData/mockProducts';
import { brands } from '~/mockData/mockBrands';
import { ContainerCard } from '~/components/containerCards/containerCards';
import { createIconsTypes } from '~/utils/createIcons';
import { ContainerPage } from './container_page';
import CategoryCategory from '~/components/containerCards/containerCardsCategoty';
import Card from '~/components/cards/brandCard';
import { category } from '~/mockData/mockCategory';


export default function Home() {
  createIconsTypes();
  return (
    <ContainerPage>
      <MainCarousel />
      <ContainerCard products={productos} />
      <CategoryCategory category={category}/> 
      <div className="flex justify-between items-center betw ">
          <Card title={brands[0].name} imageSrc={brands[0].image[0]} />
          <Card title={brands[1].name} imageSrc={brands[1].image[0]} />
          <Card title={brands[2].name} imageSrc={brands[2].image[0]} />
          <Card title={brands[3].name} imageSrc={brands[3].image[0]} />
          <Card title={brands[4].name} imageSrc={brands[4].image[0]} />
          <Card title={brands[5].name} imageSrc={brands[5].image[0]} />
          <Card title={brands[6].name} imageSrc={brands[6].image[0]} />
          <Card title={brands[7].name} imageSrc={brands[7].image[0]} />
      </div>
    </ContainerPage>
  );
}
