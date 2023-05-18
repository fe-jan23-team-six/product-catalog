import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';
import { ProductManageButtons } from '../ProductManage';

import { ProductMain } from '../../types/ProductMain';

import { FavouriteContext } from '../../contexts/FavouriteContext';
import { CartContext } from '../../contexts/CartContext';
import { Picture } from '../Picture';
import { getRouteByCategory } from '../../utils/helpers/getRouteByCategory';

type Props = {
  product: ProductMain;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    id,
    name: productName,
    priceRegular,
    priceDiscount,
    screen: screenSize,
    capacity,
    ram,
    image,
  } = product;

  const { toggleFavourite, checkIsInFavourite } = useContext(FavouriteContext);
  const { addToCart, checkIsInCart } = useContext(CartContext);

  const isLiked = checkIsInFavourite(product.id);
  const handleLike = () => (
    toggleFavourite(product)
  );

  const handleAddToCart = () => addToCart(product);

  return (
    <div className="product-card">
      <Link to={`${getRouteByCategory(product.category)}/${id}`}>
        <Picture
          className="product-card__image"
          src={image}
          alt={productName}
        />

        <div className="product-card__model">
          {productName}
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
        isInCart={checkIsInCart(product.id)}
        onCartAdd={handleAddToCart}
      />
    </div>
  );
};
