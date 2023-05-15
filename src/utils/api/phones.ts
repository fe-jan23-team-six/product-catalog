import { client } from './fetchingClient';
import { Phone } from '../../types/Phone';
import { PhoneMain } from '../../types/PhoneMain';

const PHONES_ENDPOINT = '/products/';

export const getPhones = () => {
  return client.get<PhoneMain[]>(PHONES_ENDPOINT);
};

export const getTotalAmount = () => {
  const response = client.get<{'amount': 'string'}>(PHONES_ENDPOINT + 'amount');

  return response;
};

export const getPhonesPage = (
  page = 1,
  limit = 16,
  sort = 'default',
) => {
  const query = `?page=${page}&limit=${limit}&sort=${sort}`;

  return client.get<PhoneMain[]>(PHONES_ENDPOINT + query);
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
