import React, { useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import './SliderProducts.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductCard } from '../ProductCard';
import { ArrowButton } from '../ArrowButton';

// #region Those items are temporarily, its will be removed
interface PropsCard {
  title: string;
  image: string;
}

export const Card: React.FC<PropsCard> = ({ title, image }) => {
  return (
    <div className="slider-card">
      <img
        src={image}
        alt={title}
        style={{ width: '272px' }}
      />
    </div>
  );
};

export interface CardType {
  id: number;
  title: string;
  image: string;
}

export const products: CardType[] = [
  { id: 1, title: 'Card 1', image: './img/delete-after-slider/pc.png' },
  { id: 2, title: 'Card 2', image: 'img/delete-after-slider/pc1.jpg' },
  { id: 3, title: 'Card 3', image: 'img/delete-after-slider/pc2.jpg' },
  { id: 4, title: 'Card 4', image: 'img/delete-after-slider/pc1.jpg' },
  { id: 53, title: 'Card 5', image: 'img/delete-after-slider/pc.png' },
  { id: 523, title: 'Card 6', image: 'img/delete-after-slider/pc1.jpg' },
  { id: 513, title: 'Card 7', image: 'img/delete-after-slider/pc2.jpg' },
  { id: 51, title: 'Card 8', image: 'img/delete-after-slider/pc1.jpg' },
  { id: 15, title: 'Card 9', image: 'img/delete-after-slider/pc2.jpg' },
  { id: 345, title: 'Card 10', image: 'img/delete-after-slider/pc1.jpg' },
  { id: 615, title: 'Card 11', image: 'img/delete-after-slider/pc.png' },
  { id: 65, title: 'Card 12', image: 'img/delete-after-slider/pc1.jpg' },
];
// #endregion

interface Props {
  title?: string,
}

export const SliderProducts: React.FC<Props> = ({ title }) => {
  const [noSlide, setNoSlide] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

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
    <div className="slider">
      <div className="slider__label">
        <h2>{title}</h2>

{/* I think this buttons must be custom. What do you think about? */}

        <div className="slider__button-container">
          <ArrowButton
            isDisabled={noSlide === 0}
            onClick={handlePrevClick}
          />

          <ArrowButton
            isForward={true}
            isDisabled={noSlide === products.length - 4}
            onClick={handleNextClick}
          />
        </div>
      </div>

      <Slider
        ref={sliderRef}
        {...settings}
      >

        {products.map(product => {
          // const { id, image } = product;

          return (
          // Element below not my element it will be removed in future

            // <Card key={id} image={image} title={product.title} />
            <ProductCard key={product.id} />
          );
        })}
      </Slider>

    </div>
  );
};
