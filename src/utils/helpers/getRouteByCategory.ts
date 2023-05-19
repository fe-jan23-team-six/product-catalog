import { Category } from '../../types/enums/Category';
import { ACCESSORIES_PAGE,
  PHONES_PAGE, TABLETS_PAGE } from '../constants/routes';

export const getRouteByCategory = (productType: Category) => {
  switch (productType) {
    case Category.TABLETS:
      return TABLETS_PAGE;
    case Category.ACCESSORIES:
      return ACCESSORIES_PAGE;
    case Category.PHONES:
    default:
      return PHONES_PAGE;
  }
};
