import React, { useContext } from 'react';
import './CartItem.scss';
import classNames from 'classnames';
import { CartEntity } from '../../types/CartEntity';
import { CartContext } from '../../contexts/CartContext';

type Props = {
  cartEntity: CartEntity;
}

export const CartItem: React.FC<Props> = ({
  cartEntity,
}) => {
  const {
    id,
    name: phoneName,
    image,
    priceRegular,
    quantity,
  } = cartEntity;

  const disabled = quantity === 1;

  const totalPrice = priceRegular * quantity;

  const { removeFromCart, changeQuantity } = useContext(CartContext);

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
              onClick={() => changeQuantity(id, 'MINUS')}
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
            onClick={() => changeQuantity(id, 'PLUS')}
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
