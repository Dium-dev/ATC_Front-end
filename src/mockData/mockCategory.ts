import { StaticImageData } from 'next/image';
import { Images } from '~/assets/img';

type Category = {
  id: string;
  name: string;
  image: StaticImageData[];
};

export const category: Category[] = [
  {
    id: '1',
    name: 'Farolas',
    image: [Images.categories.Cat04],
  },
  {
    id: '2',
    name: 'Stops',
    image: [Images.categories.Cat05],
  },
  {
    id: '3',
    name: 'Audio',
    image: [Images.categories.Cat07],
  },
  {
    id: '4',
    name: 'Exploradoras',
    image: [Images.categories.Cat06],
  },
  {
    id: '5',
    name: 'Exterior',
    image: [Images.categories.Cat02],
  },
  {
    id: '6',
    name: 'Interior',
    image: [Images.categories.Cat08],
  },
  {
    id: '7',
    name: 'Bombillos',
    image: [Images.categories.Cat03],
  },
  {
    id: '8',
    name: 'Repuestos',
    image: [Images.categories.Cat01],
  },
];
