import { Category } from '../../types/enums/Category';
import { getTotalAmount } from '../api/products';

export const getPluralWord = (word: string, count: number): string => {
  const label = `${count} ${word}`;

  return count === 1
    ? label
    : label + 's';
};

export const getHandleAmountFetch = (
  productType: Category,
  setTotalAmount: (amount: string) => void,
) => {
  switch (productType) {
    case Category.PHONES:
      return () => getTotalAmount()
        .then(({ phones }) => setTotalAmount(phones));
    case Category.TABLETS:
      return () => getTotalAmount()
        .then(({ tablets }) => setTotalAmount(tablets));
    case Category.ACCESSORIES:
      return () => getTotalAmount()
        .then(({ accessories }) => setTotalAmount(accessories));
  }
};

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
