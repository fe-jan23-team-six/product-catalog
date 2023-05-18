import React, { useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import { ArrowButton } from '../ArrowButton';

import { bannerImages } from '../../utils/constants/main';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.scss';

export const Banner: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dotsClass: 'slick-dots banner__pagination',
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '0px',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        className='banner__paging'
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
        onClick={handlePrevClick}
      />
    </div>

      <Slider
        ref={sliderRef}
        className="
          banner__container
          grid__item--desktop-2-22
          grid__item--tablet-2-11
          grid__item--mobile-1-4
        "
        {...settings}
      >

        {bannerImages.map(slide => {
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

      <div
        className="
          banner__button-arrow
          grid__item--desktop-24
          grid__item--tablet-12
        ">
        <ArrowButton
          isRight
          isLong
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};
