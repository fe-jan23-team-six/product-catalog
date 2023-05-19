import React from 'react';
import './MenuToggleButton.scss';
import classNames from 'classnames';
import { useModifiedUrl } from '../../components/ToggleTheme';

type Props = {
  isMenuOpened: boolean;
  onMenuOpen: () => void;
}

export const MenuToggleButton: React.FC<Props> = ({
  isMenuOpened,
  onMenuOpen,
}) => {
  return (
    <button
      className={classNames(
        'menu-toggle-button',
        {
          'menu-toggle-button--opened': isMenuOpened,
        },
      )}
      onClick={onMenuOpen}
    >
      <img
        src={isMenuOpened ? (
          useModifiedUrl(
            './icons/close16x16.svg',
            localStorage.getItem('themeName') || 'light',
          )
        ) : (
          useModifiedUrl('./icons/menu16x16.svg',
            localStorage.getItem('themeName') || 'light')
        )}
        alt="Menu"
      />
    </button>
  );
};
