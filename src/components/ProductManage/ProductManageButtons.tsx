import React from 'react';
import './ProductManageButtons.scss';
import { LikeButton } from '../LikeButton';
import { PrimaryButton } from '../PrimaryButton';

type Props = {
  isBig?: boolean;
  handleAddToCart: () => void;
  handleCheckIsInCart: () => boolean;
}

export const ProductManageButtons: React.FC<Props> = ({
  isBig = false,
  handleAddToCart,
  handleCheckIsInCart,
}) => {
  return (
    <div className="product-manage-buttons">
      <PrimaryButton
        handleAddToCart={handleAddToCart}
        handleCheckIsInCart={handleCheckIsInCart}
      />

      <div
        className="product-manage-buttons__like">
        <LikeButton isBig={isBig} />
      </div>
    </div>
  );
};
