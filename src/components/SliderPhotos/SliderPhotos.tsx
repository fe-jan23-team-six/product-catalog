import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';

import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigaion';
import 'swiper/css/thumbs';

import './SliderPhotos.scss';
import { SliderPhotosType } from '../../pages/HomePage';

interface Props {
  images: SliderPhotosType[],
}

export const SliderPhotos: React.FC<Props> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        style={{
          // '--swiper-navigation-color:': '#fff',
          // '--swiper-pagination-color:': '#fff',
        }}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map(slide => {
          const { image } = slide;

          global.console.log('image:', image);

          return (
            <SwiperSlide key={image}>
              <img
                className="photo-slider__image"
                src={image}
                alt={image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
      onSwiper={setThumbsSwiper}
      spaceBetween={10}
      slidesPerView={5}
      freeMode
      watchSlidesProgress
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper"
      >
        {images.map(slide => {
          const { image } = slide;

          global.console.log('image:', image);

          return (
            <SwiperSlide key={image}>
              <img
                className="photo-slider__image"
                src={image}
                alt={image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

// import React, { useRef } from 'react';
// import Slider, { Settings } from 'react-slick';
// // import { ArrowButton } from '../ArrowButton';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './SliderPhotos.scss';
// import { SliderPhotosType } from '../../pages/HomePage';

// interface Props {
//   images: SliderPhotosType[],
// }

// export const SliderPhotos: React.FC<Props> = ({ images }) => {
//   const sliderRef = useRef<Slider>(null);

//   const imgBaseUrl = images[0].image
//     .split('-')
//     .slice(0, images[0].image.split('-').length - 1)
//     .join('-');

//   global.console.log('imgBaseUrl:', imgBaseUrl);

//   const settings: Settings = {
//     dotsClass: 'slick-dots slick-thumb', // photo-slider__pagination',
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     customPaging: function(i) {
//       global.console.log('created', `${imgBaseUrl}-${i + 1}.png`);

//       return (
//         <a
//           className='photo-slider__paging'
//         >
// <img src={`${imgBaseUrl}-${i + 1}.png`} alt={`${imgBaseUrl}-${i + 1}.png`} />
//         </a>
//       );
//     },
//   };

//   // const handlePrevClick = () => {
//   //   sliderRef.current?.slickPrev();
//   // };

//   // const handleNextClick = () => {
//   //   sliderRef.current?.slickNext();
//   // };

//   return (
//     <div className="photo-slider">

//     {/* <div className="photo-slider__button-arrow">
//       <ArrowButton
//         classes="photo-slider__button"
//         action={handlePrevClick}
//       />
//     </div> */}

//       <Slider
//         ref={sliderRef}
//         className="photo-slider__container"
//         {...settings}
//       >

//         {images.map(slide => {
//           const { id, image } = slide;

//           global.console.log('image:', image);

//           return (
//             <img
//               className="photo-slider__image"
//               src={image}
//               alt={image}
//               key={id}
//             />
//           );
//         })}
//       </Slider>

//       {/* <div className="photo-slider__button-arrow">
//         <ArrowButton
//           classes="forward test photo-slider__button"
//           action={handleNextClick}
//         />
//       </div> */}
//     </div>
//   );
// };
