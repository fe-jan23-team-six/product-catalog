import React, { FC, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './DropDown.scss';

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

      setSelectedOption(optionList[nextIndex]);
    }

    if (selectedOptionIndex === 0) {
      const nextIndex = action === 'UP'
        ? optionList.length - 1
        : selectedOptionIndex + 1;

      setSelectedOption(optionList[nextIndex]);
    }

    if (selectedOptionIndex === optionList.length - 1) {
      const nextIndex = action === 'UP'
        ? selectedOptionIndex - 1
        : 0;

      setSelectedOption(optionList[nextIndex]);
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
      className='dropDown'
      tabIndex={1} // ??? whatta gonna do with this onTab behaviour ?
      onClick={handleClickOnItSelf}
      onBlur={() => setIsMenuOpened(false)}
      onFocus={handleFocus}
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyBoardArrows}
      data-dropdown-description={description}
    >
      {selectedOption}
      <menu
        className="dropDown__menu"
        style={{ display: isMenuOpened ? 'block' : 'none' }}
      >
        {isMenuOpened && optionList
          .map(option => {
            return <li
              key={uuidv4()}
              onClick={handleSelectOption}
              className='dropDown__menu_item'
            >
              { option }
            </li>;
          })}
      </menu>
    </div>
  );
};
