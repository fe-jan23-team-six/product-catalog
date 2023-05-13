import React, { useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import { ArrowButton } from '../ArrowButton';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.scss';

interface SliderImageType {
  id: number;
  url: string;
}

export const Banner: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const sliderImages: SliderImageType[] = [
    { id: 1, url: 'img/banners/phones.jpg' },
    { id: 2, url: 'img/banners/accessories.jpg' },
    { id: 3, url: 'img/banners/tablets.png' },
  ];

  const settings: Settings = {
    dotsClass: 'slick-dots banner__pagination',
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
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
    <div className="banner">

    <div className="banner__button-arrow">
      <ArrowButton
        isLong={true}
        onClick={handlePrevClick}
      />
    </div>

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

      <div className="banner__button-arrow">
        <ArrowButton
          isForward={true}
          isLong={true}
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};
