import React, { useState } from 'react';
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
  const [rotate, setRotate] = useState(0);

  const handelClick = () => {
    setRotate((prev) => prev ? prev * 0 : prev + 180);
  };

  return (
    <button
      className={classNames(
        'menu-toggle-button',
        {
          'menu-toggle-button--opened': isMenuOpened,
        },
      )}
      // onClick={onMenuOpen}
      onClick={() => {
        handelClick();
        setTimeout(() => onMenuOpen(), 500);
      }}
    >
      <img
        id='burge'
        src={isMenuOpened ? (
          './icons/close16x16.svg'
        ) : (
          './icons/menu16x16.svg'
        )}
        alt="Menu"

        style = {{ transform: `rotate(${rotate}deg)`, transition: 'transform 1s ease' }}
      />
    </button>
  );
};
