import React from 'react';
import './DeviceDetailsLoadPage.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Breadcrumbs } from '../../Breadcrumbs';
import { BreadcrumbItem } from '../../../types/BreadcrumbItem';
import { ProductManageLoad } from '../ProductManageLoad';

type Props = {
  breadcrumbs?: BreadcrumbItem[];
}

export const DeviceDetailsLoadPage: React.FC<Props> = ({ breadcrumbs }) => {
  return (
    <SkeletonTheme baseColor="#ececec" highlightColor="#fafbfc">
      <section className="device-details-load__breadcrumbs">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </section>

      <h1 className="device-details-load__title">
        <Skeleton />
      </h1>

      <section
        className="device-details-load__product
            grid grid--mobile-off"
      >
        <div
          className="device-details-load__pictures
          grid__item--tablet-1-6 grid__item--desktop-1-12"
        >
          <Skeleton
            containerClassName="device-details-load__pictures--mobile"
            height={354}
          />

          <Skeleton
            containerClassName="device-details-load__pictures--desktop"
            height={461}
          />
        </div>

        <div
          className="device-details-load__selector_load
          grid__item--tablet-7-12 grid__item--desktop-14-20"
        >
          <div className="selector_load__colours">
            <div className="selector_load__colours__text">
              <p className="selector_load__title">Available colours</p>

              <p className="selector_load__id grid__item--desktop-22-24">
                <Skeleton />
              </p>
            </div>

            <div className="selector_load__colours__selector">
              <Skeleton height={29} />
            </div>
          </div>

          <div className="selector_load__capacity">
            <p className="selector_load__title">Select capacity</p>

            <div className="selector_load__capacity__selector">
              <Skeleton height={28.5} />
            </div>
          </div>

          <div>
            <div className="selector_load__price">
              <h2 className="">
                <Skeleton />
              </h2>
            </div>

            <div className="selector_load__buttons">
              <ProductManageLoad />
            </div>

            <div className="selector_load__characteristics">
              <Skeleton />
            </div>
          </div>
        </div>

        <p className="device-details-load__id grid__item--desktop-22-24">
          <Skeleton />
        </p>
      </section>

      <section
        className="device-details-load__about-product
        grid grid--mobile-tablet-off"
      >
        <div
          className="device-details__load__about about__load
          grid__item--desktop-1-12"
        >
          <h3 className="about__load__title">
            About
          </h3>

          <Skeleton count={5} />
        </div>

        <div
          className="device-details__load__specs specs__load
          grid__item--desktop-14-24"
        >
          <h3 className="specs__load__title">
            Tech Specs
          </h3>

          <Skeleton count={5} />
        </div>
      </section>
    </SkeletonTheme>
  );
};
