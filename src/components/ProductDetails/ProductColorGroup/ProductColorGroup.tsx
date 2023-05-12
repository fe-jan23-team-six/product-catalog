import React, { useState } from 'react';
import './ProductColorGroup.scss';
import { ColoredButton } from '../ColoredButton';

type Props = {
  colors: Array<string>;
};

export const ProductColorGroup: React.FC<Props> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState<string>('green');

  const handleColorChange = (color: string) => (
    setSelectedColor(color)
  );

  return (
    <>
      {colors.map(color => (
        <ColoredButton
          key={color}
          color={color}
          isSelected={color === selectedColor}
          onSelect={handleColorChange}
        />
      ))}
    </>
  );
};
