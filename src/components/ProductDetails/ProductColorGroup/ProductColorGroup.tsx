import React from 'react';
import { ColoredButton } from '../ColoredButton';
import { Product } from '../../../types/Product';

type Props = {
  product: Product,
};

export const ProductColorGroup: React.FC<Props> = ({ product }) => {
  return (
    <>
      {product.colorsAvailable.map(color => (
        <ColoredButton
          key={color}
          currentColor={color}
          product={product}
        />
      ))}
    </>
  );
};
