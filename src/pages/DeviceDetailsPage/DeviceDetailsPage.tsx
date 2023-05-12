import React, { FC, useEffect, useState } from 'react';
import './DeviceDetailsPage.scss';

import { DeviceDetailsPictures } from './DeviceDetailsPictures';
import { DeviceDetailsSelector } from './DeviceDetailsSelector';
import { DeviceDetailsAbout } from './DeviceDetailsAbout';
import { DeviceDetailsSpecs } from './DeviceDetailsSpecs';
import { SliderProducts } from '../../components/SliderProducts';
import { PhoneDetails } from '../../types/phone/phone';
import { getById } from '../../utils/api/phones';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { NotFoundPage } from '../NotFoundPage';

export const DeviceDetailsPage: FC = () => {
  const [product, setProduct] = useState<PhoneDetails | null>(null);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const fetchPhone = async() => {
      setIsDataLoading(true);
      setHasError(false);

      try {
        const fetchedPhone: PhoneDetails = await getById(Number('1'));

        setProduct(fetchedPhone);

        global.console.log('fetched:', fetchedPhone);
        global.console.log('phone:', fetchedPhone);
      } catch {
        setHasError(true);

        global.console.log('error');
      }

      setIsDataLoading(false);
    };

    fetchPhone();
  }, [productId]);

  return (
    <>
      {isDataLoading ? (
          <Loader />
      ) : (
        <>
          {hasError && (
            <NotFoundPage />
          )}

          {!isDataLoading && !hasError && product && (
            <main className="device_details">
              <h2 className="device_details__title">
                {product.name}
              </h2>

              <div className="device_details__product grid grid--mobile-off">
                <DeviceDetailsPictures />

                <DeviceDetailsSelector />

                <p className="device_details__id grid__item--desktop-22-24">
                  ID: 802390
                </p>
              </div>

              <div
                className="device_details__about-product
                grid grid--mobile-tablet-off"
              >
                <DeviceDetailsAbout />

                <DeviceDetailsSpecs />
              </div>

              <div className="device_details__slider-products">
                <SliderProducts title={'You may also like'} />
              </div>
            </main>
          )}
        </>
      )}
    </>
  );
};
