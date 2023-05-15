import { client } from './fetchingClient';
import { Phone } from '../../types/phone/phone';
import { PhoneMain } from '../../types/phone/PhoneMain';

const PHONES_ENDPOINT = '/products/';

export const getPhones = () => {
  return client.getAll<PhoneMain[]>(PHONES_ENDPOINT);
};

export const getById = (phoneId: number) => {
  const url = PHONES_ENDPOINT + phoneId;

  return client.getAll<Phone>(url);
};

export const getDetailedById = (phoneId: number) => {
  const url = PHONES_ENDPOINT + phoneId;

  return client.getAll<Phone>(url);
};
