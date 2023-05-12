import React, { useEffect } from 'react';

import { getById, getPhones } from '../../utils/api/phones';

import { PhoneDetails, PhoneMain } from '../../types/phone/phone';

import './HomePage.scss';

import { SliderProducts } from '../../components/SliderProducts';
import { Banner } from '../../components/Banner/Banner';
import { Loader } from '../../components/Loader';

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

      <Loader />

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
