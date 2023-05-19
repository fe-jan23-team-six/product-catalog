import React, { useContext } from 'react';
import './CartPage.scss';
import { CartList } from '../../components/CartList';
import { CartCheckoutBox } from '../../components/CartCheckoutBox';
import { CartContext } from '../../contexts/CartContext';
import { CartUserMessage } from '../../components/CartUserMessage';
import { BackButton } from '../../components/BackButton';

export const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-page">

      <div className="cart-page__back-button">
        <BackButton />
      </div>

      <h1 className="cart-page__title">
        Cart
      </h1>

      <section className="cart-page__content">
        {cart.length ? (
          <>
            <CartList cart={cart} />

            <CartCheckoutBox />
          </>
        ) : (
          <CartUserMessage />
        )
        }
      </section>
    </div>
  );
};
