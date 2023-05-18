import React, { useContext } from 'react';
import './CartPage.scss';
import { CartList } from '../../components/CartList';
import { CartCheckoutBox } from '../../components/CartCheckoutBox';
import { CartContext } from '../../contexts/CartContext';
import { CartUserMessage } from '../../components/CartUserMessage';

export const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cartPage">
      <h1 className="h1 cartPage__title">Cart</h1>

      <section className="cartPage__content">
        {cart.length ? (<>
            <CartList cart={cart} />

            <CartCheckoutBox />
          </>)
          : (
            <CartUserMessage />
          )
        }
      </section>
    </div>
  );
};
