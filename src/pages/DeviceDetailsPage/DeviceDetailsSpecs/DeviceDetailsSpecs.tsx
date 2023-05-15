import React from 'react';
import './DeviceDetailsSpecs.scss';
import {
  TechCharacteristics,
} from '../../../components/ProductDetails/TechCharacteristics';
import { Phone } from '../../../types/phone/phone';

type Props = {
  product: Phone,
}

export const DeviceDetailsSpecs: React.FC<Props> = ({ product }) => {
  return (
    <div
      className="device-details__specs specs grid__item--desktop-14-24"
    >
      <h3 className="specs__title">
        Tech Specs
      </h3>

      <div className="specs__characteristics">
        <TechCharacteristics product={product} />
      </div>
    </div>
  );
};
