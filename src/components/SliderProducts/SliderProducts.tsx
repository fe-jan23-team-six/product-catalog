import React, { useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import './SliderProducts.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ProductCard } from '../ProductCard';
import { ArrowButton } from '../ArrowButton';
import { ProductMain } from '../../types/ProductMain';
import { CATALOG_PAGE } from '../../utils/constants/route';

interface Props {
  title?: string,
  products: ProductMain[],
}

export const SliderProducts: React.FC<Props> = ({ title, products }) => {
  const [noSlide, setNoSlide] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (currentNo: number) => {
      setNoSlide(currentNo);
    },
  };

  const isLeftButtonDisabled = noSlide === 0;
  const isRightButtonDisabled = noSlide === products.length - 4;

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
            nextRouteLink={`${CATALOG_PAGE}`}
          />
        ))}
      </Slider>

    </div>
  );
};
