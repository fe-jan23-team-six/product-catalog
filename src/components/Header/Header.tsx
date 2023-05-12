import React from 'react';
import './Header.scss';
import { PageNavLink } from '../PageNavLink';
import { PageNavMain } from '../PageNavMain';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__links">
        <img
          className="nav_logo"
          src="./icons/Logo.svg"
          alt="logo"
        />

        <PageNavMain />
      </div>

      <div className="header__nav_icons">
        <div className="nav__icon__link">
            <PageNavLink
              to="/favourite"
            >
              <img
                className="nav_icon"
                src="./icons/favAddFav16x16.svg"
                alt="logo"
              />
            </PageNavLink>
        </div>

        <div className="nav__icon__link">
          <PageNavLink
            to="/cart"
          >
            <img
              className="nav_icon"
              src="./icons/shoppingBag16x16.svg"
              alt="logo"
            />
            </PageNavLink>
        </div>
      </div>
    </header>
  );
};
