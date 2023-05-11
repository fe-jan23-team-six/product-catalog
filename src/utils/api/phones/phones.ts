import { client } from '../fetchingClient';
import { PhoneMain } from '../../../types/phone/phone';

const PHONES_ENDPOINT = '/products';

export const getPhones = () => {
  return client.getAll<PhoneMain[]>(PHONES_ENDPOINT);
};
