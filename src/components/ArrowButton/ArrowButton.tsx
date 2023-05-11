import React from 'react';
import classNames from 'classnames';
import './ArrowButton.scss';

type Props = {
  action: 'back' | 'forward',
  disabled?: boolean,
};

export const ArrowButton: React.FC<Props> = ({
  action,
  disabled,
}) => {
  return (
    <button className={
      classNames(
        'button',
        { disabled },
        action,
      )}
    >
      &nbsp;
    </button>
  );
};
