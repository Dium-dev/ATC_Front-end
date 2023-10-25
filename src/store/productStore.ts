/* eslint-disable no-unused-vars */
import create from 'zustand';
import { ProductsProps } from '~/types/products';
import { Body } from '~/types/products';

interface ProductStore {
  products: ProductsProps[];
  body: Body;
  // eslint-disable-next-line no-unused-vars
  pages: number;
  updateProducts: (data: ProductsProps[]) => void;
  updateBody: (option: string, value: string | number) => void;
  resetBody: () => void;
  setPages: (value: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  body: {
    page: 1,
    limit: 9,
    order: 'NOMBRE ASC',
    categoryId: '',
    brandId: '',
    name: ''
  },
  pages: 0,
  updateProducts: (data: ProductsProps[]) =>
    set(() => ({
      products: data,
    })),
  updateBody: (option: string, value: string | number) => {
    set((state) => ({
      body: {
        ...state.body,
        [option]: value,
      },
    }));
  },
  resetBody: () => {
    set((state) => ({
      body: {
        ...state.body,
        page: 1,
        order: 'NOMBRE ASC',
        categoryId: '',
        brandId: '',
      },
    }));
  },
  setPages: (value) => {
    set(() => ({
      pages: value
    }));
  },
}));
