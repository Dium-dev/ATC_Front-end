export type ProductsProps = {
  id: string;
  title: string;
  state: string;
  stock: number;
  price: number;
  availability: number;
  image: string[];
  model: string;
  year: string;
  brand: Brand;
  category: Category;
};
type Brand = {
  id: string;
  name: string;
};

type Category = {
  id: string;
  name: string;
};