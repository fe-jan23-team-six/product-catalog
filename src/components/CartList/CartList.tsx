import React from 'react';
import './CartList.scss';
import { CartItem } from '../CartItem';
import { CartItemType } from '../../types/CartItemType';

type Props = {
  cart: CartItemType[];
}

export const CartList: React.FC<Props> = ({
  cart,
}) => {
  return (
    <div className='cartList'>
      {cart.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          cartItem={cartItem}
        />
      ))
      }
    </div>
  );
};
