import React from 'react';
import './FavouritePage.scss';
// import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductList } from '../../components/ProductList';

export const FavouritePage: React.FC = () => {
  return (
    <main className="favourite-page">
      <div className="favourite-page__breadcrumbs">
        <Breadcrumbs breadcrumbs={[{ text: 'Favourites' }]}/>
      </div>

      <h1 className="favourite-page__title">
        Favourites
      </h1>

      <p className="favourite-page__count">
        5 items
      </p>

      <div className="favourite-page__products">
        <ProductList />
      </div>
    </main>
    // <>
    //   {/* <Breadcrumbs />
    //   <h1>Favourite Page</h1>
    //   <ProductCard /> */}
    // </>
  );
};
