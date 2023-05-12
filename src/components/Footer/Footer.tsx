import React from 'react';
import './Footer.scss';
import { PageNavLink } from '../PageNavLink';
import { Link, NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img
      className="footer__logo"
      src="icons/Logo.svg"
      alt="Logo Nice Gadgets">
      </img>

      <div className="footer__links">

      <Link to={''} className="footer__links__link">Github</Link>

      <Link to={''} className="footer__links__link">Contacts</Link>

      <Link to={''} className="footer__links__link">Rights</Link>
      </div>

      <div className="footer__toTop">
        <p className="footer__toTop__text">Back to top</p>
        <div className="footer__toTop__container">
          <a href="#">
            <img src="icons/up16x16.svg" alt="Back to top" />
          </a>
        </div>
      </div>
      </footer>
  );
};
