import React from 'react';
import classNames from 'classnames';
import './TextButton.scss';

type Props = {
  buttonText: string,
  selected?: boolean,
}

export const TextButton: React.FC<Props> = ({ selected, buttonText }) => {
  return (
    <button className={
      classNames(
        'textButton',
        { selected },
      )}
    >
      {buttonText}
    </button>
  );
};
