import React from 'react';
import classNames from 'classnames';
import './CapacitiesButton.scss';

type Props = {
  capacity: string;
  isSelected: boolean,
  onSelect: (capacity: string) => void;
}

export const CapacitiesButton: React.FC<Props> = ({
  capacity,
  isSelected,
  onSelect,
}) => {
  return (
    <button className={
      classNames(
        'capacity-button',
        {
          'capacity-button--selected': isSelected,
        },
      )}
      onClick={() => onSelect(capacity)}
    >
      {capacity}
    </button>
  );
};
