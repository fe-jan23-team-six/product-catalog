import { client } from './fetchingClient';
import { Phone } from '../../types/Phone';
import { PhoneMain } from '../../types/PhoneMain';
import { TypeAmount } from '../../types/TypeAmount';

const PHONES_ENDPOINT = '/products/';
// const PHONES_ENDPOINT = '/phones/';

export const getPhones = () => {
  return client.get<PhoneMain[]>(PHONES_ENDPOINT);
};

export const getNewPhones = () => {
  return client.getNew<PhoneMain[]>(PHONES_ENDPOINT);
};

export const getDiscountPhones = () => {
  return client.getDiscount<PhoneMain[]>(PHONES_ENDPOINT);
};

export const getAmountPhones = () => {
  return client.getAmount<TypeAmount>(PHONES_ENDPOINT);
};

export const getPhonesPage = (
  page = 1,
  limit = 16,
  sort = 'default',
) => {
  const query = `?page=${page}&limit=${limit}&sort=${sort}`;

  return client.get<PhoneMain[]>(PHONES_ENDPOINT + query);
};

export const getPhoneById = (phoneId: number) => {
  return client.get<Phone>(PHONES_ENDPOINT + phoneId);
};

export const getPhoneBySlug = (phoneSlug: string) => {
  return client.get<Phone>(PHONES_ENDPOINT + phoneSlug);
};
