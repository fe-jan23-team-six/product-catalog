import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryLink.scss';

interface Props {
  path: string;
  amount: string;
}

export const CategoryLink: React.FC<Props> = ({
  path,
  amount,
}) => {
  const nameCategory = path.slice(1);

  return (
    <div className="category">
      <Link to={path}>
        <div
          className={`
            category__image
            category__image--${nameCategory}
          `} />
      </Link>

      <h3 className="category__title">
        {nameCategory}
      </h3>

      <p className="category__description">
        {`${amount} models`}
      </p>
    </div>
  );
};
