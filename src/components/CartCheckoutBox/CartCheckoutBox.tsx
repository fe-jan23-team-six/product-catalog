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
      <section className="cartCheckoutBox__head">
        <h2 className="cartCheckoutBox__head_mainValue">
          {computedAllCartPrices()}
        </h2>

        <p className="cartCheckoutBox__head_itemsTotal">
          {'Total for '}
          {itemsInCart}
          {' items'}
        </p>
      </section>

      <CartCheckoutButton />
    </div>
  );
};
