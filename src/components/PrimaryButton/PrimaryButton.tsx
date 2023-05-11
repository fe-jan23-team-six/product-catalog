import React, { useState } from 'react';
import classNames from 'classnames';
import './PrimaryButton.scss';

export const PrimaryButton: React.FC = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePrimaryButtonSelect = () => {
    setIsSelected((prevIsSelected) => (
      !prevIsSelected
    ));
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
      Add to cart
    </button>
  );
};
