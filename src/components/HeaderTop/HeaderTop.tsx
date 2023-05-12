import React from 'react';
import './HeaderTop.scss';
import { PageNavMain } from '../PageNavMain';
import { PageNavIcons } from '../PageNavIcons';
import { MenuToggleButton } from '../MenuToggleButton';

type Props = {
  isMenuOpened: boolean;
  onMenuOpen: () => void;
}

export const HeaderTop: React.FC<Props> = ({ isMenuOpened, onMenuOpen }) => {
  return (
    <nav className="header-top">
      <div className="header-top__main">
        <img
          className="header-top__logo"
          src="./icons/Logo.svg"
          alt="logo"
        />

        {!isMenuOpened && (
          <div className="header-top__links">
            <PageNavMain />
          </div>
        )}
      </div>

      {isMenuOpened ? (
        <MenuToggleButton
          isMenuOpened={isMenuOpened}
          onMenuOpen={onMenuOpen}
        />
      ) : (
        <>
          <MenuToggleButton
            isMenuOpened={isMenuOpened}
            onMenuOpen={onMenuOpen}
          />

          <div className="header-top__icons">
            <PageNavIcons />
          </div>
        </>
      )}
    </nav>
  );
};
