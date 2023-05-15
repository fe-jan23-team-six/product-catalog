import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';
import { ProductManageButtons } from '../ProductManage';

import { PhoneMain } from '../../types/PhoneMain';

import { FavouriteContext } from '../../contexts/FavouriteContext';
import { CartContext } from '../../contexts/CartContext';

type Props = {
  product: PhoneMain;
  nextRouteLink?: string;
};

export const ProductCard: React.FC<Props> = ({
  product,
  nextRouteLink,
}) => {
  const {
    slug,
    name: phoneName,
    priceRegular,
    priceDiscount,
    screen: screenSize,
    capacity,
    ram,
    image,
  } = product;

  const { toggleFavourite, isInFavourite } = useContext(FavouriteContext);
  const { addToCart, isInCart } = useContext(CartContext);

  const isLiked = isInFavourite(product.id);
  const handleLike = () => (
    toggleFavourite(product)
  );

  const handleAddToCart = () => addToCart(product);

  return (
    <div className="product-card">
      <Link to={nextRouteLink ? `${nextRouteLink}/${slug}` : `./${slug}`}>
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
        isInCart={isInCart(product.id)}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onCartAdd={handleAddToCart}
      />
    </div>
  );
};
