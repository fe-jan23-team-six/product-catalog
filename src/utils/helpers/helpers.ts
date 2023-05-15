import { DeviceColors } from '../../types/enums/DeviceColors';

/* export function findDeviceIdByColor(
  tabs: Tab[], selectedTabId?: string
): Tab | undefined {
  return tabs.find(({ id }) => id === selectedTabId);
} */

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
