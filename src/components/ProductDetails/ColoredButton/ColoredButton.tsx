import React from 'react';
import classNames from 'classnames';
import './ColoredButton.scss';

type Props = {
  color: string;
  isSelected: boolean,
  onSelect: (color: string) => void;
}

export const ColoredButton: React.FC<Props> = ({
  color,
  isSelected,
  onSelect,
}) => {
  return (
    <button className={
      classNames(
        'colored-button',
        {
          'colored-button--selected': isSelected,
        },
      )}
      style={{ backgroundColor: color }}
      onClick={() => onSelect(color)}
    >
    </button>
  );
};
