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
        >

        </img>

        <nav className="nav">
          <ul className="nav_list">
            <li className="nav_item">
            <PageNavLink
              to="/"
              text="Home"
              className="nav_link is-active is_active_apple"
            />
            </li>

            <li className="nav_item">
              <PageNavLink
                to="/catalog"
                text="Phones"
                className="nav_link"
              />

            </li>

            <li className="nav_item">
              <PageNavLink
                to="/catalog"
                text="Tablets"
                className="nav_link"
              />
            </li>

            <li className="nav_item">
              <PageNavLink
                to="/device-details"
                text="Device Details"
                className="nav_link"
              />

            </li>
          </ul>
        </nav>
      </div>

      <div className="header__nav_icons">
        <div className="nav__icon__link">
          <a href="#cart">
            <img
            className="nav_icon"
            src="./icons/favAddFav16x16.svg"
            alt="logo"
            >
            </img>
          </a>
        </div>

        <div className="nav__icon__link">
          <a href="#cart">
            <img
            className="nav_icon"
            src="./icons/shoppingBag16x16.svg"
            alt="logo"
            >
            </img>
          </a>
        </div>
      </div>
    </header>
  );
};
