import { client } from '../fetchingClient';
import {
  PhoneMain,
  PhoneDescription,
  PhoneDetailed,
} from '../../../types/phone/phone';

const PHONES_ENDPOINT = '/products/';

export const getPhones = () => {
  return client.getAll<PhoneMain[]>(PHONES_ENDPOINT);
};

export const getById = (phoneId: number) => {
  const url = PHONES_ENDPOINT + phoneId;

  return client.getAll<PhoneDetails>(url);
};

export const getDetailedById = (phoneId: number) => {
  const url = PHONES_ENDPOINT + phoneId;

  return client.getAll<PhoneDetailed>(url);
};
