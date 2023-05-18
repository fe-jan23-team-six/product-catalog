import React from 'react';
import classNames from 'classnames';
import './PrimaryButton.scss';

type Props = {
  onCartAdd?: () => void;
  isInCart?: boolean;
}

export const PrimaryButton: React.FC<Props> = ({
  onCartAdd = () => undefined,
  isInCart = false,
}) => (
  <button
    className={classNames(
      'primary-button',
      {
        'primary-button--selected': isInCart,
      },
    )}
    onClick={onCartAdd}
  >
    {isInCart ? 'Added' : 'Add to cart'}
  </button>
);
