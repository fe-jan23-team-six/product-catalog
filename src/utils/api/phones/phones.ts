import { Phone } from '../../../types/phone/Phone';
import { PhoneMain } from '../../../types/phone/PhoneMain';
import { client } from '../fetchingClient';

const PHONES_ENDPOINT = '/products/';

export const getPhones = () => {
  return client.getAll<PhoneMain[]>(PHONES_ENDPOINT);
};

export const getById = (phoneId: number) => {
  const url = PHONES_ENDPOINT + phoneId;

  return client.getAll<Phone>(url);
};
