import React from 'react';
import './FavouritePage.scss';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const FavouritePage: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <h1>Favourite Page</h1>
      <ProductCard />
    </>
  );
};
