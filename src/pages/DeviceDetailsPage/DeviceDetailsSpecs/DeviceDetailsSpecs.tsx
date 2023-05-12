import React from 'react';
import './DeviceDetailsSpecs.scss';
import {
  TechCharacteristics,
} from '../../../components/ProductDetails/TechCharacteristics';
import { PhoneDetails } from '../../../types/phone/phone';

type Props = {
  product: PhoneDetails,
}

export const DeviceDetailsSpecs: React.FC<Props> = ({ product }) => {
  return (
    <div
      className="device_details__specs specs grid__item--desktop-14-24"
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
