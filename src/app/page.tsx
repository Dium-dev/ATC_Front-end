import MainCarousel from '~/components/carousels/mainCarousel';
import { productos } from '~/mockData/mockProducts';
import { brands } from '~/mockData/mockBrands';
import { ContainerCard } from '~/components/containerCards/containerCards';
import { createIconsTypes } from '~/utils/createIcons';
import { ContainerPage } from './container_page';
import CategoryCategory from '~/components/containerCards/containerCardsCategoty';
import { category } from '~/mockData/mockCategory';
import BrandCategory from '~/components/containerCards/containerCardsBrands';
import PaymentMethodsList from '~/components/paymentMethod/paymentMethodsList';

export default function Home() {
  createIconsTypes();
  return (
    <ContainerPage header={<MainCarousel />}>
      <PaymentMethodsList />
      <ContainerCard products={productos} />
      <CategoryCategory category={category} />
      <BrandCategory brand={brands} />
    </ContainerPage>
  );
}
