import { DeviceColors } from '../../types/enums/DeviceColors';
import { ProductTypes } from '../../types/enums/ProductTypes';
import {
  ACCESSORIES_CATALOG,
  PHONES_CATALOG,
  TABLETS_CATALOG,
} from '../../utils/constants/route';
import { getTotalAmount } from '../api/products';

export const getColorOfDevice = (color: string | undefined): DeviceColors => {
  switch (color) {
    case 'Black':
      return DeviceColors.Black;

    case 'Silver':
      return DeviceColors.Silver;

    case 'Gold':
      return DeviceColors.Gold;

    case 'Rosegold':
      return DeviceColors.Rosegold;

    case 'Spacegray':
      return DeviceColors.Spacegray;

    case 'Purple':
      return DeviceColors.Purple;

    case 'Red':
      return DeviceColors.Red;

    case 'Green':
      return DeviceColors.Green;

    case 'Yellow':
      return DeviceColors.Yellow;

    case 'MidnightGreen':
      return DeviceColors.MidnightGreen;

    case 'Coral':
      return DeviceColors.Coral;

    case 'White':
    default:
      return DeviceColors.White;
  }
};

export const getPluralWord = (word: string, count: number): string => {
  const label = `${count} ${word}`;

  return count === 1
    ? label
    : label + 's';
};

export const getEndpoint = (productType: ProductTypes) => {
  switch (productType) {
    case ProductTypes.TABLETS:
      return TABLETS_CATALOG;
    case ProductTypes.ACCESSORIES:
      return ACCESSORIES_CATALOG;
    case ProductTypes.PHONES:
    default:
      return PHONES_CATALOG;
  }
};

export const getHandleAmountFetch = (
  productType: ProductTypes,
  setTotalAmount: (amount: string) => void,
) => {
  switch (productType) {
    case ProductTypes.PHONES:
      return () => getTotalAmount()
        .then(({ phones }) => setTotalAmount(phones));
    case ProductTypes.TABLETS:
      return () => getTotalAmount()
        .then(({ tablets }) => setTotalAmount(tablets));
    case ProductTypes.ACCESSORIES:
      return () => getTotalAmount()
        .then(({ accessories }) => setTotalAmount(accessories));
  }
};

export const getPageTitle = (productType: ProductTypes) => {
  switch (productType) {
    case ProductTypes.PHONES:
      return 'Mobile phones';
    case ProductTypes.TABLETS:
      return 'Tablets';
    case ProductTypes.ACCESSORIES:
      return 'Accessories';
  }
};
