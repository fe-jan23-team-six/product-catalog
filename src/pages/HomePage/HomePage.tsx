import React from 'react';

import './HomePage.scss';

import { SliderProducts } from '../../components/SliderProducts';

import { Banner } from '../../components/Banner/Banner';

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Nice Gadgets store!</h1>

      <br />
      <br />
      <br />
      <br />
      <br />

      <Banner />

      <br />
      <br />
      <br />
      <br />
      <br />

      <SliderProducts />
    </div>
  );
};
