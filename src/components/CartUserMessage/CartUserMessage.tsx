import React from 'react';
import './CartUserMessage.scss';

export const CartUserMessage: React.FC = () => (
  <article className='user-message'>
    <img
      className='user-message__image'
      alt='Your cart is empty'
      height="128"
      width="128"
      // eslint-disable-next-line max-len
      src="//s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/shopping-cart.png"
    />

    <p className='user-message__text'>
      Your cart is empty &#128722;
    </p>
  </article>
);
