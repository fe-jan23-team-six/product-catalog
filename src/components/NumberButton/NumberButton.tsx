import React from 'react';
import classNames from 'classnames';
import './NumberButton.scss';

type Props = {
  pageNumber: string,
  selected?: boolean,
  handleChangePage: (value: string) => void,
};

export const NumberButton: React.FC<Props> = ({
  pageNumber,
  selected,
  handleChangePage,
}) => {
  return (
    <button
      className={classNames(
        'squareButton',
        { selected },
      )}
      onClick={() => handleChangePage(pageNumber)}
    >
      {pageNumber}
    </button>
  );
};
