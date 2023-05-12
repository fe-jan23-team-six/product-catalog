import React, { useState } from 'react';
import './CartPage.scss';
import './../../styles/utils/_typography.scss';
import { CartList } from '../../components/CartList';
import { CartCheckoutBox } from '../../components/CartCheckoutBox';
import { CartItemInterface } from '../../components/CartItem';

const cart = [
  {
    id: 'apple-iphone-11-pro-max-512gb-gold',
    name: 'Apple iPhone 11 Pro Max 512GB Gold',
    price: 2020,
    image: 'img/phones/apple-iphone-11-pro-max/gold/00.jpg',
    amount: 1,
    totalPrice: 2020,
  },
  {
    id: 'apple-iphone-xs-max-256gb-silver',
    name: 'Apple iPhone XS Max 256GB Silver',
    price: 1080,
    image: 'img/phones/apple-iphone-xs-max/silver/00.jpg',
    amount: 1,
    totalPrice: 1080,
  },
  {
    id: 'apple-iphone-7-plus-32gb-rosegold',
    name: 'Apple iPhone 7 Plus 32GB Rosegold',
    price: 540,
    image: 'img/phones/apple-iphone-7-plus/rosegold/00.jpg',
    amount: 1,
    totalPrice: 540,
  },
];

export const CartPage = () => {
  const [cartStorage, setCartStorage] = useState<CartItemInterface[]>(cart);

  return (
    <div className="cartPage">
      <h1 className="h1 cartPage__title">Cart</h1>

      <section className="cartPage__content">
        <CartList cartStorage={cartStorage} setCartStorage={setCartStorage} />

        <CartCheckoutBox cartStorage={cartStorage} />
      </section>
    </div>
  );
};
