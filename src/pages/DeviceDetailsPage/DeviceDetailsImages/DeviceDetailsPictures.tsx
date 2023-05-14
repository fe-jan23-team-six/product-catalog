import React from 'react';
import './DeviceDetailsImages.scss';
import { SliderPhotos } from '../../../components/SliderPhotos';

type Props = {
  images: string[];
}

export const DeviceDetailsImages: React.FC<Props> = ({ images }) => {
  return (
    <div
      className="device-details__pictures pictures
      grid__item--tablet-1-6 grid__item--desktop-1-12"
    >
      <SliderPhotos images={images} />
    </div>
  );
};
