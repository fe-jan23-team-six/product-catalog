import React from 'react';
import Skeleton from 'react-loading-skeleton';

export const CategoryLinkSkeleton: React.FC = () => (
  <div className="category">
    <Skeleton className="category__image" />

    <Skeleton width={80} count={2} />
  </div>
);
