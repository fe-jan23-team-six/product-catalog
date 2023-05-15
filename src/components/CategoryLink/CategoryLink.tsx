import React from 'react';
import { Link } from 'react-router-dom';
import { TypeCatalogContent } from '../../types/TypeCatalogContent';
import './CategoryLink.scss';

interface Props {
  path: TypeCatalogContent;
  amount: number;
}

export const CategoryLink: React.FC<Props> = ({
  path,
  amount,
}) => {
  return (
    <div className="category">
      <Link to={`/${path}`}>
        <div
          className={`
            category__image
            category__image--${path}
          `} />
      </Link>

      <h3 className="category__title">
        {path}
      </h3>

      <p className="category__description">
        {`${amount} models`}
      </p>
    </div>
  );
};
