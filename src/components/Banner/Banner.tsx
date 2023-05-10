import React, { useRef } from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.scss';

interface SliderImageType {
  id: number;
  url: string;
}

export const sliderImages: SliderImageType[] = [
  { id: 1, url: 'img/banner-accessories.png' },
  { id: 2, url: 'img/banner-phones.png' },
  { id: 3, url: 'img/banner-tablets.png' },
];

export const Banner: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="banner">
      <button
        className="banner__button-left"
        type="button"
        aria-label="leftBtn"
        onClick={handlePrevClick}
      >
        {'<'}
      </button>

      <Slider
        ref={sliderRef}
        className="banner__slider-container"
        {...settings}
      >

        {sliderImages.map(slide => {
          const { id, url } = slide;

          return (
            <img
              className="banner__image"
              src={url}
              alt={url}
              key={id}
            />
          );
        })}
      </Slider>

      <button
        className="banner__button-right"
        type="button"
        aria-label="rightBtn"
        onClick={handleNextClick}
      >
        {'>'}
      </button>

    </div>
  );
};
