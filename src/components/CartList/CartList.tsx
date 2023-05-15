import React from 'react';
import './CartList.scss';
import { CartItem } from '../CartItem';
import { CartEntity } from '../../types/CartEntity';

type Props = {
  cart: CartEntity[];
}

export const CartList: React.FC<Props> = ({
  cart,
}) => {
  return (
    <div className='cartList'>
      {cart.map((cartItem) => {
        return (
          <CartItem
            key={cartItem.id}
            cartEntity={cartItem}
          />
        );
      })
      }
    </div>
  );
};
