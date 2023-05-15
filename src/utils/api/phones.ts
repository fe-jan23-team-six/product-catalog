import { client } from './fetchingClient';
import { Phone } from '../../types/Phone';
import { PhoneMain } from '../../types/PhoneMain';

const PHONES_ENDPOINT = '/products/';

export const getPhones = () => {
  return client.get<PhoneMain[]>(PHONES_ENDPOINT);
};

export const getNewPhones = () => {
  return client.get<PhoneMain[]>(PHONES_ENDPOINT + 'new');
};

export const getDiscountPhones = () => {
  return client.get<PhoneMain[]>(PHONES_ENDPOINT + 'discount');
};

export const getById = (phoneId: number) => {
  const url = PHONES_ENDPOINT + phoneId;

  return client.get<Phone>(url);
};

export const getBySlug = (phoneSlug: string) => {
  const url = PHONES_ENDPOINT + phoneSlug;

  return client.get<Phone>(url);
};

export const getDetailedById = (phoneId: number) => {
  const url = PHONES_ENDPOINT + phoneId;

  return client.get<Phone>(url);
};
