import React from 'react';
import './DeviceDetailsSelector.scss';
import {
  ProductColorGroup,
} from '../../../components/ProductDetails/ProductColorGroup';
import {
  ProductCapacityGroup,
} from '../../../components/ProductDetails/ProductCapacityGroup';
import { Phone } from '../../../types/Phone';
import {
  TechCharacteristics,
} from '../../../components/ProductDetails/TechCharacteristics';

type Props = {
  product: Phone,
}

export const DeviceDetailsSelector: React.FC<Props> = ({ product }) => {
  const {
    id,
    priceRegular,
    priceDiscount,
    screen,
    resolution,
    processor,
    ram,
    colorsAvailable,
    capacityAvailable,
  } = product;

  const productCharacteristics = {
    screen,
    resolution,
    processor,
    ram,
  };

  const hasDiscount = priceRegular !== priceDiscount;

  return (
    <div
      className="device-details__selector selector
      grid__item--tablet-7-12 grid__item--desktop-14-20"
    >
      <div className="selector__colours">
        <div className="selector__colours__text">
          <p className="selector__title">
            Available colours
          </p>

          <p className="selector__id">
            ID: {id}
          </p>
        </div>

        <div className="colours">
          <ProductColorGroup colors={colorsAvailable} />
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
          <ProductCapacityGroup capacities={capacityAvailable} />
        </div>
      </div>

      <div>
        <div className="selector__price">
          <h2 className="selector__price__current">
            ${priceRegular}
          </h2>

          {hasDiscount && (
            <h3 className="selector__price__old">
              ${priceDiscount}
            </h3>
          )}
        </div>

        <div className="selector__buttons">
          {/* <ProductManageButtons isBig={true}/> */}
        </div>

        <div className="selector__characteristics">
          <TechCharacteristics
            characteristics={productCharacteristics}
          />
        </div>
      </div>
    </div>
  );
};
