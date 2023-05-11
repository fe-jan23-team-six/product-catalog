import React, { useRef } from 'react';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.scss';
import { ArrowButton } from '../ArrowButton';

// #region Temporarily items below, please don't waste time on it
interface SliderImageType {
  id: number;
  url: string;
}

export const sliderImages: SliderImageType[] = [
  { id: 1, url: 'img/banners/phones.jpg' },
  { id: 2, url: 'img/banners/accessories.jpg' },
  { id: 3, url: 'img/banners/tablets.png' },
];
// #endregion

export const Banner: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots banner__pagination',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          opacity: 0,
        }}
      >
        {i}
      </div>
    ),
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="banner">

      <ArrowButton
        classes="back banner__button banner__button--left"
        action={handlePrevClick}
      />

      {/* <button
        className="banner__button banner__button--left"
        type="button"
        aria-label="leftBtn"
        onClick={handlePrevClick}
      >
        {'<'}
      </button> */}

      <Slider
        ref={sliderRef}
        className="banner__container"
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

      <ArrowButton
        classes="forward banner__button banner__button--right"
        action={handleNextClick}
      />

      {/* <button
        className="banner__button banner__button--right"
        type="button"
        aria-label="rightBtn"
        onClick={handleNextClick}
      >
        {'>'}
      </button> */}

    </div>
  );
};
