import MainCarousel from '~/components/carousels/mainCarousel';
import { brands } from '~/mockData/mockBrands';
import { TopSellers } from '~/components/containerCards/containerCards';
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
      <TopSellers />
      <BrandCategory brand={brands} />
      <CategoryCategory category={category} />
    </ContainerPage>
  );
}
