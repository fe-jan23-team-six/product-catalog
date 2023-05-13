/* eslint-disable max-len */
import React from 'react';
import './ProductCard.scss';
import { ProductManageButtons } from '../ProductManage';

import { PhoneDetailed } from '../../types/phone/phone';

import { useCartStorage } from './../../hooks/useCartStorage';

type Props = {
  phoneDetails: PhoneDetailed,
}

export const ProductCard: React.FC<Props> = ({ phoneDetails }) => {
  const {
    id,
    image,
    name: phoneName,
    priceRegular,
    priceDiscount,
    screen: screenSize,
    capacity,
    ram,
  } = phoneDetails;

  const { addToCart, checkIsInCart } = useCartStorage();

  const handleAddToCart = () => addToCart(id, phoneDetails);
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
