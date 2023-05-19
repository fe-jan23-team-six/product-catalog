import React from 'react';
import { ProductManageButtons } from '../../ProductManage';

import Skeleton from 'react-loading-skeleton';

export const ProductCardSkeleton: React.FC = () => (
  <div className="product-card">
    <Skeleton
      className='product-card__image'
    />

    <div className="product-card__price">
      <Skeleton width={120} height={34} count={2}/>
    </div>

    <hr className="product-card__hr"></hr>

    <div className="product-card__info">
      <div className="product-card__info-row">
        <p className="product-card__info-description">Screen</p>
        <Skeleton
          width={70}
          className="product-card__info-value"
          style={{ maxWidth: 'none' }}
        />
      </div>

      <div className="product-card__info-row">
        <p className="product-card__info-description">Capacity</p>
        <p className="product-card__info-value"></p>
        <Skeleton
          width={50}
          className="product-card__info-value"
          style={{ maxWidth: 'none' }}
        />
      </div>

      <div className="product-card__info-row">
        <p className="product-card__info-description">RAM</p>
        <Skeleton
          width={100}
          className="product-card__info-value"
          style={{ maxWidth: 'none' }}
        />
      </div>
    </div>

    <ProductManageButtons />
  </div>
);
