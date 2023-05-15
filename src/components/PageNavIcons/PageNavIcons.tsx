import React, { useContext } from 'react';
import './PageNavIcons.scss';
import { PageNavLink } from '../PageNavLink';
import classNames from 'classnames';
import { FavouriteContext } from '../../contexts/FavouriteContext';
import { CartContext } from '../../contexts/CartContext';

type Props = {
  isHalf?: boolean;
};

export const PageNavIcons: React.FC<Props> = ({ isHalf = false }) => {
  const { favourite } = useContext(FavouriteContext);
  const { cart } = useContext(CartContext);

  const likesCount = favourite.length;
  const cartItemsCount = cart.length;

  const hasLikes = likesCount > 0;
  const hasCartItems = cartItemsCount > 0;

  return (
    <div className={classNames(
      'page-nav-icons',
      {
        'page-nav-icons--is-half': isHalf,
      },
    )}>
      <div
        className={classNames(
          'page-nav-icons__icons',
          {
            'page-nav-icons__icons--is-visible': hasLikes,
          },
        )}
        data-counter={String(likesCount)}
      >
        <PageNavLink to="/favourite">
          <img
            src="./icons/favAddFav16x16.svg"
            alt="logo"
          />
        </PageNavLink>
      </div>

      <div
        className={classNames(
          'page-nav-icons__icons',
          {
            'page-nav-icons__icons--is-visible': hasCartItems,
          },
        )}
        data-counter={cartItemsCount}
      >
        <PageNavLink to="/cart">
          <img
            className="nav_icon"
            src="./icons/shoppingBag16x16.svg"
            alt="logo"
          />
        </PageNavLink>
      </div>
    </div>
  );
};
