import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { useModifiedUrl } from '../../components/ToggleTheme';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo />
      </div>

      <ul className="footer__list">
        <li className="footer__item">
          <Link to={''} className="footer__link">
            Github
          </Link>
        </li>

        <li className="footer__item">
          <Link to={'contacts'} className="footer__link">
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

        <div
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }}
          className="footer__to-top__container"
          id="btn-up"
        >
          <img
            src={useModifiedUrl(
              'icons/up16x16.svg',
              localStorage.getItem('themeName') || 'light',
            )}
            alt="Back to top"
            className="footer__to-top__image" />
        </div>
      </div>
    </footer>
  );
};
