import React from 'react';
import { ArrowButton } from '../../ArrowButton';
import { ProductCardSkeleton } from '../ProductCardSkeleton';

interface Props {
  title: string,
}

export const SliderProductsSkeleton: React.FC<Props> = ({ title }) => (
  <div className="slider-products">
    <div className="slider-products__label">
      <h2>{title}</h2>

      <div className="slider-products__buttons">
        <ArrowButton
          isDisabled
        />
        <ArrowButton
          isRight
        />
      </div>
    </div>

    <div className="slider-products__container--skeleton">
      {[1, 2, 3, 4].map(card => (
        <ProductCardSkeleton key={card}/>
      ))}
    </div>
  </div>
);
