import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img
        className="footer__logo"
        src="icons/Logo.svg"
        alt="Logo Nice Gadgets">
      </img>

      <ul className="footer__list">
        <li className="footer__item">
          <Link to={''} className="footer__link">
            Github
          </Link>
        </li>

        <li className="footer__item">
          <Link to={''} className="footer__link">
            Contacts
          </Link>
        </li>

        <li className="footer__item">
          <Link to={''} className="footer__link">
            Rights
          </Link>
        </li>
      </ul>

      <div className="footer__to-top">
        <p className="footer__to-top__text">
          Back to top
        </p>

        <div className="footer__to-top__container">
          <a href="#">
            <img
              src="icons/up16x16.svg"
              alt="Back to top"
              className="footer__to-top__image"/>
          </a>
        </div>
      </div>
      </footer>
  );
};