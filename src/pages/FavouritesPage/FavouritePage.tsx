import React, { useContext } from 'react';
import './FavouritePage.scss';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ProductList } from '../../components/ProductList';
import { FavouriteContext } from '../../contexts/FavouriteContext';
import { getPluralWord } from '../../utils/helpers/helpers';

export const FavouritePage: React.FC = () => {
  const { favourite } = useContext(FavouriteContext);

  return (
    <div className="favourite-page">
      <div className="favourite-page__breadcrumbs">
        <Breadcrumbs breadcrumbs={[{ text: 'Favourites' }]}/>
      </div>

      <h1 className="favourite-page__title">
        Favourites
      </h1>

      <p className="favourite-page__count">
        {`${getPluralWord('item', favourite.length)}`}
      </p>

      <div className="favourite-page__products">
        <ProductList products={favourite} />
      </div>
    </div>
  );
};
