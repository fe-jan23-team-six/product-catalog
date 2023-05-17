import React from 'react';
import { ColoredButton } from '../ColoredButton';
import { Product } from '../../../types/Product';

type Props = {
  colors: Array<string>,
  product: Product,
};

export const ProductColorGroup: React.FC<Props> = ({ colors, product }) => {
  return (
    <>
      {colors.map(color => (
        <ColoredButton
          key={color}
          deviceColor={color}
          product={product}
        />
      ))}
    </>
  );
};
