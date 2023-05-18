import React, { useMemo, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import './SliderProducts.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ProductCard } from '../ProductCard';
import { ArrowButton } from '../ArrowButton';
import { ProductMain } from '../../types/ProductMain';
import {
  getNumberDependingWidth,
} from '../../utils/helpers/getNumberDependingWidth';

interface Props {
  title?: string,
  products?: ProductMain[],
}

export const SliderProducts: React.FC<Props> = ({ title, products = [] }) => {
  const [noSlide, setNoSlide] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    variableWidth: true,
    focusOnSelect: true,
    slidesToShow: 4,
    initialSlide: 0,
    afterChange: (currentNo: number) => {
      setNoSlide(currentNo);
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const isLeftButtonDisabled = useMemo(() => noSlide === 0, [noSlide]);
  const isRightButtonDisabled = useMemo(() => (
    noSlide === products.length - getNumberDependingWidth(
      window.innerWidth,
    )),
  [noSlide, window.innerWidth]);

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="slider-products">
      <div className="slider-products__label">
        <h2>{title}</h2>

        <div className="slider-products__buttons">
          <ArrowButton
            isDisabled={isLeftButtonDisabled}
            onClick={handlePrevClick}
          />

          <ArrowButton
            isRight
            isDisabled={isRightButtonDisabled}
            onClick={handleNextClick}
          />
        </div>
      </div>

      <Slider
        className='slider-products__container'
        ref={sliderRef}
        {...settings}
      >

        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </Slider>

    </div>
  );
};
