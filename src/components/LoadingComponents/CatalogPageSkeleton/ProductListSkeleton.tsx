import React from 'react';
import { ProductCardSkeleton } from '../ProductCardSkeleton';

interface Props {
  length: number,
}

export const ProductListSkeleton: React.FC<Props> = ({ length }) => (
  <div className='product-list'>
    {Array.from({ length }, (_, index) => (
      <ProductCardSkeleton
        key={index}
      />
    ))}
  </div>
);
