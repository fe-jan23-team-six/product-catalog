import React from 'react';
import './ProductList.scss';
import { ProductCard } from '../ProductCard';
import { ProductMain } from '../../types/ProductMain';

type Props = {
  products: ProductMain[];
}

export const ProductList: React.FC<Props> = ({ products }) => (
  <div className='product-list'>
    {products.map(product => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))}
  </div>
);
