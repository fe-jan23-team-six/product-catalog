import React, { useEffect, useState } from 'react';
import { TypeCatalogContent } from '../../types/TypeCatalogContent';
import { CategoryLink } from '../CategoryLink';
import { getPhones } from '../../utils/api/phones';
import './ShopByCategory.scss';
import { useDataFetcher } from '../../hooks/useDataFetcher';
import { DataLoader } from '../DataLoader';

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
    fetchPhones(() => getPhones().then(response => {
      setAmountThings(prev => {
        const copyAmount = { ...prev };

        copyAmount.phones = response.length;

        return copyAmount;
      });
    }));

    fetchTablets(() => getPhones().then(response => {
      setAmountThings(prev => {
        const copyAmount = { ...prev };

        copyAmount.tablets = response.length;

        return copyAmount;
      });
    }));

    fetchAccessories(() => getPhones().then(response => {
      setAmountThings(prev => {
        const copyAmount = { ...prev };

        copyAmount.accessories = response.length;

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
              path={TypeCatalogContent.PHONES}
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
              path={TypeCatalogContent.TABLETS}
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
              path={TypeCatalogContent.ACCESSORIES}
              amount={amountsThings.accessories}
            />
          </DataLoader>
        </div>
      </div>
    </div>
  );
};
