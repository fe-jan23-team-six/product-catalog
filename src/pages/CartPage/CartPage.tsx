import React from 'react';
import './CartPage.scss';
import './../../styles/utils/_typography.scss';
import { CartList } from '../../components/CartList';
// import { CartCheckoutBox } from '../../components/CartCheckoutBox';

import { useCartStorage } from './../../hooks/useCartStorage';

export const CartPage = () => {
  const {
    removeFromCart,
    editQuantity,
    getAllFromCart,
    // clearCart,
  } = useCartStorage();

  const cartStorage = Object.values(getAllFromCart());
  console.log(cartStorage);

  return (
    <div className="cartPage">
      <h1 className="h1 cartPage__title">Cart</h1>

      <section className="cartPage__content">
        <CartList
          cartStorage={cartStorage}
          editQuantity={editQuantity}
          removeFromCart={removeFromCart}
        />
    {/* <CartCheckoutBox cartStorage={cartStorage} clearCart={clearCart} /> */}
      </section>
    </div>
  );
};
