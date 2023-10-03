import MainCarousel from '~/components/carousels/mainCarousel';
import { brands } from '~/mockData/mockBrands';
import { TopSellers } from '~/components/containerCards/containerCards';
import { createIconsTypes } from '~/utils/createIcons';
import { ContainerPage } from './container_page';
import CategoryCategory from '~/components/containerCards/containerCardsCategoty';
import { category } from '~/mockData/mockCategory';
import BrandCategory from '~/components/containerCards/containerCardsBrands';
import PaymentMethodsList from '~/components/paymentMethod/paymentMethodsList';
import ReviewsContainer from '~/components/containerCards/containerCardsReviews';
import reviews from '~/mockData/mockReviwes';
import Banner from '~/components/Banner';
import BrandCarrousel from '~/components/carousels/brandCarrousel';
import SecondCarousel from '~/components/carousels/secondCarousel';

export default function Home() {
  createIconsTypes();
  return (
    <ContainerPage header={<SecondCarousel />}>
      <CategoryCategory category={category} />
      <TopSellers />
      <BrandCarrousel />
      <BrandCategory brand={brands} />
      <Banner />
      <ReviewsContainer reviwes={reviews} />
      <PaymentMethodsList />
    </ContainerPage>
  );
}
