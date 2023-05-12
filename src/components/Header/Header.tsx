import React from 'react';
import './Header.scss';
import { PageNavMain } from '../PageNavMain';
import { PageNavIcons } from '../PageNavIcons';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__links">
        <img
          className="header__logo"
          src="./icons/Logo.svg"
          alt="logo"
        />

        <PageNavMain />
      </div>

      <PageNavIcons />
    </header>
  );
};
