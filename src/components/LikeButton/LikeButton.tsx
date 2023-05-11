import React from 'react';
import classNames from 'classnames';
import './LikeButton.scss';

type Props = {
  selected?: boolean,
}

export const LikeButton: React.FC<Props> = ({ selected }) => {
  return (
    <button className={classNames('likeButton', { selected })} />
  );
};
