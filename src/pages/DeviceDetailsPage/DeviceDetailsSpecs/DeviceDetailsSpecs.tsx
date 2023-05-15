import React from 'react';
import './DeviceDetailsSpecs.scss';
import {
  TechCharacteristics,
} from '../../../components/ProductDetails/TechCharacteristics';
import { Phone } from '../../../types/Phone';

type Props = {
  product: Phone,
}

export const DeviceDetailsSpecs: React.FC<Props> = ({ product }) => {
  const {
    screen,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell,
  } = product;

  const productCharacteristics = {
    screen,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell,
  };

  return (
    <div
      className="device-details__specs specs grid__item--desktop-14-24"
    >
      <h3 className="specs__title">
        Tech Specs
      </h3>

      <div className="specs__characteristics">
        <TechCharacteristics characteristics={productCharacteristics} />
      </div>
    </div>
  );
};
