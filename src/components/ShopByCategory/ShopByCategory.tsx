import React, { useEffect, useState } from 'react';
import { CategoryLink } from '../CategoryLink';
import { getAmountPhones } from '../../utils/api/phones';
import './ShopByCategory.scss';
import { useDataFetcher } from '../../hooks/useDataFetcher';
import { DataLoader } from '../DataLoader';
import {
  PHONES_CATALOG,
  TABLETS_CATALOG,
  ACCESSORIES_CATALOG,
} from '../../utils/constants/route';

interface TypeAmountThings {
  phones: number,
  tablets: number,
  accessories: number,
}

export const ShopByCategory: React.FC = () => {
  const [amountsThings, setAmountThings] = useState<TypeAmountThings>({
    phones: 0,
    tablets: 0,
    accessories: 0,
  });

  const [phonesFetchStatus, fetchPhones] = useDataFetcher();
  const [tabletsFetchStatus, fetchTablets] = useDataFetcher();
  const [accessoriesFetchStatus, fetchAccessories] = useDataFetcher();

  useEffect(() => {
    fetchPhones(() => getAmountPhones().then(res => {
      setAmountThings(prev => {
        const copyAmount = { ...prev };

        copyAmount.phones = res.amount;

        return copyAmount;
      });
    }));

    fetchTablets(() => getAmountPhones().then(res => {
      setAmountThings(prev => {
        const copyAmount = { ...prev };

        copyAmount.tablets = res.amount;

        return copyAmount;
      });
    }));

    fetchAccessories(() => getAmountPhones().then(res => {
      setAmountThings(prev => {
        const copyAmount = { ...prev };

        copyAmount.accessories = res.amount;

        return copyAmount;
      });
    }));
  }, []);

  return (
    <div className="shop-by-category">
      <h2 className="shop-by-category__title">
        Shop by category
      </h2>

      <div className="shop-by-category__categories grid grid--mobile-gap">
        <div
          className="
            grid__item--desktop-1-8
            grid__item--tablet-1-4
            grid__item--mobile-1-4
          "
        >
          <DataLoader fetchStatus={phonesFetchStatus}>
            <CategoryLink
              path={PHONES_CATALOG}
              amount={amountsThings.phones}
            />
          </DataLoader>
        </div>

        <div
          className="
            grid__item--desktop-9-16
            grid__item--tablet-5-8
            grid__item--mobile-1-4
          "
        >
          <DataLoader fetchStatus={tabletsFetchStatus}>
            <CategoryLink
              path={TABLETS_CATALOG}
              amount={amountsThings.tablets}
            />
          </DataLoader>
        </div>

        <div
          className="
            grid__item--desktop-17-24
            grid__item--tablet-9-12
            grid__item--mobile-1-4
          "
        >
          <DataLoader fetchStatus={accessoriesFetchStatus}>
            <CategoryLink
              path={ACCESSORIES_CATALOG}
              amount={amountsThings.accessories}
            />
          </DataLoader>
        </div>
      </div>
    </div>
  );
};
