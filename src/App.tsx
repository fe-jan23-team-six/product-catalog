import React, { useState } from 'react';
import './App.scss';
import { DropDown } from './components/DropDown';

export const App: React.FC = () => {
  const sortByList = ['Newest', 'Popular', 'Color'];
  const itemsOnPageList = ['4', '6', '8', '16'];
  const [selectedSortBy, setSelectedSortBy] = useState(sortByList[0]);
  const [itemsOnPage, setItemsOnPage] = useState(itemsOnPageList[3]);

  return (
    <>
      <h1>Product catalog app</h1>

      <div className="inlineBlock width11rem">
        <DropDown
          optionList={sortByList}
          selectedOption={selectedSortBy}
          setSelectedOption={setSelectedSortBy}
          description={'Sort by'}
        />
      </div>

      <div className="inlineBlock width8rem">
        <DropDown
          optionList={itemsOnPageList}
          selectedOption={itemsOnPage}
          setSelectedOption={setItemsOnPage}
          description={'Items on page'}
        />
      </div>
    </>
  );
};
