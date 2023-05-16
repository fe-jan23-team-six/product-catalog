import React, { useState, useEffect } from 'react';
import './CatalogPage.scss';
import { PaginationPannel } from '../../components/PaginationPannel';
import { ProductList } from '../../components/ProductList';
import { DataLoader } from '../../components/DataLoader';

import { useDataFetcher } from '../../hooks/useDataFetcher';
import { PhoneMain } from '../../types/PhoneMain';
import { getAmountPhones, getPhonesPage } from '../../utils/api/phones';
import { useSearchParams } from 'react-router-dom';

import { DropDown } from '../../components/DropDown';

export const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<PhoneMain[]>([]);
  const [totalAmount, setTotalAmount] = useState('');
  const [fetchProductsAndAmountStatus, , fetchAll] = useDataFetcher();

  const [searchParams, setSearchParams] = useSearchParams();

  const [currentSort, setCurrentSort] = useState(
    searchParams.get('sort') || 'alphabetically',
  );
  const [currentPerPage, setCurrentPerPage] = useState(
    searchParams.get('limit') || '16',
  );

  useEffect(() => {
    searchParams.set('sort', currentSort.toLowerCase());
    setSearchParams(searchParams);
  }, [currentSort]);

  useEffect(() => {
    searchParams.set('limit', currentPerPage.toLowerCase());
    setSearchParams(searchParams);
  }, [currentPerPage]);

  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '16';
  const sort = searchParams.get('sort') || 'alphabetically';

  const handlePrevPage = () => {
    searchParams.set('page', `${+page - 1}`);
    setSearchParams(searchParams);
  };

  const handleNextPage = () => {
    searchParams.set('page', `${+page + 1}`);
    setSearchParams(searchParams);
  };

  const handleChangePage = (value: string) => {
    searchParams.set('page', value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const handleProductsFetch = () => (
      getPhonesPage(+page, +limit, sort).then(setProducts)
    );

    const handleAmountFetch = totalAmount === ''
      ? () => getAmountPhones().then(({ amount }) => setTotalAmount(amount))
      : () => Promise.resolve();

    fetchAll([
      handleProductsFetch,
      handleAmountFetch,
    ]);
  }, [page, limit, sort]);

  return (
    <div className="catalog-page">
      <h1 className="catalog-page__title">
        Mobile Phones
      </h1>

      <div className="catalog-page__content">
        <DataLoader fetchStatus={fetchProductsAndAmountStatus}>
          <section
            className="bodyText catalog-page__subtitle"
          >
            {`${totalAmount} models`}
          </section>

          <section className="catalog-page__dropdown-block">
            <div
              className="catalog-page__dropdown-left
              catalog-page__dropdown-item"
            >
              <DropDown
                optionList={['newest', 'alphabetically', 'price-lowest']}
                selectedOption={currentSort}
                setSelectedOption={setCurrentSort}
                description='Sort by'
              />
            </div>

            <div
              className="catalog-page__dropdown-right
              catalog-page__dropdown-item"
            >
              <DropDown
                optionList={['4', '8', '16']}
                selectedOption={currentPerPage}
                setSelectedOption={setCurrentPerPage}
                description='Items on page'
              />
            </div>
          </section>

          <section className="catalog-page__product-list">
            <ProductList products={products} />
          </section>

          <section
            className="catalog-page__pagination-pannel"
          >
            <PaginationPannel
              handleChangePage={handleChangePage}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
              page={+page}
              limit={+limit}
              totalAmmount={+totalAmount}
            />
          </section>
        </DataLoader>
      </div>
    </div>
  );
};
