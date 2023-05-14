import React from 'react';
import './DeviceDetailsAbout.scss';
import { ProductAbout } from '../../../components/ProductDetails/ProductAbout';
import { PhoneDescription } from '../../../types/phone/PhoneDescription';

type Props = {
  descriptions: PhoneDescription[],
}

export const DeviceDetailsAbout: React.FC<Props> = ({ descriptions }) => {
  return (
    <div
      className="device-details__about about grid__item--desktop-1-12"
    >
      <h3 className="about__title">
        About
      </h3>

      <div
        className="about__details"
      >
        {descriptions.map(description => (
          <ProductAbout
            description={description}
            key={description.title}
          />
        ))}
      </div>
    </div>
  );
};
