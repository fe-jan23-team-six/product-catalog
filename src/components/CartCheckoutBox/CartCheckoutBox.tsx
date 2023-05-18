import React, { useContext } from 'react';
import './CartCheckoutBox.scss';
import { CartCheckoutButton } from '../CartCheckoutButton';
import { CartContext } from '../../contexts/CartContext';
import { countProductsInCart } from '../../utils/helpers/countProductsInCart';
import { countProductsPrice } from '../../utils/helpers/countProductsPrice';

export const CartCheckoutBox: React.FC = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = countProductsPrice(cart);
  const productsInCart = countProductsInCart(cart);

  return (
    <div className='cartCheckoutBox'>
      <section className="cartCheckoutBox__head">
        <h2 className="cartCheckoutBox__head_mainValue">
          {totalPrice}
        </h2>

        <p className="cartCheckoutBox__head_itemsTotal">
          {`Total for ${productsInCart} items`}
        </p>
      </section>

      <CartCheckoutButton />
    </div>
  );
};
