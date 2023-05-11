import React, { useEffect } from 'react';

import { getPhones } from '../../utils/api/phones/phones';

import { PhoneMain } from '../../types/phone/phone';

import './HomePage.scss';

import { SliderProducts } from '../../components/SliderProducts';
import { Banner } from '../../components/Banner/Banner';

export const HomePage: React.FC = () => {
  useEffect(() => {
    const fetchPhones = async() => {
      try {
        const fetchedPhones: PhoneMain[] = await getPhones();

        global.console.log('fetched:', fetchedPhones[0]);
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

      <section className="home-page__banner">
        <Banner />
      </section>

      <section className="home-page__product-slider">
        <SliderProducts />
      </section>

      <section className="home-page__categories">
        Here will be section with links by categories
      </section>

      <section className="home-page__product-slider">
        <SliderProducts />
      </section>
    </main>
  );
};
