import React from 'react';
import { PaginationPannel } from '../../components/PaginationPannel';
import { ProductList } from '../../components/ProductList';
import './CatalogPage.scss';

export const CatalogPage: React.FC = () => {
  return (
    <div className="catalog-page">
      <h1>
        Mobile Phones
      </h1>

      <div
        className="bodyText catalog-page__subtitle"
      >
        95 models
      </div>

      <div className="catalog-page__product-list">
        <ProductList />
      </div>

      <div className="catalog-page__pagination-pannel">
        <PaginationPannel />
      </div>
    </div>
  );
};
