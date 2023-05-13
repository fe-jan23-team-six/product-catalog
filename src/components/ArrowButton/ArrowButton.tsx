import React from 'react';
import classNames from 'classnames';
import './ArrowButton.scss';

interface Props {
  isForward?: boolean;
  isDisabled?: boolean,
  isLong?: boolean,
  onClick?: () => void,
}

export const ArrowButton: React.FC<Props> = ({
  isForward = false,
  isLong = false,
  isDisabled,
  onClick,
}) => {
  return (
    <button className={
      classNames(
        'arrow-button',
        {
          'arrow-button--is-forward': isForward,
          'arrow-button--is-disabled': isDisabled,
          'arrow-button--is-long': isLong,
        },
      )}
      onClick={onClick}
    />
  );
};
