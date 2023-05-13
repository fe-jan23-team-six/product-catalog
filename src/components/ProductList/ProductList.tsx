/* eslint-disable max-len */
import React from 'react';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';
import { PhoneMain } from '../../types/phone/PhoneMain';

type Props = {
  products: PhoneMain[];
}

export const ProductList: React.FC<Props> = ({ products }) => (
  <div className='product_list catalog'>
    {products.map(product => (
      <ProductCard
        key={product.id}
        product={product}
      />
    ))}
  </div>
);
