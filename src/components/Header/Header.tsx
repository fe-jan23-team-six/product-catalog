import React, { useState } from 'react';
import classNames from 'classnames';
import './Header.scss';

import { HeaderTop } from '../HeaderTop';
import { PageNavMain } from '../PageNavMain';
import { PageNavIcons } from '../PageNavIcons';

export const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuOpen = () => (
    setIsMenuOpened((prevState) => !prevState)
  );

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
