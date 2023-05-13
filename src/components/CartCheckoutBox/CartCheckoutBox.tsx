import React from 'react';
import './CartCheckoutBox.scss';

import {
  CartStorage,
  CartItem as CartStorageItem,
} from './../../hooks/useCartStorage';
import { PhoneDetailed } from '../../types/phone/phone';

type Props = {
  cartStorage: CartStorage<CartStorageItem<PhoneDetailed>>,
  clearCart: () => void;
}

export const CartCheckoutBox: React.FC<Props> = ({ cartStorage }) => {
  // const computedAllCartPrices = useCallback(() => {
  //   return cartStorage.reduce((acc, item) => acc + item.totalPrice, 0);
  // }, [cartStorage]);

  return (
    <div className='cartCheckoutBox'>
      <div className="cartCheckoutBox__mainValue">
        {/* {computedAllCartPrices()} */}
      </div>

      <p className="cartCheckoutBox__itemsTotal">
        {'Total for '}
        {Object.values(cartStorage).length}
        {' items'}
      </p>
    </div>
  );
};
