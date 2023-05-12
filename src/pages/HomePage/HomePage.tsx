import React, { useEffect } from 'react';

import { getById, getPhones } from '../../utils/api/phones';

import { PhoneDetails, PhoneMain } from '../../types/phone/phone';

import './HomePage.scss';

import { SliderProducts } from '../../components/SliderProducts';
import { Banner } from '../../components/Banner/Banner';
import { SliderPhotos } from '../../components/SliderPhotos';

// #region sliderPhoto
export interface SliderPhotosType {
  id: number,
  image: string,
}

export const sliderPhotoImages: SliderPhotosType[] = [
  { id: 1, image: 'img/delete-after-photo-slider/11-photo-1.png' },
  { id: 2, image: 'img/delete-after-photo-slider/11-photo-2.png' },
  { id: 3, image: 'img/delete-after-photo-slider/11-photo-3.png' },
  { id: 4, image: 'img/delete-after-photo-slider/11-photo-4.png' },
  { id: 5, image: 'img/delete-after-photo-slider/11-photo-5.png' },
];
// #endregion

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

export const HomePage: React.FC = () => {
  useEffect(() => {
    const fetchPhones = async() => {
      try {
        const fetchedPhones: PhoneMain[] = await getPhones();

        // fetchedPhone its for Vale,
        // this example how u can get your elements from api
        const fetchedPhone: PhoneDetails = await getById(1);

        global.console.log('fetched:', fetchedPhones);
        global.console.log('phone:', fetchedPhone);
      } catch {
        global.console.log('error');
      }
    };

    fetchPhones();
  }, []);

  return (
    <main className="home-page">
      <h1 className="home-page__title">
        Welcome to Nice Gadgets store!
      </h1>

      <SliderPhotos images={sliderPhotoImages}/>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section className="home-page__banner">
        <Banner />
      </section>

      <section className="home-page__product-slider">
        <SliderProducts title="Brand new models" />
      </section>

      <section className="home-page__categories">
        Here will be section with links by categories
      </section>

      <section className="home-page__product-slider">
        <SliderProducts title="Hot prices" />
      </section>
    </main>
  );
};
