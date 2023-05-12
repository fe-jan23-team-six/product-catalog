import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageNavLink.scss';

type Props = {
  to: string;
  className: string;
  children?: React.ReactNode;
};

export const PageNavLink: React.FC<Props> = ({ children, to, className }) => (
  <NavLink
    className={className}
    to={to}>
    {children}
  </NavLink>
);
