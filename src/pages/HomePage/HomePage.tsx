import React, { useEffect, useState } from 'react';
import './HomePage.scss';

import { getDiscountProducts, getNewProducts } from '../../utils/api/products';

import { ProductMain } from '../../types/ProductMain';

import { SliderProducts } from '../../components/SliderProducts';
import { Banner } from '../../components/Banner';
import { DataLoader } from '../../components/DataLoader';

import { ShopByCategory } from '../../components/ShopByCategory';

import { useDataFetcher } from '../../hooks/useDataFetcher';
import {
  SliderProductsSkeleton,
// eslint-disable-next-line max-len
} from '../../components/LoadingComponents/HomePageSkeletons/SliderProductsSkeleton';
import {
  BannerSkeleton,
} from '../../components/LoadingComponents/HomePageSkeletons/BannerSkeleton';

export const HomePage: React.FC = () => {
  const [newProducts, setNewProducts] = useState<ProductMain[]>([]);
  const [discountProducts, setDiscountProducts] = useState<ProductMain[]>([]);
  const [newProductsFetchStatus, fetchNewProducts] = useDataFetcher();
  const [discountProductsFetchStatus, fetchDiscountProducts] = useDataFetcher();

  useEffect(() => {
    fetchNewProducts(() => getNewProducts().then(setNewProducts));

    fetchDiscountProducts(() => (
      getDiscountProducts().then(setDiscountProducts)
    ));
  }, []);

  return (
    <div className="home-page">
      <h1 className="home-page__title">
        Welcome to Nice Gadgets store!
      </h1>

      <section className="home-page__banner">
        <DataLoader
          fetchStatus={newProductsFetchStatus}
          loader={<BannerSkeleton />}
        >
          <Banner />
        </DataLoader>
      </section>

      <section className="home-page__product-slider--new-products">
        <DataLoader
          fetchStatus={newProductsFetchStatus}
          loader={<SliderProductsSkeleton title="Brand new models" />}
        >
          <SliderProducts
            title="Brand new models"
            products={newProducts}
          />
        </DataLoader>
      </section>

      <section className="home-page__categories">
        <ShopByCategory />
      </section>

      <section className="home-page__product-slider">
        <DataLoader
          fetchStatus={discountProductsFetchStatus}
          loader={<SliderProductsSkeleton title="Hot prices" />}
        >
          <SliderProducts
            title="Hot prices"
            products={discountProducts}
          />
        </DataLoader>
      </section>
    </div>
  );
};
