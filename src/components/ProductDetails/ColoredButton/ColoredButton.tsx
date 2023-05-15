import React, { useCallback } from 'react';
import classNames from 'classnames';
import './ColoredButton.scss';
import { getColorOfDevice } from '../../../utils/helpers/helpers';
import { Link } from 'react-router-dom';
import { Phone } from '../../../types/Phone';

type Props = {
  deviceColor: string,
  product: Phone,
}

export const ColoredButton: React.FC<Props> = ({
  deviceColor,
  product,
}) => {
  const {
    namespaceId,
    capacity,
    color,
  } = product;

  const colorHex = useCallback(() => getColorOfDevice(
    deviceColor.slice(0, 1).toUpperCase() + deviceColor.slice(1),
  ), [deviceColor]);

  return (
    <Link
      className={classNames(
        'colored-button',
        {
          'colored-button--selected': deviceColor === color,
        },
      )}
      style={{ backgroundColor: colorHex() }}
      to={`/catalog/${namespaceId}-${capacity.toLowerCase()}-${deviceColor}`}
    />
  );
};
