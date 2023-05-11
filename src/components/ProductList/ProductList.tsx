import React from 'react';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';

export const ProductList: React.FC = () => {
  return (
    <div className='product_list catalog'>
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
