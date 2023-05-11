import React from 'react';
import './ProductManageButtons.scss';
import { LikeButton } from '../LikeButton';
import { PrimaryButton } from '../PrimaryButton';

export const ProductManageButtons: React.FC = () => {
  return (
    <div className="product-manage-buttons">
      <PrimaryButton />

      <div className="product-manage-buttons__like">
        <LikeButton />
      </div>
    </div>
  );
};
