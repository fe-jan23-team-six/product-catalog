import React from 'react';
import classNames from 'classnames';
import './ArrowButton.scss';

interface Props {
  isForward?: boolean;
  isDisabled?: boolean,
  onClick?: () => void,
}

export const ArrowButton: React.FC<Props> = ({
  isForward = false,
  isDisabled,
  onClick,
}) => {
  return (
    <button className={
      classNames(
        'arrow-button',
        {
          'arrow-button--forward': isForward,
          'arrow-button--disabled': isDisabled,
        },
      )}
      onClick={onClick}
    />
  );
};
