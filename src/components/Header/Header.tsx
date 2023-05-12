import React from 'react';
import './Header.scss';
import { PageNavLink } from '../PageNavLink';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__nav_links">
        <img
          className="nav_logo"
          src="./icons/Logo.svg"
          alt="logo"
        />

        <nav className="nav">
          <ul className="nav_list">
            <li className="nav_item">
            <PageNavLink
              to="/"
              className="nav_link is-active is_active_apple"
            >
              Home
            </PageNavLink>
            </li>

            <li className="nav_item">
              <PageNavLink
                to="/catalog"
                className="nav_link"
              >
                Phones
              </PageNavLink>

            </li>

            <li className="nav_item">
              <PageNavLink
                to="/catalog"
                className="nav_link"
              >
                Tablets
              </PageNavLink>
            </li>

            <li className="nav_item">
              <PageNavLink
                to="/device-details"
                className="nav_link"
              >
                Details
              </PageNavLink>

            </li>
          </ul>
        </nav>
      </div>

      <div className="header__nav_icons">
        <div className="nav__icon__link">
            <PageNavLink
              to="/favourite"
              className="nav_link"
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
            className="nav_link"
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
