import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageNavLink.scss';

type Props = {
  text: string;
  to: string;
};

export const PageNavLink: React.FC<Props> = ({ text, to }) => (
  <NavLink
    className="PageNavLink"
    to={to}>
    {text}
  </NavLink>
);
