import React from 'react';
import { Link } from 'react-router-dom';
import './ShopByCategory.scss';

export const ShopByCategory: React.FC = () => {
  return (
    <div className="shop-by-category">
      <h2>Shop by category</h2>

      <div className="shop-by-category__catgory-container">
        <Link to={'/catalog'}>
          <div className="category-container__img-container">
            <img src="img/shop-by-category/phones.png" alt="phone" />
          </div>
        </Link>
        <h3></h3>
        <p></p>
      </div>
      <div className="shop-by-category__catgory-container">
        <a href=""><img src="" alt="" /></a>
        <h3></h3>
        <p></p>
      </div>
      <div className="shop-by-category__catgory-container">
        <a href=""><img src="" alt="" /></a>
        <h3></h3>
        <p></p>
      </div>
    </div>
  );
};
