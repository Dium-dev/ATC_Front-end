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

export type Body = {
  page: number;
  limit: number;
  order: string;
  categoryId: string;
  brandId: string;
  name: string;
};

type Brand = {
  id: string;
  name: string;
};

type Category = {
  id: string;
  name: string;
};

export interface ProductCardProps {
  id: string;
  imageSrc: string;
  title: string;
  price: number;
  offer: number;
  imageSrc: string;
}

export type CategoryProps = {
  image: string;
  name: string;
};
