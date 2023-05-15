import React from 'react';
import { CapacitiesButton } from '../CapacitiesButton';
import { Phone } from '../../../types/Phone';

type Props = {
  capacities: Array<string>,
  product: Phone,
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
