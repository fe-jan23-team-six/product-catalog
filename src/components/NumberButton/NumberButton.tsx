import React from 'react';
import classNames from 'classnames';
import './NumberButton.scss';

type Props = {
  pageNumber: number,
  selected?: boolean,
};

export const NumberButton: React.FC<Props> = ({
  pageNumber,
  selected,
}) => {
  return (
    <button className={
      classNames(
        'squareButton',
        { selected },
      )}
    >
      {pageNumber}
    </button>
  );
};
