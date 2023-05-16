import React, { useContext } from 'react';
import './CartCheckoutButton.scss';
import { CartContext } from '../../contexts/CartContext';

export const CartCheckoutButton: React.FC = () => {
  const { clearCart } = useContext(CartContext);

  const handleCheckoutButtonClick = () => {
    if (
      confirm('Checkout is not implemented yet. Do you want to clear the Cart?')
    ) {
      clearCart();
      window.location.reload();
    }
  };

  return (
    <button
      className='checkout-button'
      onClick={handleCheckoutButtonClick}
    >
      {'Checkout'}
    </button>
  );
};
