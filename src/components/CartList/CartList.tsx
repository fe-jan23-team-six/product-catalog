import React from 'react';
import './CartList.scss';
import { CartItem, CartItemInterface } from '../CartItem';

type Props = {
  cartStorage: CartItemInterface[],
  setCartStorage: React.Dispatch<React.SetStateAction<CartItemInterface[]>>,
}

export const CartList: React.FC<Props> = ({
  cartStorage,
  setCartStorage,
}) => {
  return (
    <div className='cartList'>
      {cartStorage
        .map(cartItem => {
          return <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            setCartStorage={setCartStorage}
          />;
        })
      }
    </div>
  );
};
