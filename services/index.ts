import { mainApi } from './apis';

const LIMIT_PRODUCTS = 10;
const APP_PAGE = 1;

export const api = {
  getProducts: function ({
    limit = LIMIT_PRODUCTS,
    page = APP_PAGE,
  }: {
    limit?: number;
    page?: number;
  }) {
    return mainApi.get(`/products?page=${page}&limit=${limit}`);
  },
  getCategories: function () {
    return mainApi.get('/categories');
  },
};
