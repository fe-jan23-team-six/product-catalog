import React from 'react';
import './PageNavIcons.scss';
import { PageNavLink } from '../PageNavLink';

export const PageNavIcons: React.FC = () => {
  return (
    <div className="page-nav-icons">
      <div className="page-nav-icons__link">
        <PageNavLink to="/favourite">
          <img
            src="./icons/favAddFav16x16.svg"
            alt="logo"
          />
        </PageNavLink>
      </div>

      <div className="page-nav-icons__link">
        <PageNavLink to="/cart">
          <img
            className="nav_icon"
            src="./icons/shoppingBag16x16.svg"
            alt="logo"
          />
        </PageNavLink>
      </div>
    </div>
  );
};
