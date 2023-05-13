/* eslint-disable max-len */
import React from 'react';
import './ProductCard.scss';
import { ProductManageButtons } from '../ProductManage';

import { PhoneDetailed } from '../../types/phone/phone';

import { useCartStorage } from './../../hooks/useCartStorage';

type Props = {
  phoneDetails?: PhoneDetailed,
}

export const ProductCard: React.FC<Props> = ({ phoneDetails }) => {
  const {
    id = 1,
    image = 'img/phones/apple-iphone-11-pro/gold/00.jpg',
    name: phoneName = 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
    priceRegular = '$1300',
    priceDiscount = '128 GB',
    screen: screenSize = '6.1” OLED',
    capacity = '128 GB',
    ram = '128 GB',
  } = phoneDetails ?? { };

  const { addToCart, checkIsInCart } = useCartStorage();

  const handleAddToCart = phoneDetails
    ? () => addToCart(id, phoneDetails)
    : () => {
      global.console.log('There should be adding');
    };
  const handleCheckIsInCart = () => checkIsInCart(id);

  return (
    <div className="product-card">
      <img
        className="product-card__image"
        src={image}
        alt={phoneName}
      >
      </img>

      <div className="product-card__model">
        {phoneName}
      </div>

      <div className="product-card__price">
        <h3>{'$'}{priceDiscount}</h3>
        <h3 className="product-card__discount" >{'$'}{priceRegular}</h3>
      </div>

      <hr className="product-card__hr"></hr>

      <div className="product-card__info">
        <div className="product-card__info-row">
          <p className="product-card__info-description">Screen</p>
          <p className="product-card__info-value">{screenSize}</p>
        </div>

        <div className="product-card__info-row">
          <p className="product-card__info-description">Capacity</p>
          <p className="product-card__info-value">{capacity}</p>
        </div>

        <div className="product-card__info-row">
          <p className="product-card__info-description">RAM</p>
          <p className="product-card__info-value">{ram}</p>
        </div>
      </div>

      <ProductManageButtons
        handleAddToCart={handleAddToCart}
        handleCheckIsInCart={handleCheckIsInCart}
      />
    </div>
  );
};
