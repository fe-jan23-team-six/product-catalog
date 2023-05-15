import React from 'react';
import classNames from 'classnames';
import './LikeButton.scss';

type Props = {
  isBig?: boolean;
  isLiked: boolean;
  onClick: () => void;
}

export const LikeButton: React.FC<Props> = React.memo(({
  isBig = false,
  isLiked,
  onClick,
}) => (
  <button
    className={classNames(
      'like-button',
      {
        'like-button--selected': isLiked,
        'like-button--big': isBig,
      },
    )}
    onClick={onClick}
  />
));
