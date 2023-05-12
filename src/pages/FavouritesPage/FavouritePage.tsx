import React from 'react';
import './FavouritePage.scss';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu';

export const FavouritePage: React.FC = () => {
  return (
    <>
      <h1>Favourite Page</h1>
      <BurgerMenu />
      <ProductCard />
    </>
  );
};
