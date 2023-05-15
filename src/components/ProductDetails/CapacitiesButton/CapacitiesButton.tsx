import React from 'react';
import classNames from 'classnames';
import './CapacitiesButton.scss';
import { Phone } from '../../../types/Phone';
import { Link } from 'react-router-dom';

type Props = {
  deviceCapacity: string,
  product: Phone,
}

export const CapacitiesButton: React.FC<Props> = ({
  deviceCapacity,
  product,
}) => {
  const {
    namespaceId,
    capacity,
    color,
  } = product;

  return (
    <Link
      className={classNames(
        'capacity-button',
        {
          'capacity-button--selected': deviceCapacity === capacity,
        },
      )}
      to={`/catalog/${namespaceId}-${deviceCapacity.toLowerCase()}-${color}`}
    >
      {deviceCapacity}
    </Link>
  );
};
