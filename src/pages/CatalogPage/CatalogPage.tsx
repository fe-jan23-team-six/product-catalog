import React, { useState, useEffect } from 'react';
import './CatalogPage.scss';
import { PaginationPannel } from '../../components/PaginationPannel';
import { ProductList } from '../../components/ProductList';
import { DataLoader } from '../../components/DataLoader';

import { useDataFetcher } from '../../hooks/useDataFetcher';
import { PhoneMain } from '../../types/PhoneMain';
import { getPhonesPage, getTotalAmount } from '../../utils/api/phones';
import { useSearchParams } from 'react-router-dom';

import { useDidUpdateEffect } from '../../hooks/useDidUpdateEffect';

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

  const handleChangeLimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set('limit', event.target.value);
    setSearchParams(searchParams);
  };

  const handleChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set('sort', event.target.value);
    setSearchParams(searchParams);
  };

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

  useDidUpdateEffect(() => {
    const handleProductsFetch = () => (
      getPhonesPage(+page, +limit, sort).then(setProducts)
    );

    const handleAmountFetch = totalAmount === ''
      ? () => getTotalAmount().then(({ amount }) => setTotalAmount(amount))
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
              <select
                onChange={handleChangeLimit}
                value={limit}
              >
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="16">16</option>
              </select>

              <select
                onChange={handleChangeSort}
                value={sort}
              >
                <option value="newest">Newest</option>
                <option value="alphabetically">Alphabetically</option>
                <option value="price-lowest">Cheapest</option>
              </select>

              <DropDown
                optionList={['4', '8', '16']}
                selectedOption={currentPerPage}
                setSelectedOption={setCurrentPerPage}
                description='Something'
              />
            </div>

            <div
              className="catalog-page__dropdown-right
              catalog-page__dropdown-item"
            >
              <DropDown
                optionList={['newest', 'alphabetically', 'price-lowest']}
                selectedOption={currentSort}
                setSelectedOption={setCurrentSort}
                description='Something'
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
