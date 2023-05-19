import { Category } from '../../types/enums/Category';

export const getPageTitle = (productType: Category) => {
  switch (productType) {
    case Category.PHONES:
      return 'Mobile phones';
    case Category.TABLETS:
      return 'Tablets';
    case Category.ACCESSORIES:
      return 'Accessories';
  }
};
