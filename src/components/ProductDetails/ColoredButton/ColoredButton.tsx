import React from 'react';
import classNames from 'classnames';
import './ColoredButton.scss';
import { DeviceColors } from '../../../types/enums/DeviceColors';
import { getColorOfDevice } from '../../../utils/helpers/helpers';
import { Link } from 'react-router-dom';
import { Phone } from '../../../types/phone/Phone';

type Props = {
  deviceColor: string;
  isSelected: boolean,
  onSelect: (color: DeviceColors) => void;
  product: Phone,
}

export const ColoredButton: React.FC<Props> = ({
  deviceColor,
  isSelected,
  onSelect,
  product,
}) => {
  const {
    nameSpaceId,
    capacity,
    color,
  } = product;

  console.log(nameSpaceId);

  const colorHex = getColorOfDevice(deviceColor.slice(0, 1).toUpperCase()
  + deviceColor.slice(1));

  return (
    <Link
      to={`/catalog/${nameSpaceId}-${capacity.toLowerCase()}-${color}`}
    >
    <button
      className={classNames(
        'colored-button',
        {
          'colored-button--selected': isSelected,
        },
      )}
      style={{ backgroundColor: colorHex }}
      onClick={() => onSelect(colorHex)}
    >
    </button>
    </Link>
  );
};
