import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { ProductListSkeleton } from './ProductListSkeleton';

interface Props {
  amount: number,
}

export const CatalogPageSkeleton: React.FC<Props> = ({ amount }) => (
  <div className="catalog-page__content">
    <section className="catalog-page__product-list">
      <ProductListSkeleton length={amount} />
    </section>

    <Skeleton
      width={300}
      height={32}
      containerClassName="catalog-page__pagination-pannel"
    />
  </div>
);
