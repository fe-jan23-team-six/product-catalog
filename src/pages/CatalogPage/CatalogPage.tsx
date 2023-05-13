import React, { useState, useEffect } from 'react';
import './CatalogPage.scss';
import { PaginationPannel } from '../../components/PaginationPannel';
import { ProductList } from '../../components/ProductList';
import { DataLoader } from '../../components/DataLoader';

import { useDataFetcher } from '../../hooks/useDataFetcher';
import { PhoneMain } from '../../types/phone/phone';
import { getPhones } from '../../utils/api/phones';

export const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<PhoneMain[]>([]);
  const [productsFetchStatus, fetchProducts] = useDataFetcher();

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
