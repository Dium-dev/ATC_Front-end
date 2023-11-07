import { CategoryProps } from '~/types/products';
import { useProductStore } from '~/store/productStore';

const CATEGORIES: CategoryProps[] = [
  {
    id: '85dfef83-61e1-4ed6-88f4-99d43297172a',
    name: 'Farolas',
    image: 'https://i.postimg.cc/Gp1QbGmD/Cat04.png',
  },
  {
    id: 'dbfe358b-a73c-4d00-ac27-02049d3df0b4',
    name: 'Stops',
    image: 'https://i.postimg.cc/6qQcDK51/Cat05.png',
  },
  {
    id: '64e62d23-d59d-4d08-a639-d0d784dd35ec',
    name: 'Audio',
    image: 'https://i.postimg.cc/02bZn94z/Cat07.png',
  },
  {
    id: 'b2d61027-8c50-4152-b9b3-9f5f7f8e7949',
    name: 'Exploradoras',
    image: 'https://i.postimg.cc/gcMN3xg9/Cat06.png',
  },
  {
    id: '8d072413-50f8-4147-8597-d74993157d0d',
    name: 'Exterior',
    image: 'https://i.postimg.cc/8P94nq8t/Cat03.png',
  },
  {
    id: 'd9d1be6d-80d3-4df6-963f-95125f1a29ae',
    name: 'Interior',
    image: 'https://i.postimg.cc/Sx9d0Dkq/Cat08.png',
  },
  {
    id: '6089d5a4-50af-4100-af62-3636a17f8164',
    name: 'Bombillos',
    image: 'https://i.postimg.cc/63czjqwv/Cat02.png',
  },
  {
    id: '093b8d3e-53a3-45ff-9333-5331e62ccc60',
    name: 'Repuestos',
    image: 'https://i.postimg.cc/rsYjTHDy/Cat01.png',
  },
];
const Categories = () => {
    const updateBody = useProductStore(state =>  state.updateBody);
    const handleClick = (id: string): void => {
        updateBody('categoryId', id)
    }

    return(
        <div className="w-full h-[60px] hidden md:block mt-14 bg-opacity-70 bg-white shadow-md cursor-pointer">
            <ul className="flex xxxl:justify-between justify-evenly items-center w-full h-full font-medium max-w-[1920px] mx-auto">
            {CATEGORIES.map(({ name, id }) => (
            <li key={id} onClick={() => handleClick(id)}>{name}</li>
        ))}
            </ul>
        </div>
    )
}
export default Categories;
