import React from 'react';
import './ProductManageButtons.scss';
import { LikeButton } from '../LikeButton';
import { PrimaryButton } from '../PrimaryButton';

type Props = {
  isBig?: boolean;
  isLiked: boolean;
  isInCart: boolean;
  onCartAdd: () => void;
  onLike: () => void;
}

export const ProductManageButtons: React.FC<Props> = ({
  isBig = false,
  isLiked,
  isInCart,
  onCartAdd,
  onLike,
}) => {
  return (
    <div className="product-manage-buttons">
      <PrimaryButton
        isInCart={isInCart}
        onCartAdd={onCartAdd}
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
