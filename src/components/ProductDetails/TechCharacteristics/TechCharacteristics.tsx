import React from 'react';
import { PhoneDetails } from '../../../types/phone/phone';
import { TechCharacteristicsItem } from '../TechCharacteristicsItem';

type Props = {
  product: PhoneDetails;
}

export const TechCharacteristics: React.FC<Props> = ({ product }) => {
  const {
    screen: screenSize,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell,
  } = product;

  return (
    <>
      <TechCharacteristicsItem
        characteristic='Screen'
        details={screenSize}
      />

      <TechCharacteristicsItem
        characteristic='Resolution'
        details={resolution}
      />

      <TechCharacteristicsItem
        characteristic='Processor'
        details={processor}
      />

      <TechCharacteristicsItem
        characteristic='RAM'
        details={ram}
      />

      <TechCharacteristicsItem
        characteristic='Built in memory'
        details={capacity}
      />

      <TechCharacteristicsItem
        characteristic='Camera'
        details={camera}
      />

      <TechCharacteristicsItem
        characteristic='Zoom'
        details={zoom}
      />

      <TechCharacteristicsItem
        characteristic='Cell'
        details={cell.join(', ')}
      />
    </>
  );
};
