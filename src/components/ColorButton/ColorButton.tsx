import React from 'react';
import classNames from 'classnames';
import './ColorButton.scss';

type Props = {
  color: string,
  selected?: boolean,
};

export const ColorButton: React.FC<Props> = ({
  color,
  selected,
}) => {
  return (
    <button className={
      classNames(
        'colorButton',
        { selected },
      )}
    >
      <div className={
        classNames(
          'colorButton__circle',
        )}
        style={{ backgroundColor: color }}
      >
      </div>
    </button>
  );
};
