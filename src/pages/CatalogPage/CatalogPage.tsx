import React, { useState, useEffect } from 'react';
import './CatalogPage.scss';
import { PaginationPannel } from '../../components/PaginationPannel';
import { ProductList } from '../../components/ProductList';
import { DataLoader } from '../../components/DataLoader';

import { useDataFetcher } from '../../hooks/useDataFetcher';
import { PhoneMain } from '../../types/PhoneMain';
import { getPhonesPage, getTotalAmount } from '../../utils/api/phones';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

export const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<PhoneMain[]>([]);
  const [totalAmount, setTotalAmount] = useState('');
  const [isTotalLoading, setIsTotalLoading] = useState(true);
  const [productsFetchStatus, fetchProducts] = useDataFetcher();

  const [searchParams, setSearchParams] = useSearchParams();
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

  useEffect(() => {
    fetchProducts(() => {
      return getPhonesPage(+page, +limit, sort)
        .then(setProducts);
    });
  }, [page, limit, sort]);

  useEffect(() => {
    getTotalAmount()
      .then((data) => [setTotalAmount(data.amount), setIsTotalLoading(false)]);
  }, [totalAmount]);

  return (
    <div className="catalog-page">
      <h1>
        Mobile Phones
      </h1>

      <section
        className={classNames(
          'bodyText catalog-page__subtitle',
          { 'isLoading': isTotalLoading },
        )}
      >
        {`${totalAmount} models`}
      </section>

      <section className="catalog-page__dropdown-block">
        <div
          className="catalog-page__dropdown-left catalog-page__dropdown-item"
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
        </div>

        <div
          className="catalog-page__dropdown-right catalog-page__dropdown-item"
        >
        {/* Custom dropdown was here */}
        </div>
      </section>

      <section className="catalog-page__product-list">
        <DataLoader fetchStatus={productsFetchStatus}>
          <ProductList products={products} />
        </DataLoader>
      </section>

      <section
        className={classNames(
          'catalog-page__pagination-pannel',
          { 'isLoading': isTotalLoading },
        )}
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
    </div>
  );
};
