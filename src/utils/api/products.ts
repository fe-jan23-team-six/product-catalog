import { client } from './fetchingClient';
import { Product } from '../../types/Product';
import { ProductMain } from '../../types/ProductMain';
import { TypeAmount } from '../../types/TypeAmount';

import endpoints from '../constants/endpoints';

export const getProducts = () => {
  return client.get<ProductMain[]>(endpoints.ENDPOINT_PRODUCTS);
};

export const getNewProducts = () => {
  return client.get<ProductMain[]>(endpoints.ENDPOINT_NEW);
};

export const getDiscountProducts = () => {
  return client.get<ProductMain[]>(endpoints.ENDPOINT_DISCOUNT);
};

export const getAmountProducts = () => {
  return client.get<TypeAmount>(endpoints.ENDPOINT_AMOUNT);
};

export const getTotalAmount = () => {
  const response = client.get<{
    'phones': 'string',
    'tablets': 'string',
    'accessories': 'string',
  }>(endpoints.ENDPOINT_AMOUNT);

  return response;
};

export const getProductPage = (
  endpoint: string,
  page = 1,
  limit = 16,
  sort = 'alphabetically',
) => {
  const query = `?page=${page}&limit=${limit}&sort=${sort}`;

  return client.get<ProductMain[]>('/products' + endpoint + query);
};

export const getById = (id: string) => {
  return client.get<Product>(endpoints.ENDPOINT_PRODUCTS + '/' + id);
};
