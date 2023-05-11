import React, { FC } from 'react';
import './DeviceDetailsSpecs.scss';

export const DeviceDetailsSpecs: FC = () => {
  return (
    <div
      className="device_details__specs specs grid__item--desktop-14-24"
    >
      <h3 className="specs__title">
        Tech Specs
      </h3>

      <div className="specs__characteristics characteristics">
          <p
            className="characteristics__text"
          >
            Screen
          </p>

          <p
            className="characteristics__text characteristics__text--black"
          >
            6.5” OLED
          </p>
        </div>
    </div>
  );
};
