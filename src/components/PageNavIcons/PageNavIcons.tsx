import React from 'react';
import './PageNavIcons.scss';
import { PageNavLink } from '../PageNavLink';
import classNames from 'classnames';

type Props = {
  isHalf?: boolean;
};

export const PageNavIcons: React.FC<Props> = ({ isHalf = false }) => {
  return (
    <div className={classNames(
      'page-nav-icons',
      {
        'page-nav-icons--is-half': isHalf,
      },
    )}>
      <div className="page-nav-icons__icons">
        <PageNavLink to="/favourite">
          <img
            src="./icons/favAddFav16x16.svg"
            alt="logo"
          />
        </PageNavLink>
      </div>

      <div className="page-nav-icons__icons">
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
