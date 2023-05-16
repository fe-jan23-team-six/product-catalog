import React, { FC, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './DropDown.scss';
import classNames from 'classnames';

type Props = {
  optionList: string[],
  selectedOption: string,
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>,
  description: string,
}

export const DropDown: FC<Props> = ({
  optionList,
  selectedOption,
  setSelectedOption,
  description,
}) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [lastInputDevice, setLastInputDevice] = useState<string | null>(null);

  const handleMouseDown = () => {
    setLastInputDevice('mouse');
  };

  const handleKeyDown = () => {
    setLastInputDevice('keyboard');
  };

  type MoveThroughList = 'UP' | 'DOWN';

  const handleSelectPrevOrNext = (action: MoveThroughList) => {
    const selectedOptionIndex = optionList.indexOf(selectedOption);

    if (selectedOptionIndex !== 0
      && selectedOptionIndex !== optionList.length - 1) {
      const nextIndex = action === 'UP'
        ? selectedOptionIndex - 1
        : selectedOptionIndex + 1;

      setSelectedOption(optionList[nextIndex].toLocaleLowerCase());
    }

    if (selectedOptionIndex === 0) {
      const nextIndex = action === 'UP'
        ? optionList.length - 1
        : selectedOptionIndex + 1;

      setSelectedOption(optionList[nextIndex].toLocaleLowerCase());
    }

    if (selectedOptionIndex === optionList.length - 1) {
      const nextIndex = action === 'UP'
        ? selectedOptionIndex - 1
        : 0;

      setSelectedOption(optionList[nextIndex].toLocaleLowerCase());
    }
  };

  const handleKeyBoardArrows = (
    keyDownOnDropDownEvent: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    switch (keyDownOnDropDownEvent.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        return handleSelectPrevOrNext('UP');
      case 'ArrowDown':
      case 'ArrowRight':
        return handleSelectPrevOrNext('DOWN');
      default:
        return null;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []); // to remove elements added on mount listener when it is unmounted

  const handleSelectOption = (
    optionClickEvent: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    optionClickEvent.preventDefault();

    const dropDown = (optionClickEvent.target as HTMLLIElement)
      .parentElement?.parentElement;

    if (dropDown) {
      dropDown.blur();
    }

    const selected = optionClickEvent.currentTarget.innerText;

    setSelectedOption(selected);
  };

  const handleClickOnItSelf = (
    clickOnMenu: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    clickOnMenu.preventDefault();
    setLastInputDevice('mouse');

    const dropDown = clickOnMenu.currentTarget;

    if (isMenuOpened) {
      const { currentTarget } = clickOnMenu;

      currentTarget.blur();

      return setIsMenuOpened(false);
    } else {
      dropDown.classList.add('clicked');
    }

    setIsMenuOpened((prevState) => !prevState);
  };

  const handleFocus = (
    focusEvent: React.FocusEvent<HTMLDivElement, Element>,
  ) => {
    focusEvent.preventDefault();

    const dropDown = focusEvent.currentTarget;

    if (lastInputDevice === 'mouse') {
      dropDown.classList.add('clicked');
    } else if (lastInputDevice === 'keyboard') {
      dropDown.classList.remove('clicked');
    }
  };

  return (
    <div
      className='drop-down'
      tabIndex={1}
      onClick={handleClickOnItSelf}
      onBlur={() => setIsMenuOpened(false)}
      onFocus={handleFocus}
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyBoardArrows}
    >
      <div className="drop-down__description">
        {description}
      </div>

      <p className='drop-down__text'>
        {selectedOption.slice(0, 1).toUpperCase() + selectedOption.slice(1)}
      </p>

      <menu
        className={classNames(
          'drop-down__menu',
          {
            'drop-down__menu--closed': !isMenuOpened,
          },
        )}
      >
        {isMenuOpened && optionList.map(option => (
          <li
            className='drop-down__menu__item'
            key={uuidv4()}
            onClick={handleSelectOption}
          >
            { option.slice(0, 1).toUpperCase() + option.slice(1) }
          </li>
        ))}
      </menu>
    </div>
  );
};
