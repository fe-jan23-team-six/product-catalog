import React, { ImgHTMLAttributes } from 'react';
import { HOST } from '../../utils/constants/host';

export const Picture: React.FC<ImgHTMLAttributes<HTMLImageElement>> = (
  { ...props },
) => {
  return (
    <img
      {...props}
      src={HOST + props.src}
    />
  );
};
