import React, { useState, useEffect } from 'react';
import './CatalogPage.scss';
import { PaginationPannel } from '../../components/PaginationPannel';
import { ProductList } from '../../components/ProductList';
import { DataLoader } from '../../components/DataLoader';
import { DropDown } from '../../components/DropDown';

import { useDataFetcher } from '../../hooks/useDataFetcher';
import { PhoneMain } from '../../types/PhoneMain';
import { getPhones } from '../../utils/api/phones';

export const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<PhoneMain[]>([]);
  const [productsFetchStatus, fetchProducts] = useDataFetcher();

  const [selectedOption, setSelectedOption] = useState('Green');
  const optionList = ['Red', 'Blue', 'Green', 'Yellow'];

  useEffect(() => {
    fetchProducts(() => getPhones().then(setProducts));
  }, []);

  return (
    <div className="catalog-page">
      <h1>
        Mobile Phones
      </h1>

      <section
        className="bodyText catalog-page__subtitle"
      >
        95 models
      </section>

      <section className="catalog-page__dropdown-block">
        <div
          className="catalog-page__dropdown-left catalog-page__dropdown-item"
        >
          <DropDown
            optionList={optionList}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            description='Something'
          />
        </div>

        <div
          className="catalog-page__dropdown-right catalog-page__dropdown-item"
        >
          <DropDown
            optionList={optionList}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            description='Something'
          />
        </div>
      </section>

      <section className="catalog-page__product-list">
        <DataLoader fetchStatus={productsFetchStatus}>
          <ProductList products={products} />
        </DataLoader>
      </section>

      <section className="catalog-page__pagination-pannel">
        <PaginationPannel />
      </section>
    </div>
  );
};
