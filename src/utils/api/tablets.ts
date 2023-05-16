import { Tablet } from '../../types/tablets/Tablet';
import { TabletsMain } from '../../types/tablets/TabletMain';
import { TypeAmount } from '../../types/TypeAmount';
import { client } from './fetchingClient';

const TABLETS_ENDPOINT = '/tablets/';

export const getTablets = () => {
  return client.get<TabletsMain[]>(TABLETS_ENDPOINT);
};

export const getNewTablets = () => {
  return client.getNew<TabletsMain[]>(TABLETS_ENDPOINT);
};

export const getDiscountTablets = () => {
  return client.getDiscount<TabletsMain[]>(TABLETS_ENDPOINT);
};

export const getAmountTablets = () => {
  return client.getAmount<TypeAmount>(TABLETS_ENDPOINT);
};

export const getTabletsPage = (
  page = 1,
  limit = 16,
  sort = 'default',
) => {
  const query = `?page=${page}&limit=${limit}&sort=${sort}`;

  return client.get<TabletsMain[]>(TABLETS_ENDPOINT + query);
};

export const getTabletBySlug = (tabletSlug: string) => {
  return client.get<Tablet>(TABLETS_ENDPOINT + tabletSlug);
};

export const getTabletById = (tabletId: number) => {
  return client.get<Tablet>(TABLETS_ENDPOINT + tabletId);
};
