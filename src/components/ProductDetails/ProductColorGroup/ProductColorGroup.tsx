import React, { useState } from 'react';
import './ProductColorGroup.scss';
import { ColoredButton } from '../ColoredButton';
import { DeviceColors } from '../../../types/enums/DeviceColors';
import { Phone } from '../../../types/phone/Phone';

type Props = {
  colors: Array<string>,
  product: Phone,
};

export const ProductColorGroup: React.FC<Props> = ({ colors, product }) => {
  const [
    selectedColor,
    setSelectedColor,
  ] = useState<DeviceColors>(DeviceColors.White);

  const handleColorChange = (color: DeviceColors) => (
    setSelectedColor(color)
  );

  return (
    <>
      {colors.map(color => (
        <ColoredButton
          key={color}
          deviceColor={color}
          isSelected={color === selectedColor}
          onSelect={handleColorChange}
          product={product}
        />
      ))}
    </>
  );
};
