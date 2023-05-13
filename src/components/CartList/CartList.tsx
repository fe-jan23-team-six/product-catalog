import React from 'react';
import './CartList.scss';
import { CartItem as CartItemElement } from '../CartItem';
import {
  CartItem as CartStorageType,
} from './../../hooks/useCartStorage';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cartStorage: CartStorageType<any>[];
  editQuantity: (id: number, action: 'plus' | 'minus') => void;
  removeFromCart: (id: number) => void;
}

export const CartList: React.FC<Props> = ({
  cartStorage,
  editQuantity,
  removeFromCart,
}) => {
  return (
    <div className='cartList'>
      {cartStorage.map((cartStorageItem) => {
        return (
          <CartItemElement
            key={+cartStorageItem.product.id}
            cartStorageItem={cartStorageItem.product}
            quantity={cartStorageItem.quantity}
            editQuantity={editQuantity}
            removeFromCart={removeFromCart}
          />
        );
      })
      }
    </div>
  );
};
