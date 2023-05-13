import React from 'react';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';

export const ProductList: React.FC = () => {
  return (
    <div className='product-list'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
