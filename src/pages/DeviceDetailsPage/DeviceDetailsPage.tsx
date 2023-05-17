import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DeviceDetailsPage.scss';

import { DeviceDetailsImages } from './DeviceDetailsImages';
import { DeviceDetailsSelector } from './DeviceDetailsSelector';
import { DeviceDetailsAbout } from './DeviceDetailsAbout';
import { DeviceDetailsSpecs } from './DeviceDetailsSpecs';
import { SliderProducts } from '../../components/SliderProducts';
import { DataLoader } from '../../components/DataLoader';

import { Product } from '../../types/Product';
import { ProductMain } from '../../types/ProductMain';
import {
  getById,
  getProducts,
} from '../../utils/api/products';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BreadcrumbItem } from '../../types/BreadcrumbItem';

import { useDataFetcher } from '../../hooks/useDataFetcher';
import { convertSlugToDigit } from '../../utils/helpers/converSlugInId';

export const DeviceDetailsPage: FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [recommended, setRecommended] = useState<ProductMain[]>([]);

  const { productSlug } = useParams();

  const [productFetchStatus, fetchProduct] = useDataFetcher();
  const [recommendedFetchStatus, fetchRecommended] = useDataFetcher();

  useEffect(() => {
    fetchProduct(() => getById(String(productSlug)).then(setProduct));
    fetchRecommended(() => getProducts().then(setRecommended));
  }, [productSlug]);

  const productTitle = product
    ? product.name
    : 'Not loaded model';

  const breadcrumbs: BreadcrumbItem[] = [
    {
      link: '/phones',
      text: 'Phones',
    },
    {
      text: productTitle,
    },
  ];

  return (
    <DataLoader fetchStatus={productFetchStatus}>
      <div className="device-details">
        {product ? (
          <>
            <section className="device-details__breadcrumbs">
              <Breadcrumbs breadcrumbs={breadcrumbs} />
            </section>

            <h1 className="device-details__title">
              {productTitle}
            </h1>

            <section
              className="device-details__product
              grid grid--mobile-off"
            >
              <DeviceDetailsImages images={product.images} />

              <DeviceDetailsSelector product={product} />

              <p className="device-details__id grid__item--desktop-22-24">
                {`ID ${convertSlugToDigit(product.id)}`}
              </p>
            </section>

            <section
              className="device-details__about-product
              grid grid--mobile-tablet-off"
            >
              <DeviceDetailsAbout descriptions={product.description} />

              <DeviceDetailsSpecs product={product} />
            </section>

            <section className="device-details__slider-products">
              <DataLoader fetchStatus={recommendedFetchStatus}>
                <SliderProducts
                  title={'You may also like'}
                  products={recommended}
                />
              </DataLoader>
            </section>
          </>
        ) : (
          <h1>
            Failed while loading product
          </h1>
        )}
      </div>

    </DataLoader>
  );
};
