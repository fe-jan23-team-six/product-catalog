import React from 'react';
import { PageNavLink } from '../PageNavLink';
import './PageNavMain.scss';

export const PageNavMain: React.FC = () => {
  return (
    <nav className="page-nav-main">
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
