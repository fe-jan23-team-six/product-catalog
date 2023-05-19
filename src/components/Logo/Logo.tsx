import React from 'react';
import './Logo.scss';
import { useModifiedUrl } from '../../components/ToggleTheme';

export const Logo: React.FC = () => {
  return (
    <a href="#">
      <img
          className="logo"
          src={useModifiedUrl('icons/Logo.svg',
            localStorage.getItem('themeName') || 'light')}
          alt="Logo Nice Gadgets">
      </img>
    </a>
  );
};
