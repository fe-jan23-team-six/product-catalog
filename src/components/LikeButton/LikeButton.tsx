import React, { useState } from 'react';
import classNames from 'classnames';
import './LikeButton.scss';

type Props = {
  // Like button define the size of ProductManagerButtons
  isBig?: boolean; // 40 or 48 px.
}

export const LikeButton: React.FC<Props> = ({ isBig = false }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleLikeButtonSelect = () => {
    setIsSelected((prevIsSelected) => (
      !prevIsSelected
    ));
  };

  return (
    <button
      className={classNames(
        'like-button',
        {
          'like-button--selected': isSelected,
          'like-button--big': isBig,
        },
      )}
      onClick={handleLikeButtonSelect}
    />
  );
};
