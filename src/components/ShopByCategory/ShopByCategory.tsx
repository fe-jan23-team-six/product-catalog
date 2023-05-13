import React from 'react';
import { Link } from 'react-router-dom';
import './ShopByCategory.scss';

export const ShopByCategory: React.FC = () => {
  return (
    <div className="shop-by-category">
      <h2>Shop by category</h2>

      <div className="shop-by-category__categories grid">
        <div className="categories__container">
          <Link to={'/catalog'}>
            <div className="categories__image-container">
              <img
                className="categories__image"
                src="img/shop-by-category/phones.png"
                alt="phone"
              />
            </div>
          </Link>

          <h3 className="categories__title">
            Mobile phones
          </h3>

          <p className="categories__description">
            95 models
          </p>
        </div>

        <div className="categories__container">
          <Link to={'/catalog'}>
            <div className="categories__image-container">
              <img
                className="categories__image"
                src="img/shop-by-category/phones.png"
                alt="phone"
              />
            </div>
          </Link>

          <h3 className="categories__title">
            Mobile phones
          </h3>

          <p className="categories__description">
            95 models
          </p>
        </div>

        <div className="categories__container">
          <Link to={'/catalog'}>
            <div className="categories__image-container">
              <img
                className="categories__image"
                src="img/shop-by-category/phones.png"
                alt="phone"
              />
            </div>
          </Link>

          <h3 className="categories__title">
            Mobile phones
          </h3>

          <p className="categories__description">
            95 models
          </p>
        </div>
      </div>
    </div>
  );
};
