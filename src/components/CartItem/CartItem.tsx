import React from 'react';
import './CartItem.scss';
import classNames from 'classnames';

import { Phone } from '../../types/phone/Phone';
// import {
//   CartItem as CartStorageItem,
// } from './../../hooks/useCartStorage';

type Props = {
  cartStorageItem: Phone;
  quantity: number,
  editQuantity: (id: number, action: 'plus' | 'minus') => void;
  removeFromCart: (id: number) => void;
}

export const CartItem: React.FC<Props> = ({
  cartStorageItem,
  quantity,
  editQuantity,
  removeFromCart,
}) => {
  const {
    id,
    name: phoneName,
    image,
    priceRegular,
  } = cartStorageItem;

  const disabled = quantity === 1;

  const totalPrice = priceRegular * quantity;

  return (
    <article className='cartItem'>
      <div className='cartItem__head'>
        <div className='cartItem__head_remove'>
          <button
            className='cartItem__head_remove_button'
            onClick={() => removeFromCart(id)}
          >
            X
          </button>
        </div>

        <div className='cartItem__head_phone'>
          <img
            className='cartItem__head_cartItem__head_phone_image'
            src={image}
            alt={phoneName}
          />

          <p className='cartItem__head_cartItem__head_phone_name bodyText'>
            {phoneName}
          </p>
        </div>
      </div>

      <div className='cartItem__priceAmount'>
        <div className='cartItem__priceAmount_amount'>
          <button
            className={
              classNames(
                'cartItem__priceAmount_amount_button',
                'minus',
                { disabled },
              )}
              disabled={disabled}
              onClick={() => editQuantity(id, 'minus')}
          >
            -
          </button>

          <span
            className='cartItem__priceAmount_amount_amount'
          >
            {quantity}
          </span>

          <button
            className='cartItem__priceAmount_amount_button plus'
            onClick={() => editQuantity(id, 'plus')}
          >
            +
          </button>
        </div>

        <h3 className="cartItem__priceAmount_price">
          {totalPrice}
        </h3>
      </div>
    </article>
  );
};
