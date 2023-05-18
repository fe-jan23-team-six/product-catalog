import React, { useEffect, useState } from 'react';
import { CategoryLink } from '../CategoryLink';
import { getTotalAmount } from '../../utils/api/products';
import './ShopByCategory.scss';
import { useDataFetcher } from '../../hooks/useDataFetcher';
import { DataLoader } from '../DataLoader';
import {
  PHONES_PAGE,
  TABLETS_PAGE,
  ACCESSORIES_PAGE,
} from '../../utils/constants/route';
import { TypeAmount } from '../../types/TypeAmount';
import {
  ShopByCategorySkeleton,
} from '../LoadingComponents/HomePageSkeletons/ShopByCategorySkeleton';

export const ShopByCategory: React.FC = () => {
  const [amountsThings, setAmountThings] = useState<TypeAmount>({
    phones: '',
    tablets: '',
    accessories: '',
  });
  const [amountFetchStatus, fetchAmount] = useDataFetcher();

  useEffect(() => {
    fetchAmount(() => getTotalAmount().then(res => {
      setAmountThings(res);
    }));
  }, []);

  return (
    <div className="shop-by-category">
      <h2 className="shop-by-category__title">
        Shop by category
      </h2>

      <DataLoader
        fetchStatus={amountFetchStatus}
        loader={<ShopByCategorySkeleton />}
      >
        <div className="shop-by-category__categories grid grid--mobile-gap">
          <div
            className="
              grid__item--desktop-1-8
              grid__item--tablet-1-4
              grid__item--mobile-1-4
            "
          >
            <CategoryLink
              path={PHONES_PAGE}
              amount={amountsThings.phones}
            />
          </div>
          <div
            className="
              grid__item--desktop-9-16
              grid__item--tablet-5-8
              grid__item--mobile-1-4
            "
          >
            <CategoryLink
              path={TABLETS_PAGE}
              amount={amountsThings.tablets}
            />
          </div>
          <div
            className="
              grid__item--desktop-17-24
              grid__item--tablet-9-12
              grid__item--mobile-1-4
            "
          >
            <CategoryLink
              path={ACCESSORIES_PAGE}
              amount={amountsThings.accessories}
            />
          </div>
        </div>
      </DataLoader>
    </div>
  );
};
