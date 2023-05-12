import React, { FC } from 'react';
import './DeviceDetailsSelector.scss';
import { ProductColorGroup } from '../../../components/ProductColorGroup';
import { ProductManageButtons } from '../../../components/ProductManage';
import { ProductCapacityGroup } from '../../../components/ProductCapacityGroup';

export const DeviceDetailsSelector: FC = () => {
  return (
    <div
      className="device_details__selector selector
      grid__item--tablet-7-12 grid__item--desktop-14-20"
    >
      <div className="selector__colours">
        <div className="selector__colours__text">
          <p className="selector__title">
            Available colours
          </p>

          <p className="selector__id">
            ID: 802390
          </p>
        </div>

        <div className="colours">
          <ProductColorGroup />
        </div>
      </div>

      <div
        className="selector__capacity"
      >
        <p className="selector__title">
          Select capacity
        </p>

        <div
          className="capacities"
        >
          <ProductCapacityGroup />
        </div>
      </div>

      <div>
        <div className="selector__price">
          <h2 className="selector__price__current">
            $799
          </h2>

          <h3 className="selector__price__old">
            $1199
          </h3>
        </div>

        <div className="selector__buttons">
          <ProductManageButtons isBig={true}/>
        </div>

        <div className="selector__characteristics characteristics">
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
    </div>
  );
};
