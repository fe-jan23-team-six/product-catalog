import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { ArrowButton } from '../ArrowButton';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo />
      </div>

      <ul className="footer__list">
        <li className="footer__item">
          <Link
            to={'https://github.com/orgs/fe-jan23-team-six/repositories'}
            className="footer__link"
            target="_blank"
          >
            Github
          </Link>
        </li>

        <li className="footer__item">
          <Link to={'contacts'} className="footer__link">
            Contacts
          </Link>
        </li>

        <li className="footer__item">
          <Link to={'/notfound'} className="footer__link">
            Rights
          </Link>
        </li>
      </ul>

      <div className="footer__to-top">
        <p className="footer__to-top__text">
          Back to top
        </p>

        <ArrowButton
          isUp
          onClick={() => window.scrollTo({ top: 0 })}
        />
      </div>
    </footer>
  );
};
