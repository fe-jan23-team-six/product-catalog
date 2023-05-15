import React, { useEffect, useState } from 'react';
import { TypeCatalogContent } from '../../types/TypeCatalogContent';
import { CategoryLink } from '../CategoryLink';
import { getPhones } from '../../utils/api/phones';
import './ShopByCategory.scss';
import { PhoneMain } from '../../types/phone/PhoneMain';
import { Loader } from '../Loader';

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
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchPhones = async() => {
      try {
        const fetchedPhones: PhoneMain[] = await getPhones();
        // const fetchedTablets: TabletsMain[] = await getTablets();
        // const fetchedAccessories: AccessoriesMain[] = await getAccessories();

        setAmountThings(previous => {
          const copyAmount = { ...previous };

          copyAmount.phones = fetchedPhones.length;
          // copyAmount.tablets = fetchedTablets.length;
          // copyAmount.accessories = fetchedAccessories.length;

          return copyAmount;
        });

        setIsLoaded(true);
      } catch (err) {
        global.console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhones();
  }, []);

  return (
    <div className="shop-by-category">
      <h2 className="shop-by-category__title">
        Shop by category
      </h2>

      {isLoading && (
        <Loader />
      )}

      {isLoaded && (
        <div className="shop-by-category__categories grid grid--mobile-gap">
          <div
            className="
              grid__item--desktop-1-8
              grid__item--tablet-1-4
              grid__item--mobile-1-4
            "
          >
            <CategoryLink
              path={TypeCatalogContent.PHONES}
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
              path={TypeCatalogContent.TABLETS}
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
              path={TypeCatalogContent.ACCESSORIES}
              amount={amountsThings.accessories}
            />
          </div>
        </div>
      )}
    </div>
  );
};
