import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DeviceDetailsPage.scss';

import { DeviceDetailsPictures } from './DeviceDetailsPictures';
import { DeviceDetailsSelector } from './DeviceDetailsSelector';
import { DeviceDetailsAbout } from './DeviceDetailsAbout';
import { DeviceDetailsSpecs } from './DeviceDetailsSpecs';
import { SliderProducts } from '../../components/SliderProducts';
import { DataLoader } from '../../components/DataLoader';

import { Phone } from '../../types/phone/Phone';
import { PhoneMain } from '../../types/phone/PhoneMain';
import { getById, getPhones } from '../../utils/api/phones';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BreadcrumbItem } from '../../types/BreadcrumbItem';

import { useDataFetcher } from '../../hooks/useDataFetcher';

export const DeviceDetailsPage: FC = () => {
  const [product, setProduct] = useState<Phone | null>(null);
  const [recommended, setRecommended] = useState<PhoneMain[]>([]);
  const { productId } = useParams();

  const [productFetchStatus, fetchProduct] = useDataFetcher();
  const [recommendedFetchStatus, fetchRecommended] = useDataFetcher();

  useEffect(() => {
    fetchProduct(() => getById(Number(productId)).then(setProduct));
    fetchRecommended(() => getPhones().then(setRecommended));
  }, [productId]);

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
              <DeviceDetailsPictures />

              <DeviceDetailsSelector product={product} />

              <p className="device-details__id grid__item--desktop-22-24">
                ID: 802390
              </p>
            </section>

            <section
              className="device-details__about-product
              grid grid--mobile-tablet-off"
            >
              <DeviceDetailsAbout />

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
