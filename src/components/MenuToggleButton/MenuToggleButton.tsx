import React from 'react';
import './MenuToggleButton.scss';
import classNames from 'classnames';

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
          './icons/close16x16.svg'
        ) : (
          './icons/menu16x16.svg'
        )}
        alt="Menu"
      />
    </button>
  );
};
