import React, { useState } from 'react';
import './ProductCapacityGroup.scss';
import { CapacitiesButton } from '../CapacitiesButton';

type Props = {
  capacities: Array<string>;
};

export const ProductCapacityGroup: React.FC<Props> = ({ capacities }) => {
  const [
    selectedCapacity,
    setSelectedCapacity,
  ] = useState<string>(capacities[0]);

  const handleCapacityChange = (capacity: string) => (
    setSelectedCapacity(capacity)
  );

  return (
    <>
      {capacities.map(capacity => (
        <CapacitiesButton
          key={capacity}
          capacity={capacity}
          isSelected={capacity === selectedCapacity}
          onSelect={handleCapacityChange}
        />
      ))}
    </>
  );
};
