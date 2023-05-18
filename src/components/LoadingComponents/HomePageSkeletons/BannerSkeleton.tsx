import React from 'react';
import { ArrowButton } from '../../ArrowButton';
import Skeleton from 'react-loading-skeleton';

export const BannerSkeleton: React.FC = () => (
  <div className="banner grid grid--banner">
    <div
      className="
        banner__button-arrow
        grid__item--desktop-1-1
        grid__item--tablet-1-1
      "
    >
      <ArrowButton
        isLong
      />
    </div>

    <Skeleton
      containerClassName="
        banner__container
        banner__container--skeleton
        grid__item--desktop-2-22
        grid__item--tablet-2-11
        grid__item--mobile-1-4
      "
    />

    <div
      className="
        banner__button-arrow
        grid__item--desktop-24
        grid__item--tablet-12
      "
    >
      <ArrowButton
        isRight
        isLong
      />
    </div>
  </div>
);
