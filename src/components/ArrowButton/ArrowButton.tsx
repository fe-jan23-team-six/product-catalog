import React from 'react';
import classNames from 'classnames';
import './ArrowButton.scss';

interface Props {
  classes: string; // 'back' | 'forward',
  disabled?: boolean,
  action?: () => void, // ? will be deleted
}

export const ArrowButton: React.FC<Props> = ({
  classes,
  disabled,
  action,
}) => {
  return (
    <button className={
      classNames(
        'button',
        { disabled },
        classes,
      )}
      onClick={action}
    />
  );
};
