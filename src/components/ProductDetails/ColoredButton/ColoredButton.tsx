import React from 'react';
import classNames from 'classnames';
import './ColoredButton.scss';
import { Link } from 'react-router-dom';
import { Product } from '../../../types/Product';
import {
  getHexColorOfDevice,
} from '../../../utils/helpers/getHexColorOfDevice';
import { resolveProductSlug } from '../../../utils/helpers/resolveProductSlug';

type Props = {
  currentColor: string,
  product: Product,
}

export const ColoredButton: React.FC<Props> = ({
  currentColor,
  product: {
    namespaceId,
    capacity,
    color,
  },
}) => (
  <Link
    className={classNames(
      'colored-button',
      {
        'colored-button--selected': currentColor === color,
      },
    )}
    style={{ backgroundColor: getHexColorOfDevice(currentColor) }}
    to={`../${resolveProductSlug(namespaceId, capacity, currentColor)}`}
  />
);
