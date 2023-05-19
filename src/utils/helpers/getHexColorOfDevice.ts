import { DeviceColors } from '../../types/enums/DeviceColors';
import { capitalize } from './capitalize';

export const getHexColorOfDevice = (color: string): DeviceColors => {
  const normalizedColor = capitalize(color);

  switch (normalizedColor) {
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

    case 'Midnightgreen':
      return DeviceColors.MidnightGreen;

    case 'Coral':
      return DeviceColors.Coral;

    case 'Blue':
      return DeviceColors.Blue;

    case 'Pink':
      return DeviceColors.Pink;

    case 'White':
    default:
      return DeviceColors.White;
  }
};
