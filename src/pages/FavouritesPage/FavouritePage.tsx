import React, { useState } from 'react';
import './FavouritePage.scss';
// import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Breadcrumbs } from '../../components/Breadcrumbs';
// import { ProductList } from '../../components/ProductList';
// import { useFavouriteStorage } from '../../hooks/useFavouriteStorage';
import { DropDown } from '../../components/DropDown';

export const FavouritePage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('Green');
  const optionList = ['Red', 'Blue', 'Green', 'Yellow'];

  return (
    <main className="favourite-page">
      <div className="favourite-page__breadcrumbs">
        <Breadcrumbs breadcrumbs={[{ text: 'Favourites' }]}/>
      </div>

      {/* <button onClick={() => addToFavourite('some text')}>
        Push
      </button> */}

      <h1 className="favourite-page__title">
        Favourites
      </h1>

      <p className="favourite-page__count">
        5 items
      </p>

      <div className="favourite-page__products">
        {/* <ProductList /> */}
        <DropDown
          optionList={optionList}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          description='Something'
        />
      </div>
    </main>
    // <>
    //   {/* <Breadcrumbs />
    //   <h1>Favourite Page</h1>
    //   <ProductCard /> */}
    // </>
  );
};
