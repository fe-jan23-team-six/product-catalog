import React, { useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import { ArrowButton } from '../ArrowButton';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.scss';
import {
  ACCESSORIES_PAGE,
  PHONES_PAGE,
  TABLETS_PAGE,
} from '../../utils/constants/routes';
import { BannerItem } from '../BannerItem';

export const bannerItems = [
  {
    id: 1,
    name: 'phone',
    title: 'Apple iPhone',
    src: 'banner/phone.png',
    path: PHONES_PAGE,
  },
  {
    id: 2,
    name: 'tablet',
    title: 'Apple iPad',
    src: 'banner/tablet.png',
    path: TABLETS_PAGE,
  },
  {
    id: 3,
    name: 'watch',
    title: 'Apple Watch',
    src: 'banner/watch.png',
    path: ACCESSORIES_PAGE,
  },
];

export const Banner: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dotsClass: 'slick-dots banner__pagination',
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
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

        {bannerItems.map(item => {
          const {
            id,
            name,
            title,
            src,
            path,
          } = item;

          return (
            <BannerItem
              key={id}
              name={name}
              title={title}
              src={src}
              path={path}
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
