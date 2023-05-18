import React from 'react';
import './CartUserMessage.scss';
import catMoney from '../../images/catMoney.gif';
import { ErrorPageGenerator } from '../ErrorPageGenerator';

export const CartUserMessage: React.FC = () => (
  <article className="cart_user_message">
    <ErrorPageGenerator
      imageName={catMoney}
      errorTitle="Your cart is empty &#128546;"
      buttonTitle="Go shopping &#128722;"
    />
  </article>
);
