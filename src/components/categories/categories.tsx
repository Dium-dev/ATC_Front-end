import { CategoryProps } from '~/types/products';
import { useProductStore } from '~/store/productStore';

const CATEGORIES: CategoryProps[] = [
  {
    id: '3aca2769-dec2-4efa-9d15-d5a23cdb33df',
    name: 'Farolas',
    image: 'https://i.postimg.cc/Gp1QbGmD/Cat04.png',
  },
  {
    id: '71156ef3-f483-4356-b907-31350005da63',
    name: 'Stops',
    image: 'https://i.postimg.cc/6qQcDK51/Cat05.png',
  },
  {
    id: 'a5646ca0-6519-49d5-b383-b1fb2c14150b',
    name: 'Audio',
    image: 'https://i.postimg.cc/02bZn94z/Cat07.png',
  },
  {
    id: 'db803ba9-423e-4917-9b0d-bc946ec8234a',
    name: 'Exploradoras',
    image: 'https://i.postimg.cc/gcMN3xg9/Cat06.png',
  },
  {
    id: '2ae10a44-8577-46f0-9253-930b74de5702',
    name: 'Exterior',
    image: 'https://i.postimg.cc/8P94nq8t/Cat03.png',
  },
  {
    id: 'e21b9caa-5b83-4be0-98e1-4cf567a638d4',
    name: 'Interior',
    image: 'https://i.postimg.cc/Sx9d0Dkq/Cat08.png',
  },
  {
    id: '29b20ab0-1c54-4955-bff2-4a60f59d08fc',
    name: 'Bombillos',
    image: 'https://i.postimg.cc/63czjqwv/Cat02.png',
  },
  {
    id: 'f4a712b4-7881-4961-8227-103ef2f1fd47',
    name: 'Repuestos',
    image: 'https://i.postimg.cc/rsYjTHDy/Cat01.png',
  },
];
const Categories = () => {
  const updateBody = useProductStore((state) => state.updateBody);
  const handleClick = (id: string): void => {
    updateBody('categoryId', id);
  };

  return (
    <div className="w-full h-[60px] hidden md:block bg-opacity-70 bg-white shadow-md cursor-pointer dark:bg-primary-dm">
      <ul className="flex justify-around items-center w-full h-full font-medium max-w-[1920px] mx-auto">
        {CATEGORIES.map(({ name, id }) => (
          <li key={id} onClick={() => handleClick(id)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
