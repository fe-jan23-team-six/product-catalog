import React from 'react';
import classNames from 'classnames';
import './CartCheckoutButton.scss';

import { useCartStorage } from './../../hooks/useCartStorage';

// type Props = {
//   clearCart: () => void;
// }

export const CartCheckoutButton: React.FC = () => {
  const { clearCart } = useCartStorage();
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
