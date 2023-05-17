import React from 'react';
import { ArrowButton } from '../ArrowButton';
import { NumberButton } from '../NumberButton';
import './PaginationPannel.scss';

// const buttons = ['1', '2', '3', '4'];

const getVisibleButtons = (currentPage: number, lastPage: number) => {
  const result = [];

  if (lastPage <= 4) {
    for (let i = 1; i <= lastPage; i++) {
      result.push(i);
    }
  } else if (currentPage <= 2) {
    for (let i = 1; i <= 4; i++) {
      result.push(i);
    }
  } else if (currentPage >= lastPage - 1) {
    for (let i = lastPage - 3; i <= lastPage; i++) {
      result.push(i);
    }
  } else {
    for (let i = currentPage - 1; i <= currentPage + 2; i++) {
      result.push(i);
    }
  }

  return result;
};

const getButtons = (start: number, stop:number) => {
  const buttons = [];

  for (let i = start; i <= stop; i++) {
    buttons.push(`${i}`);
  }

  return buttons;
};

type Props = {
  handleChangePage: (value: string) => void,
  handlePrevPage: () => void,
  handleNextPage: () => void,
  page: number,
  limit: number,
  totalAmmount: number,
};

export const PaginationPannel: React.FC<Props> = ({
  handleChangePage,
  handlePrevPage,
  handleNextPage,
  page,
  limit,
  totalAmmount,
}) => {
  const numberOfPages = Math.ceil(totalAmmount / limit);
  const buttons = getButtons(1, numberOfPages);
  const isFirst = page === 1;
  const isLast = page === numberOfPages;

  const visibleButtons = getVisibleButtons(page, buttons.length);

  return (
    <div
      className="pagination"
    >
      <div
        className="pagination pagination__item pagination__item-prev"
      >
        <ArrowButton
          isRight={false}
          isLong={false}
          isDisabled={isFirst}
          onClick={handlePrevPage}
        />
      </div>

      {visibleButtons.map((button) => (
        <div
          key={button}
          // eslint-disable-next-line max-len
          className="pagination pagination__item pagination__item-control"
        >
          <NumberButton
            pageNumber={`${button}`}
            selected={+button === page}
            handleChangePage={handleChangePage}
          />
        </div>
      ))}

      <div
        className="pagination pagination__item pagination__item-next"
      >
        <ArrowButton
          isRight={true}
          isLong={false}
          isDisabled={isLast}
          onClick={handleNextPage}
        />
      </div>
    </div>
  );
};
