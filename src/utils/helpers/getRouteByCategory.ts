import { Category } from '../../types/enums/Category';
import { ACCESSORIES_CATALOG,
  PHONES_CATALOG, TABLETS_CATALOG } from '../constants/route';

export const getRouteByCategory = (productType: Category) => {
  switch (productType) {
    case Category.TABLETS:
      return TABLETS_CATALOG;
    case Category.ACCESSORIES:
      return ACCESSORIES_CATALOG;
    case Category.PHONES:
    default:
      return PHONES_CATALOG;
  }
};
