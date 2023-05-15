import React, { useCallback, useContext, useMemo } from 'react';
import './CartCheckoutBox.scss';
import { CartCheckoutButton } from '../CartCheckoutButton';
import { CartContext } from '../../contexts/CartContext';

export const CartCheckoutBox: React.FC = () => {
  const { cart } = useContext(CartContext);

  const computedAllCartPrices = useCallback(() => {
    return cart
      .reduce((
        sum,
        {
          quantity,
          priceRegular,
        },
      ) => sum + (quantity * priceRegular), 0);
  }, [cart]);

  const itemsInCart = useMemo(() => cart.length, [cart]);

  return (
    <div className='cartCheckoutBox'>
      <div className="cartCheckoutBox__mainValue">
        {computedAllCartPrices()}
      </div>

      <p className="cartCheckoutBox__itemsTotal">
        {'Total for '}
        {itemsInCart}
        {' items'}
      </p>

      <CartCheckoutButton />
    </div>
  );
};
