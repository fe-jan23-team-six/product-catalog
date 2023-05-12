import React, { useCallback } from 'react';
import './CartItem.scss';
import classNames from 'classnames';

export interface CartItemInterface {
  id: string,
  name: string,
  price: number,
  image: string,
  amount: number,
  totalPrice: number,
}

type Props = {
  cartItem: CartItemInterface,
  setCartStorage: React.Dispatch<React.SetStateAction<CartItemInterface[]>>,
}

export const CartItem: React.FC<Props> = ({ cartItem, setCartStorage }) => {
  const { id, name: phoneName, image, amount, totalPrice } = cartItem;

  const disabled = amount === 1;

  const handleRemoveFromCart = useCallback((
    idToRemove: string,
  ) => {
    return () =>
      setCartStorage((prevState) =>
        prevState.filter((item) => item.id !== idToRemove));
  }, [setCartStorage]);

  type ActionType = 'plus' | 'minus';

  const handleChangeAmount = useCallback((
    action: ActionType, idToChange: string,
  ) => {
    return () => {
      setCartStorage((prevState) => {
        return prevState.map((item) => {
          if (item.id === idToChange) {
            if (action === 'plus') {
              return {
                ...item,
                amount: item.amount + 1,
                totalPrice: item.totalPrice + item.price,
              };
            } else {
              return {
                ...item,
                amount: item.amount - 1,
                totalPrice: item.totalPrice - item.price,
              };
            }
          }

          return item;
        });
      });
    };
  }, [setCartStorage]);

  return (
    <article className='cartItem'>
      <div className='cartItem__head'>
        <div className='cartItem__head_remove'>
          <button
            className='cartItem__head_remove_button'
            onClick={handleRemoveFromCart(id)}
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

          {/* <div
            className="cartItem__head_cartItem__head_phone_image"
            data-image-url={image}
          >
          </div> */}

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
              onClick={handleChangeAmount('minus', id)}
          >
            -
          </button>

          <span className='cartItem__priceAmount_amount_amount'>{amount}</span>

          <button
            className='cartItem__priceAmount_amount_button plus'
            onClick={handleChangeAmount('plus', id)}
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
