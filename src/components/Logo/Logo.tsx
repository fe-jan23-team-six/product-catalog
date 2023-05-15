import React from 'react';
import './Logo.scss';

export const Logo: React.FC = () => {
  return (
    <a href="#">
      <img
          className="logo"
          src="icons/Logo.svg"
          alt="Logo Nice Gadgets">
      </img>
    </a>
  );
};
