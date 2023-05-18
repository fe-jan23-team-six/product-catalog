import React from 'react';
import classNames from 'classnames';
import './ArrowButton.scss';

interface Props {
  isUp?: boolean,
  isDown?: boolean,
  isRight?: boolean;
  isDisabled?: boolean,
  isLong?: boolean,
  onClick?: () => void,
}

export const ArrowButton: React.FC<Props> = ({
  isUp = false,
  isDown = false,
  isRight = false,
  isLong = false,
  isDisabled,
  onClick,
}) => {
  return (
    <button className={
      classNames(
        'arrow-button',
        {
          'arrow-button--is-up': isUp,
          'arrow-button--is-down': isDown,
          'arrow-button--is-right': isRight,
          'arrow-button--is-disabled': isDisabled,
          'arrow-button--is-long': isLong,
        },
      )}
      disabled={isDisabled}
      onClick={onClick}
    />
  );
};
