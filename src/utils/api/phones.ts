import { client } from './fetchingClient';
import { Phone } from '../../types/Phone';
import { PhoneMain } from '../../types/PhoneMain';
import { TypeAmount } from '../../types/TypeAmount';

import endpoints from '../constants/endpoints';

export const getPhones = () => {
  return client.get<PhoneMain[]>(endpoints.ENDPOINT_PRODUCTS);
};

export const getNewPhones = () => {
  return client.get<PhoneMain[]>(endpoints.ENDPOINT_NEW);
};

export const getDiscountPhones = () => {
  return client.get<PhoneMain[]>(endpoints.ENDPOINT_DISCOUNT);
};

export const getAmountPhones = () => {
  return client.get<TypeAmount>(endpoints.ENDPOINT_AMOUNT);
};

export const getTotalAmount = () => {
  const response = client.get<{'amount': 'string'}>(endpoints.ENDPOINT_AMOUNT);

  return response;
};

// export const getPhonesPage = (
//   page = 1,
//   limit = 16,
//   sort = 'default',
// ) => {
//   const query = `?page=${page}&limit=${limit}&sort=${sort}`;

//   return client.get<PhoneMain[]>(PHONES_ENDPOINT + query);
// };

export const getById = (id: string) => {
  return client.get<Phone>(endpoints.ENDPOINT_PRODUCTS + '/' + id);
};
