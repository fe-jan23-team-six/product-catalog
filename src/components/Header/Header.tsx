import React from 'react';
import './Header.scss';
import { PageNavLink } from '../PageNavLink';

export const Header: React.FC = () => {
  return (
    <header className="Header">
      <PageNavLink
        to="/"
        text="Home"
      />
      <PageNavLink
        to="/catalog"
        text="Catalog"
      />
      <PageNavLink
        to="/device-details"
        text="Device Details"
      />
      <PageNavLink
        to="/favourite"
        text="Favourite"
      />
      <PageNavLink
        to="/cart"
        text="Cart"
      />
    </header>
  );
};
