import React, { useContext } from 'react';
import classNames from 'classnames';
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
      className={classNames(
        'primary-button',
        {
          // 'primary-button--selected': isSelected,
        },
      )}
      onClick={handleCheckoutButtonClick}
      // onDoubleClick={() => clearCart()}
    >
      {'Checkout'}
    </button>
  );
};
