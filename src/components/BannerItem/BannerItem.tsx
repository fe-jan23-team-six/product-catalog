import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItem.scss';

interface Props {
  name: string,
  title: string,
  src: string,
  path: string,
}

export const BannerItem: React.FC<Props> = ({
  name,
  title,
  src,
  path,
}) => (
  <Link to={path}>
    <div className="banner-item">
      <div className="banner-item__order">
        <div className="banner-item__order-items">
          <div className="banner-item__order-description">
            <h2 className="banner-item__order-title">
              Now available in our store!

              <img
                className="banner-item__logo"
                src="icons/favicon.svg"
                alt="logo"
              />
            </h2>

            <h4 className="banner-item__order-slogan">
              Be the first!
            </h4>
          </div>

          <Link to={path} className="banner-item__button">
            order now
          </Link>
        </div>
      </div>

      <div className="banner-item__content">
        <div className="banner-item__content-items">
          <div className="banner-item__content-description">
            <h2 className="banner-item__order-title banner-item--disable">
              Now available in our store!

              <img
                className="banner-item__logo"
                src="icons/favicon.svg"
                alt="logo" />
            </h2>

            <h2 className="banner-item__content-title">
              {title}
            </h2>

            <h4 className="banner-item__order-slogan">
              Pro. Beyond.
            </h4>
          </div>

          <img
            className="banner-item__content-image"
            src={src}
            alt={name} />
        </div>
      </div>
    </div>
  </Link>
);
