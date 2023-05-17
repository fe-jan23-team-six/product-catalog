import React from 'react';
import { TechCharacteristicsItem } from '../TechCharacteristicsItem';

type Props = {
  characteristics: {
    screen: string,
    resolution: string,
    processor: string,
    ram: string,
  };
}

export const TechCharacteristics: React.FC<Props> = ({ characteristics }) => {
  return (
    <>
      {Object.entries(characteristics).map(([key, value]) => {
        const characteristic = key.slice(0, 1).toUpperCase() + key.slice(1);

        return (
          <TechCharacteristicsItem
            key={key}
            characteristic={characteristic}
            details={value}
          />
        );
      })}
    </>
  );
};
