import React from 'react';
import './ProductManageButtons.scss';
import { LikeButton } from '../LikeButton';
import { PrimaryButton } from '../PrimaryButton';

type Props = {
  isBig?: boolean;
}

export const ProductManageButtons: React.FC<Props> = ({ isBig = false }) => {
  return (
    <div className="product-manage-buttons">
      <PrimaryButton />

      <div
        className="product-manage-buttons__like">
        <LikeButton isBig={isBig} />
      </div>
    </div>
  );
};
