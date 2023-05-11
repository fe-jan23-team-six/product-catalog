import React, { useState } from 'react';
import './ProductColorGroup.scss';
import { ColoredButton } from '../ColoredButton';

// you should up colors to page top and create context in future
type Props = {
  // colors: Array<string>;
};

export const ProductColorGroup: React.FC<Props> = () => {
  const [selectedColor, setSelectedColor] = useState<string>('green');
  const colors = ['red', 'green', 'blue', 'palegreen'];

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
