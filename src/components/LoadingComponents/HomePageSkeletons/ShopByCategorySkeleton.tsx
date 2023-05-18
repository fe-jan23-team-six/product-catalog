import React from 'react';
import { CategoryLinkSkeleton } from './CategoryLinkSkeleton';

export const ShopByCategorySkeleton: React.FC = () => (
  <div className="shop-by-category">
    <div className="grid grid--mobile-gap">
      <div
        className="
          grid__item--desktop-1-8
          grid__item--tablet-1-4
          grid__item--mobile-1-4
        "
      >
        <CategoryLinkSkeleton />
      </div>

      <div
        className="
          grid__item--desktop-9-16
          grid__item--tablet-5-8
          grid__item--mobile-1-4
        "
      >
        <CategoryLinkSkeleton />
      </div>

      <div
        className="
          grid__item--desktop-17-24
          grid__item--tablet-9-12
          grid__item--mobile-1-4
        "
      >
        <CategoryLinkSkeleton />
      </div>
    </div>
  </div>
);
