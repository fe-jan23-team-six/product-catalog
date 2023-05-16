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
    <div className="banner grid">

    <div className="banner__button-arrow grid__item--tablet-1-1">
      <ArrowButton
        isLong={true}
        onClick={handlePrevClick}
      />
    </div>

      <Slider
        ref={sliderRef}
        className="
          banner__container
          grid__item--tablet-2-12
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

      <div className="banner__button-arrow grid__item--attach-to-end">
        <ArrowButton
          isForward={true}
          isLong={true}
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};
