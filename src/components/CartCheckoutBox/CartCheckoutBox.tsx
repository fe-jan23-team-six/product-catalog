import React, { useCallback } from 'react';
import './CartCheckoutBox.scss';
import { CartItemInterface } from '../CartItem';

type Props = {
  cartStorage: CartItemInterface[],
}

export const CartCheckoutBox: React.FC<Props> = ({ cartStorage }) => {
  const computedAllCartPrices = useCallback(() => {
    return cartStorage.reduce((acc, item) => acc + item.totalPrice, 0);
  }, [cartStorage]);

  return (
    <div className='cartCheckoutBox'>
      <div className="cartCheckoutBox__mainValue">
        {computedAllCartPrices()}
      </div>

      <p className="cartCheckoutBox__itemsTotal">
        {'Total for '}
        {cartStorage.length}
        {' items'}
      </p>
    </div>
  );
};
