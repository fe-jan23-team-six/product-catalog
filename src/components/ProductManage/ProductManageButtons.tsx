import React from 'react';
import './ProductManageButtons.scss';
import { LikeButton } from '../LikeButton';
import { PrimaryButton } from '../PrimaryButton';

type Props = {
  isBig?: boolean;
  isLiked: boolean;
  handleAddToCart: () => void;
  handleCheckIsInCart: () => boolean;
  onLike: () => void;
}

export const ProductManageButtons: React.FC<Props> = ({
  isBig = false,
  isLiked,
  handleAddToCart,
  handleCheckIsInCart,
  onLike,
}) => {
  return (
    <div className="product-manage-buttons">
      <PrimaryButton
        handleAddToCart={handleAddToCart}
        handleCheckIsInCart={handleCheckIsInCart}
      />

      <div
        className="product-manage-buttons__like">
        <LikeButton
          isLiked={isLiked}
          isBig={isBig}
          onClick={onLike}/>
      </div>
    </div>
  );
};
