import React from 'react';
import { ColoredButton } from '../ColoredButton';
import { Phone } from '../../../types/Phone';

type Props = {
  colors: Array<string>,
  product: Phone,
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
