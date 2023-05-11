import React from 'react';
import './ProductCard.scss';
import { LikeButton } from '../LikeButton';

export const ProductCard: React.FC = () => {
  return (
    <div className="product-card">
      <img
        className="product-card__image"
        src="img/phones/apple-iphone-11-pro/gold/00.jpg"
        alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
      >
      </img>

      <div className="product-card__model">
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </div>

      <div className="product-card__price">
        <h3>$999</h3>
        <h3 className="product-card__discount" >$1300</h3>
      </div>

      <hr className="product-card__hr"></hr>

      <div className="product-card__info">
        <div className="product-card__info-row">
          <p className="product-card__info-description">Screen</p>
          <p className="product-card__info-value">6.1” OLED</p>
        </div>

        <div className="product-card__info-row">
          <p className="product-card__info-description">Capacity</p>
          <p className="product-card__info-value">128 GB</p>
        </div>

        <div className="product-card__info-row">
          <p className="product-card__info-description">RAM</p>
          <p className="product-card__info-value">6 GB</p>
        </div>
      </div>

      <div className="product-card__button">
        <a
          className="product-card__button__basket"
          href="#buy"
        >
          Add to cart
        </a>

        <button
          className="product-card__button__favorites"
        >
          <img
          className="product-card__button__favorites--image"
          src="icons/favAddFav16x16.svg"
          alt="Favorite icon"
          >
          </img>
        </button>

        <LikeButton />
      </div>
    </div>
  );
};
