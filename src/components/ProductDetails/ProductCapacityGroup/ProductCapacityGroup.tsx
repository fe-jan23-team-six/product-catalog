import React from 'react';
import { CapacitiesButton } from '../CapacitiesButton';
import { Product } from '../../../types/Product';

type Props = {
  capacities: Array<string>,
  product: Product,
};

export const ProductCapacityGroup: React.FC<Props> = ({
  capacities,
  product,
}) => {
  return (
    <>
      {capacities.map(capacity => (
        <CapacitiesButton
          key={capacity}
          deviceCapacity={capacity}
          product={product}
        />
      ))}
    </>
  );
};
