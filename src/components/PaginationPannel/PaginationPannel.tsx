import React from 'react';
import { Link } from 'react-router-dom';
import './PaginationPannel.scss';

const buttons = [1, 2, 3, 4];

export const PaginationPannel: React.FC = () => {
  return (
    <div
      className="pagination"
    >
      <div
        className="pagination pagination__item pagination__item-switch"
      >
        <Link
          className="pagination pagination__link"
          to="/catalog/prev"
        >
          <img
            src="icons/left16x16.svg"
            alt="Prev icon"
          />
        </Link>
      </div>

      {buttons.map((button) => (
        <div
          key={button}
          // eslint-disable-next-line max-len
          className="pagination pagination__item pagination__item-control bodyText"
        >
          <Link
            className="pagination pagination__link"
            to={`/catalog/${button}`}
          >
            {button}
          </Link>
        </div>
      ))}

      <div
        className="pagination pagination__item pagination__item-switch"
      >
        <Link
          className="pagination pagination__link"
          to="/catalog/next"
        >
          <img
            src="icons/right16x16.svg"
            alt="Prev icon"
          />
        </Link>
      </div>
    </div>
  );
};
