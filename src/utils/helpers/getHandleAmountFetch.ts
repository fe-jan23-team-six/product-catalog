import { Category } from '../../types/enums/Category';
import { getTotalAmount } from '../api/products';

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
