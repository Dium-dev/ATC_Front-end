import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { useProductStore } from '~/store/productStore';

const PaginationProducts = () => {
  const { page } = useProductStore((state) => state.body);
  const pages = useProductStore((state) => state.pages);
  const updateBody = useProductStore((state) => state.updateBody);

  return (
    <div className="mx-auto flex gap-2 items-center">
      <button
        className="h-8 w-8 bg-background-dm rounded-md text-center p-1"
        onClick={() => {
          page !== 1 && updateBody('page', page - 1);
        }}
        disabled={pages === 0}
      >
        <RiArrowLeftSLine style={{ color: 'white' }} size={25} />
      </button>
      <input
        type="text"
        className="w-12 text-center border border-primary-lm"
        value={pages !== 0 ? page : 0}
        disabled
      />
      <p>de {pages}</p>
      <button
        className="h-8 w-8 bg-background-dm rounded-md text-center p-1"
        onClick={() => {
          page !== pages && updateBody('page', page + 1);
        }}
        disabled={pages === 0}
      >
        <RiArrowRightSLine style={{ color: 'white' }} size={25} />
      </button>
    </div>
  );
};
export default PaginationProducts;