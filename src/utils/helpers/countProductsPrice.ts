import { CartItemType } from '../../types/CartItemType';

export const countProductsPrice = (cart: CartItemType[]) => (
  cart.reduce((
    sum,
    {
      quantity,
      priceRegular,
    },
  ) => sum + (quantity * priceRegular), 0)
);
