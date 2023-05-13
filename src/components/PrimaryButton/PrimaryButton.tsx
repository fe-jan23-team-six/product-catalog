import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './PrimaryButton.scss';

type Props = {
  handleAddToCart: () => void;
  handleCheckIsInCart: () => boolean;
}

export const PrimaryButton: React.FC<Props> = ({
  handleAddToCart,
  handleCheckIsInCart,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const isInCart = handleCheckIsInCart();

  useEffect(() => {
    setIsSelected(isInCart);
  }, []);

  const handlePrimaryButtonSelect = () => {
    if (!isSelected) {
      handleAddToCart();
      setIsSelected(true);
    }
  };

  return (
    <button
      className={classNames(
        'primary-button',
        {
          'primary-button--selected': isSelected,
        },
      )}
      onClick={handlePrimaryButtonSelect}
    >
      {isSelected ? 'Added' : 'Add to cart'}
    </button>
  );
};
