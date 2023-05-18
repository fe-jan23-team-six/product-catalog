import React, { useEffect, useState } from 'react';
import { CategoryLink } from '../CategoryLink';
import { getTotalAmount } from '../../utils/api/products';
import './ShopByCategory.scss';
import { useDataFetcher } from '../../hooks/useDataFetcher';
import { DataLoader } from '../DataLoader';
import {
  PHONES_CATALOG,
  TABLETS_CATALOG,
  ACCESSORIES_CATALOG,
} from '../../utils/constants/route';
import { TypeAmount } from '../../types/TypeAmount';

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

      <DataLoader fetchStatus={amountFetchStatus}>
        <div className="shop-by-category__categories grid grid--mobile-gap">
          <div
            className="
              grid__item--desktop-1-8
              grid__item--tablet-1-4
              grid__item--mobile-1-4
            "
          >
            <CategoryLink
              path={PHONES_CATALOG}
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
              path={TABLETS_CATALOG}
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
              path={ACCESSORIES_CATALOG}
              amount={amountsThings.accessories}
            />
          </div>
        </div>
      </DataLoader>
    </div>
  );
};
