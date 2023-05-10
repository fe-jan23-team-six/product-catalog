import React from 'react';

import './HomePage.scss';

import { SliderProducts } from '../../components/SliderProducts';

import { Banner } from '../../components/Banner/Banner';

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <Banner />

      <h1>Home Page</h1>

      <SliderProducts />
    </div>
  );
};
