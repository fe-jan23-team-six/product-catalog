import React from 'react';
import classNames from 'classnames';
import './PageNavMain.scss';
import { PageNavLink } from '../PageNavLink';

type Props = {
  isVertical?: boolean;
};

export const PageNavMain: React.FC<Props> = ({ isVertical = false }) => {
  return (
    <nav className={classNames(
      'page-nav-main',
      {
        'page-nav-main--vertical': isVertical,
      },
    )}>
      <ul className="page-nav-main__list">
        <li className="page-nav-main__item">
          <PageNavLink to="/">
            Home
          </PageNavLink>
        </li>

        <li className="page-nav-main__item">
          <PageNavLink to="/catalog">
            Phones
          </PageNavLink>

        </li>

        <li className="page-nav-main__item">
          <PageNavLink to="/catalog">
            Tablets
          </PageNavLink>
        </li>

        <li className="page-nav-main__item">
          <PageNavLink to="/device-details">
            Details
          </PageNavLink>
        </li>
      </ul>
    </nav>
  );
};
