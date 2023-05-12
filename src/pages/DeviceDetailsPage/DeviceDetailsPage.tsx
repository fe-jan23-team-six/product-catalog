import React, { FC } from 'react';
import './DeviceDetailsPage.scss';

import { DeviceDetailsPictures } from './DeviceDetailsPictures';
import { DeviceDetailsSelector } from './DeviceDetailsSelector';
import { DeviceDetailsAbout } from './DeviceDetailsAbout';
import { DeviceDetailsSpecs } from './DeviceDetailsSpecs';
import { SliderProducts } from '../../components/SliderProducts';

export const DeviceDetailsPage: FC = () => {
  return (
    <main className="device_details">
      <h2 className="device_details__title">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h2>

      <div className="device_details__product grid grid--mobile-off">
        <DeviceDetailsPictures />

        <DeviceDetailsSelector />

        <p className="device_details__id grid__item--desktop-22-24">
          ID: 802390
        </p>
      </div>

      <div
        className="device_details__about-product grid grid--mobile-tablet-off"
      >
        <DeviceDetailsAbout />

        <DeviceDetailsSpecs />
      </div>

      <div className="device_details__slider-products">
        <SliderProducts title="Apple iPhone" />
      </div>
    </main>
  );
};
