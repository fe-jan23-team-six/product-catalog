import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './PageNavLink.scss';

type Props = {
  to: string;
  children?: React.ReactNode;
};

export const PageNavLink: React.FC<Props> = ({ children, to }) => (
  <NavLink
    className={({ isActive }) => (
      classNames(
        'page-nav-link',
        {
          'page-nav-link--active': isActive,
        },
      )
    )}
    to={to}>
    {children}
  </NavLink>
);
