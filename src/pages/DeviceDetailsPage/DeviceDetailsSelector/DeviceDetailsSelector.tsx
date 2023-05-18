import React, { useContext } from 'react';
import './DeviceDetailsSelector.scss';
import {
  ProductColorGroup,
} from '../../../components/ProductDetails/ProductColorGroup';
import {
  ProductCapacityGroup,
} from '../../../components/ProductDetails/ProductCapacityGroup';
import { Product } from '../../../types/Product';
import {
  TechCharacteristics,
} from '../../../components/ProductDetails/TechCharacteristics';
import { ProductManageButtons } from '../../../components/ProductManage';

import { FavouriteContext } from '../../../contexts/FavouriteContext';
import { CartContext } from '../../../contexts/CartContext';
import { convertSlugToDigit } from '../../../utils/helpers/converSlugInId';

type Props = {
  product: Product,
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
  } = product;

  const { toggleFavourite, checkIsInFavourite } = useContext(FavouriteContext);
  const { addToCart, checkIsInCart } = useContext(CartContext);

  const isLiked = checkIsInFavourite(product.id);
  const hasAddedInCart = checkIsInCart(product.id);
  const handleLike = () => toggleFavourite(product);
  const handleAddToCart = () => addToCart(product);

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

          <p className="selector__id grid__item--desktop-22-24">
            {`ID ${convertSlugToDigit(id)}`}
          </p>
        </div>

        <div className="colours">
          <ProductColorGroup product={product} />
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
          <ProductCapacityGroup product={product} />
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
          <ProductManageButtons
            isBig={true}
            isLiked={isLiked}
            onLike={handleLike}
            isInCart={hasAddedInCart}
            onCartAdd={handleAddToCart}
          />
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
