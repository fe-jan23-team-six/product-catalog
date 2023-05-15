import React, { useContext } from 'react';
import './CartPage.scss';
import './../../styles/utils/_typography.scss';
import { CartList } from '../../components/CartList';
import { CartCheckoutBox } from '../../components/CartCheckoutBox';
import { CartContext } from '../../contexts/CartContext';

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
            <div className='userMessage'>
              <img
                className='userMessage__image'
                alt='Your cart is empty'
                height="128"
                width="128"
                // eslint-disable-next-line max-len
                src="//s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/shopping-cart.png"
              />
              <p className='userMessage__text'>
                Your cart is empty &#128722;
              </p>
            </div>
          )
        }
      </section>
    </div>
  );
};
