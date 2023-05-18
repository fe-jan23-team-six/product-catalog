import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import './Header.scss';

import { HeaderTop } from '../HeaderTop';
import { PageNavMain } from '../PageNavMain';
import { PageNavIcons } from '../PageNavIcons';

import { disablePageScroll } from '../../utils/helpers/disablePageScroll';

export const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const location = useLocation();

  const handleMenuOpen = () => (
    setIsMenuOpened((prevState) => !prevState)
  );

  useEffect(() => {
    disablePageScroll(isMenuOpened);
  }, [isMenuOpened]);

  useEffect(() => {
    setIsMenuOpened(false);
  }, [location.key]);

  return (
    <header className={classNames(
      'header',
      {
        'header--menu-opened': isMenuOpened,
      },
    )}>
      <div className="header__top">
        <HeaderTop
          isMenuOpened={isMenuOpened}
          onMenuOpen={handleMenuOpen}
        />
      </div>

      <div className="header__menu">
        <div className="header__links">
          <PageNavMain isVertical />
        </div>
        <div className="header__icons">
          <PageNavIcons isHalf />
        </div>
      </div>
    </header>
  );
};
