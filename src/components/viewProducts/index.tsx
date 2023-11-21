import ContainerProducts from '../containerProducts';
import { FC } from 'react';
import { TopSellers } from '../containerCards/containerCards';
import Filters from '../filters';

const ViewProducts: FC = () => {
  return (
    <section className="w-full flex flex-col items-start justify-between md:gap-x-5 gap-y-6 md:gap-y-0 mt-20 md:mt-0">
      <div className='flex-col md:flex-row flex min-h-max'>
        <div className='flex flex-col items-start w-full md:w-1/4 p-10 min-h-max md:bg-gray md:pt-10 pt-20 dark:bg-[#252525]'>
            <Filters />
        </div>
        <ContainerProducts />
      </div>
      <TopSellers />
    </section>
  );
};
export default ViewProducts;
