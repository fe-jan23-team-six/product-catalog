import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import './DeviceDetailsPage.scss';

import { DeviceDetailsImages } from './DeviceDetailsImages';
import { DeviceDetailsSelector } from './DeviceDetailsSelector';
import { DeviceDetailsAbout } from './DeviceDetailsAbout';
import { DeviceDetailsSpecs } from './DeviceDetailsSpecs';
import { SliderProducts } from '../../components/SliderProducts';

import { Product } from '../../types/Product';
import { ProductMain } from '../../types/ProductMain';
import {
  getById,
  getProducts,
} from '../../utils/api/products';

import { Breadcrumbs } from '../../components/Breadcrumbs';

import { convertSlugToDigit } from '../../utils/helpers/converSlugInId';
import {
  DeviceDetailsLoadPage,
} from '../../components/LoadingComponents/DeviceDetailsLoadPage';

export const DeviceDetailsPage: FC = () => {
  const { productSlug = '' } = useParams();

  const productQuery = useQuery<Product>({
    queryKey: ['product'],
    queryFn: () => getById(productSlug),
  });

  const recommendedQuery = useQuery<ProductMain[]>({
    queryKey: ['recommended'],
    queryFn: () => getProducts(),
  });

  useEffect(() => {
    productQuery.refetch();
    recommendedQuery.refetch();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [productSlug]);

  const product = productQuery.data;
  const recommended = recommendedQuery.data;

  const productTitle = product
    ? product.name
    : 'Not loaded model';

  return (
      <div className="device-details">
        <section className="device-details__breadcrumbs">
          <Breadcrumbs />
        </section>

        {productQuery.isFetching ? (
          <DeviceDetailsLoadPage slug={productSlug} />
        ) : (
          <>
            <h1 className="device-details__title">
              {productTitle}
            </h1>

            {product && (
              <>
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
              </>
            )}
          </>
        )}

        {recommended && (
          <section className="device-details__slider-products">
            <SliderProducts
              title={'You may also like'}
              products={recommended}
            />
          </section>
        )}
      </div>
  );
};
