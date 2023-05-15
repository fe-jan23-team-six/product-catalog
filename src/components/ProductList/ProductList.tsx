import React from 'react';
import './ProductList.scss';
import { ProductCard } from '../ProductCard';
import { PhoneMain } from '../../types/phone/PhoneMain';
import { useCartStorage } from './../../hooks/useCartStorage';

type Props = {
  products: PhoneMain[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
  const { addToCart, checkIsInCart } = useCartStorage();

  return (
    <div className='product-list'>
      {products.map(product => {
        const handleAddToCart = product
          ? () => addToCart(product)
          : () => {
            global.console.log('There should be adding');
          };
        const handleCheckIsInCart = () => checkIsInCart(product.id);

        return <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
          handleCheckIsInCart={handleCheckIsInCart}
        />;
      })}
    </div>
  );
};
