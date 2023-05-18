import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './SliderPhotos.scss';
import { Picture } from '../Picture';

interface Props {
  images: string[],
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
        spaceBetween={20}
      >
        {images.map(image => {
          return (
            <SwiperSlide key={image}>
              <Picture
                className="slider-photos__main-image"
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
        direction='horizontal'
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
        {images.map(image => {
          return (
            <SwiperSlide key={image}>
              <Picture
                className="slider-photos__gallry-image"
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
