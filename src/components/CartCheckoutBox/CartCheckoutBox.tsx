import React, { useCallback, useMemo } from 'react';
import './CartCheckoutBox.scss';
import { CartCheckoutButton } from '../CartCheckoutButton';
import { CartEntity } from '../../types/CartEntity';

type Props = {
  cartStorage: CartEntity[];
  // getAllFromCart: () => CartEntity[],
}

export const CartCheckoutBox: React.FC<Props> = ({
  cartStorage,
  // getAllFromCart,
}) => {
  const computedAllCartPrices = useCallback(() => {
    return cartStorage
      .reduce((
        sum,
        {
          quantity,
          priceRegular,
        },
      ) => sum + (quantity * priceRegular), 0);
  }, [cartStorage]);

  const itemsInCart = useMemo(() => cartStorage.length, [cartStorage]);

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
