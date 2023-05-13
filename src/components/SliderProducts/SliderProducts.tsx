import React, { useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import './SliderProducts.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductCard } from '../ProductCard';
import { ArrowButton } from '../ArrowButton';

interface Props {
  title?: string,
}

export const SliderProducts: React.FC<Props> = ({ title }) => {
  const [noSlide, setNoSlide] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  const LENGTH = 10;

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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 649,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
            isDisabled={noSlide === 0}
            onClick={handlePrevClick}
          />

          <ArrowButton
            isForward={true}
            isDisabled={noSlide === LENGTH - 4}
            onClick={handleNextClick}
          />
        </div>
      </div>

      <Slider
        ref={sliderRef}
        {...settings}
      >

        {Array.from({ length: 10 }).map((_, i) => {
          // const { id, image } = product;

          return (
          // Element below not my element it will be removed in future

            // <Card key={id} image={image} title={product.title} />
            <ProductCard key={i} />
          );
        })}
      </Slider>

    </div>
  );
};
