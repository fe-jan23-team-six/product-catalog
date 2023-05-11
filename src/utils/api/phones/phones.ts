import { client } from '../fetchingClient';

const PHONES_ENDPOINT = '/products';

export const getPhones = () => {
  // this with our feature generic for phones
  // return client.getAll<Phone[]>(PHONES_ENDPOINT);
  return client.getAll(PHONES_ENDPOINT);
};
