import React from 'react';
import { CapacitiesButton } from '../CapacitiesButton';
import { Product } from '../../../types/Product';

type Props = {
  product: Product,
};

export const ProductCapacityGroup: React.FC<Props> = ({ product }) => {
  return (
    <>
      {product.capacityAvailable.map(capacity => (
        <CapacitiesButton
          key={capacity}
          deviceCapacity={capacity}
          product={product}
        />
      ))}
    </>
  );
};
