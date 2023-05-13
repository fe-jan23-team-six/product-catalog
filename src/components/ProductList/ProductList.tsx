/* eslint-disable max-len */
import React from 'react';
import './ProductList.scss';
import { ProductCard } from '../ProductCard';
import { PhoneMain } from '../../types/phone/PhoneMain';

type Props = {
  products: PhoneMain[];
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
