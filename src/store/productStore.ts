/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { BrandProps, ProductsProps } from '~/types/products';
import { Body } from '~/types/products';

interface ProductStore {
  products: ProductsProps[];
  body: Body;
  // eslint-disable-next-line no-unused-vars
  brands: Brand[];
  pages: number;
  updateProducts: (data: ProductsProps[]) => void;
  updateBody: (option: string, value: string | number) => void;
  resetBody: () => void;
  setPages: (value: number) => void;
}

type Brand = {
  id: string;
  name: string;
  image: string;
};

type BrandStore = {
  setBrand: any;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
};

export const useBrandStore = create<BrandStore>((set) => ({
  Brand: { id: '', name: '', image: '' },
  setBrand: (brand: Brand) => set({ Brand: brand }),
}));

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  body: {
    page: 1,
    limit: 9,
    order: 'NOMBRE ASC',
    categoryId: '',
    brandId: '',
    name: '',
  },
  pages: 0,
  brands: [],
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
      pages: value,
    }));
  },
  setBrands: (value: Brand[]) => {
    set(() => ({
      brands: value,
    }));
  },
}));