import React from 'react';
import classNames from 'classnames';
import './SquareButton.scss';

type PageIconParam = 'prev' | number | 'next';

type Props = {
  pageIconParam: PageIconParam,
  disabled?: boolean,
  selected?: boolean,
};

export const SquareButton: React.FC<Props> = ({
  pageIconParam,
  disabled,
  selected,

}) => {
  const appendClass = (pageIcon: PageIconParam) => {
    if (typeof pageIcon === 'number') {
      if (selected) {
        return 'number' + ' ' + 'selected';
      }

      return 'number';
    }

    if (disabled) {
      return pageIcon + ' ' + 'disabled';
    } else {
      return pageIcon;
    }
  };

  const classToAppend = appendClass(pageIconParam);

  return (
    <button className={classNames(
      'squareButton',
      classToAppend,
    )}>{typeof pageIconParam === 'number' ? pageIconParam : null}</button>
  );
};
