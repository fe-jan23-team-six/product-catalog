import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './SliderPhotos.scss';
import { SliderPhotosType } from '../../pages/HomePage';

interface Props {
  images: SliderPhotosType[],
}

export const SliderPhotos: React.FC<Props> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="slider-photos">
      <Swiper
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed
            ? thumbsSwiper
            : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="slider-photos__main-photo-container"
      >
        {images.map(slide => {
          const { image } = slide;
          // do destruct on slide after deleting global

          // global.console.log('image:', image);

          return (
            <SwiperSlide key={image}>
              <img
                className="slider-photos__main-photo-container__image"
                src={image}
                alt={image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={5}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="slider-photos__gallry-container"
        direction='horizontal' // 'horizontal'
        autoHeight
        breakpoints={{
          639: {
            direction: 'vertical',
            spaceBetween: 0,
          },
          1199: {
            spaceBetween: 16,
            direction: 'vertical',
          },
        }}
      >
        {images.map(slide => {
          const { image } = slide;
          // do destruct on slide after deleting global

          // global.console.log('image:', image);

          return (
            <SwiperSlide key={image}>
              <img
                className="slider-photos__gallry-container__image"
                src={image}
                alt={image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
