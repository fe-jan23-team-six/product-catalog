import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';
import { ProductManageButtons } from '../ProductManage';

import { PhoneMain } from '../../types/phone/PhoneMain';

import { useCartStorage } from './../../hooks/useCartStorage';

import { FavouriteContext } from '../../contexts/FavouriteContext';

type Props = {
  product: PhoneMain;
  nextRouteLink?: string;
};

export const ProductCard: React.FC<Props> = ({ product, nextRouteLink }) => {
  const {
    id,
    slug,
    name: phoneName,
    priceRegular,
    priceDiscount,
    screen: screenSize,
    capacity,
    ram,
    image,
  } = product;

  const { addToCart, checkIsInCart } = useCartStorage();
  const { toggleFavourite, isInFavourite } = useContext(FavouriteContext);

  const isLiked = isInFavourite(product.id);
  const handleLike = () => (
    toggleFavourite(product)
  );

  const handleAddToCart = product
    ? () => addToCart(id, product)
    : () => {
      global.console.log('There should be adding');
    };
  const handleCheckIsInCart = () => checkIsInCart(id);

  return (
    <div className="product-card">
      <Link to={nextRouteLink ?? `./${slug}`}>
        <img
          className="product-card__image"
          src={image}
          alt={phoneName}
        >
        </img>

        <div className="product-card__model">
          {phoneName}
        </div>
      </Link>

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
        isLiked={isLiked}
        onLike={handleLike}
        handleAddToCart={handleAddToCart}
        handleCheckIsInCart={handleCheckIsInCart}
      />
    </div>
  );
};
