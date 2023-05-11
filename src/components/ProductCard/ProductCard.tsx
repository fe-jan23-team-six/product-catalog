import React from 'react';
import './ProductCard.scss';

export const ProductCard: React.FC = () => {
  return (
    <div className="card">
      <img
        className="card__image"
        src="img/phones/apple-iphone-11-pro/gold/00.jpg"
        alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
      >
      </img>

      <h1 className="card__model">
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </h1>

      <div className="card__price">
        <p className="card__price--new" >$999</p>
        <p className="card__price--old" >$1300</p>
      </div>

      <hr className="card__hr"></hr>

      <div className="card__characteristics">
        <div className="card__characteristic">
          <p className="card__characteristic__description">Screen</p>
          <p className="card__characteristic__value">6.1” OLED</p>
        </div>

        <div className="card__characteristic">
          <p className="card__characteristic__description">Capacity</p>
          <p className="card__characteristic__value">128 GB</p>
        </div>

        <div className="card__characteristic">
          <p className="card__characteristic__description">RAM</p>
          <p className="card__characteristic__value">6 GB</p>
        </div>
      </div>

      <div className="card__button">
        <a
          className="card__button__basket"
          href="#buy"
        >
          Add to cart
        </a>

        <button
          className="card__button__favorites"
        >
          <img
          className="card__button__favorites--image"
          src="icons/favAddFav16x16.svg"
          alt="Favorite icon"
          >
          </img>
        </button>
      </div>
    </div>
  );
};
