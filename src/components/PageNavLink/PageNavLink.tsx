import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageNavLink.scss';

type Props = {
  text: string;
  to: string;
  className: string;
};

export const PageNavLink: React.FC<Props> = ({ text, to, className }) => (
  <NavLink
    className={className}
    to={to}>
    {text}
  </NavLink>
);
