import { CartItemType } from '../../types/CartItemType';

export const countProductsInCart = (cart: CartItemType[]) => (
  cart.reduce((sum, { quantity }) => sum + quantity, 0)
);
