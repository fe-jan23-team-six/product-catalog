import { client } from './fetchingClient';
import { PhoneMain } from '../../types/phone/PhoneMain';
import { Phone } from '../../types/phone/Phone';

const PHONES_ENDPOINT = '/products/';

export const getPhones = () => {
  return client.get<PhoneMain[]>(PHONES_ENDPOINT);
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
