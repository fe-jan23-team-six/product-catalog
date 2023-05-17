import React, { useContext } from 'react';
import './CartItem.scss';
import classNames from 'classnames';
import { CartItemType } from '../../types/CartItemType';
import { CartContext } from '../../contexts/CartContext';
import { QuantityActionType } from '../../types/QuantityActionType';
import { Picture } from '../Picture';

type Props = {
  cartItem: CartItemType;
}

export const CartItem: React.FC<Props> = ({
  cartItem,
}) => {
  const {
    id,
    name: phoneName,
    image,
    priceRegular,
    quantity,
  } = cartItem;

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
          <div className='cartItem__head_phone_image'>
            <Picture
              className='cartItem__head_phone_image_img'
              src={'https://product-catalog-api-0h4z.onrender.com/' + image}
              alt={phoneName}
            />
          </div>

          <p className='cartItem__head_phone_name bodyText'>
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
              onClick={() => changeQuantity(id, QuantityActionType.MINUS)}
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
            onClick={() => changeQuantity(id, QuantityActionType.PLUS)}
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
