import React from 'react';
import classNames from 'classnames';
import './CapacitiesButton.scss';
import { Product } from '../../../types/Product';
import { Link } from 'react-router-dom';
import { resolveProductSlug } from '../../../utils/helpers/resolveProductSlug';

type Props = {
  deviceCapacity: string,
  product: Product,
}

export const CapacitiesButton: React.FC<Props> = ({
  deviceCapacity,
  product: {
    namespaceId,
    capacity,
    color,
  },
}) => {
  return (
    <Link
      className={classNames(
        'capacity-button',
        {
          'capacity-button--selected': deviceCapacity === capacity,
        },
      )}
      to={`../${resolveProductSlug(namespaceId, deviceCapacity, color)}`}
    >
      {deviceCapacity}
    </Link>
  );
};
