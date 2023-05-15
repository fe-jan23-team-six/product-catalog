import React from 'react';
import './HeaderTop.scss';
import { PageNavMain } from '../PageNavMain';
import { PageNavIcons } from '../PageNavIcons';
import { MenuToggleButton } from '../MenuToggleButton';
import { Logo } from '../Logo';

type Props = {
  isMenuOpened: boolean;
  onMenuOpen: () => void;
}

export const HeaderTop: React.FC<Props> = ({ isMenuOpened, onMenuOpen }) => {
  return (
    <nav className="header-top">
      <div className="header-top__main">
        <div className="header-top__logo">
          <Logo />
        </div>

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
