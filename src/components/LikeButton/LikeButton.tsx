import React, { useState } from 'react';
import classNames from 'classnames';
import './LikeButton.scss';

export const LikeButton: React.FC = () => {
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
        },
      )}
      onClick={handleLikeButtonSelect}
    />
  );
};
