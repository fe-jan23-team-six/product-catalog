import React, { useState } from 'react';
import './ProductCapacityGroup.scss';
import { CapacitiesButton } from '../CapacitiesButton';

// you should up colors to page top and create context in future
type Props = {
  // colors: Array<string>;
};

export const ProductCapacityGroup: React.FC<Props> = () => {
  const [selectedCapacity, setSelectedCapacity] = useState<string>('64GB');
  const capacities = ['64GB', '128GB', '256GB'];

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
