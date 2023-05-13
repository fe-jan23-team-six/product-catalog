import React, { useEffect, useState } from 'react';

import { getById, getPhones } from '../../utils/api/phones';

import { PhoneDetails, PhoneMain } from '../../types/phone/phone';

import './HomePage.scss';

import { SliderProducts } from '../../components/SliderProducts';
import { Banner } from '../../components/Banner/Banner';
import { SliderPhotos } from '../../components/SliderPhotos';

import { useDataFetcher } from '../../hooks/useDataFetcher';

export const HomePage: React.FC = () => {
  // this is an example for Vale
  // Here u can see how to work with PhotoSlider
  // here we write images to state from fetched phone
  const [images, setImages] = useState<string[]>([]);

  const [newPhones, setNewPhones] = useState<PhoneMain[]>([]);
  const [discountPhones, setDiscountPhones] = useState<PhoneMain[]>([]);

  const [newPhonesFetchStatus, fetchNewPhones] = useDataFetcher();
  const [discounthonesFetchStatus, fetchDiscountPhones] = useDataFetcher();

  useEffect(() => {
    const fetchPhone = async() => {
      try {
        // fetchedPhone its for Vale,
        // this example how u can get your elements from api
        const fetchedPhone: PhoneDetails = await getById(1);

        // Here we write images from fetched phone
        const phoneImages = fetchedPhone.images;

        // write those photo to state
        setImages(phoneImages);

        global.console.log('phone:', fetchedPhone);
        global.console.log('images:', images);
      } catch {
        global.console.log('error');
      }
    };

    fetchPhone();
    fetchNewPhones(() => getPhones().then(setNewPhones));
    fetchDiscountPhones(() => getPhones().then(setDiscountPhones));
  }, []);

  return (
    <div className="home-page">
      <h1 className="home-page__title">
        Welcome to Nice Gadgets store!
      </h1>

      {/* here we give to sliderPhotos our array with images links */}
      <SliderPhotos images={images}/>

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
        <SliderProducts
          title="Brand new models"
          products={newPhones}
        />
      </section>

      <section className="home-page__categories">
        Here will be section with links by categories
      </section>

      <section className="home-page__product-slider">
        <SliderProducts
          title="Hot prices"
          products={discountPhones}
        />
      </section>
    </div>
  );
};
