import React, { useContext } from 'react';
import './CartItem.scss';
import classNames from 'classnames';
import { CartItemType } from '../../types/CartItemType';
import { CartContext } from '../../contexts/CartContext';
import { QuantityActionType } from '../../types/QuantityActionType';
import { useModifiedUrl } from '../ToggleTheme';

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
            <img
              src={useModifiedUrl(
                'icons/close16x16.svg',
                localStorage.getItem('themeName') || 'light',
              )}
              alt="Close button"
              title='Remove this product from cart'
            />
          </button>
        </div>

        <div className='cartItem__head_phone'>
          <div className='cartItem__head_phone_image'>
            <img
              className='cartItem__head_phone_image_img'
              src={image}
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
            {disabled ? (
              <img
                className='minus_image image'
                src={useModifiedUrl(
                  'icons/minus16x16_disabled.svg',
                  localStorage.getItem('themeName') || 'light',
                )}
                alt="Decrease quantity"
                title='Decrease quantity'
              />
            ) : (
              <img
                className='minus_image image'
                src={useModifiedUrl(
                  'icons/minus16x16.svg',
                  localStorage.getItem('themeName') || 'light',
                )}
                alt="Decrease quantity"
                title='Decrease quantity'
              />
            )}
          </button>

          <div
            className='cartItem__priceAmount_amount_amount amount'
          >
            <span className="quantity">
              {quantity}
            </span>
          </div>

          <button
            className='cartItem__priceAmount_amount_button plus'
            onClick={() => changeQuantity(id, QuantityActionType.PLUS)}
          >
            <img
              className='plus_image image'
              src={useModifiedUrl(
                'icons/plus16x16.svg',
                localStorage.getItem('themeName') || 'light',
              )}
              alt="Increase quantity"
              title='Increase quantity'
            />
          </button>
        </div>

        <h3 className="cartItem__priceAmount_price">
          {totalPrice}
        </h3>
      </div>
    </article>
  );
};
