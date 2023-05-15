import React from 'react';
import './CartList.scss';
import { CartItem } from '../CartItem';
import { CartEntity } from '../../types/CartEntity';

type Props = {
  cartStorage: CartEntity[];
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
      {cartStorage.map((cartEntity) => {
        return (
          <CartItem
            key={cartEntity.id}
            cartEntity={cartEntity}
            editQuantity={editQuantity}
            removeFromCart={removeFromCart}
          />
        );
      })
      }
    </div>
  );
};
