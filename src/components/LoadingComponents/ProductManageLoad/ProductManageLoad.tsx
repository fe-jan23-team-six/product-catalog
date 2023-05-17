import React from 'react';
import './ProductManageLoad.scss';
import { PrimaryButtonLoad } from '../PrimaryButtonLoad';
import { LikeButtonLoad } from '../LikeButtonLoad';

export const ProductManageLoad: React.FC = () => {
  return (
    <div className="product-manage-buttons">
      <PrimaryButtonLoad />

      <div
        className="product-manage-buttons__like">
        <LikeButtonLoad />
      </div>
    </div>
  );
};
