import React from 'react';
import './ProductList.scss';
import { ProductCard } from '../ProductCard';
import { ProductMain } from '../../types/ProductMain';

type Props = {
  products: ProductMain[];
  nextRouteLink?: string;
}

export const ProductList: React.FC<Props> = ({ products, nextRouteLink }) => (
  <div className='product-list'>
    {products.map(product => (
      <ProductCard
        key={product.id}
        product={product}
        nextRouteLink={nextRouteLink}
      />
    ))}
  </div>
);
