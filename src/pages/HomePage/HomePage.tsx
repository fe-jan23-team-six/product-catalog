import React, { useEffect, useState } from 'react';
import './HomePage.scss';

import { getDiscountPhones, getNewPhones } from '../../utils/api/phones';

import { PhoneMain } from '../../types/PhoneMain';

import { SliderProducts } from '../../components/SliderProducts';
import { Banner } from '../../components/Banner/Banner';
import { DataLoader } from '../../components/DataLoader';

import { ShopByCategory } from '../../components/ShopByCategory';

import { useDataFetcher } from '../../hooks/useDataFetcher';

export const HomePage: React.FC = () => {
  const [newPhones, setNewPhones] = useState<PhoneMain[]>([]);
  const [discountPhones, setDiscountPhones] = useState<PhoneMain[]>([]);

  const [newPhonesFetchStatus, fetchNewPhones] = useDataFetcher();
  const [discounthonesFetchStatus, fetchDiscountPhones] = useDataFetcher();

  useEffect(() => {
    fetchNewPhones(() => getNewPhones().then(setNewPhones));
    fetchDiscountPhones(() => getDiscountPhones().then(setDiscountPhones));
  }, []);

  return (
    <div className="home-page">
      <h1 className="home-page__title">
        Welcome to Nice Gadgets store!
      </h1>

      <section className="home-page__banner">
        <Banner />
      </section>

      <section className="home-page__product-slider--new-phones">
        <DataLoader fetchStatus={newPhonesFetchStatus}>
          <SliderProducts
            title="Brand new models"
            products={newPhones}
          />
        </DataLoader>
      </section>

      <section className="home-page__categories">
        <ShopByCategory />
      </section>

      <section className="home-page__product-slider">
        <DataLoader fetchStatus={discounthonesFetchStatus}>
          <SliderProducts
            title="Hot prices"
            products={discountPhones}
          />
        </DataLoader>
      </section>
    </div>
  );
};
